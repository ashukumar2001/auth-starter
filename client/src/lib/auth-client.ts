import { createAuthClient } from "better-auth/react"
export const { signUp, signIn, useSession, getSession, signOut } = createAuthClient({
    baseURL: "http://localhost:3000",
    basePath: "/api/auth",
});
