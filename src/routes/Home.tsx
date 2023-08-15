import { Grid } from "@chakra-ui/react";
import Room from "../components/Room";
import RoomSkeleton from "../components/RoomSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../api";
import { IRoomList, IRoomData } from "../types";


export default function Home() {
  const { isLoading, data } = useQuery<IRoomData>(["rooms"], getRooms);
  
  return (
    <Grid mt={10} py={5} px={{
      base: 5,
      md: 20,
      lg: 40,
    }} columnGap={4} rowGap={8} templateColumns={{
      base: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",
      xl: "repeat(4, 1fr)",
      "2xl": "repeat(6, 1fr)",
      }}>
      {isLoading ? (
        <>
          {Array.from({ length: 15 }, (_, index) => (
            <RoomSkeleton key={index} />
          ))}
        </>
      ) : null}
      {data?.content.map((room: IRoomList) => (
        <Room
          key={room.pk}
          pk={room.pk}
          address={room.address}
          imageUrl={room.photos[0].file}
          name={room.name}
          rating={room.rating}
          city={room.city}
          country={room.country}
          price={room.price}
        />
      ))}
    </Grid>
  )
}