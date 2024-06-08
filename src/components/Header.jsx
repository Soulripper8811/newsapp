import { Button, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  
  const btn=["Home","business","entertainment","health","science","sports","technology"];
    return (
    <>  
    <Container maxW={"full"} h={"8vh"} bgColor={"blackAlpha.900"}>
      {/* {<Heading color={"white"}>Newsssss</Heading>} */}
        {
          
            btn.map((i)=>(
                <Button key={i} mr={"8"} p={"4"} variant={"unstyled"} color={"white"}>
                    <Link to={`/${i}`}>{i}</Link>
                </Button>
            ))
        }



    </Container>
    

    </>
  )
}

export default Header