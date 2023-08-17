import connect from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import { error } from "console";
import { useRouter } from "next/navigation";


connect()

export async function POST(resquest:NextRequest)
{
    try {
        const reqBody = await resquest.json();
        const {email,username,password}=reqBody;
        console.log(reqBody);

        //check if user  is already present
        const user = await User.findOne({email:email});
        if(user)
        {
            return NextResponse.json({error:"User is already present"},{status:400})
        }
        else{
            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(password,salt);

            const newUser = new User({
                username:username,
                email :email ,
                password:hashedPassword
            })
            const saveduser = await newUser.save();
            if(saveduser)
            {
                return NextResponse.json({message:"User is Created successfully"},{status:201})
            }
            else{
                throw Error("Error while creating the user")
            }
        

            

        }
        
    } catch (error:any) {
        console.log(error);
       return NextResponse.json({erroe:error.message},{status:500})
    }
}