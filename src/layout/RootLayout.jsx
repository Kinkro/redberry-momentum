import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function RootLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default RootLayout;
