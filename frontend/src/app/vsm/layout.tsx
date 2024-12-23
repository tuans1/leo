import Image from "next/image";
import React from "react";

export default function VsmLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="flex items-center h-12 bg-[#BD0F72]">
        <Image
          className="mx-4"
          src="/assets/images/OneLogo.png"
          alt="Some picture of mine"
          width={65}
          height={30}
        />
        <div>
          <span className="border-l border-y-red-100 pl-3">
            CHORUS <span>OPUS Modernization</span>
          </span>
        </div>
      </div>
      <div className="h-[72px] bg-white flex items-center">
        <span className="text-h4-lg mx-4 color-neutral">Vessel</span>
      </div>
      {children}
    </>
  );
}
