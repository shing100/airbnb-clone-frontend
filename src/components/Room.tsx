import { Box, Button, Grid, HStack, Image, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import {FaCamera, FaRegHeart, FaStar} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

interface IRoomProps {
    imageUrl: string,
    name: string,
    rating: number,
    city: string,
    country: string,
    address: string,
    price: number,
    pk: number,
    isOwner: boolean
}

export default function Room({
    pk,
    imageUrl,
    name,
    address,
    rating,
    city,
    country,
    price,
    isOwner
}: IRoomProps) {
    const gray = useColorModeValue("gray.600", "gray.300");
    const navigate = useNavigate();
    const onCameraClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate(`/rooms/${pk}/photos`);
    };
    return (
        <Link to={`/rooms/${pk}`}>
            <VStack spacing={"-0.5"} alignItems={"flex-start"}>
            <Box
                w="100%"
                position="relative"
                overflow={"hidden"}
                mb={3}
                rounded="2xl"
            >
                {imageUrl ? (
                    <Image objectFit={"cover"} minH="280" src={imageUrl} />
                ) : (
                    <Box minH="280px" h="100%" w="100%" p={10} bg="green.400" />
                )}
                <Button variant={"unstyled"} position={"absolute"} top={0} right={0} onClick={onCameraClick} color={"white"}>
                    {isOwner ? <FaCamera size="20px" /> : <FaRegHeart size="20px" />}
                </Button>
            </Box>
            <Box>
                <Grid gap={2} templateColumns={"12fr 1fr"}>
                    <Text display={"block"} as={"b"} noOfLines={1} fontSize={"md"}>{name}</Text>
                    <HStack _hover={{
                        color: "red.100"
                    }} alignItems={"center"}>
                        <FaStar size={12} />
                        <Text fontSize={"sm"}>{rating}</Text>
                    </HStack>
                    <Text fontSize={"sm"} color={gray}>{city}, {country}</Text>
                </Grid>
            </Box>
            <Text fontSize={"sm"} color={gray}>
                <Text as={"b"}>{price}</Text> / night
            </Text>
        </VStack>
        </Link>
    )
}