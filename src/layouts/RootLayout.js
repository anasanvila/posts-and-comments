import { Outlet } from "react-router-dom";

import Navbar from "../organisms/Navbar";

function RootLayout() {
  return (
    <>
      <Navbar />
      {/* <main className={classes.content}> */}
      <Outlet />
      {/* </main> */}
    </>
  );
}

export default RootLayout;
