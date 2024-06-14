"use client";
import useUser from "@/app/hook/useUser";
import Image from "next/image";

export const UserMessage: React.FC<{ message: string }> = (props) => {
  const { message } = props;
  const { isFetching, data } = useUser();
  return (
    <div className="flex flex-col gap-2 py-3">
      <div className="flex gap-2">
        <Image
          src={data?.image_url || ""}
          width={30}
          height={30}
          className="rounded-full"
          alt="User Pic"
        />
        <h2 className="text-lg font-bold text-neutral-100">
          <span>User</span>
        </h2>
      </div>
      <p>{message}</p>
    </div>
  );
};
