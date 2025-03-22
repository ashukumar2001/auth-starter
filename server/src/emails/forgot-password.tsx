import React from "react";

interface Props {
  name: string;
  resetLink: string;
}

const ForgotPasswordEmail = ({ name, resetLink }: Props) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#222",
      }}
    >
      <h2
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        Hello {name},
      </h2>
      <p style={{ fontSize: "16px", marginBottom: "20px" }}>
        You recently requested to reset your password. Please click the link
        below to set a new password:
      </p>
      <p style={{ marginBottom: "20px" }}>
        <a
          href={resetLink}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Reset Your Password
        </a>
      </p>
      <p style={{ fontSize: "16px", marginBottom: "20px" }}>
        If you did not request a password reset, please ignore this email or
        contact support if you have any concerns.
      </p>
      <p style={{ fontSize: "14px", color: "#777" }}>
        Best regards,
        <br />
        The Auth Starter Team
      </p>
    </div>
  );
};

export default ForgotPasswordEmail;
