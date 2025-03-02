
import { ReactNode, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const nodeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add the enter animation classes
    nodeRef.current?.classList.add("opacity-0", "translate-y-4");
    
    // Force a reflow to make the initial state take effect
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const reflow = nodeRef.current?.offsetHeight;
    
    // Remove the animation classes to trigger the transition
    setTimeout(() => {
      nodeRef.current?.classList.remove("opacity-0", "translate-y-4");
      nodeRef.current?.classList.add("opacity-100", "translate-y-0");
    }, 10);

    return () => {
      if (nodeRef.current) {
        nodeRef.current.classList.remove("opacity-100", "translate-y-0");
        nodeRef.current.classList.add("opacity-0", "translate-y-4");
      }
    };
  }, [location.pathname]);

  return (
    <div 
      ref={nodeRef}
      className="transition-all duration-500 ease-out"
    >
      {children}
    </div>
  );
};

export default PageTransition;
