import { Text, View, Button, Modal, StyleSheet, FlatList, Pressable} from 'react-native'
import React, { Component } from 'react'

export default class LocationModal extends Component {
  render() {
    const onInfoPress = (id) => {
      this.props.setLocID(id)
      this.props.setInfoModalVisible(true)
    }
    return (
      <Modal
      animationType='fade'
      transparent={true}
      visible={this.props.isVis}
      onRequestClose={() => {
        alert.alerg('Modal has been closed')
        //setModalVisible(true)
      }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <FlatList
            data={[
              {key: 0, name: 'CofC Cistern'},
              {key: 1, name: 'Charleston Tech Center'},
              {key: 2, name: 'CofC Lodge'},
              {key: 3, name: 'Harbor Walk East'},
            ]}
            renderItem={({item}) => 
            <Pressable onPress={ () => onInfoPress(item.key)}>
              <Text style={styles.item}>{item.name}</Text>
            </Pressable>
            }
          />
          <Button title='Close' onPress={this.props.isVisFunc} />
          </View>
        </View>
      </Modal>
    )
  }
}

var styles = StyleSheet.create({ 
  modalView: {
    width: '90%',
    height: '60%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})