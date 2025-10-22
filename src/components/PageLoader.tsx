import { useEffect, useState } from "react";

const PageLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r">
      <div className="relative">
        {/* Animated circles */}
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full border-4 border-accent/20 animate-ping" />
          <div className="absolute inset-0 rounded-full border-4 border-t-accent border-r-transparent border-b-transparent border-l-transparent animate-spin" />
          <div
            className="absolute inset-4 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1s" }}
          />

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {progress}%
              </div>
              <div className="text-xs text-muted-foreground">Loading</div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-8 w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
