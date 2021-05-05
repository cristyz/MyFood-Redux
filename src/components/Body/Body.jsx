import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default () => {
    const list = useSelector(state => state.list)
    const dispach = useDispatch()

    return (
        <div className="container">
            {list.map(e =>
                <div style={{ backgroundColor: e.saudavel ? '#00adb5' : '#222831', display: 'flex', justifyContent: 'space-between', margin: 20, padding: 20 }}>
                    <h3 style={{ color: 'white' }}>{e.title}</h3>
                    <button
                        style={{ padding: '0 10px', backgroundColor: 'transparent', color: 'white', padding: 10 }}
                        onClick={() => {
                            dispach({
                                type:'SUBTRACTLIST',
                                payload: e.key
                            })
                        }}
                    >X</button>
                </div>
            )}
        </div>
    )
}