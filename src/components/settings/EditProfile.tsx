import { useState } from "react";
import { useAppSelector } from "@/hooks";

import { Button } from "@/components/base/Button";
import { Input } from "@/components/base/Input";
import SelectInput from "@/components/base/SelectInput";
import UserProfile from "./UserProfle";
import DateInput from "@/components/base/DateInput";
import Show from "@/components/base/Show";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditProfileSchema } from "@/schema/settings";
import { COUNTRIES } from "@/lib/constant";

export default function EditProfile() {
  const [loading, setLoading] = useState(false);
  const userDetails = useAppSelector((state) => state.user.userDetails);

  const form = useForm<z.infer<typeof EditProfileSchema>>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      full_name: userDetails?.full_name || "",
      email: userDetails?.email || "",
      user_name: userDetails?.user_name || "",
      password: userDetails?.password || "",
      postal_code: userDetails?.postal_code || "",
      dob: userDetails?.dob || "",
      city: userDetails?.city || "",
      country: userDetails?.country || "",
      permanent_address: userDetails?.permanent_address || "",
      present_address: userDetails?.present_address || "",
    },
  });

  const fields: {
    name: keyof z.infer<typeof EditProfileSchema>; // Restrict names to schema keys
    label: string;
    type: string;
    options?: string[];
  }[] = [
    { name: "full_name", label: "Your Name", type: "text" },
    { name: "user_name", label: "User Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
    {
      name: "dob",
      label: "Date of Birth",
      type: "date",
    },
    { name: "present_address", label: "Present Address", type: "text" },
    { name: "permanent_address", label: "Permanent Address", type: "text" },
    { name: "city", label: "City", type: "text" },
    { name: "postal_code", label: "Postal Code", type: "numeric" },
    { name: "country", label: "Country", type: "text", options: COUNTRIES },
  ];

  async function onSubmit(values: z.infer<typeof EditProfileSchema>) {
    try {
      console.log(values);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        toast.success("Profile updated successfully");
      }, 3000);
    } catch (error: any) {
      toast.error(error?.message || "Error occured");
    } finally {
      // setLoading(false);
    }
  }

  return (
    <div className="md:px-6 py-6 w-full flex items-center md:items-start md flex-col md:flex-row gap-4 md:gap-14">
      <div>
        <UserProfile
          edit
          className={loading ? "pointer-events-none opacity-70" : ""}
        />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-6 text-dark"
        >
          {fields.map(({ name, label, type, options }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormControl>
                    <div className="space-y-2 col-span-1">
                      <label className="text-sm" htmlFor={name}>
                        {label}
                      </label>

                      <Show>
                        <Show.When isTrue={type === "date"}>
                          <DateInput
                            disabled={loading}
                            id={name}
                            type={type}
                            error={error ? String(error.message) : ""}
                            {...field}
                          />
                        </Show.When>
                        <Show.When isTrue={name === "country"}>
                          <SelectInput
                            options={options ?? []}
                            disabled={loading}
                            id={name}
                            error={error ? String(error.message) : ""}
                            {...field}
                          />
                        </Show.When>
                        <Show.Else>
                          <Input
                            disabled={loading}
                            id={name}
                            type={type}
                            inputMode={
                              type === "numeric" ? "numeric" : undefined
                            }
                            error={error ? String(error.message) : ""}
                            {...field}
                          />
                        </Show.Else>
                      </Show>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
          <div className="col-span-1 md:col-span-2 flex items-center justify-end">
            <Button
              loading={loading}
              className="w-full md:w-auto px-16"
              type="submit"
            >
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
