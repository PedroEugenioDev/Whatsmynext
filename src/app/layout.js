import { Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/Components/Header";
import { Container } from "reactstrap";
import classNames from "classnames";

const roboto = Roboto({ subsets: ["latin"], weight: ["700"] });

export const metadata = {
  title: "What's My Next",
  description: "Find your next anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classNames(roboto.className, "bg-dark")}>
        <Container className="mt-3">
          <Header />
          {children}
          {/* <Footer /> */}
          <div></div>
        </Container>
      </body>
    </html>
  );
}
