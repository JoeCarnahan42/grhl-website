"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
