import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "./context/user";
import { BannerProvider } from "./context/banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ViewStats Test Axel Auza",
  description: "ViewStats todo administration",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <BannerProvider> {children} </BannerProvider>
        </UserProvider>
      </body>
    </html>
  );
}
