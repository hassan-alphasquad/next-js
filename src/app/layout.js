import "./globals.css";
import Signin from "./Sign In/page";

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
