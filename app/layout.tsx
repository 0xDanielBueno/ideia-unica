import { JSX } from "react";
import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }): JSX.Element => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
