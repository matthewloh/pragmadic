"use client";
import React from "react";
import useUser from "../hook/useUser";

export default function Profile() {
  const { isFetching, data } = useUser();
  return (
    <div>
      <h1>{`Profile of ${data?.display_name}`}</h1>
      <h2>{`Email: ${data?.email}`}</h2>
    </div>
  );
}
