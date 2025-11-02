import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { type NextAuthOptions } from "next-auth";
import mongoose from "mongoose";

import User from "@/models/Users";
import connect from "@/utlis/db"; 

type DbUser = {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  username?: string;
  name?: string;
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connect();
        if (!credentials?.email || !credentials?.password) return null;

        // Make TS aware of the fields we expect:
        const user = await User.findOne({ email: credentials.email })
          .select("email password username name") // ensure fields exist
          .lean<DbUser>();

        if (!user) return null;

        const ok = await bcrypt.compare(credentials.password, user.password);
        if (!ok) return null;

        return {
          id: String(user._id),
          name: user.username ?? user.name ?? "User",
          email: user.email,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = (user as any).id;
      return token;
    },
    async session({ session, token }) {
      (session.user as any).id = token.id as string;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
