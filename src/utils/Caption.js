import React from 'react';
import {Stack, Heading, Text, Flex, Button, Box} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Caption = ({ title, text, button_text, button_link }) => {
    return (
        <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Flex justifyContent={['center', 'flex-start']} alignItems={['center', 'flex-start']} mt={'10%'}>
                <Box>
                    <Flex justifyContent={['center', 'flex-start']}>
                        <Heading color={'white'} fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} mb={'5%'} textAlign={['center', 'left']}>
                            {title}
                        </Heading>
                    </Flex>

                    <Flex justifyContent={['center', 'flex-start']}>
                        <Text color={'white'} fontSize={{ base: 'md', lg: 'lg' }} mb={'5%'} textAlign={['center', 'left']}>
                            {text}
                        </Text>
                    </Flex>

                    <Flex justifyContent={['center', 'flex-start']}>
                        <Link to={button_link}>
                            <Button textTransform="uppercase" borderRadius="none" bg="red.500" p="lg" color="white">
                                {button_text}
                            </Button>
                        </Link>
                    </Flex>
                </Box>
            </Flex>
        </Stack>
    );
};

export default Caption;
