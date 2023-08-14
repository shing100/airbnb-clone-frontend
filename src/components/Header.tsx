import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "./LoginModal";
import { Box, Button, HStack, IconButton, LightMode, Stack, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SignUpModal from "./SignUpModal";

export default function Header() {
    const { isOpen: isLoginOpen, onClose: onLoginClose, onOpen: onLoginOpen } = useDisclosure();
    const { isOpen: isSignUpOpen, onClose: onSignUpClose, onOpen: onSignUpOpen } = useDisclosure();
    const { toggleColorMode } = useColorMode();
    const logoColor = useColorModeValue("red.500", "red.200");
    const Icon = useColorModeValue(FaMoon, FaSun);
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
                <Button onClick={onLoginOpen}>Log in</Button>
                <LightMode>
                    <Button onClick={onSignUpOpen} colorScheme="red">Sign up</Button>
                </LightMode>
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
        </Stack>
    )
}