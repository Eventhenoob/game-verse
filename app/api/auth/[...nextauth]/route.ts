import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { closeDataBase, connectTo } from "@/services/connectDB";
import userModel from "@/models/userModel";
import { compare } from "@/utils/crypto";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",

      credentials: {
        email: {
          label: "email",
          type: "email",
          required: true,
        },

        password: {
          label: "password",
          type: "password",
          required: true,
        },
      },

      async authorize(credentials, req) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        try {
          await connectTo("user");

          const foundUser = await userModel.findOne({
            email: credentials.email,
          });

          closeDataBase();

          if (
            foundUser &&
            (await compare(credentials.password, foundUser.password))
          ) {
            return foundUser;
          }
        } catch (err) {
          return null;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (trigger === "update") {
        if (session.username) {
          token.username = session.username;
        }
        if (session.email) {
          token.email = session.email;
        }
      }
      return token;
    },

    async session({ session, token, user }) {
      return {
        ...session,
        username: token.username,
        email: token.email,
      };
    },
  },

  secret: "HeLlOAEZakMi@1",

  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
