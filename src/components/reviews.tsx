"use client";

import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import SectionContainer from "./section-container";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Phone from "./phone";

const PHONES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
];

function splitArray<T>(arr: Array<T>, col: number): Array<Array<T>> {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < arr.length; i++) {
    const index = i % col;

    if (!result[index]) {
      result[index] = [];
    }

    result[index].push(arr[i]);
  }

  return result;
}

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

const Review = ({ imgSrc, className, ...props }: ReviewProps) => {
  const POSSIBLE_ANIMATION_DELAYS = [
    "0s",
    "0.1s",
    "0.2s",
    "0.3s",
    "0.4s",
    "0.5s",
  ];

  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ];

  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <Phone imgSrc={imgSrc} />
    </div>
  );
};

const ReviewColumn = ({
  phones,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  phones: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) => {
  const [columnHeight, setColumnHeight] = useState(0);
  const columnRef = useRef<HTMLDivElement | null>(null);

  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver((entry) => {
      console.log({ entry });
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {phones.concat(phones).map((imgSrc, index) => (
        <Review
          key={index}
          className={reviewClassName?.(index % phones.length)}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  );
};

const ReviewGrid = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.4,
  });

  const columns = splitArray(PHONES, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150rem] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView ? (
        <>
          <ReviewColumn
            phones={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              cn({
                "md:hidden": reviewIndex >= column1.length + column3[0].length,
                "lg:hidden": reviewIndex >= column1.length,
              })
            }
            msPerPixel={10}
          />
          <ReviewColumn
            phones={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />
          <ReviewColumn
            phones={column3.flat()}
            className="hidden md:block"
            msPerPixel={10}
          />
        </>
      ) : null}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100" />
    </div>
  );
};

const Reviews = () => {
  return (
    <SectionContainer className="relative max-w-5xl">
      <img
        src="/what-people-are-buying.png"
        alt="reviews"
        aria-hidden="true"
        className="absolute -left-32 top-1/3 hidden select-none xl:block"
      />

      <ReviewGrid />
    </SectionContainer>
  );
};

export default Reviews;