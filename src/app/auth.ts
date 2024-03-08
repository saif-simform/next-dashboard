import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { User } from "./lib/models";
import { connectToDB } from "./lib/utils";
import bcrypt from "bcrypt";

type Props = {
  email: string;
  password: string;
};

const login = async ({ email, password }: Props) => {
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
          const { email, password } = credentials as Props;

          const user = await login({
            email: email,
            password: password,
          });

          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});
