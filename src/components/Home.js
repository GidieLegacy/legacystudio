import React from 'react';
import {Box, Flex, Text} from "@chakra-ui/react";

const Home = () => {
    return (
        <Box>
            <Flex justifyContent={"center"}>
                <Text fontSize="35px" fontWeight={"bold"}>Welcome to Legacy Studio</Text>
            </Flex>
        </Box>
    );
};

export default Home;