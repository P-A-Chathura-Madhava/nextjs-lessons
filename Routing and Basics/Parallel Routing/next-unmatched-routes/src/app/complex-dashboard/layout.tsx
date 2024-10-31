import React from "react";

export default function DashboardLayout({
    children,
    about,
    contact,
    service
  }: Readonly<{
    children: React.ReactNode;
    about: React.ReactNode,
    contact: React.ReactNode,
    service: React.ReactNode
  }>) {
    return (
        <div className="flex flex-col container mx-auto mt-4">
            <div className="flex justify-center items-center">
            <h1 className="text-4xl font-bold">Complex Dashboard Header</h1>
            </div>
            <div>{children}</div>
            <div>{about}</div>
            <div>{contact}</div>
            <div>{service}</div>
        </div>
    );
  }