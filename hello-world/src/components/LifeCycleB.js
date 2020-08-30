import React, { Component } from 'react'

export class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: "Sreeram"
        }
        console.log("LifeCycleB Constructor")
    }
    
    static getDerievedStateFromProps(props,state) {
        console.log("LifeCycleB getDerievedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("LifeCycleB componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("LifeCycleB shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log("LifeCycleB getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifeCycleB componentDidUpdate")
    }


    render() {
        console.log("LifeCycleB render")
        return (
            <div>
                LifeCycleB 
            </div>
        )
    }
}

export default LifeCycleB
