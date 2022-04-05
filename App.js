import React, {useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, Button, Modal} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
} from '@viro-community/react-viro'
import { HelloWorldSceneAR, ARPlaneTest, ARImageTest, ARImageMarkerTest } from './components/scenes/RScene'
import LocationModal from './components/modals/LocationModal';
import InfoModal from './components/modals/InfoModal'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default () => {
  const [locModalVisible, setLocModalVisible] = useState(false)
  const [infoModalVisible, setInfoModalVisible] = useState(false)
  const [locID, setLocID] = useState(0)

  const setLocVis = (comp) => {
    setLocModalVisible(!locModalVisible)
  }
  const setInfoVis = () => {
    setInfoModalVisible(!infoModalVisible)
  }
  const setInfo = (id) => {
    setLocID(id)
  }
  return (
    <SafeAreaView style={styles.main}>
      <ViroARSceneNavigator autofocus={true} initialScene={{ scene: ARImageTest}} style={styles.f1} />
      <LocationModal isVisFunc={setLocVis} setInfoModalVisible={setInfoModalVisible} isVis={locModalVisible} setLocID={setLocID}/>
      <InfoModal isVisFunc={setInfoVis} isVis={infoModalVisible}
        locID={locID}/>
      <View style={styles.nav}>
        <Pressable onPress={setLocVis}>
          <Text style={styles.navTxt}>Location</Text>
        </Pressable>

        <Text style={styles.navTxt}>Scan</Text>
      </View>
    </SafeAreaView>
  );
};

var styles = StyleSheet.create({
  main: {
    flex: 2,
    justifyContent: 'flex-end'
  },
  nav: {
    flexDirection: 'row',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  navTxt: {
    fontSize: 24,
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
});
