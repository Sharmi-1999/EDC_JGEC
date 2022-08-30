import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User";
import bcrypt from 'bcryptjs'

export default NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: "",
                password: "",
            },
            async authorize(credentials, req) {
                await dbConnect();
                const email = credentials.email;
                const password = credentials.password;
                const user = await User.findOne({ email: email });
                console.log("accesed database");
                if (!user) {
                    console.log("no user")
                    throw new Error("Invalid Credentials")
                }
                if (user) {
                    if (await bcrypt.compare(password, user.password)) {
                        console.log("password match");
                        const usr = {
                            _id: user.id,
                            name: user.name,
                            email: user, email
                        }
                        return usr
                    }
                    else {
                        console.log("password wrong")
                        throw new Error("Invalid Credentials")
                    }
                }
            }

        })
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.user = user
            }
            return token
        },
        session: async ({ session, token }) => {
            session.user = token.user
            return session;
        }
    }
})