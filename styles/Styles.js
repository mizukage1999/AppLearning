import {StyleSheet} from 'react-native';
const Styles= StyleSheet.create({
    textHeader:{
        paddingHorizontal:20,
        fontSize:35,
        paddingTop:20,
        fontWeight:'bold',
        color:'white'
    },
    viewInput:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:12,
        marginHorizontal:20,
        marginTop:20,
        paddingLeft:25,
        height:38
    },
    viewContent:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:20,
        marginHorizontal:20,
        marginTop:25,
        paddingLeft:30,
        paddingVertical:10,
        backgroundColor:'#fcf1e8'
    },
    textContent:{
        color:'#239dad',
        fontSize:20,
        fontWeight:'bold',
        paddingRight:100
    },
    touchContent:{
        flexDirection:'row',
        alignItems:'center',
        width:150,
        backgroundColor:'#fabc91',
        borderRadius:14,
        paddingHorizontal:10,
        marginTop:15,
        paddingVertical:10
    },
    imageContent:{
        marginLeft:-130,
        marginTop: 60,
        width:110,
        height:100
    },
    viewCategories:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#f79b7c',
        borderRadius:20,
        marginHorizontal:20,
        marginTop:5,
        marginBottom:5,
        paddingLeft:20,
        paddingVertical:20
    },
    textContent_2:{
        color:'#239dad',
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:20,
        marginTop:10
    },
    translateImage:{
        width:50,
        height:50
    },
    parent: {
        marginLeft:5
    },
    textInput:{   
        marginTop:5,//lề trên
        marginLeft:5,
        backgroundColor:"white",
        width:330,
    },
    textTo:{
        marginTop:5,//lề trên
        marginLeft:5,
        marginRight:5,
        color:"#0400ff"
    },
    textOutput:{
        backgroundColor:"white",
        marginLeft:5,
        marginTop:5,
        marginRight:5,
        height: 100,
        padding:8
    },
    fixToText:{
        borderRadius:10,
        marginLeft:5,
        marginRight:5,
        marginTop:5,
        flexDirection: 'row', 
        justifyContent: 'space-between'
        
    },
    divThemes:{
        alignItems:'center',
        borderRadius:10,
        marginLeft:7,
        marginBottom:5
    },
    textTheme:{
        color:'#ff8000',
        fontSize:20,
        fontWeight:'bold',
        paddingRight:100
    },
    vocaFrTitle:{
        fontSize:22,
        color:'#001dfc',
        fontWeight:'bold'    
    },
    vocaVnTitle:{
        fontSize:18,
        color:'#2239f0',
        fontWeight:'100'    
    },
    feedItem:{
        height:120,
        width:330,
        margin:15,
        backgroundColor:'white',
        borderRadius:15,
        borderWidth: 2,
        borderColor: 'orange',
        padding:5,
        alignItems:"center",
        flexDirection:"row",
        marginVertical:8
    },
    vocaDetail:{
        padding:5,
        backgroundColor:'#ffe4b5'
    },
    vocaHeader:{
        backgroundColor:'white',
        padding:10,
        height:50
    },
    vocaText:{
        color:"#0033ff",
        fontSize:15
    },
    vocDesc:{
        backgroundColor:'white',
        padding:5,
        height:370,
        marginTop:10
    }, 
    searchTab:{
        backgroundColor:'#afc6f0',
        borderWidth:2,
        borderColor:'white'
    },
    searchDetail:{
        paddingTop:5,
        paddingRight:10,
        paddingLeft:10,
        paddingBottom:15,
        backgroundColor:'#afc6f0'
    }, 
    searchDetailName:{
        backgroundColor:'white',
        paddingLeft:10,
        paddingRight:10,
        height:50,
        borderRadius:5
    },
    searchDetailContent:{
        padding:10,
        marginTop:5,
        height:375,
        backgroundColor:'white',
        borderRadius:5
    },
    searchAntonym:{
        padding:10,
        height:430,
        backgroundColor:'white',
        borderRadius:5
    },

});
export default Styles;