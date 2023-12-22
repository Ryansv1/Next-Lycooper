import { Grid, Flex, GridItem, Heading} from '@chakra-ui/react'
import dynamic from 'next/dynamic';
import { useState, useEffect} from 'react';

const DynamicGraphical = dynamic(() => import('@/components/chart'), { ssr: false })


export default function Sensores (){

    const sensor = {
        name: 'Temperatura',
    }

    return (
        <>
        <Grid className="text-white min-h-screen relative pt-24 bg-blue-900 grid-cols-1 grid-flow-row">
            <h1 className=" text-sm relative text-center text-white z-10">Sensor {sensor.name}</h1>
            <Grid className="rounded-md m-4 p-4 grid-cols-1 sm:grid-cols-2 gap-4">
                <GridItem className="bg-gradient-to-tr from-blue-600 to-green-400 rounded-md flex flex-col justify-center items-center">
                    <DynamicGraphical className="m-2" />
                </GridItem>
                <GridItem className="bg-gradient-to-tr from-blue-600 to-green-400 rounded-md flex flex-col justify-center items-center">
                    <DynamicGraphical className="m-2" />
                </GridItem>
            </Grid>
            <Grid className="rounded-md m-4 p-4 grid-cols-1 sm:grid-cols-2 gap-4">
                <GridItem className="bg-gradient-to-tr from-blue-600 to-green-400 rounded-md flex flex-col justify-center items-center">
                    <DynamicGraphical className="m-2" />
                </GridItem>
                <GridItem className="bg-gradient-to-tr from-blue-600 to-green-400 rounded-md flex flex-col justify-center items-center">
                    <DynamicGraphical className="m-2" />
                </GridItem>
            </Grid>
        </Grid>
        </>
    )
}