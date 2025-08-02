import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    return <ClerkProvider >{children}</ClerkProvider>
}