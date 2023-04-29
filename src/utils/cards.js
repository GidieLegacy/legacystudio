import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Icon, Link,
} from '@chakra-ui/react';
import {FaChevronRight} from "react-icons/fa";
import React from "react";

export default function CardsOverview({title, icon, description, button}) {
    return (
        <Box py={6} m={"0 1% 1% 1%"} zIndex={3} variant='outline'>
            <Flex
                maxW={'410px'}
                minH={"380px"}
                w={'380px'}
                h={"auto"}
                p={"5% 2%"}
                data-group
                justifyContent={"center"}
                alignItems={"center"}
                flexWrap={"wrap"}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                overflow={'hidden'}
                background={button ? "red.500" : "white"}
                _hover={{
                    bg: "red.500",
                    transition: "0.5s ease-in",
                }}
            >
                <Box>
                    <Box display={button ? "none" : "block"}>
                        <Flex h={'120px'} justifyContent={"center"} p={"5%"}>
                            <Icon as={icon} w={"100px"} h={"100%"} color={"red.500"} _groupHover={{color: "white"}} />
                        </Flex>
                    </Box>

                    <Flex justifyContent={"center"} alignItems={"center"}  >
                        <Text fontSize={["xl","2xl"]} fontWeight={"bold"} color={button ? "white" : "black"} _groupHover={{color: "white"}}>{title}</Text>
                    </Flex>

                    <Flex justifyContent={"center"} alignItems={"center"} p={"5%"}>
                        <Text textAlign={"center"} fontSize={"md"} color={button ? "white" : "gray.500"} _groupHover={{color: "white"}}>{description}</Text>
                    </Flex>
                    <Box display={button ? "block" : "none"}>
                        <Flex justifyContent={"center"} >

                            <Link href={"/contact-us"}>
                                <Button borderRadius={"none"} p={"5px 5%"} colorScheme={"whiteAlpha"} textTransform={"uppercase"} rightIcon={<FaChevronRight/>} >Find Solution</Button>
                            </Link>
                        </Flex>
                    </Box>

                </Box>

            </Flex>
        </Box>
    );
}
