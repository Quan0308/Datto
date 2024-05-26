import { IconProps } from "react-native-vector-icons/Icon";

export interface ITabIconProp {
    iconComponent: React.ComponentType<Partial<IconProps> | undefined>;
    title: string;
    color: string;
    focused: boolean;
    size: number;
}