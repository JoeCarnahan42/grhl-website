"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import { BrowserRouter } from "react-router-dom";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BrowserRouter>
        <body>{children}</body>
      </BrowserRouter>
    </html>
  );
}
