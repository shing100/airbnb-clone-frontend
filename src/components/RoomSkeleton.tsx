import { Box, HStack, Skeleton } from "@chakra-ui/react";

export default function RoomSkeleton() {
  return (
    <Box>
      <Skeleton rounded="2xl" height={"280px"} mb={4} />
      <HStack justifyContent={"space-between"} mb={2}>
        <Skeleton rounded="lg" width="70%" height={4} mb={1} />
        <Skeleton rounded="lg" width="13%" height={4} />
      </HStack>
      <Skeleton rounded="lg" width="40%" height={4} mb={1} />
      <Skeleton rounded="lg" width="30%" height={4} mb={3} />
    </Box>
  );
}