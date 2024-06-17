import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { LightMode } from "@mui/icons-material";
import { borderStyles } from "../styles/theme";
import HeaderToolbar from "../components/Dashboard/HeaderToolbar";
import { DashboardProvider } from "../context/Dashboard";
import OverviewSection from "../components/Dashboard/OverviewSection";

export default function Dashboard() {
  return (
    <DashboardProvider>
      <HeaderToolbar />
      <OverviewSection />
    </DashboardProvider>
  );
}
