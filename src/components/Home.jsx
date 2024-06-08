import { Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import axios from 'axios'
import React, {useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import Loader from './Loader';
// import InfiniteScroll from 'react-infinite-scroll-component';

const Home = ({category}) => {

    const [news, setNews] = useState([])
    const [country, setCountry] = useState("in");
    const [totalResults, settotalResults] = useState(0);
    const [loading, setLoading] = useState(true);
    // const [page, setPage] = useState(1);
    
    const perpage=100;
    useEffect(() => {
      const fetchingNews= async()=>{
        const {data}=await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=61f9b16aeb0744e988ae162368e4369a&pageSize=${perpage}&category=${category}`);
        console.log(data);
        settotalResults(data.totalResults);
        setLoading(false);
        setNews(data.articles);

        // setNews(data);
        console.log(news);
      }
      fetchingNews();
    }, [country,category])
  return (
    <Container maxW={"container.xl"}>
      {loading?(<Loader/>):(
        <>
        <RadioGroup value={country} onChange={setCountry} m={"4"}>
            <Radio m={"4"} value={"in"} colorScheme={"red"}>
                India
            </Radio>
            <Radio m={"4"} value={"us"}>
                United States
            </Radio>
            <Radio m={"4"} value={"ru"}>
                Russia
            </Radio>
            <Radio m={"4"} value={"jp"}>
                Japan
            </Radio>
        </RadioGroup>

        
            <HStack w={'full'} wrap={"wrap"} >
            {news.map((i)=>(
              
                    <NewsCard key={i} img={!i.urlToImage?"https://www.hindustantimes.com/ht-img/img/2023/10/22/1600x900/pisces_1690909067172_1697992649331.jpg":i.urlToImage} url={i.url} title={i.title.length<90?i.title:i.title.slice(0,50)+"..."} time={i.publishedAt} />
                    ))}
              </HStack>
                    </>
      )
    }

        {/* <HStack w={'full'} mt={"6"} justifyContent={'space-between'}>
          <Button colorScheme="teal" onClick={setPage(1) } >
          Previous
          </Button>
          
        </HStack> */}

        </Container>
  )
}

export default Home