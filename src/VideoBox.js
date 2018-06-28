import React, { Component } from 'react'
import { Player } from './Components'

export class VideoBox extends Component {

    render() {
        return (
            <Player>
                <video controls src={this.props.src} />
            </Player>
        );
    }
}
