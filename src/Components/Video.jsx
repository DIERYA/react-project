import React from "react";

function Video(){
    return(
        <div className="video-container">
<iframe className = "video" width="500" height="400" src="https://www.youtube.com/embed/o8GrqUSdzi0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </div>
    )
}

export default Video;