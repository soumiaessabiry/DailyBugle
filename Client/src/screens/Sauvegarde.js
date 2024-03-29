import { View, Text ,ScrollView,StyleSheet, ImageBackground,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Logo from "../assets/im2.png";
import Navbar from '../components/navBar';

const Sauvegarde = ({navigation}) => {
  return (    
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 0.4}}>
      <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal:20,
            marginTop:15
          }}
        >
          <TouchableOpacity onPress={() => navigation.replace("Home")}>
            <Icon name="leftcircleo" style={{ fontSize:35,marginBottom:20,color:"#191970"}}> 
            </Icon>
          </TouchableOpacity>
          <Text style={{color:'#191970',fontWeight:'bold',fontSize:30}}>My Favorite</Text>
          <TouchableOpacity onPress={() => navigation.replace("Home")}>
            <Entypo name="switch" style={{ fontSize:40,marginBottom:20,color:"#191970"}}>

            </Entypo>
            </TouchableOpacity>
        </View>
      </View>
      {/* AllNews */}
      <View style={{flex: 3}}>
      <View style={styles.container}>
          <ScrollView>
            <View style={styles.viewAllNews}>
              {/* news */}
              <View >
                <ImageBackground imageStyle={{ borderRadius: 14,height:null,   width:null}} source={Logo} style={{margin:10,height:180}}  >
                  <View style={styles.space_betwin}>
                    <View style={styles.stylePublisher}>
                      <Text style={styles.styletextPublisher}>Publisher</Text>
                    </View>
                    <View style={styles.stylePublisher}>
                      <Text style={styles.styletextPublisher}>date</Text>
                    </View>
                  </View>
                  <View style={styles.space_betwintitle}>
                    <View style={[styles.styletitle,{width:200}]}>
                      <Text style={styles.styletexttitle}>Title AZERTYUIOAZERTYUIOPAZERTYUIOPAZERTYUIOZERTYUIOP</Text>
                    </View>
                    <View style={[styles.styletitle,{width:100,marginTop:40,  backgroundColor:"#d3d3d3",justifyContent:'center',padding:1}]}>
                      <TouchableOpacity style={[styles.styletexttitle,{color:'#191970',alignItems:'center'}]}onPress={() => navigation.replace("Detail")} >
                        <Text style={{color:'#191970',fontWeight:'bold'}}>Learn more</Text>
                      </TouchableOpacity>
                      
                    </View>
                  </View>
                </ImageBackground>
              </View>      
            </View>
          </ScrollView>
      </View>
      </View>
      <View style={{flex:0.3}}>
      <Navbar Home={() => navigation.replace("Home")}  favorite={() => navigation.replace("Sauvegarde")}/>
      </View>
    </View>
 
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:3
  },
  viewAllcategorie: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 20,
    borderRadius: 20,

  },
  viewAllNews: {
    flexDirection:'column',
    justifyContent: 'space-evenly',
    gap: 7,
    borderRadius: 20,

  },
  viewcategorie: {
    width: 100,
    borderRadius: 12,
    height: 44,
    paddingVertical: 10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffb6c1',
    borderStartWidth: 4,
    borderBottomWidth:4,
    borderColor:'#191970'
  },
  viewNews: {
    width: 100,
    borderRadius: 12,
    height: 44,
    paddingVertical: 10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#add8e6',
    borderStartWidth: 4,
    borderBottomWidth:4,
    borderColor:'#191970'
  },
  textcategorie:{
    fontWeight:'bold',color:'#191970'
  },
  space_betwin:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal:20,
    marginTop:15,
  },
  space_betwintitle:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal:20,
    marginTop:45,
  },
  stylePublisher:{
    backgroundColor:'#dcdcdc',
    borderRadius:12,
    padding:7
  },
  styletitle:{
    borderRadius:12,
    padding:7,
    
  },
  styletextPublisher:{
    fontSize:17,
    color:'#00008b'
    
  },
  styletexttitle:{
    fontSize:17,
    color:'white',
    fontWeight:'bold',
   
  }
});


export default Sauvegarde