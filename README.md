# My Problem Solving Score

## Introduction

Welcome to **My Problem Solving Score**! This is a web application designed to assist students in tracking their scores in 01204214 Kasetsart University problem-solving subjects . With regular updates, students can conveniently monitor their progress and performance in these subjects.

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

![App Screenshot](https://cdn.discordapp.com/attachments/900631639288324109/1201937133921636413/image.png?ex=65cba22f&is=65b92d2f&hm=51fa238844edb1d72d313de786af6379aeb192cfa48adae3ed79567b01954176&)

![App Screenshot](https://cdn.discordapp.com/attachments/900631639288324109/1201937321709273179/image.png?ex=65cba25c&is=65b92d5c&hm=ef5e6acbeefea49ccd11efa1e252ce76b1507872a381193cc93ed8356940da96&)

## Patch notes
#### 1.1

Score system update
- เปลี่ยนระบบคะแนนรวมของ Donut chart เป็น คะแนนทั่วไป + คะแนนโบนัสเติมเต็ม + คะแนนโบนัสคงเหลือ <= 70%
- คะแนนรวมทั่วไปจะแสดงเป็น คะแนนทั่วไป + คะแนนโบนัสเติมเต็ม
- คะแนนรวมโบนัสจะแสดงเป็น คะแนนโบนัสคงเหลือ

Rainbow Jittat update

"เนื่องจากก่อนหน้านี้มีผู้คนปลดล็อก easter egg นี้มากเกินไป เราจึงต้องปรับเกณฑ์ให้คู่ควรกับความ Legendary ของเขา"
- ปลดล็อกเมื่อได้คะแนนโบนัสเกิน 10% => ปลดล็อกเมื่อได้คะแนนรวมเกิน 70%
