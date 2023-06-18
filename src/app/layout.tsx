"use client";

import { Roboto_Serif } from "next/font/google";
import { Providers } from "./providers";
import NavBar from "../../conponents/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";

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
              colSpan={1}
              bg="blue.300"
              p="30px"
              minH="100vh"
            >
              <span>Sidebar</span>
            </GridItem>

            <GridItem as="main" colSpan={5} p="40px">
              <NavBar />
              {children}
            </GridItem>
          </Grid>
        </Providers>
      </body>
    </html>
  );
}
