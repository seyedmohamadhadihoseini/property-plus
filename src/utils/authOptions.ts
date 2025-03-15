import { prisma } from "@/services/prisma";
import { Account, DefaultSession, Profile, Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
let evert:string|number|undefined = "";
const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRECT || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
    }),

    // ...add more providers here
  ],
  callbacks:{
    async signIn({user,account,profile}:{user:User,account:Account|null,profile?:Profile}):Promise<string|boolean>{
        const isNew = await prisma.user.count({where:{email:profile?.email}}) == 0;
        evert = user.id;
        evert = account?.type;
        console.log(evert)
        if(isNew && profile){
          await prisma.user.create({
            data:{
              username:profile.name!.slice(0,20),
              email:profile.email||"",
              image:profile.image
            }
          })
        }
        return true;
    },
    async session({session}:{session:Session|DefaultSession}){
      const user = await prisma.user.findUnique({where:{email:session.user!.email||""}});

      if(user){  
        return {
          ...session,
          id:user.id
        }
      }
      return session
    }
  }
  // callbacks: {
  //   async signIn({ account, profile }: { account: Account, profile: Profile }) {

  //   },
  //   async session({ session }: { session: Session }) {

  //   }
  // }
}
export default authOptions;