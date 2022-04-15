import React, { createContext, useState, useContext } from "react";

const DevsContext = createContext();

export default function DevsProvider({ children }) {
  const [devs, setDevs] = useState({});

  return (
    <DevsContext.Provider
      value={{
        devs,
        setDevs
      }}
    >
      {children}
    </DevsContext.Provider>
  );
}

export function useDevs() {
  const context = useContext(DevsContext);
  if (!context) throw new Error("useDevs must be used within a DevsProvider");
  const { devs, setDevs } = context;
  return { devs, setDevs };
}