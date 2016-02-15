import React, {Component} from 'react';
import VideoListItem from './video_list_item';

//NOTES: functional component because no state necessary (props passed as arg, not this.props as in class component)
const VideoList = (props)=> {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem 
        key={video.etag} 
        video={video} 
        onVideoSelect={props.onVideoSelect}
      />
    );
  });

  return (
      
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
  );
};

export default VideoList;
