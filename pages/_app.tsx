import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== sessionStorage.getItem("currentUrl")) {
      sessionStorage.setItem("previousUrl", sessionStorage.getItem("currentUrl") || "");
      sessionStorage.setItem("currentUrl", router.pathname);
    }
  }, [router.pathname]);


  return <div className="bg-background h-[100vh] overflow-auto">
    <div className="flex flex-col m-auto">
      <Header/>
      <div className="m-container">
        <Component {...pageProps} />
      </div>
      <Footer/>
    </div>
  </div>
}
