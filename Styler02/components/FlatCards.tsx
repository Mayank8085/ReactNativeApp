import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style= {styles.heading} >FlatCards</Text>
      <View style={styles.container} >
        <View style={[styles.card , styles.cardOne]} >
            <Text>Card 1</Text>
        </View>
        <View style={[styles.card , styles.cardTwo]} >
            <Text>Card 2</Text>
        </View>
        <View style={[styles.card , styles.cardThree]} >
            <Text>Card 3</Text>
        </View>
        
        

      </View>
    </View>
    
  )
}

export default FlatCards

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,

    },
    container: {
        flex: 1,
        flexDirection: 'row',
        
        maxWidth: "100%",
        marginTop: 20,
    },
    card: {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    cardOne: {
        backgroundColor: '#EF5354',
    },
    cardTwo: {
        backgroundColor: '#50DBB4',
    },
    cardThree: {
        backgroundColor: '#5DA3FA',
    },
    cardFour: {
        backgroundColor: 'yellow',
    },
})