"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios  from "axios";
import Link from "next/link";

export default function signup() {
    const router= useRouter();
    const [user, setuser] = useState({
        email: "",
        password: ""
    })

    const login = async () => {
        try {
            const res:any = await axios.post("/api/users/login",user);
            console.log('====================================');
            console.log(res);
            console.log('====================================');
            router.push('/')
            
        } catch (error) {
            console.log(error);
            
        }

    }
    return (
        <div>
    
            <div className="text-center font-bold text-2xl" >
                <h1 className="m-2">Login </h1>
                <hr></hr>


                <div className="mt-4 ">
                    
                    {/* email */}
                    <input className="text-center m-2 p-2" type="text" placeholder="Email" value={user.email} onChange={(e) => setuser({ ...user, email: e.target.value })} id="email" />
                    {/* password  */}
                    <input className="text-center m-2 p-2" type="password" placeholder="Password" value={user.password} onChange={(e) => setuser({ ...user, password: e.target.value })} id="password" />
                    <button className="bg-blue-600 text-white p-2 rounded-xl" onClick={login}>login here</button>
                </div>
            </div>
            <Link className="text-center block m-4" href='/signup'>signup page </Link>
            <Link className="text-center block m-4" href='/'>Home page </Link>
        </div>
    )
}