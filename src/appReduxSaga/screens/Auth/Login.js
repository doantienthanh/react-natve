import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {defaultColors} from '../../themes/Color';
const Login=()=>{
    return(
        <ScrollView  style={styles.bodyLogin}>
            <View>
            <Text>Thanh</Text>
            </View>
        </ScrollView>
    )
};

 const styles=StyleSheet.create({
     bodyLogin:{
        backgroundColor:defaultColors.wheat,
        width:'100%',
        height:200,
     },

 });
export default Login;