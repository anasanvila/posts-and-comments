import { Outlet } from "react-router-dom";

import Navbar from "../organisms/Navbar";
import { useEffect } from "react";

function RootLayout({ text }) {
  useEffect(() => text("RootLayout"));
  return (
    <>
      <Navbar text={text} />
      <Outlet />
    </>
  );
}

export default RootLayout;
