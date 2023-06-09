import React, {useEffect, useState} from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'

import BigCatalog from './BigCatalog'
import { MovieInfo } from '../types'

type Props= {
    url:string,
}

export default function BigCatalogList(props:Props):JSX.Element{

    // REST API를 이용하여 파싱한 영화데이터들 state 변수
    const [movies,setMovies]= useState<MovieInfo[]>([])

    const loadData= ()=>{
        //전달받은 url을 통해 json으로 인기 영화정보 읽어오기
        fetch(props.url)
        .then(response=>response.json())
        .then(json=>setMovies(json.data.movies))
    }

    //화면이 처음 보여지거나 갱신될때 자동 호출되는 Hooks기술
    useEffect(()=>loadData())

    return (
        <View style={style.container}>
            <FlatList
                horizontal={true}
                pagingEnabled={true}
                data={movies}
                renderItem={(obj)=>{ 
                    return <BigCatalog movie={obj.item}></BigCatalog>
                }}></FlatList>
        </View>
    )
}

const style= StyleSheet.create({
    container: {height:300, marginBottom:8,},
})