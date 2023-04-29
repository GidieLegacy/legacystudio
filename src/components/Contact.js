import React from 'react';
import {AspectRatio, Box, Flex, Icon, Link, Text} from "@chakra-ui/react";
import {BiChevronRight} from "react-icons/bi";
import {ImLocation2} from "react-icons/im";
import {BsFillTelephoneOutboundFill} from "react-icons/bs";
import {MdMarkEmailUnread} from "react-icons/md";
import contact_us_logo from "../assets/contact-us.jpg";
import ContactFormWithSocialButtons from "../utils/Form";

const Contact = () => {
    return (
        <Box mt={-110}>
            {/*Top Section*/}
            <Box h={"40vh"} bg={"blackAlpha.700"} w={"100%"} >
                <Flex justifyContent={"center"} alignItems={"center"} h={"100%"} w={"100%"}>
                    <Box mt={["0", "5%"]} w={"100%"}>
                        <Flex w={"100%"} justifyContent={"center"}>
                            <Text fontSize={"38px"} fontWeight={"bold"} color={"white"} fontFamily={"inter"}>Contact us</Text>
                        </Flex>

                        <Flex  justifyContent={"center"} alignItems={"center"}>
                            <Link href={"/"} color={"white"}><Text fontFamily={"Heebo"} >Home</Text></Link>
                            <Icon as={BiChevronRight} color={"red.500"}  fontWeight={"bold"} fontSize={"2xl"}> > </Icon>
                            <Text color={"white"} fontFamily={"Heebo"} >Contact us</Text>

                        </Flex>
                    </Box>

                </Flex>

            </Box>
            {/*    End of Top Section*/}
            {/*Start of contacts section*/}
            <Flex justifyContent={"center"} alignItems={"center"}>
                <Box w={"100%"} h={"100%"} bg={"green.50"}>
                    <Flex justifyContent={"center"} alignItems={"center"}>
                        {/*Location bubble*/}
                        <Flex justifyContent={"center"} alignItems={"center"} borderColor={"blackAlpha.400"} borderWidth={"1px"} borderStyle={"solid"} minW={"33.3%"} mr={"1%"} height={"185px"}>
                            <Box padding={"5%"} >
                                <Box w={"100%"} h={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} borderColor={"red.200"} >
                                    <Icon as={ImLocation2} color={"red.500"}  fontWeight={"bold"} fontSize={"70px"}> </Icon>
                                </Box>
                                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} mt={"2%"} p={"0 5%"}>
                                    <Text fontSize={"xl"} fontWeight={"bold"} fontFamily={"inter"}>Location</Text>
                                    <Text fontSize={"l"} fontFamily={"inter"} textAlign={"center"}>At Kaburwo Plaza, Eldoret Kusumu Road - Eldoret, Kenya</Text>


                                </Box>
                            </Box>


                        </Flex>
                        {/*End of location bubble*/}

                        {/*Phone bubble*/}
                        <Flex justifyContent={"center"} alignItems={"center"} borderColor={"blackAlpha.400"} borderWidth={"1px"} borderStyle={"solid"} minW={"33.3%"} mr={"1%"} height={"185px"}>
                            <Box padding={"5%"} >
                                <Box w={"100%"} h={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <Icon as={BsFillTelephoneOutboundFill} color={"red.500"}  fontWeight={"bold"} fontSize={"70px"}> </Icon>
                                </Box>
                                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} mt={"2%"} p={"0 5%"}>
                                    <Text fontSize={"xl"} fontWeight={"bold"} fontFamily={"inter"}>Phone</Text>
                                    <Text fontSize={"l"} fontFamily={"inter"} textAlign={"center"}>+254719844774</Text>
                                    <Text fontSize={"l"} fontFamily={"inter"} textAlign={"center"}>+254720968784</Text>


                                </Box>
                            </Box>


                        </Flex>
                        {/*End of phone bubble*/}

                        {/*Email bubble*/}
                        <Flex justifyContent={"center"} alignItems={"center"} borderColor={"blackAlpha.400"} borderWidth={"1px"} borderStyle={"solid"} minW={"33.3%"} mr={"1%"} height={"185px"}>
                            <Box padding={"5%"} >
                                <Box w={"100%"} h={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <Icon as={MdMarkEmailUnread} color={"red.500"}  fontWeight={"bold"} fontSize={"70px"}> </Icon>
                                </Box>
                                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} mt={"2%"} p={"0 5%"}>
                                    <Text fontSize={"xl"} fontWeight={"bold"} fontFamily={"inter"}>E-mail</Text>
                                    <Text fontSize={"l"} fontFamily={"inter"} textAlign={"center"}>info@legacystudios.com</Text>


                                </Box>
                            </Box>


                        </Flex>
                        {/*End of email bubble*/}



                    </Flex>

                </Box>
            </Flex>

            {/*End of contacts section*/}

            {/*Contact form*/}
            <ContactFormWithSocialButtons/>

            <Box>
                {/*Map*/}
                <AspectRatio ratio={16 / 9}>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sEldoret!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
                    />
                </AspectRatio>
            </Box>
        </Box>
    );
};

export default Contact;
