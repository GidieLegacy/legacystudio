import React from 'react';
import {Flex, Image} from "@chakra-ui/react";
import logo from "../assets/legacy-logo.png";

const Background = () => {
    return (
        <Flex justifyContent={"center"} alignItems={"center"}>
            <Image src={logo} alt={"Logo"}  objectFit={"cover"} w={"100%"} h={"100%"}/>

        </Flex>
    );
};

export default Background;