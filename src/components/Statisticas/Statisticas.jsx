import React from 'react'
import { useSelector } from 'react-redux'
import './style.css'

export default () => {
    const list = useSelector(state => state.list)
    let saudavel = ((list.filter(e => e.saudavel).length / list.length) * 100).toFixed(3)
    let nao_saudavel = ((list.filter(e => !e.saudavel).length / list.length) * 100).toFixed(3)
    
    return(
        <div style={{display:'flex', width:300, justifyContent:'space-between', alignItems:'flex-end', position:'absolute', left:100, top:100, height:300}}>
            <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', flexDirection:'column', height:'100%'}}>
                <div className='saudavel' style={{height:`${saudavel}%`, width:10, borderTopLeftRadius:30, borderTopRightRadius:30, transition:'0.5s' }}/>
                <span>Saudavel</span>
            </div>
            <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', flexDirection:'column', height:'100%'}}>
                <div className='nao-saudavel' style={{height:`${nao_saudavel}%`, width:10, borderTopLeftRadius:30, borderTopRightRadius:30, transition:'0.5s' }}></div>
                <span>Não Saudavel</span>
            </div>
        </div>
    )
}