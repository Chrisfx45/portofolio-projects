import { useState } from 'react'
import './App.css'
import { Center, 
  Box, 
  OrderedList, 
  ListItem, 
  ListIcon, 
  UnorderedList,
  Flex,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react'
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
  <Box display="flex" boxShadow='dark-lg' minWidth="735" minHeight = "1100"rounded='md' maxW="800"  w='100%'h="100%" bgColor='white' border='1px' borderColor='black.200' borderRadius='30px'>

      <Box w="30%"  >
        <Center marginBottom="10%" w= "120.5%" height="28%" borderTopLeftRadius="30px" backgroundColor="darkgray" >
          <Image  bgColor='white' border='2px' borderColor='blue.300' p = "2%"marginLeft="2%"src= {photo} alt={property.imageAlt } w='80%' borderRadius='50%'></Image>
        </Center>
        <Center marginBottom="5%" w= "100%">Basic Info</Center>
        <Box marginLeft= "8%" display='flex' w="100%"  borderBottom='2px' borderColor='blue.300' fontSize ="0.9vw" >
                 
            <Box marginLeft="2%" w= "46%" >
            <OrderedList >
              <ListItem textAlign={'left'}> Date of Birth</ListItem>
              <ListItem textAlign={'left'}> Nationality</ListItem>
              <ListItem textAlign={'left'}> Residence</ListItem>
            </OrderedList>
            </Box>
            <Box marginBottom="5%"  w = "46%">
            < UnorderedList  styleType="none" >
              <ListItem textAlign={'right'}>2000/07/15</ListItem>
              <ListItem textAlign={'right'}>Indonesian</ListItem>
              <ListItem textAlign={'right'}>Jakarta, Indonesia</ListItem>
            </UnorderedList >
            </Box>
          </Box>


          
        <Center w="100%" marginTop = "5%">Contacts</Center>
          <Box >         
            <Box marginBottom="5%"marginLeft="8%" w= "100%" borderBottom='2px' borderColor='blue.300' >
            <OrderedList marginBottom="10%" >
              <ListItem textAlign={'left'}display="flex" fontSize="small">< Image w="10%" src={mail} alt='mail' marginRight="1%"></Image>christopher.fx45@gmail.com</ListItem>
              <ListItem textAlign={'left'}display="flex" fontSize="small"><Image w="10%" src={wa} alt='wa'marginRight="1%"></Image>+6281 9258 3010</ListItem>
              <ListItem textAlign={'left'}display="flex" fontSize="small"><Image w="10%" src={linked} alt='ig' marginRight="1%"></Image>Christopher Darmawirya</ListItem>
            </OrderedList>
            </Box>
          </Box>
          <Center marginBottom="5%" w= "100%">Languages</Center>
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
          <Center marginTop="5%" w="100%">Socials</Center>         
            <Box marginBottom="5%"marginLeft="8%" w= "100%" >
            <OrderedList marginBottom="10%" >
              <ListItem p="2%" textAlign={'left'}display="flex" fontSize="small"><Image w="10%" src={px} alt='px'marginRight="1%"></Image>@chestnut_45</ListItem>
              <ListItem p="2%" textAlign={'left'}display="flex" fontSize="small"><Image w="10%" src={ig} alt='ig' marginRight="1%"></Image>@fx_chris45</ListItem>
            </OrderedList>
            </Box>
            <Center marginLeft="8%"  marginTop="5%" w="100%" borderBottom='2px' borderColor='blue.300'>Codes and Projects</Center>         
            <Box marginBottom="20%"marginLeft="8%" w= "100%"  >
            <OrderedList marginBottom="10%" >
              <ListItem p="2%" textAlign={'left'}display="flex" fontSize="small">Github :</ListItem>
              <ListItem p="2%" textAlign={'left'}display="flex" fontSize="small">https://github.com/Chrisfx45</ListItem>
              <ListItem p="2%" textAlign={'left'}display="flex" fontSize="small">LeetCode :</ListItem>
              <ListItem p="2%" textAlign={'left'}display="flex" fontSize="small">https://leetcode.com/rip_chris45/</ListItem>
              <ListItem p="2%" textAlign={'left'}display="flex" fontSize="small">Vercel :</ListItem>
              <ListItem p="2%" textAlign={'left'}display="flex" fontSize="small">https://vercel.com/chrisfx45s-projects</ListItem>
            </OrderedList>
            </Box>
          </Box>
      </Box>
      <Box w = "70%"  height="100%">
      <Box borderTopRightRadius="30px" marginLeft="9%" w="91.5%" backgroundColor="Navy" textColor= "white" > 
        <Box marginLeft = "10%" w="80%" borderBottom="2px"borderColor='white' fontSize= "200%"marginRight="10%" textAlign= "Right">
          About Me
        </Box>
        <Box display="flex" marginLeft = "10%" justifyContent="space-between" fontSize= "90%"marginTop="2%"textAlign="left" paddingBottom = "3%"  marginRight="10%" >
                A fresh graduate looking for
                a job as a software developer or doing data analysis. 

                Enjoy tackling difficult coding problems and 
                implementing them in personal mini projects. Other hobbies include learning
                many programming languages, developing my personal game using Godot, maintaining PC parts and
                engaging in many arts activities such as drawing, designning, etc.  
        </Box>
      </Box>
      <Box  marginLeft="10%" w="90%" height="100%" >
        <Box marginLeft = "10%" w="80%" fontSize= "200%"marginRight="10%" textAlign= "Right"  borderBottom='2px' borderColor='blue.300'>
          Education
         
        </Box >
          <Grid templateColumns = "repeat(5, 1fr)" gap ={3} marginTop="2%"  marginRight = "5%">
          <GridItem colSpan ={2} textAlign ="Right" rowSpan ={2}>2019/4 -2023/4<br/>
                                                    Japan
          </GridItem>
          <GridItem colSpan ={3} rowSpan ={2}>Bachelor of Computer Science at Ritsumeikan University</GridItem>
          <GridItem colSpan ={2} textAlign ="Right" rowSpan ={2}>2023/10 -2024/2<br/>
                                                    Indonesia
          </GridItem>
          <GridItem colSpan ={3} rowSpan ={2}>Finished Full Stack Developer Boot Camp at Purwadhika</GridItem>

          </Grid>
      </Box>
      <Box  marginLeft="10%" w="90%" height="100%" >
        <Box marginLeft = "10%" w="80%" fontSize= "200%"marginRight="10%" textAlign= "Right"marginTop="3%"   borderBottom='2px' borderColor='blue.300'>
          Experiences
        </Box >
          <Grid templateColumns = "repeat(5, 1fr)" gap ={2} marginTop="2%" marginRight = "5%">
          <GridItem colSpan ={2} textAlign ="Right" rowSpan ={2}>2023/11-Now<br/>
                                                   <Text fontSize = "0.95vw"> Remote </Text>
          </GridItem>
          <GridItem colSpan ={3} rowSpan ={2}>Application Fullstack Developer<br/>
                                              <Text fontSize = "0.95vw">
                                              Create an application that can be run with IOS and android devices using React Native frame work.
                                              Design the application database and its structure.
                                              </Text>
                                              </GridItem>


          </Grid>
      </Box>
      <Box  marginLeft="10%" w="90%" height="100%" >
        <Box marginLeft = "10%" w="80%" fontSize= "200%"marginRight="10%" textAlign= "Right"marginTop="3%"   borderBottom='2px' borderColor='blue.300'>
          Personal Projects
        </Box >
          <Grid templateColumns = "repeat(5, 1fr)" gap ={2} marginTop="2%" marginRight = "5%">
          <GridItem colSpan ={2} textAlign ="Right" rowSpan ={2}>2023/12-2024/1<br/>
                                                    
          </GridItem>
          <GridItem colSpan ={3} rowSpan ={2}>Portofolio Website <br/>
                                              <Text fontSize = "0.95vw">Design a personal portofolio using Chakra and React framework and deploy it to a public domain</Text>
          
          </GridItem>

                                              
          <GridItem colSpan ={2} textAlign ="Right" rowSpan ={2}>2023/11-2023/12<br/>
                                                    
          </GridItem>
          <GridItem colSpan ={3} rowSpan ={2}>Mock Website For Front End Practice <br/>
          <Text fontSize = "0.95vw">Design and create a website with a functional API call from a public domain and deploy it</Text>
          </GridItem>
          <GridItem colSpan ={2} textAlign ="Right" rowSpan ={2}>2024/1-2024/2<br/>
                                              
          </GridItem>
          <GridItem colSpan ={3} rowSpan ={2}>Event Management Website <br/>
          <Text fontSize = "0.95vw"> Create a personal website for an event management using Next.js as the front end and Express for the backend </Text>
          </GridItem>
          


          </Grid>
      </Box>
      <Box  marginLeft="15%" w="90%" height="100%" >
        <Box marginLeft = "5%" w="80%" fontSize= "200%"marginRight="10%" textAlign= "Right"marginTop="3%"   borderBottom='2px' borderColor='blue.300'>
          Skills
        </Box >
          <Grid templateColumns = "repeat(4, 1fr)" gap ={1} margin="2%" fontSize = "1vw" marginLeft = "5%" marginRight = "5%">
          <GridItem colSpan ={1}>JavaScript</GridItem>
          <GridItem colSpan ={1}>TypeScript</GridItem>
          <GridItem colSpan ={1}>Java</GridItem>
          <GridItem colSpan ={1}>HTML</GridItem>
          <GridItem colSpan ={1}>CSS</GridItem>
          <GridItem colSpan ={1}>Python</GridItem>
          <GridItem colSpan ={1}>MYSQL</GridItem>
          <GridItem colSpan ={1}>C</GridItem>
          <GridItem colSpan ={1}>Godot</GridItem>
          <GridItem colSpan ={1}>React</GridItem>
          <GridItem colSpan ={1}>Next.js</GridItem>
          <GridItem colSpan ={1}>React Native</GridItem>
          </Grid>
      </Box>
      </Box>
      
     
      
    
    </Box>
    </Center>
  )
}

