import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Flex } from "@chakra-ui/react";

export default function AuthLayout ({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
    }