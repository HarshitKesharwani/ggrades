import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function User() {
  const location = useLocation();
  return <div>Welcome{location.state.id}</div>;
}
