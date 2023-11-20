import { useState } from 'react'
import './App.css'
import { Center, 
  Box, 
  OrderedList, 
  ListItem, 
  ListIcon, 
  UnorderedList,
  Flex } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import photo from "../src/photo.jpg"
import mail from "../src/envelope.png"
import ig from "../src/ig.png"
import linked from "../src/linked.png"
import px from "../src/px.png"
import wa from "../src/wa.png"


export default function App() {
  const property = {
    image: './photo.jpg',
    imageAlt: 'profile',
    title: 'Protofolio',
  }


  return (
    <Center>
  <Box display="flex" boxShadow='dark-lg' minWidth="735" minHeight = "1000"rounded='md' maxW="800"  w='100%'h="100%" bgColor='white' border='1px' borderColor='black.200' borderRadius='30px'>

      <Box w="30%"  >
        <Center marginBottom="10%" w= "120.5%" height="28%" borderTopLeftRadius="30px" backgroundColor="darkgray" >
          <Image  bgColor='white' border='2px' borderColor='blue.300' p = "2%"marginLeft="2%"src= {photo} alt={property.imageAlt } w='80%' borderRadius='50%'></Image>
        </Center>


          
        <Center w="100%">Contacts</Center>
          <Box >         
            <Box marginBottom="20%"marginLeft="8%" w= "100%" borderBottom='2px' borderColor='blue.300' >
            <OrderedList marginBottom="10%" >
              <ListItem textAlign={'left'}display="flex" fontSize="small">< Image w="10%" src={mail} alt='mail' marginRight="1%"></Image>christopher.fx45@gmail.com</ListItem>
              <ListItem textAlign={'left'}display="flex" fontSize="small"><Image w="10%" src={wa} alt='wa'marginRight="1%"></Image>+6281 9258 3010</ListItem>
              <ListItem textAlign={'left'}display="flex" fontSize="small"><Image w="10%" src={linked} alt='ig' marginRight="1%"></Image>Christopher Darmawirya</ListItem>
            </OrderedList>
            </Box>
          </Box>
          <Box marginBottom="10%" w= "100%">Languages</Box>
          <Box marginLeft= "8%" display='flex' w="100%"  borderBottom='2px' borderColor='blue.300' >         
            <Box marginLeft="2%" w= "46%"  >
            <OrderedList >
              <ListItem textAlign={'left'}> Indonesian</ListItem>
              <ListItem textAlign={'left'}> English </ListItem>
              <ListItem textAlign={'left'}> Japanese</ListItem>
            </OrderedList>
            </Box>
            <Box marginBottom="10%"  w = "46%">
            < UnorderedList  styleType="none" >
              <ListItem textAlign={'right'}>Native</ListItem>
              <ListItem textAlign={'right'}>Fluent </ListItem>
              <ListItem textAlign={'right'}>Fluent</ListItem>
            </UnorderedList >
            </Box>
          </Box>
          <Box >
          <Center marginTop="10%" w="100%">Socials</Center>         
            <Box marginBottom="20%"marginLeft="8%" w= "100%" borderBottom='2px' borderColor='blue.300' >
            <OrderedList marginBottom="10%" >
              <ListItem p="2%" textAlign={'left'}display="flex" fontSize="small"><Image w="10%" src={px} alt='px'marginRight="1%"></Image>@chestnut_45</ListItem>
              <ListItem p="2%" textAlign={'left'}display="flex" fontSize="small"><Image w="10%" src={ig} alt='ig' marginRight="1%"></Image>@fx_chris45</ListItem>
            </OrderedList>
            </Box>
          </Box>
      </Box>

      <Box borderTopRightRadius="30px" marginLeft="5.5%" w="70%" height="100%" backgroundColor="Navy" textColor= "white"> 
        <Box marginLeft = "10%" w="80%" borderBottom="2px"borderColor='white' fontSize= "200%"marginRight="10%" textAlign= "Right"marginTop="15%">
          About Me
        </Box>
        <Box display="flex" marginLeft = "10%" justifyContent="space-between" fontSize= "90%"marginTop="5%"textAlign="left"  marginBottom="15%"marginRight="10%" >
                I am a fresh graduate who is looking for
                a job as a software development or doing data analysis. 

                I enjoy tackling difficult coding problems and try
                to implement them in my mini projects. I also enjoy learning
                many programming languages as it allows me to have more freedom
                as a developer.
                When I am not coding, I usually train my brain's creative side by 
                engaging in many arts activity.  
        </Box>
      </Box>
      
    
    </Box>
    </Center>
  )
}

