// import React from 'react'

// import sideNav from './_components/sideNav'
// function layout({children}) {
//   return (
//     <div>
//       <div className='md:w-64 fixed hidden md:block'>
//         <sideNav />
//       </div>
//       <div>
//       {children}
//       </div>
//       </div>
//   )
// }

// export default layout
// ...existing code...
// import React from "react";
// import SideNav from "./_components/SideNav"; // use PascalCase
// export default function Layout({ children }) {
//   return (
//     <div className="flex">
//       {/* Left Sidebar */}
//       <div className="md:w-64 fixed hidden md:block">
//         <SideNav />
//       </div>

//       {/* Page Content */}
//       <div className="flex-1 md:ml-64 p-4">
//         {children}
//       </div>
//     </div>
//   );
// }


// // app/dashboard/layout.jsx
// import React from "react";
// import SideNav from "./_components/SideNav";
// import Head from "next/head";
// import Header from "./_components/Header";

// export default function DashboardLayout({ children }) {
//   return (
//     <div>
//       <div className="md:w-64 fixed hidden md:block">
//         <SideNav />
//       </div>

//       <div className="md:ml-64">{children}</div>
//        <Header />
     
//       {children}
//     </div>
//   );
// }




// app/dashboard/layout.jsx
import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      {/* Left: fixed sidebar */}
      <div className="hidden md:block md:w-64 fixed inset-y-0">
        <SideNav />
      </div>

      {/* Right: header + page content */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Top header */}
        <Header />

        {/* Page content comes BELOW header */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
