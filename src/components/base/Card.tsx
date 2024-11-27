import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function card({ children, className }: Props) {
  return (
    <div className={cn("bg-white p-4 rounded-3xl", className)}>{children}</div>
  );
}
