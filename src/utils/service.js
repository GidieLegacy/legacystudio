import React from 'react';
import {Box, Button, Card, CardBody, Flex, Icon, Image, Text, Tooltip, useTooltip} from "@chakra-ui/react";
import {AiOutlineArrowRight} from "react-icons/ai";
import {Link} from "react-router-dom";


const Service = ({icon, title, subTitle, description, technologies, techImage, tooltip, id}) => {
    return (

            <Card maxW='sm' boxShadow={"xl"} variant='outline' m={"1% 1% 0 1%"} pb={2} h={["480px","450px"]}>
                <CardBody>
                    <Box h={"auto"} maxW={"400px"} >
                        <Box >
                            <Flex h={'120px'} justifyContent={"center"} p={"2%"}>
                                <Icon as={icon} w={"80px"} h={"80%"} color={"red.500"} fill={"red.500"} />
                            </Flex>
                        </Box>

                        <Flex justifyContent={"center"} alignItems={"center"}  >
                            <Text fontSize={["xl"]} fontWeight={"bold"} _groupHover={{color: "white"}}>{title}</Text>
                        </Flex>
                        <Flex justifyContent={"center"} alignItems={"center"}  >
                            <Text fontSize={"l"} fontWeight={"bold"} _groupHover={{color: "white"}}>{subTitle}</Text>
                        </Flex>

                        <Flex justifyContent={"center"} alignItems={"center"} p={"1%"}>
                            <Text textAlign={"center"} color={"gray"} fontSize={"md"} _groupHover={{color: "white"}}>

                                    {description}
                                </Text>
                        </Flex>
                        <Box>
                            <Flex justifyContent={"center"} p={"3%"} >

                                <Link to={`/services/${id}`}>
                                    <Button background={"transparent"} color={"red.500"} textTransform={"uppercase"} rightIcon={<AiOutlineArrowRight/>} >Read more</Button>

                                </Link>
                            </Flex>
                        </Box>
                    </Box>
                    <Box borderTop={"1px"} borderColor={"gray.100"} w={"100%"} p={"5px"} mb={"5px"}>
                        <Flex alignItems={"center"} p={"2%"} flexWrap={"wrap"}>
                            {technologies?.map((tech, index) => {
                                return (
                                    <Tooltip key={index} label={tech?.tooltip} placement={"top"}>
                                        <Box  bg={"gray.100"} m={"2px 2px 0 2px"} p={"2%"}>
                                            <Flex alignItems={"center"} p={"2%"} flexWrap={"wrap"} alignSelf={"flex-end"}>
                                                <Image src={tech.icon} minW={"40px"} maxW={"70px"} minH={"40px"} maxH={"40px"} mr={"2px"} objectFit={"fill"} _groupHover={{color: "white"}} />
                                                <Text fontSize={"md"} fontWeight={"bold"} _groupHover={{color: "white"}}>{tech.name}</Text>
                                            </Flex>
                                        </Box>
                                    </Tooltip>
                                )

                            })}
                        </Flex>
                    </Box>
                </CardBody>
            </Card>

    );
};

export default Service;
