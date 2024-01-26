import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full p-4  text-center bg-gray-200 dark:bg-gray-700 sticky bottom-0">
      <p className="text-gray-600 dark:text-gray-300">
        {`ไม่ phishing คับดูโค้ดได้ที่ `}
        <Link className="text-blue-500 underline" href="#">
          GitHub
        </Link>
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {`"เพราะเราก็ขี้เกียจนับคะแนนเองเหมือนกัน😔"`}
      </p>
    </footer>
  );
}
