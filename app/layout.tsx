import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Capital Advisors | Custom Capital Solutions',
  description:
    'Custom capital solutions, creative ideas, and objective advice for mission-driven organizations in senior housing, education, and healthcare.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
