import type { Metadata } from "next";
import { Jost, Roboto} from "next/font/google";
import "./globals.scss";
import Header from "@/src/components/layout/header/header";
import Footer from "@/src/components/layout/footer/footer";
import TanstackProvider from "@/src/providers/TanstackProvider";
import FetchProductsInStore from "@/src/utils/fetchProductsInStore/fetchProductsInStore";


const jost = Jost({ weight: ['400', '500', '600', '800'], subsets: ["cyrillic", "latin"], variable: '--font-Jost' });
const roboto = Roboto({ weight: ['400'], subsets: ["cyrillic", "latin"], variable: '--font-roboto' });

export const metadata: Metadata = {
  title: "Kugoo",
  description: "Официальный магазин Kugoo",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="ru">
      <body className={`${jost.variable} ${roboto.variable}`}>
        <TanstackProvider>
        <FetchProductsInStore />
          <Header />
          {}
          <main>{children}</main>
          <Footer />
        </TanstackProvider>
      </body>
    </html>

  );
}
