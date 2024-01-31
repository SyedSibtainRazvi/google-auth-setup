import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { db } from '../prisma/db'

export const authOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
}

export const getServerAuthSession = () => getServerSession(authOptions)
