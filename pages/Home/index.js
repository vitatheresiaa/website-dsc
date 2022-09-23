import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Logo } from '../../assets'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.ikata}>I K A T A </Text>
        <Image source={Logo} style={styles.logo}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  ikata: {
    fontSize: 25,
    fontFamily:'MontserratAlternates-ExtraBold'
  },
  logo: {
    width: 35,
    height: 35
  }
})