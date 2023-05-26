import React, { Component, ComponentState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';

export default class MainComponent extends Component {


    // 화면갱신에 영향을 주는 아주 특별한 멤버변수
    state: React.ComponentState = {
        message: "",
        msg: "",
        text: "result"
    }

    // 화면에 영향이 없는 일반 변수
    inputValue = ""

    render(): JSX.Element {
        return (
            <View style={style.root}>
                {/* TextInput은 스타일이 없으면 아무것도 그리지 않아 존재가 안보임 */}
                <TextInput style={style.textInput} onChangeText={this.changeText}></TextInput>
                {/* TextInput 에 글씨를 작성할때 마다 그 글씨를 보여주는 텍스트 뷰  */}
                <Text style={style.text}>{this.state.message}</Text>

                {/* 2) TextInput 의 입력에 사용한 소프트키보드의 [완료]버튼을 눌렀을때 글씨 보여주기 */}
                <TextInput style={style.textInput} onSubmitEditing={this.submitText}></TextInput>
                <Text style={style.text}>{this.state.msg}</Text>

                {/* 3) 버튼 클릭시 써있는 글씨를 텍스트뷰에 보여주기 */}
                {/* 기존 GUI와 방법론이 완전 다름 */}
                <TextInput multiline={true} numberOfLines={4} style={style.textInput} onChangeText={this.aaa}></TextInput>
                <Button onPress={this.clickBtn} title="작성 완료"></Button>
                <Text style={style.text}>{this.state.text}</Text>
            </View>
        )
    }

    // 버튼 클릭 이벤트
    clickBtn = () => this.setState({ text: this.inputValue })



    // 텍스트 인풋 컴포넌트의 글씨가 변경될때마다 반응하는 메소드
    aaa = (value: string) => {
        // 일반 변수에 저장
        this.inputValue = value
    }


    submitText = (event: any) => { // 파라미터로 string 이 아닌 이벤트객체가 전달됨
        let value = event.nativeEvent.text
        this.setState({ msg: value })
    }

    // 글씨변경때마다 반응하는 콜백메소드 - 파라미터로 써있는 글씨가 전달됨
    changeText = (value: string) => {
        // 텍스트 컴포넌트가 보여주는 state 변수값을 변경
        this.setState({ message: value })
    }
}

// 스타일 객체
const style = StyleSheet.create({
    root: { flex: 1, padding: 16 },
    textInput: {
        borderWidth: 2,
        borderColor: "yellowgreen",
        borderRadius: 16,
        paddingHorizontal: 16,
    },
    text: {
        marginTop: 10,
        color: 'black',
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 24
    }
})
