import Image from "next/image";
import React from "react";
import license from "../../../../assets/images/license.png";
import propertyLicense from "../../../../assets/images/property-license.png";

const Verification = () => {
  return (
    <>
      <div className=" flex items-stretch">
        <Image
          className="rounded-[20px] w-full h-full object-cover"
          src={license}
          alt="user"
        />
      </div>
    </>
  );
};

export default Verification;
