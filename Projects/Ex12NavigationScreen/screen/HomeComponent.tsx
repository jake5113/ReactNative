import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

// StackNavigator 에서 사용할 props의 타입을 import
import { StackScreenProps } from '@react-navigation/stack'

// Main.tsx 에서 만든 StackNavigator 의 스크린 리스트 타입이 필요함
import { StackScreenList } from '../Main'

// StackNavigator 에서 사용할 props 타입을 지정 - <> 제네릭으로 스크린리스트타입 지정, 현재 스크린의 name 을 지정
type HomeProps = StackScreenProps<StackScreenList, "Home">


// StackNavigator 의 Screen 으로 등록된 컴포넌트는 props를 받음
export default function HomeComponent(props:HomeProps): JSX.Element {
    return (
        <View style={style.root}>
            <Text style={style.text}>Home</Text>

            {/* SecondComponent로 이동하기 위한 버튼 */}
            <Button title='go Second' onPress={() => props.navigation.navigate("Second")}></Button>

            {/* Second 화면으로 이동하면서 Home 화면 종료 - finish */}
            <Button title='go Second & Finish' color={"yellowgreen"} onPress={()=>props.navigation.replace("Second")}></Button>

            {/* Second 화면으로 이동하면서 데이터를 전달해보기 [android의 Intent에서 사용하는 Extra data] */}
            <Button title='go second with data' color={'black'} onPress={()=>props.navigation.navigate('Second', {name:"Jake", age:26})}></Button>

        </View>
    )
}

const style = StyleSheet.create({
    root: { flex: 1, padding: 16 },
    text: { padding: 8, color: 'black' },
})