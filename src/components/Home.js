import React, {useEffect} from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Flex, Heading,
    Icon,
    Image, Stack,
    Text
} from "@chakra-ui/react";
import CaptionCarousel from "../utils/carousel";
import CardsOverview from "../utils/cards";
import {HiDesktopComputer} from "react-icons/hi";
import {TfiHeadphoneAlt} from "react-icons/tfi";
import it_people from "../assets/business-people-working-together.jpg";
import {AiOutlineCheck} from "react-icons/ai";
import {AiOutlineArrowRight, AiOutlineCloudServer, AiOutlineFundProjectionScreen, AiOutlineAntCloud} from "react-icons/ai";
import {FaNetworkWired} from "react-icons/fa";
import {MdOutlineSecurity} from "react-icons/md";
import GridBlurredBackdrop from "../utils/testimonials";
import selective_focus from "../assets/selective-focus-of-information-security-analysts-using-charts-on-computer-monitors-while-working-in-e1618327034475.jpg";
import web_developer from "../assets/web-developer-busy-working-e1618327055136.jpg";
import working_team from "../assets/working-team-of-interior-designers-1024x682.jpg";
import CaseStudies from "../utils/caseStudies";
import {SiGoogletagmanager, SiPaloaltosoftware} from "react-icons/si";
import {Link} from "react-router-dom";
import {services} from "../misc/services";
import {useCollection} from "react-firebase-hooks/firestore";
import {db} from "../firebase";
import Loader from "../utils/Loader";
import {Helmet} from "react-helmet-async";

const Home = () => {

    //fetch blogs from firestore using useCollection
    const [blogs, loading, error] = useCollection(db.collection('blogs'));

    if (loading) {
        return Loader;
    }

    return (
        <Box mt={-100} pb={"5%"}>
            <Helmet>
                <title>Home | Legacys Studio</title>
                <meta name="description"
                      content="Legacy's Studio: IT solutions for businesses and individuals. Creative team of designers and developers ready to solve IT problems. Book a consultation to build together."/>
                <link rel={'canonical'} href={"/"}/>
            </Helmet>
            <Box height={["90vh", "100vh"]}>
                <CaptionCarousel/>
            </Box>

                {/*<Beginning of cards>*/}
                    <Box m={"-6% 0 0 0"}>
                        <Flex justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"}>
                            <CardsOverview
                                title={"IT Expertise"}
                                icon={HiDesktopComputer}
                                description={"We are a team of creative designers and developers. Our team consists of\n" +
                                    "                        all rounded and talented individuals ready to solve your IT problems. Book a consultation with us and\n" +
                                    "                            let us build something together."}
                            />
                            <CardsOverview
                                title={"24/7 IT Support"}
                                icon={TfiHeadphoneAlt}
                                description={"Get fast and reliable solutions to your IT problems anytime, anywhere. Our 24/7 support service covers server monitoring, " +
                                    "database support, " +
                                    "network security and software development. Contact us through phone, email, chat or social media."}
                            />
                            <CardsOverview
                                button={true}
                                title={"Custom Request"}
                                description={"send us a message and we will get back to you as soon as possible" +
                                    "our team is working 24/7 to make sure you get the best service possible" +
                                    "we are here to help you."}

                            />
                        </Flex>
                    </Box>
                    {/*<End of cards>*/}

                    {/*<Beginning of About us>*/}

                    <Box>

                        <Flex justifyContent={"center"} alignItems={"center"} p={"5% 2%"} h={"auto"} flexWrap={"wrap"}>
                            {/*Left side*/}
                            <Box h={["50vh", "110vh"]} w={"600px"}>
                                <Image h={["100%", "100%"]} w={"100%"} src={it_people} alt={"it_people"} objectFit={"cover"}/>
                            </Box>

                            {/*End of Left side*/}

                            {/*Start of Right side*/}

                            <Box h={["50vh","110vh"]} w={"600px"} p={"1% 2%"} mb={["550px", "0"]}>
                                <Box display={"flex"} alignItems={"flex-start"}>
                                    <Box>
                                        <Box padding={["0","2%"]}>
                                            <Text fontSize={"xl"}  textTransform={"uppercase"} color={"red.500"}>About us</Text>
                                        </Box>
                                        <Box padding={"2%"}>
                                            <Text fontSize={"4xl"} fontWeight={"bold"} textTransform={"capitalize"}>
                                                Let us be your partners preferred IT service provider
                                            </Text>
                                        </Box>
                                        <Box padding={"2%"}>
                                            <Text fontSize={"l"} >
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur culpa eum, molestiae sed tempora voluptate voluptatem? Ab dolor eum incidunt, maiores natus neque nostrum omnis placeat rerum tenetur voluptates.
                                            </Text>
                                        </Box>
                                        <Box padding={"2% 10%"}>
                                            <Flex h={"auto"} borderLeft={"4px"} borderColor={"red.500"} p={"2%"}>
                                                <Box h={"100%"} >

                                                </Box>
                                                <Box>
                                                    <Text fontSize={"l"}  fontWeight={"bold"} p={"0 2% 2% 2%"} fontStyle={"italic"}>
                                                        As one of the world's largest IT Service Providers, our deep expertise and broad portfolio of
                                                        services enable us to help clients improve their business performance and reduce costs.
                                                    </Text>
                                                    <Text fontSize={"l"} p={"0 2%"} color={"gray"}>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa facilis molestiae nostrum,
                                                        numquam possimus quod repellat? Fugiat impedit iure modi optio perferendis quos sed?
                                                        Dolore dolorum incidunt minus velit.
                                                    </Text>

                                                </Box>

                                            </Flex>

                                        </Box>
                                        <Box padding={"2%"}>
                                            <Link to={"/about"}>
                                            <Button mt={"2%"} textTransform={"uppercase"} colorScheme={"red"} borderRadius={"none"} p={"3% 8%"} fontSize={"l"}>Get Started</Button>
                                            </Link>
                                        </Box>

                                        <Box p={"2%"}>
                                            <Box>
                                                <Flex p={"2% 0"} alignItems={"center"}>
                                                    <Icon as={AiOutlineCheck} mr={"2%"} color={"red.500"} fontSize={"3xl"} fontWeight={"bold"}/>
                                                    <Text>We are committed to providing quality IT Services</Text>
                                                </Flex>
                                                <Flex  alignItems={"center"}>
                                                    <Icon as={AiOutlineCheck} mr={"2%"} color={"red.500"} fontSize={"3xl"} fontWeight={"bold"}/>
                                                    <Text>Provide by experts to help challenge critical activities</Text>
                                                </Flex>
                                                <Flex pb={"2%"} alignItems={"center"}>
                                                    <Icon as={AiOutlineCheck} mr={"2%"} color={"red.500"} fontSize={"3xl"} fontWeight={"bold"}/>
                                                    <Text>Really know the true needs and expectations of customers</Text>
                                                </Flex>
                                            </Box>
                                        </Box>
                                    </Box>

                                </Box>

                            </Box>

                            {/*End of Right side*/}


                        </Flex>


                    </Box>

                    {/*<End of About us>*/}

                    {/*<Beginning of Services>*/}

                    <Box>
                        {/*Start of Intro text*/}
                        <Flex justifyContent={"center"} alignItems={"center"} p={"2%"} h={"auto"} flexWrap={"wrap"}>
                            <Box h={"auto"} maxW={"350px"} >
                                <Text fontSize={"16px"} fontFamily={"sans-serif"}  textTransform={"uppercase"} fontWeight={"bold"} color={"red.500"} p={"2%"} letterSpacing={"0.2em"}>Our Services</Text>
                                <Text fontSize={"38px"} fontFamily={"sans-serif"} fontWeight={"bold"} textTransform={"capitalize"} p={"2%"}>Solutions & Focus Areas</Text>
                                <Text color={"gray"} p={"2%"}>
                                    Get in touch with us today and let us help you with your IT needs. We offer a wide range of services...
                                </Text>
                                {/*Link the button to "/services"*/}

                                <Button as={Link} to="/services" mt={"2%"} textTransform={"uppercase"} colorScheme={"red"} borderRadius={"none"} p={"25px 35px"} fontSize={"16px"} >All Services</Button>
                            </Box>
                            {/*end of Intro text*/}

                            {/*Cards*/}

                            {services.map((service, index) => {
                                return (
                                    <Flex key={index}>
                                        <Card maxW='sm' boxShadow={"2xl"} variant='outline' m={"2%"}>
                                            <CardBody>
                                                <Box h={"450px"} w={["320px"]} >
                                                    <Box >
                                                        <Flex h={'120px'} justifyContent={"center"} p={"5%"}>
                                                            <Icon as={service.icon} w={"100px"} h={"100%"} color={"red.500"} _groupHover={{color: "white"}} />
                                                        </Flex>
                                                    </Box>

                                                    <Flex justifyContent={"center"} alignItems={"center"}  >
                                                        <Text fontSize={["xl","2xl"]} fontWeight={"bold"} _groupHover={{color: "white"}}>{service.title}</Text>
                                                    </Flex>

                                                    <Flex justifyContent={"center"} alignItems={"center"} p={"3%"}>
                                                        <Text textAlign={"center"} color={"gray"} fontSize={"md"} _groupHover={{color: "white"}}>{service.description}</Text>
                                                    </Flex>
                                                    <Box>
                                                        <Flex justifyContent={"center"} p={"3%"} >

                                                           <Link to={`services/${service.id}`}>
                                                            <Button background={"transparent"} color={"red.500"} textTransform={"uppercase"} rightIcon={<AiOutlineArrowRight/>} >Read more</Button>
                                                           </Link>
                                                        </Flex>
                                                    </Box>
                                                </Box>
                                            </CardBody>
                                        </Card>

                                    </Flex>
                                )

                            })}


                            {/*Outro*/}
                            <Box h={"auto"} maxW={"350px"} m={"2% 0"}>
                                <Text textAlign={"center"} fontSize={"16px"} fontFamily={"sans-serif"}  textTransform={"uppercase"} fontWeight={"bold"} color={"red.500"} p={"2%"} letterSpacing={"0.2em"}>The Team</Text>
                                <Text textAlign={"center"} fontSize={"30px"} fontFamily={"sans-serif"} fontWeight={"bold"} textTransform={"capitalize"} p={"2%"}>Meet our team of dedicated individuals</Text>
                                <Text textAlign={"center"} color={"gray"} p={"2%"}>We have a team of talented and dedicated individuals working round the clock, 24/7, there to turn your ideas into reality. </Text>
                                <Flex justifyContent={"center"} alignItems={"center"} p={"2%"}>
                                    <Button mt={"2%"} textTransform={"uppercase"} colorScheme={"red"} borderRadius={"none"} p={"25px 35px"} fontSize={"16px"}>Meet The Team</Button>

                                </Flex>
                            </Box>
                            {/*End of Outro*/}

                            {/*Cards*/}

                        </Flex>
                    </Box>

                    {/*End of Services*/}

                {/*Case Studies*/}
                <Box>
                    <Box>
                        <Flex justifyContent={"center"} alignItems={"center"} flexDirection={"column"} p={"2%"}>
                            <Text fontSize={"16px"} fontFamily={"sans-serif"}  textTransform={"uppercase"} fontWeight={"bold"} color={"red.500"} letterSpacing={"0.2em"}>Case Studies</Text>
                            <Text fontSize={"38px"} fontFamily={"sans-serif"} fontWeight={"bold"} textTransform={"capitalize"}>Solutions & Focus Areas</Text>
                            <Text color={"gray"}>
                                Get in touch with us today and let us help you with your IT needs. We offer a wide range of services...
                            </Text>
                        </Flex>
                        <Flex alignItems={"center"}>
                            <Flex justifyContent={"center"} w={"100%"} flexWrap={"wrap"}>
                                <CaseStudies
                                    id={1}
                                    image={selective_focus}
                                    title={"Workflow Management"}
                                    icon={SiGoogletagmanager}
                                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur autem blanditiis commodi dolorum ea ipsam tempora vel! Architecto assumenda labore omnis optio quam! Ab aperiam ipsa ipsam iste soluta!"}
                                    subTitle={"IT Management"}
                                />
                                <CaseStudies
                                    id={2}
                                    image={working_team}
                                    title={"IT Practices In Cloud"}
                                    icon={AiOutlineAntCloud}
                                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur autem blanditiis commodi dolorum ea ipsam tempora vel! Architecto assumenda labore omnis optio quam! Ab aperiam ipsa ipsam iste soluta!"}
                                    subTitle={"Cloud Computing"}
                                />
                                <CaseStudies
                                    id={3}
                                    image={web_developer}
                                    title={"Software for Business"}
                                    icon={SiPaloaltosoftware}
                                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur autem blanditiis commodi dolorum ea ipsam tempora vel! Architecto assumenda labore omnis optio quam! Ab aperiam ipsa ipsam iste soluta!"}
                                    subTitle={"Software Development"}
                                />
                            </Flex>

                        </Flex>

                    </Box>
                </Box>
                {/*End of Case Studies*/}
                {/*Latest News and Blogs*/}

                <Box p={"5%"}>
                    <Flex justifyContent={"center"} alignItems={"center"} flexDirection={"column"} p={"5%"}>
                        <Text fontSize={"38px"} fontFamily={"sans-serif"} fontWeight={"bold"} textTransform={"capitalize"}>Latest News and Blogs</Text>
                        <Text fontSize={"xl"}>Stay up-to-date with the latest news and trends in the fast-paced world of IT by exploring our blog.</Text>

                    </Flex>
                    <Flex>
                        {loading ? (
                            <Loader/>
                        ) : error ? (
                            <p>Error: {error.message}</p>
                        ) : (
                            blogs.docs?.map((blog, index) => (
                                <Box
                                    m={"2px"}
                                    border={"1px solid"}
                                    borderColor={"red.200"}
                                    key={index}
                                    flexBasis={["100%", "33.3333%"]}
                                >
                                    <Flex alignItems={"center"} justifyContent={"center"}>
                                        <Box>
                                            <Image
                                                src={blog.data().imageUrl}
                                                alt={"blog image"}
                                                w={"100%"}
                                                h={"250px"}
                                                objectFit={"cover"}
                                            />
                                            <Box padding={"2%"}>
                                                <Text fontSize={"20px"} p={"2% 0"} fontWeight={"bold"}>
                                                    {blog.data().title}
                                                </Text>
                                                <Text color={"gray"} mb={"2%"}>
                                                    {blog.data().excerpt}
                                                </Text>
                                                <Link
                                                    href={"#"}
                                                    color={"red.500"}
                                                    p={"2% 0"}
                                                    to={`news-and-blogs/${blog.id}`}
                                                >
                                                    Read More >>
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Flex>
                                </Box>

                            ))
                        )}


                    </Flex>
                </Box>
                {/*End of News and blogs*/}

                    {/*Testimonials Section*/}

                    <Box>

                        <GridBlurredBackdrop/>

                    </Box>
                    {/*End of Testimonials Section*/}



                </Box>
    );
};

export default Home;
