import {TouchableOpacity,Text ,ScrollView,StyleSheet,View, ImageBackground} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import notfound from "../assets/notfound.png";
import Navbar from '../components/navBar';
import axios from 'axios';
import { useState,useEffect } from 'react';

const HomeNews = ({navigation}) => {
  const [dataNews,setdataNews] = useState([]);
 
 const getNews=async()=>{
  await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a0f1fb8437a3447a95d2bd3ad93e9fec')
  
  .then(response => {
    setdataNews(response.data.articles);
   
  })
  .catch(error => {
    console.log(error);
  });
 }
  useEffect(() => {
   getNews();
  }, [])
  return (    
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 0.5}}>
      <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal:20,
            marginTop:15
          }}
        >
          <TouchableOpacity onPress={() => navigation.replace("Home")}>
            <Icon name="leftcircleo" style={{ fontSize:27,marginBottom:20,color:"#191970"}}> 
            </Icon>
          </TouchableOpacity>
          <Text style={{color:'#191970',fontWeight:'bold',fontSize:22}}>  Daily Bugle</Text>
          <TouchableOpacity onPress={() => navigation.replace("Home")}>
            <Entypo name="switch" style={{ fontSize:30,marginBottom:20,color:"#191970"}}>

            </Entypo>
            </TouchableOpacity>
        </View>
      </View>
      {/* categorie */}
      <View style={{flex:0.4}} >
        <ScrollView horizontal={true}>
          <View style={styles.viewAllcategorie}>
           {dataNews?.map((News,index)=>(
               <View style={styles.viewcategorie} key={index}>
               <Text style={styles.textcategorie} >{News.author}</Text>
             </View>
            ))}
                 
          </View>
        </ScrollView>
      </View>
      {/* AllNews */}
      <View style={{flex: 3}}>
      <View style={styles.container}>
          <ScrollView>
            <View style={styles.viewAllNews}>
              {/* news */}
              {dataNews?.map((news,index)=>(
              <View key={index} >
                {(news.urlToImage!==null) ?  
                <ImageBackground imageStyle={{ borderRadius: 14,height:null,width:null}} source={{uri:news.urlToImage}} style={{margin:10,height:200}}  >
                  <View style={styles.space_betwin}>
                    <View style={[styles.stylePublisher,{backgroundColor:'#afafed',fontSize:20}]}>
                      <Text style={[styles.styletextPublisher,{fontWeight:"bold"}]}>{news.author}</Text>
                    </View>
                    <View style={[styles.stylePublisher,{backgroundColor:'#dbdbdb'}]}>
                      <Text style={[styles.styletextPublisher,{color:'#191970',fontWeight:'bold',fontSize:7}]}>{news.publishedAt}</Text>
                    </View>
                  </View>
                  <View >
                    <View style={[styles.styletitle,{width:null,marginVertical:10}]}>
                      <Text style={[styles.styletexttitle]}>{news.title}</Text>
                    </View>

                    <View style={[styles.styletitle,{width:100,  backgroundColor:null,alignSelf:'flex-end', padding:7,marginHorizontal:10,marginTop:20}]}>
                      <TouchableOpacity style={[styles.styletexttitle,{color:'white',alignItems:'center',alignContent:'flex-end'}]}onPress={() => navigation.replace("Detail")} >
                        <Text style={{color:'white',fontWeight:'bold',fontSize:12}}>Learn more</Text>
                      </TouchableOpacity>
                    </View>
                   
   </View>
                </ImageBackground> : 
                  <ImageBackground imageStyle={{ borderRadius: 14,height:null,width:null}} source={{uri:"https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=1600"}} style={{margin:10,height:200}}  >
                  <View style={styles.space_betwin}>
                    <View style={[styles.stylePublisher,{backgroundColor:'#cfcff4',fontSize:30}]}>
                    <Text style={[styles.styletextPublisher,{fontWeight:"bold"}]}>{news.country}</Text>
                    </View>
                    <View style={[styles.stylePublisher,{backgroundColor:'#dbdbdb'}]}>
                      <Text style={[styles.styletextPublisher,{color:'#800000',fontWeight:'bold',fontSize:9}]}>{news.pubDate}</Text>
                    </View>
                  </View>
                  <View >
                    <View style={[styles.styletitle,{width:null,marginVertical:10}]}>
                      <Text style={[styles.styletexttitle]}>{news.title}</Text>
                    </View>

                    <View style={[styles.styletitle,{width:100,  backgroundColor:"null",alignSelf:'flex-end', padding:7,marginHorizontal:10,marginTop:20}]}>
                      <TouchableOpacity style={[styles.styletexttitle,{color:'white',alignItems:'center',alignContent:'flex-end'}]}onPress={() => navigation.replace("Detail")} >
                        <Text style={{color:'white',fontWeight:'bold',fontSize:12}}>Learn more</Text>
                      </TouchableOpacity>
                    </View>   
                  </View>
                </ImageBackground>
             }
              
              </View> 


              ))}
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
    gap: 10,
    borderRadius: 20,

  },
  viewAllNews: {
    flexDirection:'column',
    justifyContent: 'space-evenly',
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
    fontSize:9,
    color:'#00008b'
    
  },
  styletexttitle:{
    fontSize:12,
    color:'white',
    fontWeight:'bold',
   
  }
});


export default HomeNews