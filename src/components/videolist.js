import React from 'react';
import VideoListEntry from './videolistentry';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
        <VideoListEntry 
        onVideoSelect = {props.onVideoSelect}
        video = {video}
        key = {video.etag} />
        )
    })
    return (
        <ul className = "col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;