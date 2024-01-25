"use server";
export async function login(prevState: any, formData: any) {
  try {
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
    loginFormData.append("login", "b6510503671");
    loginFormData.append("password", "keq6e");
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
    const result = await loginResponse.text();
    console.log(result);
  } catch (error: any) {
    console.log(error.message);
    return { message: error.message || "Login Failed" };
  }
}
