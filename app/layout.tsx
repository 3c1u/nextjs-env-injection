import '@/styles/globals.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <title>test</title>
      </head>
      <body>
        <div className="font-sans lining-nums text-slate-900 antialiased">
          {children}
        </div>
      </body>
    </html>
  );
}
