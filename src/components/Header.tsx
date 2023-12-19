import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "./LoginModal";
import { Avatar, Box, Button, HStack, IconButton, LightMode, Stack, useColorMode, useColorModeValue, useDisclosure, Menu, MenuButton, MenuItem, MenuList, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import useUser from "../lib/useUser";
import { logOut } from "../api";

export default function Header() {
    const { userLoading, isLoggedIn, user } = useUser();
    const { isOpen: isLoginOpen, onClose: onLoginClose, onOpen: onLoginOpen } = useDisclosure();
    const { isOpen: isSignUpOpen, onClose: onSignUpClose, onOpen: onSignUpOpen } = useDisclosure();
    const { toggleColorMode } = useColorMode();
    const logoColor = useColorModeValue("red.500", "red.200");
    const Icon = useColorModeValue(FaMoon, FaSun);
    const toast = useToast();
    const onLogOut = async () => {
        const toastId = toast({
            title: "Login out...",
            description: "Sad to see you go...",
            status: "loading",
            position: "bottom-right",
        });
        /* const data = await logOut();
        console.log(data); */
        setTimeout(() => {
            toast.update(toastId, {
                status: "success",
                title: "Done!",
                description: "See you later!",
            });
        }, 5000);
    };
    return (
        <Stack justifyContent={"space-between"} alignItems={"center"} spacing={{
            sm: 4,
            md: 0
        }} py={5} px={{
            sm: 5,
            md: 20,
            lg: 40
        }} direction={{
            sm: "column",
            md: "row"
        }} borderBottomWidth={1}>
            <Box color={logoColor}>
                <Link to="/">
                    <FaAirbnb size={"40"}/>
                </Link>
            </Box>
            <HStack spacing={2}>
            <IconButton onClick={toggleColorMode} variant={"ghost"} aria-label="Toggle dark mode" icon={<Icon />} />
                {!userLoading ? (
                    !isLoggedIn ? (
                        <>
                            <Button onClick={onLoginOpen}>Log in</Button>
                            <LightMode>
                                <Button onClick={onSignUpOpen} colorScheme={"red"}>
                                    Sign up
                                </Button>
                            </LightMode>
                        </>
                    ) : (
                        <Menu>
                            <MenuButton>
                                <Avatar name={user?.name} src={user?.avatar} size={"md"} />
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={onLogOut}>Log out</MenuItem>
                            </MenuList>
                        </Menu>
                    )
                ) : null}
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
        </Stack>
    )
}