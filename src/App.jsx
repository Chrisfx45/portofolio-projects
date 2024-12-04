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
import linked from "../src/placeholder.png"
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
  <Box display="flex" boxShadow='dark-lg' minWidth="800" minHeight = "1060"rounded='md' maxW="800" maxH={"1131"}  w='100%'h="100%" bgColor='white' border='1px' borderColor='black.200'>

      <Box w="35%" borderRight='2px'borderColor='lightgray'>
        <Center marginBottom="5%" w= "100%" minH={"13%"} position={"relative"} backgroundColor="lightgray"  >

          <Image position={"absolute"}style={{top: "9px", left: "73px"}} bgColor='white' border='2px' borderColor='lightgray' p = "2%"src= {photo} alt={property.imageAlt } w='60%' borderRadius='50%'></Image>
        </Center>
       


          
        <Center marginLeft="8%" w="92%" marginTop = "15%" marginBottom="2%" fontSize = "150%">Contacts</Center>
          <Box >         
            <Box marginLeft="8%" w= "92%" borderBottom='2px' borderColor='lightgray' >
            <OrderedList marginBottom="5%"  fontSize = "100%" >
              <ListItem textAlign={'left'}display="flex" >< Image w="8%"  height= "3%" src={mail} alt='mail' marginRight="1%"></Image>christopher.fx45@gmail.com</ListItem>
              <ListItem textAlign={'left'}display="flex" ><Image w="8%"  height= "3%"src={wa} alt='wa'marginRight="1%"></Image>+6281 9258 3010</ListItem>
              <ListItem textAlign={'left'}display="flex" ><Image w="8%" height= "3%" src={linked} alt='ig' marginRight="1%"></Image>Pelepah Raya WT1 No.22</ListItem>
              <ListItem textAlign={'left'}display="flex"  marginLeft="9%"> Kelapa Gading, Jakarta Utara</ListItem>
            </OrderedList>
            </Box>
          </Box>
          <Center marginLeft="8%" marginBottom="5%" w= "92%" fontSize = "150%">Languages</Center>
          <Box marginLeft= "8%" display='flex' w="92%"  borderBottom='2px' borderColor='lightgray'fontSize = "90%" >         
            <Box marginLeft="2%" w= "45%"  >
            <OrderedList >
              <ListItem textAlign={'left'}> Indonesian</ListItem>
              <ListItem textAlign={'left'}> English </ListItem>
              <ListItem textAlign={'left'}> Japanese</ListItem>
            </OrderedList>
            </Box>
            <Box marginBottom="12%"  w = "45%">
            < UnorderedList  styleType="none" >
              <ListItem textAlign={'right'}>Native</ListItem>
              <ListItem textAlign={'right'}>Fluent </ListItem>
              <ListItem textAlign={'right'}>Fluent</ListItem>
            </UnorderedList >
            </Box>
          </Box>
          <Box >
            <Center marginLeft="8%"  marginTop="2%" w="92%" fontSize = "150%">Skills</Center>         
            <Box marginBottom="10%"marginLeft="8%" w= "92%" borderBottom='2px' borderColor='lightgray'  >
            <OrderedList marginBottom="10%"  fontSize = "90%" >
              <ListItem p="2%" textAlign={'left'}display="flex">Front-end Development</ListItem>
              <ListItem p="2%" textAlign={'left'}display="flex" >Back-end Development</ListItem>
              <ListItem p="2%" textAlign={'left'}display="flex" >Application Development</ListItem>
              <ListItem p="2%" textAlign={'left'}display="flex" >Web design</ListItem>              
              <ListItem p="2%" textAlign={'left'}display="flex" >Data analysis</ListItem>
              <ListItem p="2%" textAlign={'left'}display="flex" >Programming Languages: Python, Java, JavaScript, TypeScript, MySQL, C, CSS, HTML</ListItem>
        
            </OrderedList>
            </Box>
          </Box>
          <Box >
            <Center marginLeft="8%"  marginTop="5%" w="92%">Links to codes</Center>         
            <Box marginBottom="10%"marginLeft="8%" w= "92%">
            <OrderedList marginBottom="10%" >
              <ListItem p="2%" textAlign={'left'}display="flex" fontSize="small">Github :</ListItem>
              <ListItem p="2%" textAlign={'left'}display="flex" fontSize="small">https://github.com/Chrisfx45</ListItem>
              <ListItem p="2%" textAlign={'left'}display="flex" fontSize="small">LeetCode :</ListItem>
              <ListItem p="2%" textAlign={'left'}display="flex" fontSize="small">https://leetcode.com/rip_chris45/</ListItem>
            </OrderedList>
            </Box>
          </Box>


      </Box>
      <Box w = "65%"  height="100%">
      <Box  w="100%" backgroundColor='lightgrey' textColor= "black" minHeight={"14%"} > 
        <Box marginLeft = "10%" paddingTop={"7.5%"} paddingBottom={"7.5%"}  >
          <Text fontSize={"150%"}>CHRISTOPHER AGAM DARMAWIRYA</Text>

          <Text  fontSize={"100%"}>
            Software Engineer
          </Text>
        </Box>

      </Box>
      <Box  w="90%"  >
      <Box marginLeft = "10%" w="80%" marginTop={"8%"} fontSize= "150%"marginRight="10%">
          Profile
        </Box>
        <Box  display="flex" flexGrow={1} marginLeft = "10%" justifyContent="space-between" fontSize= "80%"marginTop="2%"textAlign="left" paddingBottom = "3%"  marginRight="10%" >
                A software engineer capable of doing data analysis and full-stack development. Strong-willed and creative individual who always striving to grow.
                Favorite activities include exploring
                programming languages and tackling difficult coding problems 
        </Box>
        <Box  paddingLeft = "10%" w="80%" fontSize= "150%"marginRight="10%" paddingTop={"0.5%"}  borderTop='2px' borderColor='lightgray'>
          Education
         
        </Box >
          <Grid templateColumns = "repeat(5, 1fr)" gap ={3} marginTop="1%"  marginRight = "5%">
          <GridItem colSpan ={2} textAlign ="Right" rowSpan ={2} fontSize = "80%">2019/4-2023/3
          </GridItem>
          <GridItem colSpan ={3} rowSpan ={2} fontSize = "80%">Bachelor of Information Science and Engineering at Ritsumeikan University, Japan</GridItem>
          <GridItem colSpan ={2} textAlign ="Right" rowSpan ={2} fontSize = "80%">2023/10-2024/4
          </GridItem>
          <GridItem colSpan ={3} rowSpan ={2} fontSize = "80%">Finished Full Stack Developer Boot Camp at Purwadhika, Indonesia</GridItem>

          </Grid>
      </Box>
      <Box  w="90%"  >
        <Box paddingLeft = "10%" w="80%" fontSize= "150%" paddingRight="10%" marginTop="3%"   borderTop='2px' borderColor='lightgray'>
          Experience
        </Box >
          <Grid templateColumns = "repeat(5, 1fr)" gap ={2} marginTop="2%" marginRight = "5%">
          <GridItem colSpan ={2} textAlign ="Right" rowSpan ={2} fontSize = "90%">2023/11-2024/3<br/>
                                                   <Text fontSize = "90%"> Freelance</Text>
          </GridItem>
          <GridItem colSpan ={3} rowSpan ={2} fontSize = "90%" fontWeight={"bold"}>Application Fullstack Developer<br/>at FDSG <br/>
                                              <Text fontSize = "90%"  fontWeight={"normal"}>

                                              Created an application that can be run with IOS and android devices using React Native frame work.
                                              Designed the application database and its structure using MySQL. Designed the backend of the app using Express.
                                              Used GoogleMap SDK to implement a map feature.
                                              </Text>
                                              </GridItem>


          </Grid>
      </Box>

      <Box  w="90%" height="100%" >
        <Box paddingLeft = "10%" w="80%" fontSize= "150%"marginRight="5%" marginTop="3%">
          Personal Projects
        </Box >
          <Grid templateColumns = "repeat(5, 1fr)" gap ={2} marginTop="2%" marginRight = "5%">
          <GridItem colSpan ={2} textAlign ="Right" rowSpan ={2} fontSize = "90%">2024/1-2024/2<br/>
                                              
                                              </GridItem>
                                              <GridItem colSpan ={3} rowSpan ={2}fontSize = "90%"  fontWeight={"bold"}>Event Management Website <br/>
                                              <Text fontSize = "90%"  fontWeight={"normal"}> Created a personal website for an event management using Next.js as the front end and Express for the backend </Text>
                                              </GridItem>
          <GridItem colSpan ={2} textAlign ="Right" rowSpan ={2} fontSize = "90%">2023/11-2023/12<br/>                                      
          </GridItem>
          <GridItem colSpan ={3} rowSpan ={2} fontSize = "90%" fontWeight={"bold"}>Mock Website For Front End Practice <br/>
          <Text fontSize = "90%"  fontWeight={"normal"}>Designed and created a website with a functional API call from a public domain and deploy it</Text>
          </GridItem>
          <GridItem colSpan ={2} textAlign ="Right" rowSpan ={2} fontSize = "90%" >2023/12-2024/1<br/>
                                                    
          </GridItem>
          <GridItem colSpan ={3} rowSpan ={2} fontSize = "90%" fontWeight={"bold"}>Resume Website <br/>
                                              <Text fontSize = "90%" fontWeight={"normal"}>Designed a personal resume using Chakra and React framework and deploy it to a public domain</Text>
          
          </GridItem>

                                              


          


          </Grid>
      </Box>


      </Box>
      
     
      
    
    </Box>
    </Center>
  )
}

