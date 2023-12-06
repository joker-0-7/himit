import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import './style.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
