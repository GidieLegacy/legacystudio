import React, { useEffect, useState } from 'react';
import {
    Box,
    Heading,
    Text,
    Flex,
    SimpleGrid,
    Link,
    Button,
    Icon,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    useDisclosure,
    HStack, Skeleton, FormHelperText, useToast, IconButton, Badge
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import {db, timeStamp, storage} from "../firebase";
import {Helmet} from "react-helmet-async";
import {BiChevronRight, BiDownload} from "react-icons/bi";
import coding_logo from "../assets/coding.jpg";
import {MdBuild} from "react-icons/md";
import HeroSection from "../misc/heroSection";
import {FaFacebook, FaWhatsapp} from "react-icons/fa";
import {IoMdDownload} from "react-icons/io";

const ProjectRequestForm = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState('');
    const toast = useToast();

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

    const [newEntriesCount, setNewEntriesCount] = useState(0);

    const incrementNewEntriesCount = () => {
        setNewEntriesCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        setNameError('');
        setEmailError('');
        setMessageError('');
    }, [email, name, message]);
    const handleSubmit = async () => {
        try {

            //prevent submission of empty form
            if (name.trim() === '') {
                setNameError('Name is required');
                return;
            }
            if (email.trim() === '') {
                setEmailError('Email is required');
                return;
            }
            if (message.trim() === '') {
                setMessageError('Message is required');
                return;
            }
            if (name.trim() === '' && email.trim() === '' && message.trim() === '') {
                return
            }
            else {
                await db.collection('projectRequests').add({
                    name,
                    email,
                    message,
                    timestamp: timeStamp,
                    viewed: false,
                }).then(() =>{
                    toast({
                        title: 'Project Request Submitted',
                        description: 'Your project request has been submitted successfully. We will get back to you shortly.',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    })

                    incrementNewEntriesCount();

                    setNameError('');
                    setEmailError('');
                    setMessageError('');
                    }

                );
            }

            onClose();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Project Request Form</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl mb={4}>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" value={name} onChange={handleNameChange} />
                        <FormHelperText>{nameError}</FormHelperText>
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" value={email} onChange={handleEmailChange} />
                        <FormHelperText>{emailError}</FormHelperText>
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Message</FormLabel>
                        <Textarea value={message} onChange={handleMessageChange} />
                        <FormHelperText>{messageError}</FormHelperText>
                    </FormControl>
                    <Button colorScheme="red" onClick={handleSubmit}>
                        Submit
                    </Button>
                    <Flex justifyContent={"center"}>
                        <Text m={2} fontSize="sm">
                            Or
                        </Text>
                    </Flex>

                    <hr/>

                    <HStack mt={2}>
                        <Button colorScheme='whatsapp' leftIcon={<FaWhatsapp />} as="a" href="https://wa.me/+254791220335?text=Hello%2C%20I%20am%20interested%20in%20the%20Pendo%20Management%20System%20project." target="_blank" rel="noopener noreferrer">
                            Whatsapp
                        </Button>
                        <Button colorScheme='facebook' leftIcon={<FaFacebook />} as="a" href="https://web.facebook.com/AdobeMust" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </Button>
                        <Text fontSize={"14px"}><strong>Call:</strong> 0791 220 335</Text>
                    </HStack>

                    <Flex alignItems="center" justifyContent="flex-end" mt={2}>
                        <Badge colorScheme="green">{newEntriesCount > 0 ? `New Entries: ${newEntriesCount}` : null}</Badge>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
const PendoManagement = () => {
    const { id } = useParams();
    const [postTitle, setPostTitle] = useState("");
    const [projects, setProjects] = useState([]);
    const [featuredProject, setFeaturedProjects] = useState([])
    const [showMore, setShowMore] = useState(false);
    const [data, loading, error] = useCollection(db.collection("services")
        .where('featured', '!=', true));
    const [ featuredData, featuredLoading, featuredError] = useCollection(db.collection("services")
            .where('featured', '==', true)
        );
    const { isOpen, onOpen, onClose } = useDisclosure();

    // convert id to number
    const idNumber = parseInt(id);

    useEffect(() => {
        projects.forEach((project) => {
            if (project.id === idNumber) {
                setPostTitle(project.title);
                console.log(project);
            }
        });
    }, [idNumber]);

    // fetch services from firebase
    useEffect(() => {
        if (data) {
            const fetchedProjects = data.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });
            setProjects(fetchedProjects);
        }
        if (featuredData){

            const fetchedFeaturedProjects = featuredData.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            })
            setFeaturedProjects(fetchedFeaturedProjects)
        }
    }, [data, featuredData]);
    const handleDownload = async (project) => {
        const filePath = project.projectFile;

        try {
            const downloadURL = await storage.refFromURL(filePath).getDownloadURL();

            const link = document.createElement('a');
            link.href = downloadURL;
            link.download = `downloaded-${project.title}.pdf`;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };

    const handleReadMoreClick = () => {
        setShowMore(!showMore);
    };

    return (
        <>
            <Helmet>
                <title>Pendo Management System | Legacy Studios</title>
                <meta name="description"
                      content="KCSE 2024 Computer Studies Paper 3, Pendo Management System is now out. "/>
                <link rel={'canonical'} href={"/projects"}/>
            </Helmet>
            {featuredLoading ? (
                    <SimpleGrid columns={3} spacing={4}>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                                <Skeleton height="100px" mb={2} />
                                <Skeleton height="20px" />
                                <Skeleton height="20px" mt={2} />
                            </Box>
                        ))}
                    </SimpleGrid>
                )
                :
            (<Box mt={-110}>
            <Box h={110} bg={"blackAlpha.700"}></Box>

            {/* Featured Project Section */}
            {featuredProject.map((feature) => (
                <Box
                    pt={30}
                    mb={8}
                    position="relative"
                    background={`url(${feature.thumbnail}) center/cover no-repeat`}
                    boxShadow="md"
                    color="white"
                    overflow="hidden"
                    key={feature.id}
                >
                    <Helmet>
                        <meta name="description"
                              content={`KCSE 2024 Computer Studies Paper 3, ${feature.title} - ${feature.description}`}/>
                        <link rel={'canonical'} href={"/pendo-bakery-management-system"}/>
                        <script type="application/ld+json">
                            {`
            {
                "@context": "http://schema.org",
                "@type": "Product",
                "name": "${feature.title}",
                "description": "${feature.description}",
                "image": "${feature.thumbnail}",
                // Other properties...
            }
        `}
                        </script>
                    </Helmet>
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        bg="rgba(0,0,0,0.5)"
                    ></Box>
                    <Flex
                        position="relative"
                        zIndex="1"
                        direction="column"
                        alignItems="flex-start"
                        justifyContent="flex-end"
                        height="100%"
                        padding={6}
                    >


                        <Heading mb={4}>Featured: {feature.title} is now available🙌</Heading>
                        <Flex mb={4} height={"120px"} alignItems={"space-between"}>
                            <Box h="120px" >

                                <Flex>
                                    <Box w={"120px"} mr={4}>

                                        <img
                                            src={feature.thumbnail}
                                            alt={`${feature.title} Thumbnail`}
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </Box>

                                    <Flex flexDirection={"column"} justifyContent={"space-between"} >
                                        <Box>
                                            {/* Add other details for the featured project */}
                                            <Text fontSize="sm" color="white">Title: {feature.title}</Text>
                                            <Text fontSize="sm" color="white">Category: KCSE Projects</Text>
                                            <Text fontSize="sm" color="white">Year: 2024</Text>
                                            <Text fontSize="sm" color="white">Inclusive: Database project, Documentation</Text>
                                        </Box>
                                        <Box>
                                            <Button colorScheme={"red"} size={"sm"} onClick={onOpen}>Get this project!</Button>
                                        </Box>
                                    </Flex>
                                </Flex>

                            </Box>

                        </Flex>
                        <Box position="relative">
                            <Text overflow="hidden" maxH={showMore ? "none" : "65px"} mb={4} fontSize="md">
                                {feature.description}
                            </Text>
                            <Box position="absolute" bottom="0" right="0">
                                <Link to="#" color="blue" onClick={handleReadMoreClick}>
                                    {showMore ? "Read Less" : "Read More"}
                                </Link>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            ))}

            <Box pl={10} pr={10}>
                {/* Other Projects Section */}
                <Heading mb={4}>Similar Past Projects</Heading>
                <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
                    {projects.map((project) => (
                        <Flex width={"100%"} key={project.id} bg="white" p={4} borderRadius="md" boxShadow="md" justifyContent={"space-between"}>
                            {/* Display project details here */}
                            <Box maxW={'70%'}>
                                <Heading fontSize="xl">{project.title}</Heading>
                                {/* Truncate the description for other projects */}
                                <Text maxH="60px">Project Year: {project.projectYear}</Text>
                                {/* Add a "Read More" link that opens a new page */}
                                <Flex justifyContent={"space-between"} alignItems={"center"} mt={3}>

                                    {/* Add a Download Button */}
                                    {project.projectFile && (
                                        <IconButton
                                            variant='outline'
                                            colorScheme='red'
                                            aria-label='Call Sage'
                                            fontSize='20px'
                                            onClick={() => handleDownload(project)}
                                            icon={<IoMdDownload />
                                        }
                                        />

                                    )}
                                </Flex>

                            </Box>
                            {/* Add a thumbnail to the right-hand side */}
                            <Box ml={4} w="100px" maxW={'30%'} h="100px">
                                <img
                                    src={project.thumbnail}
                                    alt={`${project.title} Thumbnail`}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            </Box>
                        </Flex>
                    ))}
                </SimpleGrid>
            </Box>
            <ProjectRequestForm isOpen={isOpen} onClose={onClose} />
        </Box>
            )}
        </>

    );
};

export default PendoManagement;
