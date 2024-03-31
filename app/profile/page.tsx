"use client";
import React from "react";
import useUser from "../hook/useUser";
import useCountriesOfUser from "../hook/useCountries";

export default function Profile() {
  const { isFetching, data: userData } = useUser();
  const { isLoading, data: countriesData } = useCountriesOfUser();
  return (
    <div>
      {/*
        Read up on row level security policy
       */}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {countriesData &&
            Array.isArray(countriesData) &&
            countriesData.map((item) => {
              return <div key={item.created_at}>{item.name}</div>;
            })}
          {/* {data?.map((item, index) => {
            return <div key={index}>{item.name}</div>;
          })} */}
        </div>
      )}
      <h1>{`Profile of ${userData?.id}`}</h1>
      <h1>{`Profile of ${userData?.display_name}`}</h1>
      {/* <h2>{`Email: ${data?.email}`}</h2> */}
    </div>
  );
}
