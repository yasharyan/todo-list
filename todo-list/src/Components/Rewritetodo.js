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
            <div className="col-xs-11 m-auto pt-2">
                <div className="row row-col-2">
                    <input type="text"
                        placeholder="Add item here."
                        value={this.state.item}
                        onChange={this.handlerUpdate}
                        className="col col-sm-8 offset-1 mt-2 mb-3"
                        id="addinput"
                    />
                    <button onClick={this.add} className="col col-sm-2 mt-2 mb-3 ml-2 buttonstyle">Add</button>
                </div>

                <ol className="col-md-11 m-auto mb-4">
                    <div>
                    {this.state.list.map(go => {
                        return (

                            <li className="col col-md-12 style" key={go.id}>


                                <input type="text"
                                    value={go.value}
                                    onChange={(e) => this.listhandler(e.target.value, go.id)}
                                    className="col col-md-8 m-auto listdesign"
                                ></input>

                                <button className="col-md-3" id="buttondelete"
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
