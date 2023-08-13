import { Link } from "react-router-dom";
import { Heading, Text, Button, VStack } from "@chakra-ui/react";

export default function NotFound() {
    return <VStack bg={"gray.100"} justifyContent={"center"} minH="100vh">
        <Heading>Page not found.</Heading>
        <Text>
            The page you are looking for does not exist.
        </Text>
        <Link to="/">
            <Button colorScheme="twitter" variant={"link"}>Go home &rarr;</Button>
        </Link>
    </VStack>;
}