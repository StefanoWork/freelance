import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Script
            async
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          ></Script>
        </Head>
        <body>
          <Script id="show-banner">
            {`var _iub = _iub || [];
      _iub.csConfiguration = {
        "askConsentAtCookiePolicyUpdate":true,
        "floatingPreferencesButtonDisplay":"bottom-right",
        "perPurposeConsent":true,
        "siteId":3411238,
        "whitelabel":false,
        "cookiePolicyId":87039527,
        "lang":"it",
        "cookiePolicyUrl":"https://www.iubenda.com/privacy-policy/87039527", 
        "banner":{
          "acceptButtonDisplay":true,
          "closeButtonRejects":true,
          "customizeButtonDisplay":true,
          "explicitWithdrawal":true,
          "listPurposes":true,
          "position":"float-bottom-right",
          "showTitle":false
        }
      };`}
          </Script>

          <script
            async
            type="text/javascript"
            src="https://cs.iubenda.com/autoblocking/3411238.js"
          ></script>
          <script
            type="text/javascript"
            src="//cdn.iubenda.com/cs/iubenda_cs.js"
            charset="UTF-8"
            async
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
