import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaComment } from "react-icons/fa";

export default function SocialLogin() {
    const kakaoParams = {
        client_id: "6c0ef5311183aafd93e20e76c0444e77",
        redirect_uri: "http://127.0.0.1:3000/social/kakao",
        response_type: "code",
    }
    const kParams = new URLSearchParams(kakaoParams).toString();
    const githubParams = {
        client_id: "02bf9e7b8f88ace61857",
        redirect_uri: "http://127.0.0.1:3000/social/github",
        scope: "read:user,user:email",
    }
    const gParams = new URLSearchParams(githubParams).toString();
    return (
        <Box mb={4}>
            <HStack my={8}>
                <Divider />
                <Text textTransform={"uppercase"} color={"gray.500"} fontSize={"xs"} as={"b"}>Or</Text>
                <Divider />
            </HStack>
            <VStack>
                <Button
                    as={"a"} href={`https://github.com/login/oauth/authorize?${gParams}`}
                    leftIcon={<FaGithub />}
                    w="100%"
                >
                    Continue with Github
                </Button>
                <Button
                    as={"a"}
                    href={`https://kauth.kakao.com/oauth/authorize?${kParams}`}
                    leftIcon={<FaComment />} colorScheme={"yellow"} w="100%">Continue with Kakao</Button>
            </VStack>
        </Box>
    )
}