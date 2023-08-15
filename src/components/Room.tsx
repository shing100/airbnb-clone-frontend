import { Box, Button, Grid, HStack, Image, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

interface IRoomProps {
  imageUrl: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
}

export default function Room({
    imageUrl,
    name,
    rating,
    city,
    country,
    price,
}: IRoomProps) {
    const gray = useColorModeValue("gray.600", "gray.300");
    return (
        <VStack spacing={"-0.5"} alignItems={"flex-start"}>
            <Box position={"relative"} overflow={"hidden"} mb={3} rounded="2xl">
                <Image h="280" src={imageUrl} />
                <Button variant={"unstyled"} position={"absolute"} top={0} right={0} color={"white"}>
                    <FaRegHeart size="20px" />
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
    )
}