import { Icons } from "@/components/icons";
import Phone from "@/components/phone";
import Reviews from "@/components/reviews";
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

      <section className="bg-slate-100 py-24">
        <SectionContainer className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
            <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
              What our{" "}
              <span className="relative px-2">
                {" "}
                <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 hidden text-primary sm:block" />{" "}
                customers
              </span>{" "}
              say
            </h2>
            <img
              src="/snake-2.png"
              alt="snake image"
              className="order-0 w-24 lg:order-1"
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="mb-2 flex gap-0.5">
                <Star className="h-4 w-4 fill-red-600 text-red-600" />
                <Star className="h-4 w-4 fill-red-600 text-red-600" />
                <Star className="h-4 w-4 fill-red-600 text-red-600" />
                <Star className="h-4 w-4 fill-red-600 text-red-600" />
                <Star className="h-4 w-4 fill-red-600 text-red-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "The case feels durable and I even got a compliment on the
                  design. Had the case for two and a half months now and{" "}
                  <span className="bg-slate-800 p-0.5 text-white">
                    the image is super clear.
                  </span>{" "}
                  On the case I had before, the image started fading into
                  yellow-ish color after a couple of weeks. Love it"
                </p>
              </div>
              <div className="mt-2 flex gap-4">
                <img
                  src="/users/user-1.png"
                  alt="user"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-smi-bold">John</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-primary" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Second user */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="mb-2 flex gap-0.5">
                <Star className="h-4 w-4 fill-red-600 text-red-600" />
                <Star className="h-4 w-4 fill-red-600 text-red-600" />
                <Star className="h-4 w-4 fill-red-600 text-red-600" />
                <Star className="h-4 w-4 fill-red-600 text-red-600" />
                <Star className="h-4 w-4 fill-red-600 text-red-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "Usually keep my phone together with my keys in my pocket and
                  that led to some pretty heavy scratchmarks on all of my last
                  cases. This one, besides a barely noticeable on the corner{" "}
                  <span className="bg-slate-800 p-0.5 text-white">
                    looks brand new after about half year.
                  </span>{" "}
                  I dig it."
                </p>
              </div>
              <div className="mt-2 flex gap-4">
                <img
                  src="/users/user-2.png"
                  alt="user"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-smi-bold">Meru</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-primary" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>
    </div>
  );
};

export default Page;
