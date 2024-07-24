"use client";
import { useGetFiles } from "@/apis/auth";
import SecondHeader from "@/layout/secondNav/SecondHeader";
import { Empty } from "antd";
import React from "react";
interface IFiles {
  url: string;
  user_id: number;
  id: number;
}
export default function Page() {
  const { data } = useGetFiles();
  
  return (
    <>
      <SecondHeader />
      <div className="files">
        {!data || data?.length === 0  ? (
          <Empty />
        ) : (
          data?.map((item: IFiles, idx: number) => (
            <div className="files__cart" key={idx}>
              <iframe
                src={"http://localhost:8181" + item.url}
                width={"100%"}
                height="500px"
              ></iframe>
            </div>
          ))
        )}
      </div>
    </>
  );
}
