
import { Button } from "@chakra-ui/react"
import Link from "next/link"

export default function Signin(){
    return( 
        <div className="flex flex-row items-center min-w-full justify-center bg-gradient-to-tr from-blue-500 to-green-400">
            <div className="flex flex-col p-4">
                <h2>Já tem uma conta?</h2>
                <h3>Faça login abaixo!</h3>
                <Link href={'/auth/login'}>
                    <Button>Leve-me ao Login!</Button>
                </Link>
            </div>
            <div className="flex flex-col p-4">
                <h2>Ainda não tem uma conta?</h2>
                <h3>Crie uma abaixo!</h3>
                <form className="flex flex-col">
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" />
                    <Button type="submit">Cadastrar</Button>
                </form>
            </div>
        </div>
    )
}