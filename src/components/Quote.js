import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import HeroSection from '../misc/heroSection';

const Quote = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement the logic to submit the form data for a quote request
        console.log('Form data submitted:', formData);
    };

    return (
        <Box mt={-110}>
            <HeroSection title={'Get a quote'} path={'/quote'} />
            <Box mt={20} p={8} boxShadow="lg" rounded="lg" bg="white" mx="auto" maxWidth="600px">
                <form onSubmit={handleSubmit}>
                    <FormControl mb={4}>
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="teal">
                        Request Quote
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default Quote;
