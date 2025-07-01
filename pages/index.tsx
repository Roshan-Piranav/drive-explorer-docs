import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const meta = {
  layout: false,
};

export default function OpeningPage() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // fade in immediately

    const fadeOutTimer = setTimeout(() => {
      setVisible(false); // trigger fade out after 2.5s
    }, 2000);

    const redirectTimer = setTimeout(() => {
      router.push("/home");
    }, 2500);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div
      style={{
        backgroundColor: "#2A82D9",
        color: "#FFFFFF", // dark gray text
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
        textAlign: "center",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.8s ease-in-out",
      }}
    >
      <h1 style={{ fontSize: "2.8rem", fontWeight: 600, marginBottom: "1rem" }}>
        Drive Explorer Pro
      </h1>
      <p style={{ fontSize: "1.2rem" }}>
        Collaborates with Google Sheets and Drive
      </p>
    </div>
  );
}
