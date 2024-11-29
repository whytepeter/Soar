import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
  label?: string;
  img?: string;
  onClick?: () => void;
}

export default function Avatar({
  className,
  children,
  label,
  img,
  onClick,
}: Props) {
  const containerStyle = cn(
    "flex-shrink-0 overflow-hidden h-12 w-12 text-dark-300 font-medium text-sm rounded-full flex items-center justify-center  cursor-pointer bg-background",
    className
  );

  return (
    <div onClick={onClick} className={containerStyle}>
      {img && <img className="w-full  h-full object-cover" src={img} />}
      {label}
      {children}
    </div>
  );
}
