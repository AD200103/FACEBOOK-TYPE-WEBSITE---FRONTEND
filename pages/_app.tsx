import "@/styles/globals.css";
import type { AppProps } from "next/app";
import HEADER from "@/Components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HEADER />
      <Component {...pageProps} />
    </>
  );
}
