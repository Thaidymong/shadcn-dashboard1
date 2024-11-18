"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { useMediaQuery } from "@/hooks/use-media-query";

type LogoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const LogoutModal: React.FC<LogoutModalProps> = (props) => {
  const { isOpen, onClose } = props;
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [pending, startTransition] = useTransition();

  if (isDesktop)
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogTitle>You&apos;re About to Logout</DialogTitle>
          <div className="flex items-center gap-2 py-2">
            <TriangleAlert className="fill-yellow-400" size={32} />
            <span className="text-destructive">
              Are you sure you would like to logout of your account?
            </span>
          </div>
          <DialogFooter>
            <Button
              variant="destructive"
              onClick={onClose}
              disabled={pending ? true : false}
            >
              Cancel
            </Button>
            <Button
              disabled={pending ? true : false}
              className="bg-[#5B73E8] hover:bg-[#546bdb]"
            >
              {pending ? (
                <PulseLoader size={12} color="#ffffff" />
              ) : (
                <>Logout</>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

  const closeDrawer = (v: boolean) => {
    if (!v) onClose();
  };

  return (
    <Drawer onOpenChange={closeDrawer} open={isOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>You&apos;re About to Logout</DrawerTitle>
        </DrawerHeader>
        <div className="flex items-center justify-center gap-2 p-4 sm:justify-start">
          <TriangleAlert className="fill-yellow-400" size={36} />
          <span className="text-destructive">
            Are you sure you would like to logout of your account?
          </span>
        </div>
        <DrawerFooter>
          <Button
            variant="destructive"
            onClick={onClose}
            disabled={pending ? true : false}
          >
            Cancel
          </Button>
          <Button
            disabled={pending ? true : false}
            className="bg-[#5B73E8] hover:bg-[#546bdb]"
          >
            {pending ? <PulseLoader size={12} color="#ffffff" /> : <>Logout</>}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
