import "./globals.css";
import Signin from "./SignIn/page";

   ;

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
        <Signin/>
        {children}
      </body>
    </html>
  );
}
