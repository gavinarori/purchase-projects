import { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/utils/prismadb';
import bcrypt from 'bcrypt';

import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

 export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
},
debug: process.env.NODE_ENV === 'development',

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'username',
          type: 'text',
          placeholder: 'username',
        },
        password: {
          label: 'password',
          type: 'password',
          placeholder: 'password',
        },
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'email',
        },
      },
      async authorize(credentials: any) {
        // Check if all the necessary details are provided
        if (!credentials.email || !credentials.password) {
          throw new Error('Please enter all your details');
        }

        // Check if the user exists
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // If no user was found
        if (!user || !user?.hashedPassword) {
          throw new Error('No user found');
        }

        // Check if the password matches
        const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword);

        // If the password doesn't match
        if (!passwordMatch) {
          throw new Error('Incorrect password');
        }

        return user;
      },
    }),
  ],
};

export default options;
