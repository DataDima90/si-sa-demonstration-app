import "./../styles/_global.scss"
import "./../styles/_typography.scss"
import type { AppProps } from 'next/app'
import Head from "next/head"
import Script from "next/script"
import TagManager from 'react-gtm-module';
import { useEffect } from "react"
import Amplify from "aws-amplify";
import config from "../src/aws-exports";

Amplify.configure({
  ...config,
  ssr: true,
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: `${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}`,
    });
  }, []);
  return (
    <>
      <div>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
      </div>
      <Component {...pageProps} />
    </>)
}
