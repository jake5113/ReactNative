import React from 'react'
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Stack Navigator의 screen으로 등록된 컴포넌트에서 전달받을 props의 타입지정
import { StackScreenProps } from '@react-navigation/stack'
import { RootScreenList } from './types'
type IntroProps= StackScreenProps<RootScreenList,'Intro'>

// functional component - 파라미터로 props {navigation, route} 객체 받음
export default function Intro(props:IntroProps):JSX.Element{ 

    // 로그인한 적인 있는지 검사한 후 결과에 따라 LoginNav or MainNav로 이동
    AsyncStorage.getItem('email')
        .then((value)=>{
            if(value) props.navigation.replace('MainNav')
            else props.navigation.replace('LoginNav')            
        })

    return (
        // 1. 화면전환 테스트 목적으로 보여질 임시 화면
        // <View style={style.root}>
        //     <Text>Intro</Text>
        //     <Button title='go login' onPress={()=>props.navigation.navigate('LoginNav')}></Button>
        //     <Button title='go main' color='green' onPress={()=>props.navigation.navigate('MainNav')}></Button>
        // </View> 

        //2. AsyncStorage가 비동기방식으로 읽어오는 사이에 잠깐 보여질 수 있는 로딩 컴포넌트
        <View style={style.root}>
            <ActivityIndicator size='large' color='green'></ActivityIndicator>
        </View>

    )
}

const style= StyleSheet.create({
    root:{ flex:1, justifyContent:'center', alignItems:'center', }
})