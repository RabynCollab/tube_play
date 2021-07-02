import React from 'react'

const VideoShow = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <>

      <div className="card border-0">
        <div className="card-body">
          <div className="ratio ratio-16x9">
            <iframe src={videoSrc} title="YouTube video" allowFullScreen></iframe>
          </div>

          <p className="card-title mt-3">
            {selectedVideo.snippet.title}
          </p>


        </div>

      </div>


    </>
  )
}

export default VideoShow
