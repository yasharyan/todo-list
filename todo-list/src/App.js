import React from 'react'
import TodoList from './Components/TodoList.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col .inblock .justify-item-center'>
                    <TodoList />
                </div>
            </div>
        </div>
    )
}

export default App