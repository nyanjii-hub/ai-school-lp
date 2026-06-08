import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Career Lab | 仕事で使えるAIスキルへ",
  description:
    "AI Career Labは、生成AIを業務効率化・副業・キャリアアップに活かすための架空の実践型AIスクールLPです。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
