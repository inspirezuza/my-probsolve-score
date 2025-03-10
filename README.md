\*update 3/11/2025 อ.เปลี่ยน link ไปใช้เป็น https://solve2.secondtrain.org/grader

# My Problem Solving Score

![image](https://github.com/inspirezuza/my-probsolve-score/assets/102022496/25c6a3f1-461e-485a-80fe-4f546684c4df)

## Introduction

Welcome to **My Problem Solving Score**! This is a web application designed to assist students in tracking their scores in 01204214 Kasetsart University problem-solving subjects . With regular updates, students can conveniently monitor their progress and performance in these subjects.

https://my-probsolve-score.vercel.app/

## Grader Problem Solving

https://solve.secondtrain.org/

## Features

- **Score Tracking**: สามารถใช้ดูคะแนนเก็บ คะแนนโบนัส และคะแนนแบบเป็นเปอร์เซ็นไทล์รวมทั้งหมดได้
- **Real-Time Updates**: อัพเดตแบบ Dynamic ตามที่ใsน Second Solve
- **User-Friendly Interface**: มี Donut Chart แสนสวยงาม อย่าบัคเลย ขอร้อง ขี้เกียจแก้แล้ว 😭
- **Personalized Accounts**: ใช้ API ยิงเอาข้อมูลแล้วแสดงขึ้นหน้า Client ไม่มีการเก็บข้อมูลใดๆ

## How to Use

**Login**: ใช้ Nontri account + password สำหรับเข้า login https://solve.secondtrain.org/

## Technologies Used

- **Frontend**:
  - Next js only because i love u
  - หมดแล้ว มีแค่ Frontend เพียวๆ เพราะไม่มีการเก็บข้อมูลใดๆ จ้า

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Access the application through your web browser at `http://localhost:3000`.

## Contributors

- [prukngan](https://github.com/prukngan) - Designer
- [Patchanonss](https://github.com/Patchanonss) - Score Algorithm

## License

This project is licensed under the [MIT License](LICENSE).

## Screenshots

![image](https://github.com/inspirezuza/my-probsolve-score/assets/102022496/3327e462-b049-4ce4-9323-9ab8448a387b)

![image](https://github.com/inspirezuza/my-probsolve-score/assets/102022496/abaa7a5c-967b-40b0-8736-1c76ebf9f495)

![image](https://github.com/inspirezuza/my-probsolve-score/assets/102022496/29992541-d474-49eb-8900-d65174c9b7fb)

## Patch notes

#### 1.1

Score system update

- เปลี่ยนระบบคะแนนรวมของ Donut chart เป็น คะแนนทั่วไป + คะแนนโบนัสเติมเต็ม + คะแนนโบนัสคงเหลือ <= 70%
- คะแนนรวมทั่วไปจะแสดงเป็น คะแนนทั่วไป + คะแนนโบนัสเติมเต็ม
- คะแนนรวมโบนัสจะแสดงเป็น คะแนนโบนัสคงเหลือ

Rainbow Jittat update

"เนื่องจากก่อนหน้านี้มีผู้คนปลดล็อก easter egg นี้มากเกินไป เราจึงต้องปรับเกณฑ์ให้คู่ควรกับความ Legendary ของเขา"

- ปลดล็อกเมื่อได้คะแนนโบนัสเกิน 10% => ปลดล็อกเมื่อได้คะแนนรวมเกิน 70%
