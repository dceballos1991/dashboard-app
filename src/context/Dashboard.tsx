"use client";
import React, { ReactNode } from "react";

export const Ranges = {
  daily: "daily",
  weekly: "weekly",
  monthly: "monthly",
} as const;

export type RangeType = (typeof Ranges)[keyof typeof Ranges];

type DashboardState = {
  range: RangeType;
  setRange: (range: RangeType) => void;
};

const DashboardContext = React.createContext<DashboardState | undefined>(
  undefined
);

const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [range, setRange] = React.useState<RangeType>(Ranges.monthly);

  return (
    <DashboardContext.Provider value={{ range, setRange }}>
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboard = () => {
  const context = React.useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};

export { DashboardProvider, useDashboard };
