import Navbar from "@/components/navbar";
import { Flex } from "@chakra-ui/react";

export default function AuthLayout ({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
    }