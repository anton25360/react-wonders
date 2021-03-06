import React, { Component } from 'react'
import './WonderCard.css';
import undo from './../res/undo.svg';


let visitedMsg = 'Visited'

//marks as seen when user clicks
function markButton(input) {
    //NOTE: input is props.num
    localStorage.setItem(input, 'seen')
    document.getElementById(input).innerText = visitedMsg
    document.getElementById(input).classList.add("visited");
    //show revert button
    document.getElementById(input + 'revert').style.visibility = 'visible'
}

//delete localstorage (num : seen)
function removeFromStorage(input) {
    localStorage.removeItem(input)
    document.getElementById(input).innerText = 'Mark as visited'
    document.getElementById(input).classList.remove("visited");
    document.getElementById(input + 'revert').style.visibility = 'hidden'
}

export class WonderCard extends Component {

    //marks as seen if 'seen' propery exists onLoad
    componentDidMount() {
        if (localStorage.getItem(this.props.num) === 'seen') {
            document.getElementById(this.props.num).innerText = visitedMsg
            document.getElementById(this.props.num).classList.add("visited");
            //show revert button
            document.getElementById(this.props.num + 'revert').style.visibility = 'visible'

        } else {
            //hide revert button
            document.getElementById(this.props.num + 'revert').style.visibility = 'hidden'
        }
    }

    render() {
        return (
            <div className='cardContainer'>
                <img className='cardBackground' src={this.props.imgLink} alt='background' />
                <h2 className='cardLocation'>{this.props.location}</h2>
                <h1 className='cardName'>{this.props.name}</h1>
                <p className='cardInfo'>{this.props.info}</p>
                <button onClick={() => { markButton(this.props.num) }} className='markBtn' id={this.props.num}>Mark as visited</button>
                <img onClick={() => { removeFromStorage(this.props.num) }} className='revertBtn' id={this.props.num + 'revert'} src={undo} alt=''/>
            </div>
        )
    }
}

export default WonderCard
