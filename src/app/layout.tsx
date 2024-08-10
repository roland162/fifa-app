
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { ClientBaseLayout } from "@/components/base/ClientBaseLayout";
import { Header } from "@/components/base/Header";
import { Box, Flex, Theme } from "@radix-ui/themes";
import { SideBar } from "@/components/base/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FIFA Championship",
  description: "FIFA Championship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Theme accentColor="plum">
        <ClientBaseLayout>
          <Box height="100vh" overflowY="auto">
          <Header />
          <Flex gap="20px" height="calc(100% - 60px)" width="100%">
            <SideBar />
          {children}
          </Flex>
          </Box>
        </ClientBaseLayout>
        </Theme>
      </body>
    </html>
  );
}
