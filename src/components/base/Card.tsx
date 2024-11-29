import { cn } from "@/lib/utils";
import React from "react";
import ProgressBar from "./Progressbar";

interface Props {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
}

export default function card({ children, className, loading }: Props) {
  return (
    <div
      className={cn(
        "bg-white p-4 rounded-3xl overflow-hidden relative",
        className
      )}
    >
      {loading && (
        <div className="absolute top-0 left-0 w-full">
          <ProgressBar />
        </div>
      )}
      {children}
    </div>
  );
}
