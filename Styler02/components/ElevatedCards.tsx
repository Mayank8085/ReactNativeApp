import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style ={styles.heading} >ElevatedCards</Text>
      <ScrollView horizontal={true} >
        <View style={[styles.card , styles.elevatedCards]} >
            <Text>Card 1</Text>
        </View>
        <View style={[styles.card , styles.elevatedCards]} >
            <Text>Card 2</Text>
        </View>
        <View style={[styles.card , styles.elevatedCards]} >
            <Text>Card 3</Text>
        </View>
        <View style={[styles.card , styles.elevatedCards]} >
            <Text>Card 4</Text>
        </View>
        <View style={[styles.card , styles.elevatedCards]} >
            <Text>Card 4</Text>
        </View>
        </ScrollView>    
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom:10

    },
    card: {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    elevatedCards: {
        backgroundColor: '#fff',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        margin: 10,
    }

})