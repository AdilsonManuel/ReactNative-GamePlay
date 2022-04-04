import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, ScrollView, View } from "react-native";
import { SvgProps } from 'react-native-svg';

import { theme } from "../../global/styles/theme";
import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
}

const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

export function Category({
    title,
    icon: Icon,
    checked = false,
    hasCheckBox = false,
    ...rest
}: Props) {

    return (
        <RectButton {...rest}>
            <LinearGradient
                style={styles.container}
                colors={[secondary50, secondary70]}
            >

            </LinearGradient>
        </RectButton>
    )
}