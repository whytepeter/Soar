import { FormEvent, useState } from "react";
import { Button } from "../base/Button";
import { Input } from "../base/Input";
import UserProfile from "./UserProfle";
import toast from "react-hot-toast";

export default function EditProfile() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Profile updated successfully");
    }, 3000);
  };
  return (
    <div className="md:px-6 py-6 w-full flex items-center md:items-start md flex-col md:flex-row gap-4 md:gap-14">
      <div>
        <UserProfile
          edit
          className={loading ? "pointer-events-none opacity-70" : ""}
        />
      </div>

      <form
        onSubmit={onSubmit}
        className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-6 text-dark"
      >
        <div className="space-y-2 col-span-1">
          <label className="text-sm" htmlFor="full_name">
            Your Name
          </label>
          <Input disabled={loading} id="full_name" name="full_name" />
        </div>
        <div className="space-y-2 col-span-1">
          <label className="text-sm" htmlFor="user_name">
            User Name
          </label>
          <Input disabled={loading} id="user_name" name="user_name" />
        </div>
        <div className="space-y-2 col-span-1">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <Input
            disabled={loading}
            type="email"
            inputMode="email"
            id="email"
            name="email"
          />
        </div>
        <div className="space-y-2 col-span-1">
          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <Input
            disabled={loading}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className="space-y-2 col-span-1">
          <label className="text-sm" htmlFor="dob">
            Date of Birth
          </label>
          <Input disabled={loading} type="date" id="dob" name="dob" />
        </div>
        <div className="space-y-2 col-span-1">
          <label className="text-sm" htmlFor="present_address">
            Present Address
          </label>
          <Input
            disabled={loading}
            id="present_address"
            name="present_address"
          />
        </div>
        <div className="space-y-2 col-span-1">
          <label className="text-sm" htmlFor="permanent_address">
            Permanent Address
          </label>
          <Input
            disabled={loading}
            id="permanent_address"
            name="permanent_address"
          />
        </div>
        <div className="space-y-2 col-span-1">
          <label className="text-sm" htmlFor="city">
            City
          </label>
          <Input disabled={loading} id="city" name="city" />
        </div>
        <div className="space-y-2 col-span-1">
          <label className="text-sm" htmlFor="postal_code">
            Postal Code
          </label>
          <Input
            inputMode="numeric"
            disabled={loading}
            id="postal_code"
            name="postal_code"
          />
        </div>
        <div className="space-y-2 col-span-1">
          <label className="text-sm" htmlFor="country">
            Country
          </label>
          <Input
            inputMode="numeric"
            disabled={loading}
            id="country"
            name="country"
          />
        </div>
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
    </div>
  );
}
