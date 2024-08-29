import { View, Text } from "react-native";
import { useLocationStore } from "@/store";
import RideLayout from "@/components/RideLayout";

const findRide = () => {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();
  return (
    <RideLayout title="Ride">
      <Text className="text-2xl">You are here: {userAddress}</Text>
      <Text className="text-2xl">You are here: {destinationAddress}</Text>
    </RideLayout>
  );
};

export default findRide;
