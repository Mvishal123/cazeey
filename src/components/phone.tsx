import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
  className?: string;
}
const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none relative z-50 overflow-hidden",
        className,
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone image"
        className="pointer-events-none z-50 select-none"
      />
      <div className="absolute inset-0 -z-10">
        <img
          src={imgSrc}
          alt="overlaying phone image"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Phone;
