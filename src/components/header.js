import React from 'react';
import {Box, Flex, Text} from "@chakra-ui/react";

const Header = () => {
    return (
        <Box zIndex={100} background={"red.200"} w={"100%"} position={"sticky"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text color={"white"}>NavBar 2.0</Text>

                <Text color={"white"}>Right side</Text>
            </Flex>



        </Box>
    );
};

export default Header;