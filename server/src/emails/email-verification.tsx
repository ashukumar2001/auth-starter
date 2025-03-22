import type React from "react";

interface EmailTemplateProps {
  firstName: string;
  verificationLink: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  verificationLink,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>
      Thank you for signing up. Please verify your email address by clicking the
      link below:
    </p>
    <a href={verificationLink}>Verify Email</a>
    <p>If you did not sign up for this account, you can ignore this email.</p>
  </div>
);
