import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// 공통사용 컴포넌트 import
import InputComponent from '../components/InputComponent'

import { StackScreenProps } from '@react-navigation/stack'
import { LoginNavScreenList } from '../types'
type LoginProps= StackScreenProps<LoginNavScreenList,'Login'>

export default function Login(props:LoginProps):JSX.Element{ //props객체{navigation, route}

    // 1. 우선 테스트 목적의 화면
    // return (
    //     <View style={style.root}>
    //         <Text>LOG IN</Text>
    //     </View>
    // )

    //이메일 입력값을 저장하는 변수
    let email:string=''

    //InputComponent의 글씨가 변경될때 마다 발동하는 함수
    const changeText= (s:string)=>{ email=s }    
    

    //로그인 버튼 클릭시 실행될 메소드
    const login= async ()=>{
        //원래는 서버에 전송하여 DB에 저장해야 함.

        //디바이스의 저장소에 이메일 정보를 저장하여 다시 앱을 실행할때 로그인를 재차 물어보지 않도록.
        // async - await 문법을 통해 비동기 작업 완료후 화면 전화되도록..
        await AsyncStorage.setItem('email',email)

        //로그인이 완료되었으니 main 화면으로 전환
        props.navigation.replace('MainNav')
    }

    


    //2. 로그인 화면
    return (
        <View style={style.root}>
            {/* 크게 2개의 영역으로 구성 : 로그인 콘텐츠영역, 아래쪽에 회사이름 or 앱이름 표시영역 */}
            {/* 1. 로그인 콘텐츠 영역 */}
            <View style={style.content}>
                {/* 1.1 로고 */}
                <Text style={style.logo}>MOVIE MRHI</Text>

                {/* 1.2 이메일/비밀번호 입력박스 */}
                {/* TextInput은 로그인,회원가입,비밀번호재설정 화면에서도 모두 사용되므로 사용빈도 높음. 이를 일일이 스타일 하기 어려우므로 별도의 CustomComponent로 제작하여 재사용*/}
                <InputComponent placeholder='이메일' onChangeText={changeText}></InputComponent>
                <InputComponent placeholder='비밀번호' secureTextEntry={true}></InputComponent>

                {/* 1.3 비밀번호 재설정 */}
                <Text style={style.resetPW} onPress={()=>props.navigation.navigate('ResetPassword')}>비밀번호 재설정</Text>

                {/* 1.4 로그인 버튼 */}
                <View style={{width:'100%', marginBottom:24}}>
                    <Button title='로그인' onPress={login}></Button>
                </View>

                {/* 1.5 회원가입 안내 글씨 */}
                <Text style={style.signup}>
                    계정이 없으신가요? <Text style={style.signupLink} onPress={()=>props.navigation.navigate('Signup')}>가입하기</Text>
                </Text>
                
            </View>

            {/* 2. footer 영역 */}
            <View style={style.footer}>
                <Text style={style.footerCopyright}>MovieApp by HRHI</Text>
            </View>

        </View>
    )
}

//style sheet object
const style= StyleSheet.create({
    root:{ flex:1, backgroundColor:'#FEFFFF' },
    content:{
        flex: 1,  // footer 영역 제외한 모든 공간 사용
        justifyContent:'center',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopWidth:1,
        borderTopColor:'#D3D3D3',
        padding: 8,
    },
    logo:{
        color: '#292929',
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:32,
    },
    resetPW:{
        width:'100%',
        textAlign:'right',
        color:'#3796EF',
        marginTop:8,
        marginBottom:16,
        marginRight:8,
    },
    signup:{
        color:'#929292',
        textAlign:'center'
    },
    signupLink:{
        color:'#3796EF'
    },
    footerCopyright:{
        color:'#929292',
        textAlign:'center',
    }
})