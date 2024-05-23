import { useEffect, useState } from "react";

export default function useGetIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const detectMobile = () => setIsMobile(window.innerWidth <= 767);
    detectMobile();

    window.addEventListener("resize", detectMobile);
    return () => window.removeEventListener("resize", detectMobile);
  }, []);

  return isMobile;
}
