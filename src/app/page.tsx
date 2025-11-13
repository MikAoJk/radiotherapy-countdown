import {Countdown} from "@/components/Countdown";
import React from "react";
import Radiotherapy from "@/components/Radiotherapy";

export default function Home() {
  return (
      <main>
          <div className="flex flex-col items-center justify-between p-10">
            <Radiotherapy/>
      </div>
    <div className="flex min-h-screen flex-col items-center justify-between md:p-12">
      <div className="z-5 items-center justify-between font-mono text-sm flex">
          <Countdown date={`2025-11-25T00:00:00`} />
      </div>
    </div>
    </main>
  )
}
