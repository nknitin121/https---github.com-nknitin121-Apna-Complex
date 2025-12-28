import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1️⃣ Scroll to top (original behavior)
    window.scrollTo(0, 0);

    // 2️⃣ Page transition animation
    document.body.classList.add("fade-in");

    const timer = setTimeout(() => {
      document.body.classList.remove("fade-in");
    }, 700);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
