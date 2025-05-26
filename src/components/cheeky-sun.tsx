import { useRef, useState } from "react";

export const CheekySun = () => {
  const positions = [0, 1, 2, 3] as const;
  const [position, setPosition] = useState<0 | 1 | 2 | 3>(1);
  const [isHovered, setIsHovered] = useState(false);

  const positionClasses = {
    0: "top-0 right-0 translate-x-1/3 -translate-y-1/3",
    1: "top-0 left-0 -translate-x-1/3 -translate-y-1/3",
    2: "bottom-0 right-0 translate-x-1/3 translate-y-1/3",
    3: "bottom-0 left-0 -translate-x-1/3 translate-y-1/3",
  };

  const sunPositionClasses = {
    0: "group-data-[hovered=true]:translate-x-full group-data-[hovered=true]:-translate-y-full",
    1: "group-data-[hovered=true]:-translate-x-full group-data-[hovered=true]:-translate-y-full",
    2: "group-data-[hovered=true]:translate-x-full group-data-[hovered=true]:translate-y-full",
    3: "group-data-[hovered=true]:-translate-x-full group-data-[hovered=true]:translate-y-full",
  };

  const containerClasses = {
    0: "animate-in slide-in-from-top slide-in-from-right",
    1: "animate-in slide-in-from-top slide-in-from-left",
    2: "animate-in slide-in-from-bottom slide-in-from-right",
    3: "animate-in slide-in-from-bottom slide-in-from-left",
  };

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleHover = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(true);
    timeoutRef.current = setTimeout(() => {
      setPosition((prev) => ((prev + 1) % 4) as 0 | 1 | 2 | 3);
      setIsHovered(false);
    }, 1000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  };

  return (
    <>
      {positions.map(
        (pos) =>
          pos === position && (
            <div
              aria-hidden
              key={pos}
              onMouseOver={handleHover}
              data-hovered={isHovered}
              className={`fixed ${positionClasses[pos]} group animate-in duration-[1s] zoom-in-0 fill-mode-backwards ${containerClasses[pos]}`}
            >
              <p
                className={`text-6xl transition-transform duration-700 ease-out-cubic ${sunPositionClasses[pos]}`}
              >
                🌞
              </p>
            </div>
          )
      )}
    </>
  );
};
