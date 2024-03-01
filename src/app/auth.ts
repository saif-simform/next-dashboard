import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { User } from "./lib/models";
import { connectToDB } from "./lib/utils";
import bcrypt from "bcrypt";
import { z } from "zod";

type Props = {
  email: string;
  password: string;
};

const login = async ({ email, password }: Props) => {
  //   const { email, password } = credentials;

  try {
    connectToDB();
    const user = await User.findOne({ email: email });

    if (!user) throw new Error("Invalid credentials");

    const checkPassword = bcrypt.compare(password, user?.password);

    if (!checkPassword) throw new Error("Invalide credentials");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          console.log("cred", credentials);
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);

          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await login({ email: email, password: password });
            console.log("user", user);
            if (!user) return null;
          }

          return null;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
});
