"use client";
import { closeSidebar } from "@/src/styles/utils";
import { Divider, List, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import GlobalStyles from "@mui/material/GlobalStyles";
import { useCallback, useState } from "react";
import SidebarToggle from "./SidebarToggle";
import Logo from "./Logo";
import {
  Dashboard,
  GroupAdd,
  People,
  Event,
  AlarmAdd,
  VolunteerActivism,
  Calculate,
  Paid,
  Article,
  Feedback,
  CardGiftcard,
  Receipt,
} from "@mui/icons-material";
import SidebarLink from "./SidebarLink";

const TEAM_MANAGEMENT_LINKS = [
  {
    icon: <People />,
    label: "Employee",
    href: "/employee",
  },
  {
    icon: <GroupAdd />,
    label: "Onboarding",
    href: "/onboarding",
  },
  {
    icon: <Event />,
    label: "Leave",
    href: "/leave",
  },
  {
    icon: <AlarmAdd />,
    label: "Time tracking",
    href: "/time-tracking",
  },
  {
    icon: <VolunteerActivism />,
    label: "Rewards",
    href: "/rewards",
  },
  {
    icon: <Calculate />,
    label: "Costs",
    href: "/costs",
  },
  {
    icon: <Paid />,
    label: "Compensation",
    href: "/compensation",
  },
  {
    icon: <Article />,
    label: "Requests",
    href: "/requests",
  },
  {
    icon: <Feedback />,
    label: "Feedback",
    href: "/feedback",
  },
];

const FINANCES_LINKS = [
  {
    icon: <Paid />,
    label: "Payroll",
    href: "/payroll",
  },
  {
    icon: <CardGiftcard />,
    label: "Invoices",
    href: "/invoices",
  },
  {
    icon: <Receipt />,
    label: "Billing",
    href: "/billing",
  },
];

export default function Sidebar() {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleToggle = useCallback(() => {
    setIsMinimized((prev) => !prev);
  }, []);

  return (
    <Box
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: {
          xs: 9999,
          md: "auto",
        },
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        bgcolor: "grey.200",
        boxShadow: {
          xs: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          md: "none",
        },
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Minimized-Sidebar-width": "66px",
            "--Is-Sidebar-minimized": isMinimized ? 1 : 0,
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("md")]: {
              "--Sidebar-width": isMinimized
                ? "var(--Minimized-Sidebar-width)"
                : "220px",
            },
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": isMinimized
                ? "var(--Minimized-Sidebar-width)"
                : "240px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo isMinimized={isMinimized} />
        <SidebarToggle isMinimized={isMinimized} onToggle={handleToggle} />
      </Box>

      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
        }}
      >
        <List
          dense
          sx={{
            gap: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SidebarLink icon={<Dashboard />} label="Dashboard" href="/" />

          <Divider />

          <Typography
            variant="caption"
            sx={{
              color: "grey.600",
              mt: 1,
              visibility: isMinimized ? "hidden" : "visible",
              textWrap: "nowrap",
            }}
          >
            Team management
          </Typography>

          {TEAM_MANAGEMENT_LINKS.map((link, index) => (
            <SidebarLink key={index} {...link} />
          ))}

          <Divider />

          <Typography
            variant="caption"
            sx={{
              color: "grey.600",
              mt: 1,
              visibility: isMinimized ? "hidden" : "visible",
              textWrap: "nowrap",
            }}
          >
            Finances
          </Typography>

          {FINANCES_LINKS.map((link, index) => (
            <SidebarLink key={index} {...link} />
          ))}
        </List>
      </Box>
    </Box>
  );
}
