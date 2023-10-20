"use client";

import Mainfield from "./(ui)/mainFieldset";
import { usePathname } from "next/navigation";

//
function Breadcrumbs() {
  //
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="breadcrumbs">
      <Mainfield {...{ className: "", legend: "breadcrumbs" }}>
        <p>{pathname.toString()}</p>
      </Mainfield>
    </div>
  );
}

export default Breadcrumbs;