import { Button } from "@/components/ui/Bbutton";
import { Input } from "@/components/ui/Inputs";
import React from "react";

export default function Dashboard() {
  return (
    <div className="p-4 w-full max-w-xl space-y-4">
      <Button>Hello World</Button>
      <Input type="date" />
    </div>
  );
}
