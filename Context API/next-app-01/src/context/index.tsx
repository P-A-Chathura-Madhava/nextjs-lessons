"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// type Context = {hello: string}

// create context
const AppContext = createContext<any>(undefined);

// create wrapper
export const AppWrapper = ({children}: {children: React.ReactNode}) => {
    let [name, setName] = useState("Kasun");

    return(
        <AppContext.Provider value={{name, setName}}>
            {children}
        </AppContext.Provider>
    )
}

// export function
export function useAppContext() {
    return useContext(AppContext);
}