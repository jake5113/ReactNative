import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import { StackScreenProps } from '@react-navigation/stack'
import { MovieNavScreenList } from '../types'
type MovieDetailProps= StackScreenProps<MovieNavScreenList,'MovieDetail'>

export default function MovieDetail(props:MovieDetailProps):JSX.Element{
    //0. 먼저 테스트 화면
    return (
        <View style={style.root}>
            <Text>MOVIE DETAIL</Text>
        </View>        
    )
}

const style= StyleSheet.create({
    root:{flex:1,},
})