import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default () => {
    const list = useSelector(state => state.list)
    const dispach = useDispatch()

    const [food, setFood] = useState('')

    const getClassificação = () => {
        const inputSelected = document.getElementById('saudavel').checked
        return inputSelected
    }
    
    return (
        <header>
            <div className="header-text">
                <h1>Healthy Food Redux</h1>
            </div>

            <div className="input-contain">
                <input type="text" onChange={e => setFood(e.target.value)} value={food} />
                <button
                    onClick={() => {
                        dispach({
                            type:'SUMLIST',
                            payload: {title: food ? food:'Food', saudavel: getClassificação(), key:Math.random()}
                        })
                        setFood('')
                    }}
                >Adicionar</button>

                <div className="input-checked">
                    <form style={{display:'flex', width:250, justifyContent:'space-between'}}>
                        <div>
                            <input type="radio" name="SD" id="saudavel" />
                            <label htmlFor="saudavel">Saudavel</label>
                        </div>
                        <div>
                            <input type="radio" name="SD" id="nao_saudavel" />
                            <label htmlFor="nao_saudavel">Não Saudavel</label>
                        </div>
                    </form>
                </div>
            </div>

        </header>
    )
}