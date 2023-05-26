// ### TypeScript : JavaScript + static typed ###

import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Alert, Image } from "react-native";

export default class MainComponent extends Component {

    // 멤버변수 - property
    message: string = "Hello react native"

    // 화면 갱신에 영향을 주는 아주 특별한 멤버변수(속성) - state
    state: React.ComponentState = {
        msg: "Hello RN",
        img: require('./image/newyork.jpg')
    }

    render(): JSX.Element {
        return (
            <View style={style.root}>
                <Button title="button" onPress={clickBtnFunction}></Button>
                <Button title="button" onPress={clickBtnFunction2}></Button>
                <Button title="button" onPress={clickBtnFunction3}></Button>
                {/* 버튼 콜백용 함수를 별도의 위치에 작성하지 않고 곧바로 지정 가능 */}
                <Button color='green' title="button" onPress={() => Alert.alert("직접!")}></Button>

                {/* 버튼 콜백용 메소드는 전역보다는 이 컴포넌트클래스의 멤버로 존재하는 것을 권장 */}
                {/* JS의 클래스 안에서는 멤버접근은 반드시 this.키워드 필요 */}
                <Button title="press me" color="red" onPress={this.clickBtn}></Button>

                {/* 버튼 클릭시에 Text 컴포넌트의 글씨 변경 */}
                <View style={{ margin: 8 }}>
                    <Button title="Change Text - forceUpdate" color={'orange'} onPress={this.changeText2}></Button>
                    {/* Text 컴포넌트의 글씨가 변경되고자 한다면.. 글씨가 별도의 변수로 저장되어 있어야 함 : 멤버변수로 만들어보기 */}
                    <Text style={style.text}>{this.message}</Text>

                    <Button title="Change Text - state" color={'black'} onPress={this.changeMsg}></Button>
                    <Text style={style.text}>{this.state.msg}</Text>
                </View>

                <Button title="change image" color={"purple"} onPress={this.changeImage}></Button>
                <Image source={this.state.img} style={style.img}></Image>

            </View>
        )
    }
    // 멤버 메소드 - 버튼 콜백메소드

    changeImage = () => {
        this.setState({img:require('./image/paris.jpg')})
    }

    changeMsg = () => {
        // 화면에 영향을 미치는 아주 특별한 변수 state의 값 변경
        //this.state.msg = "nice" // 이렇게 변경하면 화면갱신 안됨
        // 자동 화면갱신이 되려면 반드시 setState() 메소드로 변경해야만 함
        this.setState({ msg: "Nice to meet you" })

    }

    changeText2 = () => {
        this.message = "Nice 2 meet you"
        // 변수값이 변경되어도 화면 갱신은 이루어지지 않음.
        // 억지로 화면을 다시 그려내는 [render()를 재호출] 기능
        this.forceUpdate() // 강제로 화면 갱신 - 권장하지 않음.

        // 그래서 화면 갱신에 영향을 주는 아주 특별한 변수를 사용해야 함
        // 그 변수는 모든 Component 가 기본으로 가지고 있는 변수명
        // 그 변수명 : state
    }

    changeText() {
        // Text 컴포넌트가 보여주는 값을 가진 message 멤버변수의 값 변경
        this.message = "Nice 2 meet you"
        // 이 함수안에서 this.message 는 누구??
        // 이 changeText라는 함수의 멤버변수로 this.message를 인식함.
        // MainComponent의 멤버 message로 인식하지 못함.
        // 이를 해결하기 위해 별도의 객체로 인식되지 않는 함수 표기법
        // '화살표 함수' 를 콜백메소드로 사용해야 함.

    }

    clickBtn() {
        Alert.alert('버튼 눌림!')
    }
}

// 전역의 위치
// 1) 선언적 함수
function clickBtnFunction() {
    // 경고창 보이기
    Alert.alert("PRESSED BUTTON")
}

// 2) 익명 함수
let clickBtnFunction2 = function () {
    Alert.alert("Pressed Button 2")
}

// 3) 화살표 함수
let clickBtnFunction3 = () => Alert.alert("Pressed Button 3")


const style = StyleSheet.create({
    root: {
        flex: 1,
        padding: 16
    },
    text: {
        color: 'black',
        padding: 8,
        fontSize: 36,
        textAlign: "center",
    },
    img: {
        flex: 1,
        width: '100%'
    }
})
