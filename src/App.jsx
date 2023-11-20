import { useState } from 'react'
import './App.css'
import { Box, OrderedList, ListItem  } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import photo from "../src/photo.jpg"

export default function App() {
  const property = {
    image: './photo.jpg',
    imageAlt: 'profile',
    title: 'Protofolio',
  }


  return (
    <>
    <Box  w='100%' bgColor='white' border='1px' borderColor='black.200' borderRadius='30px'>
      
      <Box>
      <Image marginLeft="2%"src= {photo} alt={property.imageAlt } w='40%' borderRadius='30px'></Image>
      <OrderedList>
          <Box w= "50%">Languages</Box>
          <ListItem textAlign={'left'}> Japanese</ListItem>
          <ListItem textAlign={'left'}> English </ListItem>
          <ListItem textAlign={'left'}> Indonesian</ListItem>
      
      </OrderedList>
      </Box>
      <Box>      


      </Box>
    
    </Box>
    </>
  )
}

