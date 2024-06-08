import { Container, Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <Container w={"container.xl"} h={"90vh"} >
        <Spinner thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='red.500'
        size='xl' />

        

    </Container>
  )
}

export default Loader