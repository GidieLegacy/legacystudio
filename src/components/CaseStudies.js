import React from 'react';
import {Box, Flex, Text} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import HeroSection from "../misc/heroSection";

const CaseStudies = () => {
    const {id} = useParams();

    return (
        <Box mt={-110}>
            <HeroSection
                title={"Case Studies"}

            />
            <Box>
                <Flex justifyContent={"center"}>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>{id}</Text>
                </Flex>
            </Box>

        </Box>
    );
};

export default CaseStudies;
