import { create } from "zustand";
import { DriverStore, LocationStore, MarkerData } from "@/types/type";

export const useLocationStore = create<LocationStore>((set) => ({
  userAddress: null,
  userLatitude: null,
  userLongitude: null,
  destinationLongitude: null,
  destinationAddress: null,
  destinationLatitude: null,
  setUserLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    set(() => ({
      userLatitude: latitude,
      userLongitude: longitude,
      userAddress: address,
    }));
  },
  setDestinationLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) =>
    set(() => ({
      destinationLatitude: latitude,
      destinationLongitude: longitude,
      destinationAddress: address,
    })),
}));

export const useDriverStore = create<DriverStore>((set) => ({
  drivers: [] as MarkerData[],
  selectedDriver: null,
  setSelectedDriver: (driveId: number) =>
    set(() => ({ selectedDriver: driveId })),
  setDrivers: (drivers: MarkerData[]) => set(() => ({ drivers: drivers })),
  clearSelectedDriver: () => set(() => ({ selectedDriver: null })),
}));
