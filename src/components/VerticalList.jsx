import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'





const VerticalList = ({ data }) => {
    // console.log(data,"data    a aaa")


    return (
        <View style={{padding:10}}>
            <View style={styles.container}>
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color:'red', fontSize:15}}>{data.title}</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.card}>
                        <Image style={styles.image} source={{
                            uri: `${data.image}`
                        }} />
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text>
                        {data.description}
                    </Text>
                </View>


            </View>
        </View>
    )
}

export default VerticalList

const styles = StyleSheet.create({

    container: {
        flex: 1,
        borderWidth: 1,
        backgroundColor:'gray',
        borderRadius:20
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    body: {
        flex: 4,
        padding:10

    },
    footer: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    card:{
        width:"100%",
        height:"100%",
        padding:2

    },
    image: {
        width: "100%",
        height: 500
    }


})