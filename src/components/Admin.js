import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth, provider} from '../firebase'; // Create a separate file to initialize Firebase
import { Helmet } from 'react-helmet-async';
import { GoogleAuthProvider } from "firebase/auth";

import {
    Box,
    Button,
    Input,
    Stack,
    FormControl,
    FormLabel,
    useToast, Flex, Heading,
} from '@chakra-ui/react';

const Admin = () => {
    const navigate = useNavigate();
    const toast = useToast();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);

    const handleLogin = async (e) => {
        e.preventDefault();


        try {
            await auth.signInWithEmailAndPassword(email, password);
            console.log(user)
            navigate('/new-service');
        } catch (error) {
            console.error('Login failed', error.message);
            toast({
                title: 'Login failed',
                description: error.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const handleGoogleLogin = async () => {
       /* try {
            await auth.signInWithPopup(provider);
            navigate('/');
        } catch (error) {
            console.error('Google login failed', error.message);
        }*/
        toast({
            title: 'Not allowed!',
            description: 'Google login is not available at the moment.',
            status: 'error',
            duration: 5000,
            isClosable: true,
        })
    };

    return (
        <Box minH={"80vh"} gap={20}>
            <Helmet>
                <title>Login | Your App Name</title>
                <meta name="description" content="Login to Your App Name" />
            </Helmet>
            <Box w={"100vw"} h={110} mt={-110} background={"blackAlpha.700"}></Box>
            <Flex pt={35} w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
                <Box
                    w={["100%", "50%"]}
                    maxW={["100%", "50%"]}
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="lg"
                    p={6}>
                    <Stack spacing={4}>
                        <Heading size={"md"}>Sign in to add/manage a project</Heading>
                        <FormControl>
                            <FormLabel>Email:</FormLabel>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Password:</FormLabel>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>

                    </Stack>
                    <Flex flexDirection={"column"} mt={4}>
                        <Button size={"md"} colorScheme="teal" type="submit" onClick={handleLogin}>
                            Login
                        </Button>

                        <Button mt={4} colorScheme="blue" onClick={handleGoogleLogin}>
                            Login with Google
                        </Button>
                    </Flex>


                    {loading && <p>Loading...</p>}
                    {error && (
                        <Box mt={4} color="red.500">
                            Error: {error.message}
                        </Box>
                    )}
                </Box>
            </Flex>


        </Box>
    );
};

export default Admin;
