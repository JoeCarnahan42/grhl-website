import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import { Provider } from "react-redux";
import store from "./store/configureStore";

export const metadata = {
  title: "Gateway Roller Hockey League",
  description: "Recreation Roller Hockey League",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
