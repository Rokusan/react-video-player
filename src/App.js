import React, { Component } from 'react'
import { NavBox } from './NavBox'
import { VideoBox } from './VideoBox'
import { Container, TopBox } from './Components'

const allVideos = {
            deer: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
            snail: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
            cat: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
            spider: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4' 
}

class App extends Component {
    constructor(props) { 
      super(props);
      
      this.state = {
          src: allVideos.deer
        }
        this.changeVideo = this.changeVideo.bind(this)
    }
  
  changeVideo(c) { 
        this.setState({src: allVideos[c]})
    }

  render() {
    return (
     <Container>
         <TopBox>React Video Player</TopBox>
         <NavBox changeVideo={this.changeVideo} />
         <VideoBox src={this.state.src} />
     </Container>
    );
  }
}


export default App


