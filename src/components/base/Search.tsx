import SearchIcon from "@/assets/icon/search.svg";
import { Input, InputType } from "./Input";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

type Props = InputType & {
  className?: string;
  onSearch?: (value: string) => void;
};

export default function Search({ className, onSearch, ...props }: Props) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm);

  useEffect(() => {
    if (debouncedSearchTerm) {
      onSearch?.(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearch]);

  return (
    <>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        prepend={<img className="w-[1.2rem]" src={SearchIcon} />}
        className={cn("bg-background rounded-full px-6", className)}
        placeholder="Search for something"
        {...props}
      />
    </>
  );
}
