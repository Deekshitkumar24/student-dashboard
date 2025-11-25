





// "use client"

// import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
// import { GraduationCap, Hand, LayoutIcon, Settings } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// function SideNav() {
//   const { user } = useKindeBrowserClient();

//   const menuList = [
//     {
//       name: "Dashboard",
//       icon: LayoutIcon,
//     },
//     {
//       name: "Messages",
//       icon: Hand,
//     },
//     {
//       name: "Courses",
//       icon: GraduationCap,
//     },
//     {
//       name: "Settings",
//       icon: Settings,
//     },
//   ];

//   return (
//     <div className="border shadow-md h-screen p-5">
//       <Image
//         src={"/logo.svg"}
//         width={180}
//         height={50}
//         alt="logo"
//       />

//       <hr className="my-5" />

//       {menuList.map((menu, index) => (
//         <h2
//           key={index}
//           className="
//             flex items-center gap-3 text-md
//             text-slate-500
//             hover:bg-primary
//             hover:text-white
//             cursor-pointer
//             rounded-lg
//             my-2
//           "
//         >
//           <menu.icon />
//           {menu.name}
//         </h2>
//       ))}

//       <div className="mt-10">
//         <Image
//           src={user?.picture}
//           width={35}
//           height={35}
//           alt="user"
//           className="rounded-full"
//         />
//       </div>
//     </div>
//   );
// }

// export default SideNav;
















// "use client";

// import React from "react";
// import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
// import { GraduationCap, Hand, LayoutIcon, Settings } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// function SideNav() {
//   const { user } = useKindeBrowserClient();

//   const menuList = [
//     { name: "Dashboard", icon: LayoutIcon, path: "/dashboard" },
//     { name: "Students", icon: GraduationCap, path: "/dashboard/students" },
//     { name: "Attendance", icon: Hand, path: "/dashboard/attendance" },
//     { name: "Settings", icon: Settings, path: "/dashboard/settings" },
//   ];

//   // Real Gmail image (safe fallback)
//   const userImage =
//     user?.picture && user.picture.trim().length > 0
//       ? user.picture
//       : "/default-avatar.png"; // Optional fallback

//   return (
//     <div className="border shadow-md h-screen p-5 w-64 fixed flex flex-col justify-between">
//       <div>
//         <Image src={"/logo.svg"} width={180} height={50} alt="logo" />

//         <hr className="my-5" />

//         {menuList.map((menu, index) => (
//           <Link
//             key={index}
//             href={menu.path}
//             className="flex items-center gap-3 text-md text-slate-500 hover:bg-blue-600 hover:text-white cursor-pointer rounded-lg p-2 my-2"
//           >
//             <menu.icon size={20} />
//             {menu.name}
//           </Link>
//         ))}
//       </div>

//       {/* USER SECTION */}
//       <div className="flex items-center gap-3 border-t pt-4 pb-4">
//         <Image
//           src={userImage}
//           width={40}
//           height={40}
//           alt="user"
//           className="rounded-full "
//         />

//         <div>
//           <p className="text-slate-700 text-sm font-semibold">
//             {user?.given_name || "User"} {user?.family_name || ""}
//           </p>

//           <p className="text-slate-500 text-xs">
//             {user?.email || ""}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SideNav;
// ...existing code...
"use client";

import React from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { GraduationCap, Hand, LayoutIcon, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function SideNav() {
  const { user } = useKindeBrowserClient();

  const menuList = [
    { name: "Dashboard", icon: LayoutIcon, path: "/dashboard" },
    { name: "Students", icon: GraduationCap, path: "/dashboard/students" },
    { name: "Attendance", icon: Hand, path: "/dashboard/attendance" },
    { name: "Settings", icon: Settings, path: "/dashboard/settings" },
  ];

  const userImage =
    user?.picture && user.picture.trim().length > 0 ? user.picture : null;
  const displayName = user?.given_name || user?.name || "User";
  const displaySurname = user?.family_name || "";

  return (
    <aside className="border shadow-md h-screen p-5 w-64 fixed flex flex-col justify-between bg-white">
      <div>
        <Image src={"/logo.svg"} width={180} height={50} alt="logo" />

        <hr className="my-5" />

        <nav>
          {menuList.map((menu, index) => (
            <Link
              key={index}
              href={menu.path}
              className="flex items-center gap-3 text-md text-slate-500 hover:bg-blue-600 hover:text-white cursor-pointer rounded-lg p-2 my-2"
            >
              <menu.icon size={20} />
              <span>{menu.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* user section at bottom */}
      <div className="flex items-center gap-3 border-t pt-4 pb-4">
        {userImage ? (
          // use unoptimized to avoid remote domain config during development
          <Image
            src={userImage}
            width={40}
            height={40}
            alt="user"
            className="rounded-full"
            unoptimized
          />
        ) : (
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            {displayName?.charAt(0) || "U"}
          </div>
        )}

        <div className="truncate">
          <p className="text-slate-700 text-sm font-semibold truncate">
            {displayName} {displaySurname}
          </p>
          <p className="text-slate-500 text-xs truncate">{user?.email || ""}</p>
        </div>
      </div>
    </aside>
  );
}

export default SideNav;
