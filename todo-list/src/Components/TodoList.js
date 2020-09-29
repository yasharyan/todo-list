import React, { Component } from 'react'

export class TodoList extends Component {
    constructor() {
        super()

        this.state = {
            item: "",
            list: []
        }
    }

    updateinput(key, value) {
        this.setState({
            [key]: value
        })
    }

    add() {
        const item = {
            id: 1 + Math.random(),
            value: this.state.item.slice()
        };

        const list = [...this.state.list];

        list.push(item);

        this.setState({
            list,
            item: ""
        })
    }

    deleteItem(id) {
        const list = [...this.state.list];
        const updateList = list.filter(items => items.id !== id);

        this.setState({ list: updateList })
    }

    render() {
        return (
            <div className="container ">
                <div className="row">
                    <div className="col justify-content-center">
                    <input type="text"
                        placeholder="Add your List Name here...."
                        value={this.state.item}
                        onChange={e => this.updateinput("item", e.target.value)} />
                    <button onClick={() => this.add()} >Add</button>
                    <br />
                    <ul>
                        {this.state.list.map(items => {
                            return (
                                <li key={items.id}>
                                    {items.value}
                                    <button onClick={() => this.deleteItem(items.id)}>Delete</button>
                                </li>
                            )
                        })}
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList
