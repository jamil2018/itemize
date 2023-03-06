import "./globals.css";

export const metadata = {
  title: "Itemize - login",
  description: "Next gen inventory management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
