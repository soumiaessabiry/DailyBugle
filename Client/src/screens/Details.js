import { View, Text ,ScrollView,StyleSheet, ImageBackground,TouchableOpacity} from 'react-native'
import React from 'react'
import Logo from "../assets/im2.png";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Navbar from '../components/navBar';

const Details = ({navigation}) => {
    return (
      <View
        style={[
          styles.container,
          {
            flexDirection: 'column',
          },
        ]}>
        <View style={{flex:1.7}} >
          <ImageBackground source={Logo} style={{height:'100%',width:'100%'}} >
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity onPress={() => navigation.replace("Home")}>
            <AntDesign name="leftcircleo" style={{ fontSize:35,color:"white",margin:20}}> 
            </AntDesign>
          </TouchableOpacity>
            <MaterialIcons name='favorite-border' style={{fontSize:35,color:'white',margin:20}}>
            </MaterialIcons>
            </View>
          </ImageBackground>
        </View>
        <View style={{flex:1.5}} >
          <View>
            <View  >
            <View style={styles.viewlabCantry} >                
              <Text style={styles.Textcontlang}>langage</Text>
              <Text style={styles.Textcontlang}>country</Text>
            </View>            
            <View style={styles.viewlabCantry}>                
              <Text style={styles.ViewTitle}>TitleTitleTitleTitleTitleTitleTitleTitleTitleTitle</Text>
            </View>            
            <View style={[styles.viewlabCantry,{justifyContent:'space-between',marginHorizontal:20,marginVertical:1}]}>                
              <Text style={[styles.ViewTitle,{fontSize:17}]}>Auther</Text>
              <Text style={[styles.ViewTitle,{fontSize:17,color:'#ff6347',marginBottom:20}]}>
                <Icon name='update' style={{color:'red',fontSize:20}}></Icon>
               date </Text>
            </View >
            </View>
          </View>
        </View>
        <View style={{flex:3}}>
        <ScrollView>
          <View  >
            <View style={{backgroundColor:'#f5f5f5'}}>              
              <Text style={{color:'black',fontSize:20,marginHorizontal:20}}>azertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioazeazertyuioazertyazertyuioaze</Text>
             </View>
            </View>
          </ScrollView>
        </View>
        <View style={{flex:0.5}}>
          <Navbar onPress={() => navigation.replace("Home")}/>
      </View>
       
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    viewlabCantry: {
      flexDirection:'row',
      gap: 17,
      marginVertical:8,
      marginHorizontal:13
    },
    Textcontlang:{
      fontSize:15,
      padding:8,
      fontWeight:'bold',
      color:'black',
      backgroundColor:'#d3d3d3',
      borderRadius:30,
      justifyContent:'center',
      alignSelf:'center'

    },
    ViewTitle:{
      fontSize:26,
      fontWeight:'bold',
      color:'#191970'
    }
  });

export default Details