import { useMediaQuery } from "react-responsive";

function useResponsive() {
  const isPc = useMediaQuery({ query: "(min-width: 1280px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return { isPc, isTablet, isMobile };
}

export default useResponsive;
