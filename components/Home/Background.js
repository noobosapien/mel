import React from "react";
import bg from "@/public/17.jpg";

export default function Background({ children }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(269.77deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url(${bg.src})`,
        width: "100vw",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 1,
      }}
    >
      {children}
    </div>
  );
}
