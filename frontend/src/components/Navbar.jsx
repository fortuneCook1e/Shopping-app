import React from 'react'
import { Button, Container, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom' // Import React Router's Link
import { useColorMode } from '@chakra-ui/react'
import { MdOutlineDarkMode , MdOutlineLightMode } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW={"1140px"} px={"4"} >
        <Flex
            h={"16"}
            alighItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base: "column",
                sm: "row"
            }}
        >
            <Text
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize={{base:"22", sm:"28"}}
                textAlign="center"
                textTransform="uppercase"
                fontWeight='extrabold'
                >
                <Link to={"/"}>Product Store</Link>
            </Text>

            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button>
                        <PlusSquareIcon fontSize={20}/>
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
                </Button>
            </HStack>

        </Flex>
    </Container>
  )
}

export default Navbar