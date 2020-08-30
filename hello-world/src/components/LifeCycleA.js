import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: "Sreeram"
        }
        console.log("LifeCycleA Constructor")
    }
    
    static getDerievedStateFromProps(props,state) {
        console.log("LifeCycleA getDerievedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("LifeCycleA componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("LifeCycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifeCycleA componentDidUpdate")
    }

    changeState = () => {
        this.setState ({
            name: 'codevolution'
        })
    }

    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
