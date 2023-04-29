import React from 'react';
import {Box, Button, Circle, Flex, Icon, Link, Text} from "@chakra-ui/react";
import {BiChevronRight} from "react-icons/bi";
import Contact from "../utils/ContactForm";

const About = () => {
    return (
        <Box mt={-110}>
            {/*Top Section*/}
            <Box h={"40vh"} bg={"blackAlpha.700"} w={"100%"}>
                <Flex justifyContent={"center"} alignItems={"center"} h={"100%"} w={"100%"}>
                    <Box mt={["0", "5%"]} w={"100%"}>
                        <Flex w={"100%"} justifyContent={"center"}>
                            <Text fontSize={"38px"} fontWeight={"bold"} color={"white"} fontFamily={"inter"}>About US</Text>
                        </Flex>

                        <Flex  justifyContent={"center"} alignItems={"center"}>
                            <Link href={"/"} color={"white"}><Text fontFamily={"Heebo"} >Home</Text></Link>
                            <Icon as={BiChevronRight} color={"red.500"}  fontWeight={"bold"} fontSize={"2xl"}> > </Icon>
                            <Text color={"white"} fontFamily={"Heebo"} >About us</Text>

                        </Flex>
                    </Box>

                </Flex>

            </Box>
            {/*    End of Top Section*/}

            {/*Start of Body section*/}
            <Box p={"5%"}>
                {/*Vision and Mission statement*/}
                <Flex justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"}>
                    <Box mr={"1%"} w={["100%","400px"]} bg={"gray.100"} minH={"230px"}>
                        <Flex>
                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} p={"2%"}>
                                <Flex justifyContent={"center"} flexDirection={"column"}>
                                    <Text fontSize={"30px"} fontWeight={"bold"} color={"black"}>Our Vision</Text>
                                    <Text>
                                        Our mission is to deliver exceptional IT services to our clients through the development of high-quality,
                                        reliable and innovative software solutions. We strive to be a trusted partner to our clients,
                                        providing expert guidance and support at every stage of their digital transformation journey.
                                    </Text>
                                </Flex>
                            </Box>


                        </Flex>

                    </Box>

                    <Box mt={["5px", 0]} bg={"gray.100"} w={["100%","400px"]} minH={"230px"} mr={"1%"}>
                        <Box p={"2%"}>
                            <Flex flexDirection={"column"} justifyContent={"center"}>
                                <Text fontSize={"30px"} fontWeight={"bold"}>Our Mission</Text>
                                <Text>
                                    Our vision is to become a leading provider of software solutions globally,
                                    empowering businesses to achieve their full potential through the use of cutting-edge technologies and expert programming services.
                                    We aim to continuously innovate and improve our services to meet the evolving needs of our clients and the industry,
                                    while maintaining the highest standards of quality, integrity and professionalism.
                                </Text>
                            </Flex>

                        </Box>

                    </Box>

                    <Box mt={["5px", 0]} bg={"gray.100"} w={["100%", "450px"]}  minH={"230px"} position={"relative"}>
                        <Box p={"2%"} h={"100%"}>
                            <Flex flexDirection={"column"} justifyContent={"center"} >
                                <Text fontSize={"30px"} fontWeight={"bold"}>Our Approach</Text>
                                <Text>
                                    our approach is collaborative, iterative, and client-focused, with a strong emphasis on quality,
                                    innovation, and continuous improvement.
                                </Text>
                                <Button right={"2%"} bottom={"2%"} color={"red.500"} position={"absolute"}>
                                    <a  href={"/our-approach"}>
                                        Read more >
                                    </a>
                                </Button>

                            </Flex>

                        </Box>

                    </Box>
                </Flex>
                {/*End of Vision and Mission statement*/}

                {/*Start of our Values*/}

                <Box mt={"5%"} mb={"5%"} p={"2%"} borderLeft={"8px solid"} borderColor={"red.500"} bg={"gray.100"} borderRadius={"15px"}>
                    <Text fontSize={"30px"} fontWeight={"bold"}>Our Values</Text>

                    <Flex mt={"2%"} flexDirection={"column"} flexWrap={"wrap"}>

                        <Flex p={"1%"} flexWrap={["wrap", "nowrap"]}>
                            <Box width={"100%"} mr={"2%"}>
                                <Flex width={"100%"} alignItems={"center"}>
                                    <Box w={"100%"} borderTop={"4px solid"} borderColor={"red.500"}></Box>
                                    <Circle size={"40px"} bg={"red.500"} color={"white"} fontWeight={"bold"}>1</Circle>
                                </Flex>
                                <Text fontWeight={"bold"}>Innovation</Text>
                                <Text>We strive to innovate and create new solutions that push the boundaries of what is possible in
                                    the field of software development.
                                </Text>

                            </Box>
                            <Box width={"100%"}>
                                <Flex width={"100%"} alignItems={"center"}>
                                    <Box w={"100%"} borderTop={"4px solid"} borderColor={"red.500"}></Box>
                                    <Circle size={"40px"} bg={"red.500"} color={"white"} fontWeight={"bold"}>5</Circle>
                                </Flex>
                                <Text fontWeight={"bold"}>Quality</Text>
                                <Text>
                                    We are committed to delivering high-quality software that meets or exceeds our clients'
                                    expectations and adheres to industry standards.
                                </Text>

                            </Box>
                        </Flex>

                        <Flex p={"1%"} flexWrap={["wrap", "nowrap"]}>
                            <Box width={"100%"} mr={"2%"}>
                                <Flex width={"100%"} alignItems={"center"}>
                                    <Box w={"100%"} borderTop={"4px solid"} borderColor={"red.500"}></Box>
                                    <Circle size={"40px"} bg={"red.500"} color={"white"} fontWeight={"bold"}>2</Circle>
                                </Flex>
                                <Text fontWeight={"bold"}>Customer focus</Text>
                                <Text>
                                    We put our clients' needs and interests at the forefront of everything we do,
                                    and work collaboratively with them to achieve their goals.
                                </Text>

                            </Box>
                            <Box width={"100%"}>
                                <Flex width={"100%"} alignItems={"center"}>
                                    <Box w={"100%"} borderTop={"4px solid"} borderColor={"red.500"}></Box>
                                    <Circle size={"40px"} bg={"red.500"} color={"white"} fontWeight={"bold"}>6</Circle>
                                </Flex>
                                <Text fontWeight={"bold"}>Professionalism</Text>
                                <Text>
                                    We conduct ourselves with the highest level of professionalism, taking ownership of our work and being accountable for our actions.
                                </Text>

                            </Box>
                        </Flex>
                        <Flex p={"1%"} flexWrap={["wrap", "nowrap"]}>
                            <Box width={"100%"} mr={"2%"}>
                                <Flex width={"100%"} alignItems={"center"}>
                                    <Box w={"100%"} borderTop={"4px solid"} borderColor={"red.500"}></Box>
                                    <Circle size={"40px"} bg={"red.500"} color={"white"} fontWeight={"bold"}>3</Circle>
                                </Flex>
                                <Text fontWeight={"bold"}>Integrity</Text>
                                <Text>
                                    We operate with integrity, honesty, and transparency,
                                    building trust with our clients and maintaining the confidentiality of their information.
                                </Text>

                            </Box>
                            <Box width={"100%"}>
                                <Flex width={"100%"} alignItems={"center"}>
                                    <Box w={"100%"} borderTop={"4px solid"} borderColor={"red.500"}></Box>
                                    <Circle size={"40px"} bg={"red.500"} color={"white"} fontWeight={"bold"}>7</Circle>
                                </Flex>
                                <Text fontWeight={"bold"}>Collaboration</Text>
                                <Text>
                                    We believe in working collaboratively with our clients and colleagues, fostering an environment of teamwork,
                                    mutual respect, and open communication.
                                </Text>

                            </Box>
                        </Flex>

                        <Flex p={"1%"} flexWrap={["wrap", "nowrap"]}>
                            <Box width={"100%"} mr={"2%"}>
                                <Flex width={"100%"} alignItems={"center"}>
                                    <Box w={"100%"} borderTop={"4px solid"} borderColor={"red.500"}></Box>
                                    <Circle size={"40px"} bg={"red.500"} color={"white"} fontWeight={"bold"}>4</Circle>
                                </Flex>
                                <Text fontWeight={"bold"}>Continuous learning</Text>
                                <Text>
                                    We are committed to ongoing learning and professional development,
                                    staying up-to-date with the latest industry trends and technologies,
                                    and sharing our knowledge and expertise with others.
                                </Text>

                            </Box>
                            <Box width={"100%"}>
                                <Flex width={"100%"} alignItems={"center"}>
                                    <Box w={"100%"} borderTop={"4px solid"} borderColor={"red.500"}></Box>
                                    <Circle size={"40px"} bg={"red.500"} color={"white"} fontWeight={"bold"}>8</Circle>
                                </Flex>
                                <Text fontWeight={"bold"}>Social responsibility</Text>
                                <Text>
                                    We recognize our role in creating positive social impact and strive to contribute to the betterment of
                                    our communities and the environment.
                                </Text>

                            </Box>
                        </Flex>


                    </Flex>

                </Box>
                {/*End of our Values*/}

                {/*Start of our Team*/}
                <Box>

                </Box>
                {/*End of our Team*/}

                {/*Start of Contact us*/}
                <Box>
                    <Contact/>
                </Box>
                {/*End of Contact us*/}

                {/*Start of our impact*/}

                {/*End of our impact*/}




            </Box>
            {/*End of Body section*/}

        </Box>
    );
};

export default About;