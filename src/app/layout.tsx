import './globals.css';
import type { Metadata } from 'next';
import { Fira_Mono } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });
// const fira_code = Fira_Code({ subsets: ['latin'] });
const fira_mono = Fira_Mono({ weight: "400", subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Resources App',
    description: 'A Next.js app with Tailwind CSS and TypeScript',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={fira_mono.className}>{children}</body>
        </html>
    );
}
