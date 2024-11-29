import Avatar from "@/components/base/Avatar";
import UserPfp from "@/assets/img/avatar.png";
import Pencil from "@/assets/icon/edit.svg";
import { Button } from "@/components/base/Button";
import { cn, initials } from "@/lib/utils";
import { Input } from "../base/Input";
import { useAppSelector } from "@/hooks";
import { useState } from "react";

interface Props {
  edit?: boolean;
  className?: string;
}

export default function UserProfile({ edit = false, className }: Props) {
  const userDetails = useAppSelector((state) => state.user.userDetails);
  const [selectedImage, setSelectedImage] = useState<string | null>(
    userDetails?.pfp || null
  );

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setSelectedImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="w-20 h-20 relative ">
        <Avatar className={cn("w-20 h-20  ", className)}>
          {selectedImage ? (
            <img
              src={selectedImage}
              className="w-full h-full object-cover"
              alt="John Doe"
            />
          ) : (
            <span className="font-semibold text-xl">
              {initials("John Doe")}
            </span>
          )}
        </Avatar>
        {edit && (
          <div className="absolute -right-2 bottom-0">
            <Button
              onClick={() => document.getElementById("avatar-input")?.click()}
              size="icon"
              className="rounded-full w-8 h-8"
            >
              <img src={Pencil} />
            </Button>
          </div>
        )}
      </div>

      <Input
        id="avatar-input"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </>
  );
}
