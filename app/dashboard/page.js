// "use client";

// import { useTheme } from "next-themes";
// import React, { useEffect } from "react";
// import Layout from "./layout";

// export default function Dashboard() {
//   const { setTheme } = useTheme();

//   useEffect(() =>{
//     setTheme('system');   // set default theme
//   }, []);

//   return (
//     <div>
//       page
//     </div>
//   );
// }
//  export default Dashboard;
"use client"
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'

function Dashboard() {
    const { setTheme } = useTheme()

    useEffect(()=>{
        setTheme('light') // set default theme
    },[])
    return (
        <div>page</div>
    )
}

export default Dashboard