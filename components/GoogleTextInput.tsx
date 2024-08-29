import { Image, Text, View } from "react-native";
import { GoogleInputProps } from "@/types/type";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { icons } from "@/constants";

const customLocations = [
  {
    description: "Palo Alto, CA, USA",
    geometry: { location: { lat: 37.4419, lng: -122.143 } },
  },
  {
    description: "San Francisco, CA, USA",
    geometry: { location: { lat: 37.7749, lng: -122.4194 } },
  },
  // Add more locations as needed
];

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => (
  <View
    className={`flex flex-row justify-center items-center relative z-50 rounded-xl ${containerStyle} mb-5`}
  >
    <GooglePlacesAutocomplete
      fetchDetails={true}
      placeholder="Where to?"
      debounce={500}
      styles={{
        textInputContainer: {
          alignItems: "center",
          justifyContent: "center", // Added missing quote here
          borderRadius: 20,
          marginHorizontal: 20,
          position: "relative",
          shadowColor: "#d4d4d4",
        },
        textInput: {
          backgroundColor: textInputBackgroundColor || "white",
          fontSize: 16,
          fontWeight: "600",
          marginTop: 5,
          width: "100%",
          borderRadius: 200,
        },
        listView: {
          backgroundColor: textInputBackgroundColor || "white",
          position: "relative", // Added missing comma here
          top: 0,
          width: "100%",
          borderRadius: 10,
          shadowColor: "#d4d4d4",
          zIndex: 99,
        },
      }}
      onPress={(data, details = null) => {
        handlePress({
          latitude: 37.78825,
          longitude: -122.4324,
          address: "palo alto",
        });
      }}
      query={{
        key: "",
        language: "en",
      }}
      renderLeftButton={() => (
        <View className="justify-center items-center w-6 h-6">
          <Image
            source={icon ? icon : icons.search}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </View>
      )}
      textInputProps={{
        placeholderTextColor: "gray",
        placeholder: initialLocation ?? "where to?",
      }}
      predefinedPlaces={customLocations} // Pass your custom data here
      predefinedPlacesAlwaysVisible={true}
    />
  </View>
);

export default GoogleTextInput;
