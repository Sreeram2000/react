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

    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                <div>LifeCycleA</div>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
