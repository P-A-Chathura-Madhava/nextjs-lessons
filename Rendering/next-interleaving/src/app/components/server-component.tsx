import React from 'react'
import fs from "fs";

function ServerComponent() {
    fs.readFileSync("/src/app/components/server-component.tsx", "utf-8");
  return (
    <div>
        <h1>server-component</h1>
    </div>
  )
}

export default ServerComponent