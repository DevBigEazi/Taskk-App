"use client";

import { Roboto_Serif } from "next/font/google";
import { Providers } from "./providers";
import NavBar from "../../conponents/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../../conponents/Sidebar";

const robotoSerif = Roboto_Serif({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Task App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoSerif.className}>
        <Providers>
          <Grid gridTemplateColumns="repeat(6, 1fr)">
            <GridItem
              as="aside"
              colSpan={{ base: 6, lg: 2, xl: 1 }}
              bg="blue.300"
              p={{ base: "20px", lg: "30px" }}
              minH={{ lg: "100vh" }}
            >
              <Sidebar />
            </GridItem>

            <GridItem as="main" p="40px" colSpan={{ base: 6, lg: 4, xl: 5 }}>
              <NavBar />
              {children}
            </GridItem>
          </Grid>
        </Providers>
      </body>
    </html>
  );
}
