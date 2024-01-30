import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

const Gallery = ({ images }) => {
    return (
        <Box>
            <SimpleGrid columns={7} spacing={4}>
                {images.map((image, index) => (
                    <Box key={index} h="200px" bgImage={`url(${image})`} bgSize="cover" bgPos="center" backgroundRepeat={"no-repeat"} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Gallery;
