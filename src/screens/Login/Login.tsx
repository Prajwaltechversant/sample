import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'

import { RootStackParamList } from '../../../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoginContextAPI } from '../../context/AuthContext'


type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">

const Login = ({ navigation }: LoginProps) => {

    const {tokenStatus,setTokenStatus} = useContext(LoginContextAPI)
    const [userData, setUserdata] = useState<{ username: String; password: any }>({
        username: "",
        password: ""
    })

    const handleLogin =async () => {

        const { username, password } = userData
        console.log(userData, "hello world")
        if (!username || !password) {
            Alert.alert("Please fill the form completely")
        }
        else {
            const regeX = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
            const isPasswordvalid = regeX.test(password)
            if(isPasswordvalid){
                // console.log(isPasswordvalid)
                const token =await AsyncStorage.setItem("user","true");
                
                setTokenStatus("true")
            }
            else{
                Alert.alert("Password must contain atleast one Uppercase letter,smaller case letter , Number and One special charactor")
            }

        }

    }
    return (
        <View style={styles.container}>
            <View >
                <View >
                    <Text style={styles.label}>
                        User name
                    </Text>
                    <TextInput placeholder='Enter Your Username' style={styles.inputBox}
                        onChangeText={(e) => setUserdata({ ...userData, username: e })}
                    />
                </View>
                <View >
                    <Text style={styles.label}>
                        Password
                    </Text>
                    <TextInput
                        placeholder='Enter Your password'
                        style={styles.inputBox}
                        secureTextEntry
                        onChangeText={(e) => setUserdata({ ...userData, password: e })} />
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={handleLogin} >
                        <Text style={styles.label}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>)
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

    loginBox: {
        backgroundColor: 'white',
        color: 'black'

    }
    , inputBox: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 20,
        color: 'black',
        height: 40,
        width: 200
    },
    label: {
        fontSize: 20,
        fontWeight: '700',
        color: 'white'
    },
    button: {
        backgroundColor: 'green',
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10

    }

})