
import {Box, Button, Flex, Image, Link, Stack, Text} from "@chakra-ui/react";
import {useState} from "react";
import ls_logo from "../assets/ls-logo.png";



const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Flex
            zIndex={100}
            position={"sticky"}
            align="center"
            justify="space-between"
            wrap="wrap"
            pr={4}
            w="100%"
            bg={["red.500", "red.500", "transparent", "transparent"]}
            color={["black", "black", "white", "white"]}
            borderBottom="1px solid"
            borderColor="gray"

        >


            <Box  fontSize="3xl" color="blue.400" fontWeight="bold" h={"100%"}>
                <Link href={"/"} color={"blue.400"}>
                    <Image alt={"logo"} src={ls_logo} w={["250px", "300px"]} objectFit={"cover"} h={"90px"}/>
                </Link>
            </Box>

            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
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

const MenuLinks = ({ isOpen }) => {
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
                <MenuItem to="/contact-us">Contact us </MenuItem>
                <MenuItem to="/quote" isLast>
                    <Button
                        size="lg"
                        borderRadius={"none"}
                        color={"white"}
                        mb={2}
                        w={["100%", "auto"]}
                        bg={["blue.400", "red.500"]}
                        _hover={{
                            bg: ["black.100", "black.100", "black.600", "black.600"]
                        }}
                    >
                        Get a quote
                    </Button>
                </MenuItem>
            </Stack>
        </Box>
    );
};


export default Navbar;

