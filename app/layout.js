// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Placement Training</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-gray-100">{children}</body>
    </html>
  );
}
