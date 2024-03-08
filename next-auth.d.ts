import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    username: string;
    img: string;
  }

  interface User {
    username: string;
    img: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username: string;
    img: string;
  }
}
