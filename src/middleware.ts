import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/signIn",
    signOut: "/auth/signOut",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // Used for check email message
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not interest)
  },
});
