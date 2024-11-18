"use client";

import Image from "next/image";
import style from "./global_error.module.scss";

export const GlobalErrorBoundary: React.FC = () => {
  return (
    <div className="container mx-auto my-20 pb-20 text-center">
      <div className="flex flex-col items-center">
        <Image
          src=""
          alt=""
          width={700}
          height={450}
          className={`mt-6 ${style.imageMoc}`}
          priority
        />
        <Image
          src="/Error-503/hold-up.jpg"
          alt=""
          width={400}
          height={450}
          className={`mb-6 mt-20 ${style.errorImage}`}
          priority
        />
        <h4 className="pb-6 text-[20px]">
          Oh no! The website is currently under maintenance...
        </h4>
        <p>We are working to resolve the issues. Please try again later.</p>
      </div>
    </div>
  );
};
