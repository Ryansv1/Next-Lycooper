import Image from 'next/image'
import { Flex, Text} from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex className="flex-col flex-1 bg-blue-950 min-h-screen">
      <Flex className="mt-28 bg-homeImage bg-no-repeat bg-center bg-cover text-center text-white">
          <h1 className="text-3xl">Bem-vindo ao Lycooper!</h1>
          <h3 className="text-xl">Sinta-se a vontade para utilizar das ferramentas do sistema!</h3>
      </Flex>
      <Flex className="flex flex-col flex-wrap sm:flex-nowrap sm:flex-row text-white justify-center items-center">      
        <Image src="/imgs/tomate2.jpg" alt="Foto-Projeto" width={400} height={200} className='m-4'></Image>
        <Text noOfLines={[1,2,3]} className='mx-4 px-4'>
          A aquaponia é um sistema para cultivo baseado na integração do sistema hidropônico (cultivo de plantas) e o sistema de aquicultura (cultura de peixes). Diante disto, 
          este trabalho apresenta o processo de desenvolvimento de um sistema criado com intuito de auxiliar, por meio da automatização, as dificuldades encontradas no manejo 
          do cultivo do tomateiro em um sistema de Aquaponia. O cenário do processo de cultivo para embasamento do trabalho está localizado no Instituto Federal 
          Catarinense - Câmpus Rio do Sul, SC.
        </Text>
      </Flex>
      <Flex className="flex flex-col flex-wrap sm:flex-nowrap sm:flex-row text-white justify-center items-center">
        <Text noOfLines={[1,2,3]} className="mx-4 px-4">
        O desenvolvimento do trabalho foi realizado através da linguagem Javascript, com integração do Node.js, juntamente ao framework Express.js e 
        o Banco de Dados MongoDB. A proposta visa automatizar uma parcela das dificuldades encontradas, como checagem de dados de sensores e acionamento dos motores presentes 
        nos sistemas. A implantação do sistema não foi possível, 
        porém foi construída uma maquete a fim de demonstrar o sistema em funcionamento de forma semelhante ao projeto original, em menores escalas.
        </Text>
        <Image src="/imgs/tomate1.jpg" alt="Foto-Projeto" width={400} height={200} className='m-4'></Image>
      </Flex>

    </Flex>
  )
}
