import { NextResponse, NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  try {
    const response:any = await  NextResponse.json({message:"Logout successful","success":true});
    const cooki:any = response.cookies.get("token");
    console.log(cooki,"this is ");
    
    
    response.cookies.set("token","",{httpOnly:true});
    
    
    return response
  } catch (error:any) {
    console.log("====================================");
    console.log(error.message);
    console.log("====================================");
    return NextResponse.json({ message: "erroe came" }, { status: 400 });
  }
}
