import '@/styles/reset.css';
import '@/styles/normalize.css';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: [
    {
      path: '../public/assets/fonts/Pretendard-Bold.woff2',
    },
    {
      path: '../public/assets/fonts/Pretendard-SemiBold.woff2',
    },
    {
      path: '../public/assets/fonts/Pretendard-Regular.woff2',
    },
  ],
});

export const metadata: Metadata = {
  title: '언제어디',
  description: '언제 어디서 만날지 쉽게 정해보세요.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
