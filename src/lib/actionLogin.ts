"use server";

import * as cheerio from "cheerio";

function extractOptionalNumber(title: string) {
  const regex = /ptional\D*(\d+)/i;
  const match = title.match(regex);
  if (match && match[1]) {
    return parseInt(match[1]);
  }
  return null;
}

export async function login(prevState: any, formData: any) {
  try {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const response = await fetch("https://solve.secondtrain.org/grader/");
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const html = await response.text();

    // Extract authenticity token from the HTML response
    const authenticityTokenRegex = /authenticity_token" value="([^"]+)"/;
    const match = html.match(authenticityTokenRegex);

    const sessionIdHeader = response.headers.get("Set-Cookie");
    let sessionIdValue: string | undefined;
    let authenticityToken: string | undefined;
    if (sessionIdHeader) {
      const sessionIdRegex = /_session_id=([^;]+)/;
      const sessionIdMatch = sessionIdHeader.match(sessionIdRegex);
      if (sessionIdMatch && match) {
        sessionIdValue = sessionIdMatch[1];
        authenticityToken = match[1];
        // console.log(authenticityToken, sessionIdValue);
      }
    }

    console.log(authenticityToken, sessionIdValue);
    const loginFormData = new URLSearchParams();
    loginFormData.append("utf8", "✓");
    loginFormData.append("authenticity_token", authenticityToken as string);
    loginFormData.append("login", username);
    loginFormData.append("password", password);
    loginFormData.append("commit", "Login");

    const loginResponse = await fetch(
      "https://solve.secondtrain.org/grader/login/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Cookie: `_session_id=${sessionIdValue}`, // Attach session cookie to request headers
        },
        body: loginFormData,
      }
    );

    if (!loginResponse.ok) {
      throw new Error("Failed to log in");
    }

    // Step 3: Process the login response
    const htmlContent = await loginResponse.text();
    // console.log(htmlContent);
    if (htmlContent.includes("<h1>Solve is back...</h1>")) {
      console.log("wtf");
      throw new Error(
        "Login Failed please check your username and password again"
      );
    } else {
      // Continue with your logic if the expected content is found
      console.log("Expected content found");
    }

    // Load the HTML content into Cheerio
    const $ = cheerio.load(htmlContent, { decodeEntities: false });

    // Array to store the extracted titles and scores
    const results: { title: string; score: string }[] = [];

    let mySumScoreNormal = 0;
    let mySumScoreOptional = 0;

    let countNormal = 0;
    let countOptional = 0;
    let myName = "";

    $("tbody tr").each((index, element) => {
      if (index == 0) {
        // console.log($(element).find("td:nth-child(1)").text().trim());
        const thaiRegex = /[\u0E00-\u0E7F]+/g;
        const matches = $(element)
          .find("td:nth-child(1)")
          .text()
          .trim()
          .match(thaiRegex);
        myName = matches && matches.length > 0 ? matches[0] : "";
        return;
      }
      let title = $(element).find("td:nth-child(2)").text().trim();
      let score = $(element).find("td:nth-child(4)").text().trim();

      // If score is not present, default to 0
      if (score === "-") {
        score = "0";
      } else {
        // Extract score from the string
        const scoreMatch = score.match(/score:\s*(\d+)/i);
        if (scoreMatch && scoreMatch[1]) {
          score = scoreMatch[1];
        } else {
          score = "0"; // If score not found, default to 0
        }
      }

      const examProblem = [
        "บ้านไกลเรือนเคียง",
        "เรือที่ไม่มีวันกลับ",
        "ม้ากระโดด",
      ];
      for (const problem of examProblem) {
        if (title.includes(problem)) {
          title += " - optional - 1pt";
          break;
        }
      }
      const optionalPoint = extractOptionalNumber(title);
      if (optionalPoint != null && optionalPoint > 0) {
        countOptional += optionalPoint;
        mySumScoreOptional += parseInt(score) * optionalPoint;
      } else {
        // sumScoreNormal += 1;
        countNormal += 1;
        mySumScoreNormal += parseInt(score);
        console.log("normal", title, score, mySumScoreNormal, countNormal);
      }
      results.push({ title, score });
    });

    const maxNormalPercent = 60;
    const maxOptionalPercent = 10;

    const scoreRatio = maxNormalPercent / countNormal;

    // For chart
    const myNormalPercent =
      Math.round(((mySumScoreNormal * scoreRatio) / 100) * 1000) / 1000;
    let myOptionalPercent =
      Math.round(((mySumScoreOptional * scoreRatio) / 100) * 1000) / 1000;

    let myOptionalExceed = 0;

    if (myOptionalPercent >= maxNormalPercent - myNormalPercent) {
      myOptionalExceed = maxNormalPercent - myNormalPercent;
      myOptionalPercent =
        myOptionalPercent - (maxNormalPercent - myNormalPercent);
    } else {
      myOptionalExceed = myOptionalPercent;
      myOptionalPercent = 0;
    }

    let myleftOverScore =
      maxNormalPercent +
      maxOptionalPercent -
      myNormalPercent -
      myOptionalExceed -
      myOptionalPercent;
    if (myleftOverScore < 0) {
      myleftOverScore = 0;
    }

    // For text output
    const myScoreToDoLeft =
      ((maxNormalPercent + maxOptionalPercent) / scoreRatio) * 100 -
      mySumScoreNormal -
      mySumScoreOptional;

    console.log(
      myNormalPercent,
      myOptionalExceed,
      myOptionalPercent,
      myleftOverScore,
      myScoreToDoLeft
    );
    const realOptionalPercent = myOptionalPercent > 10 ? 10 : myOptionalPercent;
    const leftOverPercent =
      maxNormalPercent +
      maxOptionalPercent -
      myNormalPercent -
      realOptionalPercent;

    const leftOverNormalScore = countNormal * 100 - mySumScoreNormal;
    const leftOverOptionalScore =
      (maxOptionalPercent * 100) / scoreRatio - mySumScoreOptional;

    // console.log(
    //   countNormal,
    //   countOptional,
    //   mySumScoreNormal,
    //   mySumScoreOptional,
    //   scoreRatio
    // );

    const result = {
      message: "Success",
      myName,
      myNontriID: username,
      maxNormalPercent,
      maxOptionalPercent,
      myNormalPercent,
      myOptionalExceed,
      myOptionalPercent,
      myleftOverScore,
      myScoreToDoLeft,
    };
    console.log(result);
    return result;
  } catch (error: any) {
    console.log(error.message);
    return {
      message: error.message,
      myName: "",
      myNontriID: "",
      maxNormalPercent: 0,
      maxOptionalPercent: 0,
      myNormalPercent: 0,
      myOptionalExceed: 0,
      myOptionalPercent: 0,
      myleftOverScore: 0,
      myScoreToDoLeft: 0,
    };
  }
}
