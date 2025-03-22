import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/index.js";
import { Resend } from "resend";
import { EmailTemplate } from "../emails/email-verification.js";
// import { EmailTemplate } from "../emails/email-verification.jsx";
const resend = new Resend(process.env.RESEND_API_KEY);
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  baseURL: "http://localhost:3000",
  trustedOrigins: ["http://localhost:5173"],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    autoSignIn: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ url, user }) => {
      console.log({ url, user });
      const { data, error } = await resend.emails.send({
        from: "Auth <onboarding@ashudev.me>",
        to: user.email,
        subject: "Verify your email address",
        react: <EmailTemplate firstName={user.name} verificationLink={url} />,
      });

      console.log({ data, error });
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
  },
});
