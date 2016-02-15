import React from 'react';

//NOTES: instead of passing props, could have written argument as {video}, which would define a variable video (value props.video) inside of our function
const VideoDetails = (props) => {

	if(!props.video){
		return <div>Loading...</div>;
	}
	
	const video = props.video;
	const videoId = video.id.videoId;
	//NOTES: ES6 string interpolation
	const url = `https://www.youtube.com/embed/${videoId}`;
	return (
		<div className='video-detail col-md-8'>
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe className='embed-responsive-item' src={url}></iframe>
			</div>
			<div className='details'>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)
}

export default VideoDetails;
