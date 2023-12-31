import { Heading, Spinner, Text, useToast, VStack } from "@chakra-ui/react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {kakaoLogin} from "../api";
import {useQueryClient} from "@tanstack/react-query";

export default function GithubConfirm() {
    const { search } = useLocation();
    const toast = useToast();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const confirmLogin = async () => {
        const params = new URLSearchParams(search);
        const code = params.get("code");
        if (code) {
            const status = await kakaoLogin(code);
            if (status === 200) {
                toast({
                    status: "success",
                    title: "Welcome!",
                    position: "bottom-right",
                    description: "Happy to have you back!",
                });
                queryClient.refetchQueries(["me"]);
                navigate("/");
            } else if (status === 201) {
                toast({
                    status: "success",
                    title: "Welcome!",
                    position: "bottom-right",
                    description: "가입을 환영합니다!",
                });
                queryClient.refetchQueries(["me"]);
                navigate("/");
            }
        }
    };
    useEffect(() => {
        confirmLogin();
    });
    return <VStack justifyContent={"center"} mt={40}>
        <Heading>Processing Log in...</Heading>
        <Text mb={20}>
            Dont't close this page.
        </Text>
        <Spinner size={"xl"}/>
    </VStack>;
}