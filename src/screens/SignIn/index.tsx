import React, { useState } from "react";
import { Text, Image, View, StatusBar } from "react-native";
import { styles } from "./style"
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from "../../components/ButtonIcon"
import { useNavigation } from "@react-navigation/native";


export function SignIn() {
    const navigation = useNavigation()
    function hanleSignIn() {
        navigation.navigate('Home')
    }

    const [text, setText] = useState('')


    return (
        <View style={styles.container}>

            <Image source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch" />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {`\n`}
                    e Organize suas{`\n`}
                    jogatinas{`\n`}
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{`\n`}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon
                    title="Entrar com o Discord"
                    onPress={hanleSignIn}
                />
            </View>

        </View >
    )
}