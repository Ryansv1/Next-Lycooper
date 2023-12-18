'use client'

import { ChakraProvider } from "@chakra-ui/react"

export function Providers({ children }: { children: React.ReactNode }, { className }: { className: string }) {
    return (
        <ChakraProvider className={className}>
        {children}
        </ChakraProvider>
    )
}