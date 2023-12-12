"use client";

import Mainfield from "./(ui)/mainFieldset";
import { usePathname } from "next/navigation";

//const envVar = process.env.TEST_TEXT || "no env"; //

//
function Breadcrumbs({ envVr }) {
  //
  const pathname = usePathname();

  console.log(pathname);
  //console.log(process.env.TEST_TEXT || "no env");

  return (
    <div className="breadcrumbs">
      <Mainfield {...{ className: "", legend: "breadcrumbs" }}>
        <p>{pathname.toString()}</p>
        {/* <b>{envVar}</b>  //直接要在 client 組件使用 server 組件在用的東西是不行滴  像是環境變數 */}
        <b>envVr {envVr}</b>
      </Mainfield>
    </div>
  );
}

export default Breadcrumbs;
