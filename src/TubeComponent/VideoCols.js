import React from 'react'

const VideoCols = ({ videos, onSelectedVideo }) => {
  return (
    <>

      {videos.map((video) => {

        return <div className="row"
          style={{ cursor: "pointer" }}
          key={video.id.videoId} onClick={() => onSelectedVideo(video)}>
          <div className="col-lg-6">
            <div className="ratio ratio-16x9 me-5">
              <img
                alt={video.snippet.title}
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <p className="text-secondary text-start" style={{ fontSize: "0.9rem" }}>
              {video.snippet.title}
            </p>
          </div>

        </div>



      })}

    </>
  )
}

export default VideoCols
