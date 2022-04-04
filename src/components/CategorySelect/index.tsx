import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./style";


export function CategorySelect() {

    return (
        <ScrollView
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}

        >
            {
                /*                 categories.map(category => (
                                    <Category
                                    />
                                )) */
            }
        </ScrollView>
    )
}