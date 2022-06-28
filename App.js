import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const HandleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(()=> {
    // Liga flash do celular
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(()=>{
    /**
     * Quando o celular for chacoalhado, mudaremos o toggle
     */
    const subscription = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle);
    });

    // Essa func vai ser chamada quando o componets
    // For ser desmontado
    return () => subscription.remove();
  },[]);

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={HandleChangeToggle}>
        <Image 
         style={toggle ? style.lightingOn : style.lightingOff} 
         source={
           toggle
             ? require('./assets/icons/eco-light.png')
             : require('./assets/icons/eco-light-off.png')   
          } 
        />
        <Image 
         style={style.dioLogo} 
         source={
           toggle
            ? require('./assets/icons/logo-dio.png')
            : require('./assets/icons/logo-dio-white.png')   
          } 
        />
                <Image 
         style={style.igorbeckt} 
         source={
           toggle
            ? require('./assets/icons/igorbeckt-black2.png')
            : require('./assets/icons/igorbeckt-black2.png')   
          } 
        />
      </TouchableOpacity> 
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 250,
    height: 250,
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
  igorbeckt: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 150,
  },
});