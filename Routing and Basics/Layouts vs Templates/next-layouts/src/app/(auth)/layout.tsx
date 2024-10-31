"use client";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState("");
  return (
    <div>
      <div className="flex gap-4">
        <Link href={"/aboutus"}>About Us</Link>
        <Link href={"/contactus"}>Contact Us</Link>
        <Link href={"/services"}>Services</Link>
      </div>
      <input
        type="text"
        placeholder="Type Here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {children}
    </div>
  );
}
