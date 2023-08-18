"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import User from "@/models/userModel";

export default function signup() {
  const router = useRouter();
  const [buttonDisabled, setbuttonDisabled] = useState(false);
  const [user, setuser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSignup = async () => {
    console.log("submit");
    
    try {
        const response =  axios.post("/api/users/signup",user);
        console.log("sign up success",(await response).status);
        router.push('/login')
        
    } catch (error:any) {
        console.log(error.message);
        
    }
  };

  useEffect(() => {
    if (
      user.username.length > 3 &&
      user.password.length>3 &&
      user.email.length > 3
    ) {
      setbuttonDisabled(false);
    } else {
      setbuttonDisabled(true);
    }
  }, [user]);

  return (
    <div>
      <div className="text-center font-bold text-2xl">
        <h1 className="m-2">Sign up</h1>
        <hr></hr>

        <div className="mt-4 ">
          {/* username */}
          <input
            className="text-center m-2 p-2"
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setuser({ ...user, username: e.target.value })}
            id="username"
          />
          {/* email */}
          <input
            className="text-center m-2 p-2"
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setuser({ ...user, email: e.target.value })}
            id="email"
          />
          {/* password  */}
          <input
            className="text-center m-2 p-2"
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setuser({ ...user, password: e.target.value })}
            id="password"
          />
          <button
            className="bg-blue-600 text-white p-2 rounded-xl"
            onClick={onSignup}
          >
            {buttonDisabled?"Not Sign up ":" Sign up"}
          </button>
        </div>
      </div>
      <Link className="text-center block m-4" href="/login">
        login page{" "}
      </Link>
    </div>
  );
}
