import {TouchableOpacity,Text ,ScrollView,StyleSheet,View, ImageBackground} from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Fontisto from "react-native-vector-icons/Fontisto";

const Navbar = ({Home,favorite}) => {
    return (
        <View
          style={[
            styles.container,
            {
              flexDirection: 'column',
            },
          ]}>
          <View style={{flex:1, backgroundColor: '#f0f8ff'}} >
            <View style={{flexDirection:'row',justifyContent:'space-around',paddingVertical:10}}>
            <TouchableOpacity onPress={Home}>
                <Fontisto name="home" style={{ fontSize:30 ,color:"black"}}> 
                </Fontisto>
            </TouchableOpacity>
            <TouchableOpacity onPress={favorite}>
            <MaterialIcons name='favorite' style={{fontSize:30,color:'black'}}>
            </MaterialIcons>
            </TouchableOpacity>
    
            </View>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    });

export default Navbar

