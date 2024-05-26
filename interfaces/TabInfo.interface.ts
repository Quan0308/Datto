import { IconProps } from "react-native-vector-icons/Icon";

export interface ITabInfo  {
    title: string;
    tabName: string;
    component: React.ComponentType<Partial<IconProps> | undefined>;
}