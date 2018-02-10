import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/videolist';
import VideoPlayer from './components/videoplayer';
const API_KEY = 'AIzaSyCjIxPPzW3EqPwIw3mlsghZNerAtK_mPXY';

//Create new component that produces html

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      currentVideo : null
    };
    // console.log('anything');
    this.onVideoSelect = this.onVideoSelect.bind(this)
    this.videoSearch('whilestellasleeps');
  }
onVideoSelect(video){
  this.setState({currentVideo: video})
}
  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
    <div>
      <SearchBar onSearchTermChange = {videoSearch}/>
      <VideoPlayer video ={this.state.currentVideo}/>
      <VideoList
      onVideoSelect = {this.onVideoSelect}
      // onVideoSelect = {currentVideo => this.setState({currentVideo})}
      videos = {this.state.videos}
      />
    </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('.container') )
//Take component html and put on dom