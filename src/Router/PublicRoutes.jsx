import { Outlet } from "react-router-dom";

const PublicRoutes = () => {
  // return user ? <Navigate to="/users" /> : <Outlet />;
  return <Outlet />;
};

export default PublicRoutes;
