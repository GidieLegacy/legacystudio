import React from 'react';
import {Box, Button, Center, Flex, Icon, Link, Text} from "@chakra-ui/react";
import {BiChevronRight} from "react-icons/bi"

import {BsUiChecksGrid} from "react-icons/bs";
import {FcSmartphoneTablet} from "react-icons/fc";
import {FaDatabase} from "react-icons/fa";
import Service from "../utils/service";
import node_logo from "../assets/node-js.png";
import mongo_logo from "../assets/mongo-logo.png";
import express_logo from "../assets/express-logo.png";
import react_logo from "../assets/react-logo.png";
import ms_access_logo from "../assets/ms-access-logo.png";
import oracle_logo from "../assets/oracle-logo.png";
import ms_word_logo from "../assets/word-logo.png";
import android_logo from "../assets/android-logo.png";
import flutter_logo from "../assets/flutter-logo.svg";
import react_native_logo from "../assets/react-native-logo.png";
import java_logo from "../assets/java-logo.png";
import python_logo from "../assets/python-logo.png";
import mysql_logo from "../assets/MySQL-Logo.png";
import heroku_logo from "../assets/heroku-logo.png";
import wordpress_logo from "../assets/wordPress-logo.png";
import coding_logo from "../assets/coding.jpg";
import {MdBuild} from "react-icons/md";
import {Helmet} from "react-helmet-async";


const Services = () => {
    return (

    <Box  >
        <Helmet>
            <title>Services | Legacy Studios</title>
            <meta name="description" content="We offer a wide range of services that are suitable for all types of businesses. We offer POS systems for restaurants, POS systems for retail, POS systems for grocery stores, etc." />
            <link rel={'canonical'} href={"/services"}/>
        </Helmet>

            {/*    Start of Body Section*/}
            <Box p={"2%"}>
                <Flex justifyContent={"center"} alignItems={"center"}>
                    <Box w={"100%"}>
                        <Flex justifyContent={"center"} alignItems={"center"} p={"1%"}>
                            <Text textTransform={"uppercase"} fontWeight={"bold"} color={"red.500"} fontFamily={"inter sans-serif"} fontSize={"18px"}>our Services</Text>
                        </Flex>
                        <Flex justifyContent={"center"} alignItems={"center"} >
                            <Text fontSize={"38px"} fontWeight={"bold"} color={"black"} >Solutions & Focus Areas</Text>
                        </Flex>
                        <Flex justifyContent={"center"} alignItems={"center"} p={["5px", "1% 20%"]}>
                            <Text textAlign={"center"} color={"gray.500"} fontFamily={"inter"}>
                                We are here to help you and your business, here are some of the services we offer.
                                Choose what best fits your interest to find out more about what we can offer.
                            </Text>
                        </Flex>
                    </Box>
                </Flex>
                <Box>
                    <Center>
                        <Flex alignItems={"center"} p={"2%"} flexWrap={"wrap"} justifyContent={"center"}>
                            <Service
                                id={1}
                                title={"Point of Sale Systems"}
                                icon={BsUiChecksGrid}
                                technologies={[
                                    {name: "", icon: `${react_logo}`, tooltip: "React JS"},
                                    {name: "", icon: `${node_logo}`, tooltip: "Node JS"},
                                    {name: "", icon: `${mongo_logo}`, tooltip: "Mongo DB"},
                                    {name: "", icon: `${express_logo}`, tooltip: "Express JS"},
                                ]}
                                tooltip={"React"}
                                techIcon={react_logo}
                                description={"We offer a wide range of Point of Sale Systems that are suitable for all types of businesses." +
                                    " We offer POS systems for restaurants, POS systems for retail, POS systems for grocery stores, etc."}

                            />

                            <Service
                                id={2}
                                title={"Database Management"}
                                icon={FaDatabase}
                                description={"Our database management solutions are comprehensive and cater to the needs of businesses of all sizes and industries. " +
                                    ""}
                                technologies={[
                                    {name: "", icon: `${ms_access_logo}`, tooltip: "MS Access"},
                                    {name: "", icon: `${oracle_logo}`, tooltip: "Oracle"},
                                ]}

                            />
                            <Service
                                id={3}
                                title={"School Project"}
                                icon={BsUiChecksGrid}
                                description={"We provide expert assistance to students with their final year CS/IT project, " +
                                    "ensuring personalized support and confident project completion."}
                                technologies={[
                                    {name: "", icon: `${ms_access_logo}`, tooltip: "MS Access"},
                                    {name: "", icon: `${ms_word_logo}`, tooltip: "MS Word"},
                                ]}
                            />
                            <Service
                                id={4}
                                title={"Web Design/ Development"}
                                icon={BsUiChecksGrid}
                                description={"We specialize in creating personalized websites and web applications that perfectly match your business requirements. " +
                                    "Trust us to bring your digital vision to life."}
                                technologies={[
                                    {name: "", icon: `${react_logo}`, tooltip: "React JS"},
                                    {name: "", icon: `${node_logo}`, tooltip: "Node JS"},
                                    {name: "", icon: `${wordpress_logo}`, tooltip: "Wordpress"},
                                ]}
                            />
                            <Service
                                id={5}
                                title={"Custom Software"}
                                icon={BsUiChecksGrid}
                                description={"Got a different application idea? We will help you build custom software that is tailored to your business needs. " +
                                    "Let's help you build a mobile app or desktop application."}
                                technologies={[
                                    {name: "", icon: `${java_logo}`,},
                                    {name: "", icon: `${python_logo}`},
                                    {name: "", icon: `${heroku_logo}`},
                                    {name: "", icon: `${mysql_logo}`},
                                ]}
                            />
                            <Service
                                id={6}
                                title={"Mobile App Development"}
                                icon={FcSmartphoneTablet}
                                description={"We have a team specialized in mobile applications. Our team will collaborate with you to develop custom mobile " +
                                    "applications that perfectly align with your company's objectives and requirements."}
                                technologies={[
                                    {name: "", icon: `${android_logo}`},
                                    {name: "", icon: `${flutter_logo}`},
                                    {name: "", icon: `${react_native_logo}`},
                                ]}
                            />

                        </Flex>
                    </Center>

                </Box>

            </Box>
            {/*    End of Body Section*/}



        </Box>
    );
};

export default Services;
