import { ViroARScene, ViroFlexView, ViroText, ViroConstants, ViroARPlane, ViroBox, ViroImage, ViroARTrackingTargets, ViroARImageMarker } from "@viro-community/react-viro";
import { StyleSheet } from 'react-native'
import React, {useState} from 'react';


export const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Hello World');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
    </ViroARScene>
  );
};

export const ARPlaneTest = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Hello World');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
  return (
    <ViroARScene>
      <ViroImage
        height={2}
        width={2}
        source={{ uri: "./assets/dino.png" }}
      />
    </ViroARScene>
  );
};

export const ARImageTest = () => {
  const [text, setText] = useState('Initializing AR...');
  const [hideRoar, setHideRoar] = useState(false)

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Hello World');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
    <ViroFlexView style={{flexDirection: 'column', padding: 0.05}}
                  width={1}
                  height={1}
                  opacity={1}
                  position={[0, 0, -1]}
                  rotation={[0,0,0]}>
      <ViroImage source={require('./bubble.png')}
                        width={.35}
                        height={.35}
                        position={[.23,.16,0]}
                        style={{flex:1}}
                        resizeMode={'ScaleToFit'}
                        visible={hideRoar}
      />
      <ViroImage source={require('./dino.png')}
                  style={{flex:1}}
                  resizeMode={'ScaleToFit'}
                  onClick={() => setHideRoar(!hideRoar)}
      />
    </ViroFlexView>
    </ViroARScene>
  );
}

export const ARImageMarkerTest = () => {
  ViroARTrackingTargets.createTargets({
    "targetOne": {
      source: require('./scandroid.jpg'),
      orientation: "Up",
      physicalWidth: 1.5 // real world width in meters  
    },
  });

  const anchorFound = () => {
    console.log('Anchor Found')
  }

  const anchorRemoved = () => {
    console.log('Anchor Removed')
  }

  return( 
    <ViroARScene>
      <ViroARImageMarker target={'targetOne'} onAnchorFound={anchorFound} onAnchorRemoved={anchorRemoved} >
        <ViroText text={"Hello World"} scale={[.2, .2, .2]}
          position={[0, 0, -3]} rotation={[-90, 0, 0]} style={styles.helloWorldTextStyle} />
      </ViroARImageMarker>
    </ViroARScene>
  )
}



var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

