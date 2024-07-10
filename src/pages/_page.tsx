import "../styles/globals.css";
import Template from "../app/template";

function MyApp({ Component, pageProps }) {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
}

export default MyApp;
