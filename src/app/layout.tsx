import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/src/styles/theme";
import "./globals.css";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import Sidebar from "@/src/components/Sidebar/Sidebar";
import MobileOnlyNav from "../components/MobileOnlyNav";
import { UserProvider } from "../context/User";

export const metadata: Metadata = {
  title: "Employee Dashboard App",
  description: "Created by David Ceballos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* similar to normalize.css CSSBaseline is used to normalize styles across browsers */}
            <CssBaseline />
            <UserProvider>
              <Box
                sx={{ display: "flex", height: "100dvh", maxHeight: "100dvh" }}
              >
                <MobileOnlyNav />
                <Sidebar />
                <Paper
                  variant="outlined"
                  component="main"
                  sx={{
                    mr: { xs: 0, md: 1 },
                    mt: {
                      xs: "calc(8px + var(--Header-height))",
                      sm: "calc(8px + var(--Header-height))",
                      md: 1,
                    },
                    mb: { xs: 0, md: 1 },
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 0,
                    borderRadius: {
                      xs: 0,
                      sm: 0,
                      md: 2,
                    },
                  }}
                >
                  {children}
                </Paper>
              </Box>
            </UserProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
