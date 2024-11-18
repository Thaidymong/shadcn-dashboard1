"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import style from "./error.module.scss";
import { Button } from "../ui/button";

export const ErrorBoundary: React.FC = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto my-10 pb-20 text-center">
      <div className="flex flex-col items-center">
        <Image
          src="/Error-503/error-503.jpg"
          alt=""
          width={400}
          height={450}
          className={`mb-6 mt-20 ${style.errorImage}`}
          priority
        />
        <h4 className="pb-8 text-[20px]">
          Please wait! This page is under maintenance."
        </h4>
        <Button onClick={() => router.back()}>Back to Homepage!</Button>
      </div>
    </div>
  );
};
