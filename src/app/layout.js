import Navbar from "@/Components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/Components/Footer/Footer";
import { ThemeContextProvider } from "@/Context/ThemeContext";
import ThemeProvider from "@/Providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevBlog: The Developer's Hub",
  description:
    "Welcome to DevBlog, the premier destination for developers and tech enthusiasts alike. Whether you're a seasoned programmer or just starting your coding journey, DevBlog offers a rich platform for sharing knowledge, discovering new trends, and connecting with a vibrant community of like-minded individuals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              {/* ⬇️ This wrapper will use to give the space to left and right of the app */}
              <div className="wrapper">
                {" "}
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
