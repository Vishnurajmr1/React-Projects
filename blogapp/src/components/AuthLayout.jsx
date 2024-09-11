import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, authentication = true }) => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    //user is authenticated but not login in or authstatus is not true then redirect to login
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    }
    //user is not authenticated but already logged in so redirect to home
    else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, authentication, navigate]);
  return loader ? null : <>{children}</>;
};

export default Protected;
