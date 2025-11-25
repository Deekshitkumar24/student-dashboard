// import React from 'react'

// export default function Header() {
//   return (
//     <div>Header</div>
//   )
// }




// "use client"
// import Head from 'next/head';
// import React from 'react';
// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

//  function Header() {
//   const {user}=useKindeBrowserClient();
//    return (
//      <div className='p-4 shadow-sm border flex justify-between'>
//       <div>
//         <div>
//         </div>
//         <image src={user?.picture} alt="user" width={35} height={35} className="rounded-full"/>
//         </div>
//      </div>
//    )
//  }
//  export default Header;


"use client";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
import React from 'react';

function Header() {
  const { user } = useKindeBrowserClient();

  return (
    <div className="p-4 shadow-sm border-b flex items-center justify-between bg-white">
      {/* left side empty for now – or you can put a title */}
      <div></div>

      {/* right side: user avatar */}
      <div>
        {user?.picture && (
          <Image
            src={user.picture}
            width={35}
            height={35}
            alt="user"
            className="rounded-full"
          />
        )}
      </div>
    </div>
  );
}

export default Header;
