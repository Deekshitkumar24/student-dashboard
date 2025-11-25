"use client"
import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div>
      {/* Make sure the LoginLink and RegisterLink components accept children */}
      {/* <button>Welcome to Student Attendance Tracking App</button> */}
      <LoginLink>Sign in</LoginLink>
      <RegisterLink>Sign up</RegisterLink>
    </div>
  );
}
// export default Layout; 
