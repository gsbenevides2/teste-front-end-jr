import FooterComponent from "@/components/Footer";
import "./globals.scss";
import HeaderComponent from "@/components/Header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ProductModalProvider from "@/components/ProductModal";

//import { Inter } from "next/font/google";

/*
const inter = Inter({ subsets: ["latin"] });
*/

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400", "300"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "VTEX Ecommerce",
  description: "Tudo para sua loja online",
  category: "Ecommerce",
  creator: "VTEX",
  publisher: "VTEX",
  keywords: ["VTEX", "Ecommerce", "Loja Online"],
  themeColor: "#F71963",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={poppins.variable}>
      <body className={poppins.className}>
        <HeaderComponent />
        <ProductModalProvider>{children}</ProductModalProvider>
        <FooterComponent />
      </body>
    </html>
  );
}
