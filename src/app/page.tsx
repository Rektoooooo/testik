import React from "react";
import {UserCard} from "@/components/UserCard";
import {Card} from "@/components/Card";

export default function Home() {
  return (
      <div className={"flex flex-row justify-center gap-10 my-20"}>
        <UserCard name={"Karel Tretera"} age={"28"} books={"4"} lvl={"3"}/>
        <Card/>
      </div>
  )
}
