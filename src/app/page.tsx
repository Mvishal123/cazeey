import Phone from "@/components/phone";
import SectionContainer from "@/components/section-container";
import { Check, Star } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="bg-slate-50">
      <section>
        <SectionContainer className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:gap-x-8 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="absolute -top-20 left-0 hidden w-28 lg:block">
                <img src="/snake-1.png" className="w-full" />
              </div>
              <h1 className="relative mt-16 w-fit text-balance text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-red-600 px-2 text-white">Custom</span> Phone
                Case
              </h1>
              <p className="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left">
                Capture your favorite memories with your own{" "}
                <span className="font-semibold">phone case.</span> Cazeey allows
                you to protect your memories, not just you phone.
              </p>
              <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
                <div className="space-y-2">
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-red-600" />
                    High-quality, durable material
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-red-600" />5 year
                    print guarantee
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-red-600" />
                    All modern phone models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <img
                    src="/users/user-1.png"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-2.png"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-3.png"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-4.jpg"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-5.jpg"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                  />
                </div>
                <div className="flex flex-col items-center justify-between sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 fill-red-600 text-red-600" />
                    <Star className="h-4 w-4 fill-red-600 text-red-600" />
                    <Star className="h-4 w-4 fill-red-600 text-red-600" />
                    <Star className="h-4 w-4 fill-red-600 text-red-600" />
                    <Star className="h-4 w-4 fill-red-600 text-red-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1400+</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full mt-32 flex w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                alt="case image"
                className="ld:w-52 absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                alt="phone-image"
                className="absolute -bottom-6 -left-6 w-20 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
};

export default Page;
