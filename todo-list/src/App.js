import React from 'react'
import Rewritetodo from './Components/Rewritetodo.js'
import './Components/Style.css'

function App() {
    return (

        <div className="container">
            <div className="row ">
                <div className="col-sm-5 m-auto maincol">
                    <Rewritetodo />
                </div>
            </div>
        </div>
    )
}

export default App