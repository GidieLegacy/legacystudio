import React, {useEffect} from 'react';
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import firebase from "firebase";
import {db} from "../firebase";
import {useCollection} from "react-firebase-hooks/firestore";
import HeroSection from "../misc/heroSection";
import {Helmet} from "react-helmet-async";

const Blogs = () => {
    //fetch blogs from firebase use useCollection

    const [blogs, setBlogs] = useCollection(db.collection("blogs"));

    useEffect(() => {
        if (blogs) {
            blogs.docs?.map((doc) => {
                console.log(doc.data());
            })
        }
    }, [blogs]);

    return (

        <Box mt={-110}>
            <Helmet>
                <title>News and Blogs | Legacy Studios</title>
                <meta name="description" content="We offer a wide range of services that are suitable for all types of businesses. We offer POS systems for restaurants, POS systems for retail, POS systems for grocery stores, etc." />
                <link rel={'canonical'} href={"/news-and-blogs"}/>
            </Helmet>
            <HeroSection title={"News and Blogs"}/>
            <Flex>
                <Box m={"2px"} border={"1px solid"} borderColor={"red.200"}>
                    <Image
                        src={"https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                        alt={"blog image"}
                        w={"100%"}
                        h={"250px"}
                        objectFit={"cover"}

                    />
                    <Box padding={"2%"}>
                        <Text fontSize={"20px"} p={"2% 0"} fontWeight={"bold"}>Trends in 2023: How AI is Changing the World</Text>
                        <Text color={"gray"} mb={"2%"}>
                            The world of software development is rapidly changing thanks to AI. In 2023, we can expect to see trends such as intelligent automation,
                            smarter chatbots, and more accurate predictive analytics.
                            With the growth of edge computing and AI-powered cybersecurity, the future of software development looks bright.
                        </Text>
                        <Link href={"#"} color={"red.500"}  p={"2% 0"} to={"#"}>Read More >></Link>
                    </Box>

                </Box>
            </Flex>
        </Box>


    );
};

export default Blogs;
