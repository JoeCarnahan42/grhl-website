"use client";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.min.css");
    import("./global.css");
  }, []);
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
