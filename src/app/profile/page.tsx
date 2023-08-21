"use client"
import axios from "axios";

import { useRouter } from "next/navigation";

export default function userid() {
  const router = useRouter();
 
  const logout = async () => {
    try {
      const res = await axios.get("/api/users/logout");
      if (res) {
        router.push("/");
      } else {
        console.log("error in api");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button className="bg-purple-400 p-3 rounded-lg " onClick={logout}> Logout </button>
      <h1>Profile </h1>
    </div>
  );
}
