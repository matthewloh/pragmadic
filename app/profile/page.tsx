"use client";
import React from "react";
import useUser from "../hook/useUser";

export default function Profile() {
  const { isFetching, data: userData } = useUser();
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
