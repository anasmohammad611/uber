import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "@/types/type";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    case "success":
      return "bg-green-500";
    case "danger":
      return "bg-red-500";
    default:
      return "bg-[#0286ff]";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "secondary":
      return "text-gray-100";
    case "primary":
      return "text-black";
    case "success":
      return "text-green-100";
    case "danger":
      return "text-red-100";
    default:
      return "text-white";
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    className={`w-full p-4 rounded-full flex flex-row justify-center items-center shadow-md 
  shadow-neutral-400/70 mb-3 ${getBgVariantStyle(bgVariant)} ${className}`}
    {...props}
  >
    {IconLeft && <IconLeft />}
    <Text
      className={`text-lg font-bold ${getTextVariantStyle(textVariant)} ${className}`}
    >
      {title}
    </Text>
    {IconRight && <IconRight />}
  </TouchableOpacity>
);

export default CustomButton;
