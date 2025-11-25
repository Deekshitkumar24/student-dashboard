// import { NextResponse } from 'next/server'
// import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
// // This function can be marked `async` if using `await` inside
// export async function proxy(request) {
//    const { isAuthenticated } = getKindeServerSession();
//     if (!(await isAuthenticated())) {
//         return NextResponse.redirect(new URL('/api/auth/login?post_login_redirect_url=/dashboard', request.url))
//     }
// }
 
// // Alternatively, you can use a default export:
// // export default function proxy(request) { ... }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/dashboard/:path*',
// }