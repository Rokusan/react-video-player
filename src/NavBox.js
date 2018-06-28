import React, { Component } from 'react'
import { NavBar, Vid } from './Components'

export class NavBox extends Component {

    clickVideo(e) {
        let click = e.target.value
        this.props.changeVideo(click)
    }

    render() {
        return (
            <NavBar onClick={this.clickVideo.bind(this)}>
     
                <Vid><input type="radio" name="src" value="deer"/>Deer</Vid>
                <Vid><input type="radio" name="src" value="snail" />Snail</Vid>
                <Vid><input type="radio" name="src" value="cat" />Cat</Vid>
                <Vid><input type="radio" name="src" value="spider" />Spider</Vid>
        
            </NavBar>
        );
    }
}