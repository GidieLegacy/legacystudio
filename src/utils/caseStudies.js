import React from 'react';
import {Box, Button, Card, Flex, Icon, Image, Text} from "@chakra-ui/react";
import {AiOutlineArrowRight} from "react-icons/ai";
import {Link} from "react-router-dom";

const CaseStudies = ({image, title, description, icon, subTitle, id}) => {
    return (
            <Card maxW='sm' boxShadow={"xl"} variant='outline' m={"1%"}>
                    <Box w={"100%"}>
                        <Flex>
                            <Image h={"210px"} w={"100%"} src={image} objectFit={"cover"}/>
                        </Flex>
                        <Box p={"4%"} bg={"red.500"} >
                            <Flex justifyContent={"center"} alignItems={"center"}>
                                <Flex justifyContent={"center"} alignItems={"center"} p={"2%"}>
                                    <Icon as={icon} color={"white"} w={"35px"} h={"40px"}/>
                                </Flex>

                                <Box justifyContent={"center"} alignItems={"center"} pl={"2%"}>
                                    <Text fontSize={"25px"} color={"white"}>{title}</Text>
                                    <Text fontSize={"l"} color={"white"}>{subTitle}</Text>
                                </Box>

                            </Flex>

                        </Box>
                        <Box p={"4%"}>
                            <Box>
                                <Text  color={"gray.600"} >
                                    {description}
                                </Text>
                                <Flex  p={"5% 0"} >

                                    <Link to={`/case-studies/${id}`}>
                                        <Button background={"transparent"} color={"red.500"} pl={"0"} textTransform={"uppercase"} rightIcon={<AiOutlineArrowRight/>} >Read more</Button>
                                    </Link>
                                </Flex>
                            </Box>
                        </Box>

                    </Box>
            </Card>

    );
};

export default CaseStudies;
