import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class DesainTampilan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Belajar Desain Tampilan & Flexbox</Text>
                <View style={styles.garis} />

                {/* Isi */}
                <View style = {styles.isi}>
                    <Text>Flex Direction Row (Vertikal)</Text>
                    <View style={styles.flexVertikal}>
                        <View style={styles.kotakMerah}/>
                        <View style={styles.kotakBiru}/>
                        <View style={styles.kotakKuning}/>
                    </View>

                    <Text>Flex Direction Column (Horizontal)</Text>
                    <View>
                        <View style={styles.kotakMerah}/>
                        <View style={styles.kotakBiru}/>
                        <View style={styles.kotakKuning}/>
                    </View>

                    <Text>Jusify Content</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.kotakMerah}/>
                        <View style={styles.kotakBiru}/>
                        <View style={styles.kotakKuning}/>
                    </View>

                    <Text>Align Item</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={styles.kotakMerah}/>
                        <View style={styles.kotakBiru}/>
                        <View style={styles.kotakKuning}/>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : { padding:30 },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    garis: {
        borderBottomWidth: 1,
        marginTop: 10
    },
    isi: {
        marginTop: 30
    },
    flexVertikal: {
        flexDirection: 'row'
    },
    kotakBiru: {
        width: 50,
        height: 30,
        backgroundColor: 'blue',
    },
    kotakMerah: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
    },
    kotakKuning: {
        width: 50,
        height: 50,
        backgroundColor: 'yellow',
    }
})
