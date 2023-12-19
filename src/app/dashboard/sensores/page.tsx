import { Grid, Flex, GridItem, Heading} from '@chakra-ui/react'



export default function Sensores (){

    const sensor = {
        "name": "Temperatura Amb."
    }

    return (
        <>
        <h1 className=" text-smrelative text-center top-32 text-white z-30">Sensor {sensor.name}</h1>
        <Grid className="text-white min-h-screen relative pt-24 bg-blue-900 grid-cols-1 grid-flow-row">
            <Grid className="rounded-md m-4 p-6 grid-cols-1 sm:grid-cols-2 gap-4">
                <GridItem className="bg-gradient-to-tr from-blue-600 to-green-400 rounded-md ">
                    Gráfico Sensor
                </GridItem>
                <GridItem className="bg-gradient-to-tr from-blue-600 to-green-400 rounded-md">
                    Temperatura Atual e Anterior (intervalo de 1 hora)
                </GridItem>
            </Grid>
            <Grid className="rounded-md m-4 p-6 grid-cols-1 sm:grid-cols-2 gap-4">
                <GridItem className="bg-gradient-to-tr from-blue-600 to-green-400 rounded-md">
                    A
                </GridItem>
                <GridItem className="bg-gradient-to-tr from-blue-600 to-green-400 rounded-md">
                    
                </GridItem>
            </Grid>
        </Grid>
        </>
    )
}