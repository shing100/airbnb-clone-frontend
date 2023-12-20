import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaComment } from "react-icons/fa";

export default function SocialLogin() {
    return (
        <Box mb={4}>
            <HStack my={8}>
                <Divider />
                <Text textTransform={"uppercase"} color={"gray.500"} fontSize={"xs"} as={"b"}>Or</Text>
                <Divider />
            </HStack>
            <VStack>
                <Button
                    as={"a"} href={"https://github.com/login/oauth/authorize?client_id=02bf9e7b8f88ace61857&scope=read:user,user:email"}
                    leftIcon={<FaGithub />}
                    w="100%"
                >
                    Continue with Github
                </Button>
                <Button leftIcon={<FaComment />} colorScheme={"yellow"} w="100%">Continue with Kakao</Button>
            </VStack>
        </Box>
    )
}