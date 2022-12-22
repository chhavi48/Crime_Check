import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Center, Grid, Input ,Text, Textarea} from '@chakra-ui/react';
import { FormControl,FormLabel } from '@chakra-ui/react';
import { AppContext } from '../Context';
import {
  Heading,
  Avatar,
Image,
  Flex,
  Stack,

  useColorModeValue,
} from '@chakra-ui/react';
const Feed = () => {
   const [msg,setmsg]=useState('')
   
   const [data,setdata]=useState([])
    const { username } =useContext(AppContext);
    console.log(username)
   const handleSubmit=async()=>{
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json" 
     }
     
     let bodyContent = JSON.stringify({
     
      "msg":msg,
    //  "username": username

     });
    //  console.log(username);
     let reqOptions = {
       url: "https://crimecheckbakend.vercel.app/post/postdata",
       method: "POST",
       headers: headersList,
       data: bodyContent,
     }
     
     let response = await axios.request(reqOptions);
     console.log(response.data);
   }

   useEffect(async()=>{
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)" 
     }
     
     let reqOptions = {
       url: "https://crimecheckbakend.vercel.app/post/alldata",
       method: "GET",
       headers: headersList,
     }
     
     let response = await axios.request(reqOptions);
     setdata(response.data)
    
   },[])


  return (
    <div>

      <Center><Text alignContent="center" fontSize="20px" color="blue.400" textDecoration="underline" >Welcome to NoticeBoard</Text></Center>
        <form onSubmit={handleSubmit} >
      <Center>
       
      
      <FormControl>
              <FormLabel fontSize='20px' ml='300px'>Enter your msg:--</FormLabel>
            
              <Grid>
              <Textarea type="text"
              alignItems="center"
              w='900px' 
               name="msg" 
               value={msg}
               onChange={(e)=>setmsg(e.target.value)}
                placeholder='Enter Title' />
            
          
            <Button type={"submit"} 
              colorScheme='blue' 
              w='100px'
              ml='300px'
              mt='10px'
              >Post</Button>
          
              
              </Grid>
          

        
        
            </FormControl>

    
      </Center>
      </form>

      <Box>
        {data?.map((i)=>{
         return  <Center py={6}>
         <Box
           maxW={'270px'}
           w={'full'}
        
           boxShadow={'2xl'}
           rounded={'md'}
           overflow={'hidden'}>

   
           <Box p={6}>
             <Stack spacing={0} align={'center'} mb={5}>
               <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                 Notice Card
               </Heading>
               <Text color={'gray.500'}>{i.msg}</Text>
             </Stack>
   
             <Stack direction={'row'} justify={'center'} spacing={6}>
               <Stack spacing={0} align={'center'}>
                 <Text fontWeight={600}>  {i.createdAt.split("T").join(" ")}</Text>
              
               </Stack>
              
             </Stack>
   
           </Box>
         </Box>
       </Center>
          
        //  <Box>
        //              <Text>{i.msg}</Text>
        //              <Text fontWeight={"bold"}>
                
        //         </Text>
        //           </Box>  

        })}
      </Box>
    </div>
  )
}

export default Feed