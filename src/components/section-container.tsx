import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}
const SectionContainer = ({ children, className }: SectionContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto h-full w-full max-w-screen-xl px-2.5 md:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
