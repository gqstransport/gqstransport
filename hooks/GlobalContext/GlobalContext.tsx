"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface GlobalContextProps {
  isPageLoading: boolean;
  setIsPageLoading: (loading: boolean) => void;
}

const GlobalContext = createContext<GlobalContextProps>({
  isPageLoading: true,
  setIsPageLoading: () => {},
});

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [isPageLoading, setIsPageLoading] = useState(true);

  return (
    <GlobalContext.Provider value={{ isPageLoading, setIsPageLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
