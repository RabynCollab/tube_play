import { useEffect, useState } from "react";
import youtube from "../apis/youtube";
import VideoShow from "./VideoShow";
import VideoCols from "./VideoCols";

const Home = () => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState('');
  const [searchText, setSearch] = useState('');
  useEffect(() => {
    handleSubmit('songs');
  }, []);

  const handleSubmit = async (searchText) => {

    const response = await youtube.get("/search", {
      params: {
        q: searchText
      }
    });
    if (response.statusText === 'OK') {
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    }

  }

  const onSelectedVideo = (video) => {
    setSelectedVideo(video);
  }


  return (
    <div className="container">
      <form className="py-3" onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(searchText);
      }}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={searchText}
          className="form-control" type="text"
          placeholder="Search for videos"
        />
      </form>
      <div className="row">

        <div className="col-lg-7 mb-2">
          <VideoShow selectedVideo={selectedVideo} />

        </div>
        <div className="col-lg-4  col-sm-8" >

          <VideoCols
            onSelectedVideo={onSelectedVideo}
            videos={videos}
          />
        </div>

      </div>
    </div>
  )
}

export default Home
