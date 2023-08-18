import connect from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { request } from "http";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import { use } from "react";
import jwt from 'jsonwebtoken';
connect()
export async function POST(resquest:NextRequest)
{
    
    
    try {
        const {email,password} = await resquest.json();
        
        
        // finsing user in database
        const user:any = await User.findOne({email:email});
        console.log(user);
        
        if(!user)
        {
            return NextResponse.json({erroe:"User does not exist"},{status:400})
        }
        else{
  
            const validatepassword = await bcryptjs.compare(password,user.password)
            
            
            if(!validatepassword)
            {
                console.log("PASS WORD NOT MATCH");
                
                return NextResponse.json({erroe:"Password is not correct"},{status:400})
            }
            else{
                //create a token data
                console.log("RISHABH");
                const tokenData = {
                    id:user._id,
                    username:user.username,
                    email:user.email
                }
                //create token 
                const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:'1d'});


                const responce = NextResponse.json({
                    message:"Login successfull",
                    success:true,
                })
                responce.cookies.set("token",token,{httpOnly:true})
                return responce;



            }
        }
    } catch (error) {
        console.log(error);
    }

}