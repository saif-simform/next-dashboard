import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: async ({ auth, request }) => {
      const isLoggedIn = !!auth?.user;

      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard && !isLoggedIn) {
        return Response.redirect(new URL("/login", request.nextUrl));
      }

      if (!isOnDashboard && isLoggedIn) {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
