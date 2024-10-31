"use client";
import { useAppContext } from "@/context";
import Image from "next/image";

export default function Home() {
  // import context
  const {name, setName} = useAppContext();

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-4xl font-bold text-center">Next Application 01</h1>
      <h2>Context Name : {name}</h2>
      <button className="border rounded-md bg-slate-200 hover:bg-slate-400 py-2 px-4" onClick={()=>setName("Nuwan")}>Change Name</button>
    </div>
  );
}
