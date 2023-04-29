import React, {useEffect, useState} from 'react';
import {Box, Button, Flex, Icon, Image, Radio, RadioGroup, Stack, Text} from "@chakra-ui/react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {db} from "../firebase";
import HeroSection from "../misc/heroSection";
import {BiUser, BiCalendarEvent, BiCategory} from "react-icons/bi";
import moment from "moment";
import {useCollection} from "react-firebase-hooks/firestore";

const SingleBlogs = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [blog, setBlog] = useState([]);
    const [blogs, loading, error] = useCollection(db.collection('blogs'));
    //fetch the blog with the id from firestore

    useEffect(() => {
        db.collection("blogs").doc(id).get().then((doc) => {
            if (doc.exists) {
               // console.log("Document data:", doc.data().title);
                setBlog(doc.data());

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);

        });
    }, []);

    return (
        <Box mt={-110}>
            <HeroSection title={"News and Blogs"} subtitle={blog.category} />

            <Box p={"5% 0"}>
                <Flex justifyContent={"space-around"} >
                    {/*Right*/}
                    <Box w={"60%"}>
                        <Box>
                            <Image src={blog.imageUrl} alt={blog.title} width={"100%"} height={"400px"} objectFit={"cover"}/>
                        </Box>
                        <Box p={"2%"} bg={"gray.200"}>
                            <Text fontSize={"2xl"} fontWeight={"bold"}>{blog.title}</Text>
                        </Box>
                        <Flex p={"2%"} bg={"gray.100"} w={"100%"}>
                            <Flex minW={"20%"} alignItems={"center"}>
                                <Icon as={BiUser} color={"red.500"} p={"0 2%"} fontWeight={"bold"} fontSize={"30px"}/>
                                <Text fontSize={"l"} w={"100%"} mr={"2%"}>{blog.author}</Text>
                            </Flex>

                            {blog.createdAt && (
                                <Flex minW={"20%"} alignItems={"center"}>
                                    <Icon as={BiCalendarEvent} color={"red.500"} p={"0 2%"} fontWeight={"bold"} fontSize={"30px"}/>
                                    <Text fontSize={"l"}>{moment(blog.createdAt.toDate()).format("MMMM Do YYYY")}</Text>
                                </Flex>
                            )}
                            {blog.category && (
                                <Flex minW={"20%"} alignItems={"center"}>
                                    <Icon as={BiCategory} color={"red.500"} p={"0 2%"}  fontWeight={"bold"} fontSize={"30px"}/>
                                    <Text fontSize={"l"} p={"0 2%"}>{blog.category}</Text>
                                </Flex>
                            )}

                        </Flex>
                        <Box p={"5% 0"}>
                            <Text fontSize={"xl"}>{blog.content}</Text>
                        </Box>


                    </Box>
                    {/*Left*/}

                    <Box p={"0 2%"} width={"30%"}>
                        <Text fontSize={"30px"} fontWeight={"bold"}>Recent Blogs</Text>
                    {blogs && blogs.docs?.map((blog) => {
                        return (

                                <Box mt={"2%"} border={"1px solid"} borderColor={"red.200"}>
                                    <Box p={"2%"}>
                                        <Image p={"1%"} src={blog.data().imageUrl} alt={blog.data().title} width={"100%"}
                                               height={"200px"} objectFit={"cover"}/>
                                        <Text p={"1%"} fontSize={"xl"} fontWeight={"bold"}>{blog.data().title}</Text>
                                        <Text p={"1% 1% 2% 1%"} fontSize={"md"}>{blog.data().excerpt}</Text>
                                        <Link to={`/news-and-blogs/${blog.id}`}>
                                            <Button colorScheme='red' variant='outline' onClick={() => navigate(`/news-and-blogs/${blog.id}`)}>Read more</Button>
                                        </Link>
                                    </Box>
                                </Box>
                        )
                    })}
                    </Box>


                </Flex>

            </Box>
        </Box>
    );
};

export default SingleBlogs;
