import React, {useState} from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Image,
    Container, Flex, Button, Center,Carousel, CarouselProps,
} from '@chakra-ui/react';

import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import Slider from 'react-slick';
import coding_bg from "../assets/coding.jpg";
import {Link, useNavigate} from "react-router-dom";

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function CaptionCarousel() {

    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = useState(null);
    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(0);



    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: 'Modern IT & Software Solutions',
            text:
                "Upgrade your business with our Modern IT & Software Solutions. From custom software development to cybersecurity, we have you covered. Contact us today to learn more.",
            image:
                'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
            button_text: "Get a Quote",
            button_link: "/quote",
        },
        {
            title: 'Learn Programming with Our Expert Instructors',
            text:
                "Are you ready to take your coding skills to the next level? Our new programming lessons offer personalized instruction from experienced programmers. " +
                "From Python to JavaScript, our courses are tailored to your skill level and career goals. Enroll today and start coding your way to success!",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            button_text: "Enroll Now",
            button_link: "/lets-code",
        },
        {
            title: 'Unlock Your Trading Potential: Expert Forex Coaching and Binary Trading Lessons',
            text:
                "Learn to trade like a pro with our Forex coaching and Binary trading lessons. Join us today and start your journey to financial success!",
            image:
                'https://images.unsplash.com/photo-1642790106117-e829e14a795f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1830&q=80',
            button_text: "Start Trading",
            button_link: "/trading",
        },
    ];
    const [currentSlideTitle, setCurrentSlideTitle] = useState(cards[0].button_link);
    const [cardButtonText, setCardButtonText] = useState(cards[0].button_text)
    // Event handler for the afterChange event
    const handleSlideChange = (index) => {
        setCurrentSlide(index);
        setCurrentSlideTitle(cards[index].button_link);
        setCardButtonText(cards[index].button_text);

    };

    return (
        <Box
            position={'relative'}
            height={["90vh", '100vh']}
            width={'full'}
            overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt size="40px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)} afterChange={handleSlideChange}>

                {cards.map((card, index) => (
                    <Box
                        key={index}
                        height={'6xl'}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${card.image})`}

                    >

                        {/* This is the block you need to change, to customize the caption */}
                        <Container size="container.lg" height="600px" position="relative" left={["0","-20%"]} >
                            <Stack
                                spacing={6}
                                w={'full'}
                                maxW={'lg'}
                                position="absolute"
                                top="50%"
                                transform="translate(0, -50%)"
                            >
                                <Box maxW={"500px"} display={"flex"} justifyContent={["center", "flex-start"]} alignItems={["center", "flex-start"]} mt={"10%"}>
                                    <Box>
                                        <Flex justifyContent={["center", "flex-start"]}>
                                            <Heading onClick={() => navigate(card.button_link)} color={"white"} fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} mb={"5%"} textAlign={["center", "left"]}>
                                                {card.title} <strong style={{display: "none"}}>- {card.button_link}</strong>
                                            </Heading>
                                        </Flex>

                                        <Flex justifyContent={["center", "flex-start"]}>
                                            <Text color={"white"} fontSize={{ base: 'md', lg: 'lg' }} mb={"5%"} textAlign={["center", "left"]}>
                                                {card.text}
                                            </Text>
                                        </Flex>

                                        <Flex justifyContent={["center", "flex-start"]}>
                                            <Link to={currentSlideTitle}>
                                                <Button
                                                    textTransform="uppercase"
                                                    borderRadius="none"
                                                    bg="red.500"
                                                    p="lg"
                                                    color="white"
                                                >
                                                    {card.button_text}
                                                </Button>
                                            </Link>
                                        </Flex>
                                    </Box>

                                </Box>

                            </Stack>
                        </Container>
                    </Box>
                ))}
            </Slider>

        </Box>
    );
}


