import { AppProps } from "next/app";
import Template from "../app/template";
import "../app/globals.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
}

export default MyApp;
