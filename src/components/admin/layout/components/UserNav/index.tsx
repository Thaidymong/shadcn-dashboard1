"use client";

import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import dynamic from "next/dynamic";
import { LogOut } from "lucide-react";
import ClipLoader from "react-spinners/ClipLoader";

const LogoutModal = dynamic(
  () => import("./../LogoutModal").then((mod) => mod.LogoutModal),
  {
    ssr: false,
  }
);

export const UserNav = () => {
  const [isLogoutModalOpen, setLogoutModalOpen] = useState<boolean>(false);
  const closeLogoutModal = () => setLogoutModalOpen(false);
  const [pending, startTrasition] = useTransition();
  // const { me } = useStore();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <>
      <LogoutModal onClose={closeLogoutModal} isOpen={isLogoutModalOpen} />
      <div className="cursor-pointer">
        <DropdownMenu>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center ">
                  <div className="flex justify-end pe-5">
                    <div className="">
                      <p className="mb-0 text-end text-[13px] leading-none text-[#1549A4] opacity-70 py-1">
                        thai dymong
                      </p>
                      <p className="mb-0 text-end text-[13px] leading-none text-black opacity-70 py-1">
                        dt8393430@gmail.com
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="relative size-8 rounded-full"
                  >
                    <Avatar>
                      <AvatarImage
                        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                        alt="profile"
                        className="w-full object-cover"
                        loading="lazy"
                      />
                    </Avatar>
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-auto pr-3" align="end">
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="cursor-pointer"
                >
                  <LogOut size={18} />
                  &nbsp;
                  <button disabled={pending}>
                    {pending ? (
                      <>
                        <ClipLoader color="black" className="" size={20} />
                        Loading...
                      </>
                    ) : (
                      "Sign Out"
                    )}
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </DropdownMenu>
      </div>
    </>
  );
};
