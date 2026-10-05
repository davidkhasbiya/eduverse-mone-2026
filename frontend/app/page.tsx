"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("Connecting...");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend request failed");
        }

        return response.json();
      })
      .then((data) => {
        setStatus(data.status);
        setMessage(data.message);
      })
      .catch(() => {
        setStatus("error");
        setMessage("Backend tidak dapat dihubungi.");
      });
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">EduVerse</h1>

        <p className="mt-4">
          Backend status: <strong>{status}</strong>
        </p>

        <p className="mt-2">{message}</p>
      </div>
    </main>
  );
}