"use client";
import React from "react";
import useUser from "../hook/useUser";
import { db } from "@/db";

export default function Profile() {
  const { isFetching, data: userData } = useUser();
  console.log(userData);
  return (
    <div>
      {/*
        Read up on row level security policy
       */}
      <h1>{`Profile of ${userData?.id}`}</h1>
      <h1>{`Profile of ${userData?.display_name}`}</h1>
      {/* <h2>{`Email: ${data?.email}`}</h2> */}
    </div>
  );
}
