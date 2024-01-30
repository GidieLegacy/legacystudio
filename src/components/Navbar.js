
import {
    Box,
    Button,
    Flex,
    IconButton,
    Image,
    Link,
    Popover, PopoverArrow, PopoverBody,
    PopoverContent, PopoverHeader,
    PopoverTrigger,
    Stack,
    Text
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import ls_logo from "../assets/ls-logo.png";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../firebase";
import {MdNotifications} from "react-icons/md";
import {useCollection} from "react-firebase-hooks/firestore";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [firebaseUser, loading, error] = useAuthState(auth);
    const [requests, setRequests] = useState([]);
    const [unreadRequests, setUnreadRequests] = useState(0);
    const [formattedDate, setFormattedDate] = useState('');
    const [showMore, setShowMore] = useState(false);
    const [data, requestLoading, requestError] = useCollection(db.collection('projectRequests')
        .where('viewed', '==', false));

    const projectRequests = data ? data.docs.map((doc) => ({ id: doc.id, ...doc.data() })) : [];

    const toggle = () => setIsOpen(!isOpen);

    const getRequests = async () => {
        db.collection('projectRequests').onSnapshot((snapshot) => {
            setRequests(snapshot.docs.map((doc) => doc.data()));
            //count the number of requests whose viewed property is false
             const unreadRequests = requests.filter((request) => request.viewed === false);
             setUnreadRequests(unreadRequests.length);
        }
    )
    }

    useEffect(() => {
        projectRequests.forEach((request) => {
            const firebaseTimestamp = request.timestamp?.toDate();

                if (firebaseTimestamp) {
                const formattedDate = firebaseTimestamp.toLocaleDateString();
                setFormattedDate(formattedDate);
            }
        });
        getRequests();

    }, [firebaseUser, data, requests]);

    const handleReadMoreClick = (request) => {
        setShowMore(!showMore);

        if (!request.viewed) {
            console.log('request', request.id);
            db.collection('projectRequests').doc(request.id).update({
                viewed: true,
            }, {merge: true});
        }
    };

    return (
        <Flex
            zIndex={100}
            position={"sticky"}
            align="center"
            justify="space-between"
            wrap="wrap"
            pr={4}
            w="100%"
            bg={["red.500", "red.500", "blackAlpha.700", "blackAlpha.700"]}
            color={["black", "black", "white", "white"]}
            borderBottom="1px solid"
            borderColor="gray"

        >


            <Box  fontSize="3xl" color="blue.400" fontWeight="bold" h={"100%"}>
                <Flex justifyContent={"center"} alignItems={"center"}>
                    <Link href={"/"} color={"blue.400"}>
                        <Image alt={"logo"} src={ls_logo} w={["250px", "300px"]} objectFit={"cover"} h={"90px"}/>
                    </Link>
                    {firebaseUser != null && (
                        <Popover>
                            <PopoverTrigger>
                                <Box position="relative">
                                    <IconButton
                                        size={"lg"}
                                        aria-label="notification"
                                        bg={"transparent"}
                                        border={"1px solid white"}
                                        color={"white"}
                                        icon={<MdNotifications />}
                                    />
                                    <Text
                                        position="absolute"
                                        top="-2px"
                                        right="-2px"
                                        bg="red.500"
                                        color="white"
                                        borderRadius="full"
                                        fontSize="sm"
                                        fontWeight="bold"
                                        px={2}
                                        py={1}
                                    >
                                        {unreadRequests}
                                    </Text>
                                </Box>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverHeader color={"red.500"} pt={4} fontSize={"16px"} borderBottom="1px">
                                    All Requests
                                </PopoverHeader>
                                <PopoverBody>
                                    {requestLoading && <p>Loading...</p>}
                                    {projectRequests.length > 0 ? (
                                        projectRequests.map((request) => (
                                            <Box
                                                key={request.id}
                                                borderBottom={"1px"}
                                                onClick={() => handleReadMoreClick(request)}
                                                cursor="pointer"
                                            >
                                                <Flex justifyContent={"space-between"}>
                                                    <Text color={request.viewed ? "blackAlpha.700" : "black"} fontSize={request.viewed ? "14px" : "15px"} fontWeight={"bold"}>
                                                        {request.name}
                                                    </Text>
                                                    <Text color={request.viewed ? "blackAlpha.700" : "black"} fontSize={request.viewed ? "12px" : "13px"}>
                                                        {request.timestamp?.toDate().toLocaleDateString()}
                                                    </Text>
                                                </Flex>

                                                <Text overflow="hidden" maxH={showMore ? "none" : "45px"} color={request.viewed ? "blackAlpha.700" : "black"} fontSize={request.viewed ? "12px" : "sm"}>
                                                    {request.message}
                                                </Text>
                                            </Box>
                                        ))
                                    ) : (
                                        <Flex  justifyContent={"center"} alignItems={"center"}>
                                            <Text fontSize={"14px"}>No requests yet</Text>
                                        </Flex>
                                    )}
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    )}

                </Flex>

            </Box>

            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isLoggedIn={firebaseUser !== null} isOpen={isOpen} />
        </Flex>
    );
};
const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="#fff"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill={"#fff"}
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
        <Link href={to}>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </Link>
    );
};

const MenuLinks = ({ isOpen, isLoggedIn }) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"

                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
                fontWeight="bold"
            >
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/about">About us</MenuItem>
                <MenuItem to="/services">Services </MenuItem>
                <MenuItem to="/projects">Projects </MenuItem>
                <MenuItem to="/contact-us">Contact us </MenuItem>
                <MenuItem to="/quote" isLast>
                    {isLoggedIn ? (
                        <Link href="/manage-projects">
                            <a>
                                <Button
                                    size="lg"
                                    borderRadius={"none"}
                                    color={"white"}
                                    mb={2}
                                    w={["100%", "auto"]}
                                    bg={["blue.400", "red.500"]}
                                    _hover={{
                                        bg: ["black.100", "black.100", "black.600", "black.600"],
                                    }}
                                >
                                    Manage Projects
                                </Button>
                            </a>
                        </Link>
                    ) : (
                        <Link href="/quote">
                            <a>
                                <Button
                                    size="lg"
                                    borderRadius={"none"}
                                    color={"white"}
                                    mb={2}
                                    w={["100%", "auto"]}
                                    bg={["blue.400", "red.500"]}
                                    _hover={{
                                        bg: ["black.100", "black.100", "black.600", "black.600"],
                                    }}
                                >
                                    Get a quote
                                </Button>
                            </a>
                        </Link>
                    )}
                </MenuItem>

            </Stack>
        </Box>
    );
};


export default Navbar;

