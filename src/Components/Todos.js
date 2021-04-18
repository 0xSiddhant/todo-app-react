import React, { Component } from 'react'
import Todo from './Todo'

export default class Todos extends Component {
    render() {
        return (
            <div className="mt-4">
                {this.props.data ? this.props.data.length === 0 ?
                    <div>No Data found</div> :
                    this.props.data.map((item) => {
                        return (
                            <div key={item.id}>
                                <Todo data={item} />
                            </div>
                        )
                    }) : ""}
            </div>
        )
    }
}
