"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import SideBar from "./SideBar";
import MobilMenu from "./MobilMenu";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log("pathname: ", pathname);

  const routeList = [
    "/Login",
    "/Signup",
    "/completingProfile",
    "/completingIndividualProfile",
    "/forgetpassword",
    "/otpVerification",
    "/resettingPassword",
    "/individualPersonalDetails",
    "/businessProfile"
  ];
  let routeObj: Record<string, boolean> = {};
  for (let item of routeList) {
    routeObj = { ...routeObj, [item]: pathname.includes(item) };
  }

  const routeName = pathname.split("/").at(-1);
  const isAuthPage = routeObj[`/${routeName}`];
  console.log("routeName: ", routeName);
  console.log("isAuthPage: ", isAuthPage);

  
  return (
    <div className={`dashboardPage ${isAuthPage ? "removeHeader" : ""}`}>
      {!isAuthPage && <Header />}
      <div className="d-flex dashboard-main">
        {!isAuthPage && (
          <div className="side-menu-sec-main position-relative">
            <SideBar />
          </div>
        )}
        <div className="right-pages">
          <div className="inner-dashboard-pages fixed-width">{children}</div>
        </div>
        {!isAuthPage && (
          <div className="mobile-menu-vendore d-lg-none ">
            <MobilMenu />
          </div>
        )}
      </div>
    </div>
  );
}
