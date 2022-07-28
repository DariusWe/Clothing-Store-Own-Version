// Info about what i did here: https://www.kindacode.com/article/react-router-dom-scroll-to-top-on-route-change/
// Makes the browser scroll to the top on route change.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
