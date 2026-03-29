import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Siddhant Sahoo | AI & Data Engineering Portfolio',
  description: 'Portfolio of an AI masters graduate specializing in Data Analytics, Data Engineering, and AI Engineering.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body 
        className="font-body antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
