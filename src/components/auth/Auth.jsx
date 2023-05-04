import React from "react";
import TransactionForm from ".././Form";
import Transaction from ".././Transaction";
import View from ".././View";
import { useEffect } from "react";
import { Route, Routes, useNavigate ,Navigate} from "react-router-dom";


const Auth = () => {
  const token = JSON.parse(localStorage.getItem("logindata"));
  const navigate = useNavigate();
  useEffect(()=>{
    if (!token) {
      navigate("/public/login");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return (
    <>
      {token && (
        <Routes>
          <Route path="/create" element={<TransactionForm />} />
          <Route path="/create/:id" element={<TransactionForm />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/transaction/:id" element={<View />} />
          <Route path="/*" element={<Navigate to="/transaction" replace />} />
        </Routes>
      )}
    </>
  );
};

export default Auth;
