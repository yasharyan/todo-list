import React, { Component } from 'react'
import './Style.css'

class Rewritetodo extends Component {
    constructor() {
        super()

        this.state = {
            item: "",
            list: [],
            error: ""
        }
    }

    handlerUpdate = (event) => {
        this.setState({
            item: event.target.value
        })
    }

    add = () => {
        const item = {
            value: this.state.item.slice(),
            id: Math.random()
        }
        if (item.value !== "") {
            const list = [...this.state.list]
            list.push(item)

            this.setState({
                item: "",
                list
            })
        }

        else {
            alert(`Please Add item!
Do not Add space, it has no Sense or its up to You .`)
        }
    }

    listhandler = (value, id) => {
        const items = this.state.list;
        items.map(text => {
            if (text.id === id) {
                text.value = value
            }
        })
        this.setState({
            items: items
        })

        if (value === "") {
            alert(`Your list of Item will get empty now! 
Provide some value or update as empty list.`)
        }
    }

    delete = (id) => {
        const list = [...this.state.list]
        const updatelist = list.filter(go => go.id !== id)

        this.setState({ list: updatelist })
    }

    render() {
        return (
            <div>
                <div className="row row-cols-2 m-auto pt-3">
                    <input
                        className="col-sm-8 m-sm-auto p-2"
                        type="text"
                        placeholder="Add item here."
                        value={this.state.item}
                        onChange={this.handlerUpdate}
                        id="addinput"
                    />
                    <button onClick={this.add} className="col-sm-3 m-sm-auto p-2 addbutton">Add</button>
                </div>

                <ol className="col-sm-12 m-auto pt-3 ">
                    <div className="col m-auto">
                        {this.state.list.map(go => {
                            return (
                                <li className="col mb-3 mt-3 style" key={go.id}>

                                    <input
                                        className="col-sm-9 m-auto p-2 listdesign"
                                        type="text"
                                        value={go.value}
                                        onChange={(e) => this.listhandler(e.target.value, go.id)}
                                    ></input>

                                    <button
                                        className="col-sm-3 m-sm-auto mb-3"
                                        id="buttondelete"
                                        onClick={() => this.delete(go.id)}>
                                        Delete
                                    </button>

                                </li>
                            )
                        })}
                    </div>
                </ol>
            </div>
        )
    }
}

export default Rewritetodo
