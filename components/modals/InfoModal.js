import { Text, View, Button, Modal, StyleSheet, FlatList} from 'react-native'
import React, { Component } from 'react'

const data = 
  [ {"id":0,"loc":"CofC Cistern","artistName":"John Lloyd"},
    {"id":1,"loc":"Charleston Tech Center","artistName":"Rachel Berry"},
    {"id":2,"loc":"CofC Lodge","artistName":"Austin Green"},
    {"id":3,"loc":"Harbor Walk East","artistName":"Beckham Martin"},]

export default class InfoModal extends Component {
  render() {
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
            <Text>{data[this.props.locID].loc}</Text>
            <Text>{data[this.props.locID].artistName}</Text>
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
    height: '80%',
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