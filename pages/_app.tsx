import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";




export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Toaster />
      <Analytics/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
