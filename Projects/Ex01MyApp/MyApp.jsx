// 리액트 라이브러리 사용
import React, { Component } from "react"
import { Button, Image, StyleSheet, Text, View } from "react-native"

// 리액트네이티브는 Component를 상속받은 클래스들이 화면에 보여질 수 있음
class MyApp extends Component {
    // 리액트의 Component 클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드
    // 이 메소드 안에서 JSX (JavaScript + XML) 언어로 뷰를 설계하고 이를 return 해줌
    render() {

        let name = "JAKE"
        let btnTitle = "click me"

        return (
            // <Text>Hello world</Text>
            // <Text>Nive 2 meet u</Text>
            // ERROR - 컴포넌트는 1개의 컴포넌트만 리턴할 수 있음

            // 뷰 그룹을 사용
            // JSX 는 xml 안에서도 JS의 변수, 함수 사용이 가능
            // XML 안에서 {} 는 JS 문법을 쓰는 영역
            // 스타일 적용 - 객체로 적용
            <View style={style.root}>
                <Text style={style.title}>Hello {name}님</Text>
                <Text style={style.text}>Nive 2 meet u</Text>
                {/* Button 컴포넌트는 style 속성이 존재하지 않음 */}
                {/* <Button style={btnStyle} title={btnTitle}></Button> */}
                <View style={{ margin: 16 }}>
                    <Button color={"red"} title={btnTitle}></Button>
                </View>
                <Image source={require('./image/newyork.jpg')} style={style.img}></Image>
            </View>
        )
    }
}

// 스타일 작업 객체들을 하나로 묶어서 관리하는 StyleSheet 객체 생성
const style = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#abcdef",
        padding: 16,
    },
    title: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16
    },
    text: {
        margin: 8,
        color: 'black',
    },
    img: {
        flex: 1, // 남은 공간 다 먹어
        marginTop: 8,
        width: null,
        resizeMode:'contain'
    }
})


// 스타일객체 - 스타일 속성값은 css를 기반으로 제작되었음
const textStyle = {
    color: "purple",
    fontSize: 50, // 기본 단위 dp
    fontWeight: 'bold',
    margin: 16
}

// RN는 기본적으로 display:flex 가 적용되어 있음
// 기본 배치 방향[flex-direction] 이 column [세로] 방향
// 기본적으로 컴포넌트의 height은 wrap 임.
const rootStyle = {
    padding: 16,
    backgroundColor: '#abcdef',
    // height:"100%",
    // flex-grow 속성 [android 의 layout-weight 과 비슷한 속성]
    // RN 에서는 flex-grow 속성을 그냥 flex로 사용함
    flex: 1,
}

const plainTextStyle = {
    margin: 8,
    color: "black",
}

// 버튼의 스타일 객체
const btnStyle = {
    margin: 50,
    color: "red"
}

// MyApp 클래스를 다른 .js 에서 사용할 수 있도록 내보내기
export default MyApp