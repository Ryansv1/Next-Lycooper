
import { Button, Flex, Input, FormControl, FormLabel, Stack, StackDivider} from "@chakra-ui/react"
import Link from "next/link"

export default function Login(){
    return( 
        <Flex className="flex flex-col sm:flex-row gap-4 drop-shadow-md text-black text-center font-poppins">
        <Flex className="flex-col justify-center items-center bg-gradient-to-tr from-blue-500 to bg-green-300 p-12 m-4 rounded-md">
            <Flex className="flex flex-col gap-8">
                <h1 className="text-md">Faça seu Login</h1>
                <form action="/api/auth/login"method="POST" className="space-y-4">
                    <FormControl isRequired>
                        <FormLabel>E-mail</FormLabel>
                        <Input placeholder="ex: user@domain.com" variant="filled" _placeholder={{ opacity: 1, color: 'gray.600' }} type="email"/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Senha</FormLabel>
                        <Input placeholder="Sua senha" variant="filled" _placeholder={{ opacity: 1, color: 'gray.600' }} type="password"/>
                    </FormControl>
                    <Button className="mt-8 animate-pulse"type="submit">Login</Button>
                </form>
            </Flex>
        </Flex>
        <Flex className="flex-col justify-center items-center gap-8 bg-gradient-to-tr from-blue-500 to bg-green-300 p-12 m-4 mb-8 sm:mb-4 rounded-md">
            <h1>Bem-vindo ao Lycooper</h1>
            <h3>Não tem uma conta? Faça seu cadastro clicando abaixo!</h3>
            <Link href="/auth/signup">
                <Button>Cadastre-se!</Button>
            </Link>
        </Flex>
    </Flex>
    )
}