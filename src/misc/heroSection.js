import React from 'react';
import {Box, Flex, Icon, Link, Text} from "@chakra-ui/react";
import {BiChevronRight} from "react-icons/bi";

const HeroSection = ({title, subtitle, path}) => {
    return (
        <Box h={"40vh"} bg={"blackAlpha.700"} w={"100%"} >
            <Flex justifyContent={"center"} alignItems={"center"} h={"100%"} w={"100%"}>
                <Box mt={["0", "5%"]} w={"100%"}>
                    <Flex w={"100%"} justifyContent={"center"}>
                        <Text fontSize={"38px"} fontWeight={"bold"} color={"white"} fontFamily={"inter"}>{title}</Text>
                    </Flex>

                    <Flex  justifyContent={"center"} alignItems={"center"}>
                        <Link href={"/"} color={"white"}><Text fontFamily={"Heebo"} >Home</Text></Link>
                        {subtitle ?
                            <Flex>
                                <Icon as={BiChevronRight} color={"red.500"}  fontWeight={"bold"} fontSize={"2xl"}> > </Icon>
                                <Link href={path} color={"white"}><Text fontFamily={"Heebo"} >{title}</Text></Link>
                            </Flex>
                            :
                            <Flex>
                                <Icon as={BiChevronRight} color={"red.500"}  fontWeight={"bold"} fontSize={"2xl"}> > </Icon>
                                <Text color={"white"} fontFamily={"Heebo"} >{title}</Text>
                            </Flex>
                        }

                        {subtitle &&
                            <Flex>
                            <Icon as={BiChevronRight} color={"red.500"}  fontWeight={"bold"} fontSize={"2xl"}> > </Icon>
                            <Text color={"white"} fontFamily={"Heebo"} >{subtitle}</Text>
                            </Flex>
                        }

                    </Flex>
                </Box>

            </Flex>

        </Box>
    );
};

export default HeroSection;
