import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {  useNavigate } from "react-router";
import { useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { AppContext } from "../Context";
export default function Login() {
  const [username, setusername] = useState("");
  const [capital, setcapital] = useState(false);
  const [small, setsmall] = useState(false);
  const [numbers, setnumbers] = useState(false);
  const navigate=useNavigate()
  const  {getname}  = useContext(AppContext);
  // console.log(getname)
  const handleSubmit = async() => {
    const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const sml = "abcdefghijklmnopqrstuvwxyz";
    const nums = "0123456789";
    console.log(username);
    if (username.length >= 2) {
      for (let i = 0; i < username.length; i++) {
        for (let j = 0; j < caps.length; j++) {
          if (username[i] == caps[j]) {
            setcapital(true);
          }
        }
      }
      for (let i = 0; i < username.length; i++) {
        for (let j = 0; j < sml.length; j++) {
          if (username[i] == sml[j]) {
            setsmall(true);
          }
        }
      }
      for (let i = 0; i < username.length; i++) {
        for (let j = 0; j < nums.length; j++) {
          if (username[i] == nums[j]) {
            setnumbers(true);
          }
        }
      }
    }
    if(capital,small,numbers){
       
       let bodyContent = JSON.stringify({
        "username":username
       });
       console.log(bodyContent)
       axios
       .post("https://crimecheckbakend.vercel.app/login", bodyContent)
       .then((res) =>getname(res.username));
       navigate('/feed')

    }
    else{
   alert("Username must have at least one Uppercase ,one lowercase,one number")
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Log in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >    
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Enter Your UserName</FormLabel>
              <Input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
            </FormControl>

            <Stack spacing={10}>
              <Button
                onClick={handleSubmit}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Double Click Log In
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
