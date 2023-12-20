import {
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Select,
    useToast,
    VStack,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, FaUserAlt, FaUserSecret } from "react-icons/fa";
import { SignUp } from "../api";
import SocialLogin from "./SocialLogin";

interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface IForm {
    name: string;
    email: string;
    username: string;
    password: string;
}

export default function SignUpModal({ onClose, isOpen }: SignUpModalProps) {
    const { register, handleSubmit, reset } = useForm<IForm>();
    const toast = useToast();
    const queryClient = useQueryClient();
    const mutation = useMutation(SignUp, {
        onSuccess: () => {
            toast({ title: "Welcome!", status: "success" });
            onClose();
            queryClient.refetchQueries(["me"]);
        },
        onError: () => {
            toast({ title: "sign up error!", status: "error" });
            reset();
        },
    });

    const onSubmit = ({
        username,
        password,
        name,
        email
    }: IForm) => {
        mutation.mutate({
            username,
            email,
            name,
            password
        });
    };

    return (
        <Modal onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Sign up</ModalHeader>
                <ModalCloseButton />
                <ModalBody as="form" onSubmit={handleSubmit(onSubmit)}>
                    <VStack>
                        <InputGroup>
                            <InputLeftElement
                                children={
                                    <Box color="gray.500">
                                        <FaUserSecret />
                                    </Box>
                                }
                            />
                            <Input
                                {...register("name", { required: true })}
                                placeholder="name"
                                variant="filled"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement
                                children={
                                    <Box color="gray.500">
                                        <FaEnvelope />
                                    </Box>
                                }
                            />
                            <Input
                                {...register("email", { required: true })}
                                placeholder="email"
                                variant="filled"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement
                                children={
                                    <Box color="gray.500">
                                        <FaUserAlt />
                                    </Box>
                                }
                            />
                            <Input
                                {...register("username", { required: true })}
                                placeholder="username"
                                variant="filled"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement
                                children={
                                    <Box color="gray.500">
                                        <FaLock />
                                    </Box>
                                }
                            />
                            <Input
                                {...register("password", { required: true })}
                                placeholder="password"
                                variant="filled"
                                type="password"
                            />
                        </InputGroup>
                    </VStack>
                    <Button
                        isLoading={mutation.isLoading}
                        w="full"
                        colorScheme="red"
                        mt={4}
                        type="submit"
                    >
                        Sign Up
                    </Button>
                    <SocialLogin />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}