import { Button, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({img,title,desc,time,url}) => {
  return (
    <Card maxW={"30%"} >
  <CardBody>
    <Image
    w={"200"}
    h={"200"}
    objectFit={'contain'}
      src={img}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3' wrap={"wrap"}>
      <Heading size='md'>{title}</Heading>
      <Text>
        {desc}
      </Text>
      <Text color='blue.600' fontSize="small">
        published at:
        {time}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <Button colorScheme={"red"} borderRadius={"md"}>
        <Link to={url}>More reading</Link>
    </Button>
  </CardFooter>
</Card>
  )
}

export default NewsCard