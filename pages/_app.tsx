import type { AppProps } from "next/app";
import { JSX } from "react";
import "./globals.css";

const Layout: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default Layout;
