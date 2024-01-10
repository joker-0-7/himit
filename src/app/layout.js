import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./style.css";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { UseProvider } from "./context/userContext";
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <UseProvider>
                <body>
                    <ToastContainer
                        position="top-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={true}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    {children}
                    {/* <ToastContainer /> */}

                    <Script
                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
                        crossorigin="anonymous"
                    ></Script>
                </body>
            </UseProvider>
        </html>
    );
}
