"use client";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { outlinedButtonStyles } from "@/src/styles/theme";

export default function SidebarLink({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <ListItemButton
      selected={isActive}
      component={NextLink}
      href={href}
      sx={{
        px: 1,
        py: 1,
        gap: 0.75,
        alignItems: "center",
        borderRadius: 2,
        "& p": {
          color: "grey.600",
        },
        "& svg": {
          color: "grey.600",
          fontSize: "1.25rem",
        },
        "&.Mui-selected": {
          ...outlinedButtonStyles,
          "& svg": {
            fontSize: "1.25rem",
          },
          "&:hover": {
            bgcolor: "grey.50",
          },
        },
      }}
    >
      {icon}
      <Typography variant="body2" sx={{ textWrap: "nowrap" }}>
        {label}
      </Typography>
    </ListItemButton>
  );
}
