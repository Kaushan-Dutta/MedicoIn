"use client"
import React, { useEffect, useContext, createContext, useState } from "react";
import { userCheck } from "../controller/authController";


const AuthContext = createContext();

const AuthWrapper = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadToken = async () => {
      const token = localStorage.getItem('MedicoIn');
      if (token) {
         try {
          const res= await userCheck(token);
          console.log(res.data)
          setUser(res?.data); // Assuming 'res.data' contains user information
        } catch (err) {
          console.log(err);
        } 
      }
      else{
        console.log("user interaction clint")
      }
    };
    loadToken();
  }, []);
  
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthWrapper;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthWrapper");
  }
  return context;
};
