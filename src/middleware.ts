import { NextResponse,NextRequest } from "next/server";

export async function middleware(request:NextRequest)
{  
    console.log("middle is running");
    
    const path = request.nextUrl.pathname
    const ispublicPath = path==='/login' || path ==='/signup';
    
    
    const token = request.cookies.get("token")?.value || ""
    if(ispublicPath && token)
    {
        return NextResponse.redirect(new URL('/',request.nextUrl))
    }
    if(!ispublicPath && !token)
    {
          return NextResponse.redirect(new URL('/login',request.nextUrl))
    }
    
}

export const config={
    matcher:[
        '/',
        '/profile',
        '/login',
        '/signup',    
    ]
}