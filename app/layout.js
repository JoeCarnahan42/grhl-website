import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";

export const metadata = {
  title: "Gateway Roller Hockey League",
  description: "Recreation Roller Hockey League",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
