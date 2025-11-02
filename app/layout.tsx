import { SpeedInsights } from "@vercel/speed-insights/next";
import { JSX } from "react";
import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }): JSX.Element => {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
};
export default RootLayout;
