import { useState } from 'react'
import './App.css'
import { Box, OrderedList, ListItem  } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

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
      <Image src= {'../src/photo.jpg'} alt={property.imageAlt}></Image>
      <OrderedList>
          <Box>Languages</Box>
          <ListItem> Japanese</ListItem>
          <ListItem> English </ListItem>
          <ListItem> Indonesian</ListItem>
      
      </OrderedList>
      </Box>
      <Box>      


      </Box>
    
    </Box>
    </>
  )
}

