import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import AppClientWrapper from "./components/AppClientWrapper";

export const metadata = {
  title: "GRHL Website",
  description: "Official Gateway Roller Hockey League Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppClientWrapper>{children}</AppClientWrapper>
      </body>
    </html>
  );
}
