import React from "react";

function AboutPage() {
    // this log cannot be seen in the browser's console and only be seen in the terminal in the server
    console.log("About is a Server Component");
    
  return (
    <div className="container mx-auto pt-40 flex justify-center items-center">
      <h1 className="text-4xl font-bold">About Page</h1>
    </div>
  );
}

export default AboutPage;
