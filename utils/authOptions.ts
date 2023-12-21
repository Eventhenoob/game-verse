import { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectTo } from "@/services/connectDB";
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

      async authorize(credentials, req): Promise<User | null> {
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        try {
          await connectTo("user");

          const foundUser = await userModel.findOne({
            email: credentials.email,
          });

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
        if (session.name) {
          token.name = session.name;
        }
        if (session.email) {
          token.email = session.email;
        }
        if (session.image) {
          token.image = session.image;
        }
      }
      return token;
    },

    async session({ session, token, user, trigger }) {
      if (session.user && token.email && token.image && token.name) {
        session.user = {
          image: `${token.image}`,
          email: `${token.email}`,
          name: `${token.name}`,
        };
      }

      return {
        ...session,
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
