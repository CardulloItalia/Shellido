import { Afacad } from 'next/font/google';

import "./globals.css";

const afacad = Afacad({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={afacad.className}>
        {children}
      </body>
    </html>
  );
}
