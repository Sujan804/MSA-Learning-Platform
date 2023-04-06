import React from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import VideoPlayerSidebar from "../../components/VideoPlayerSidebar";
import { useGetVideosQuery } from "../../features/videos/videosApi";

const CoursePlayer = () => {
  const { data } = useGetVideosQuery();
  const navigate = useNavigate();
  const { id } = useParams();
  const videos = useSelector((state) => state.video.videos);
  const videoToPlay = videos.filter((video) => video.id == id);
  console.log("video", videoToPlay);
  if (videoToPlay.length == 0) {
    return navigate("/leaderboard");
  }
  // console.log("video", videoToPlay);
  return (
    <>
      <Navbar />
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <iframe
                width="100%"
                className="aspect-video"
                src={`${videoToPlay[0].url}`}
                title="Things I wish I knew as a Junior Web Developer - Sumit Saha - BASIS SoftExpo 2023"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <div>
                <h1 className="text-lg font-semibold tracking-tight text-slate-100">
                  {videoToPlay[0].title}
                </h1>
                <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
                  Uploaded on{" "}
                  <Moment
                    date={videoToPlay[0].createdAt}
                    format="D MMM YYYY"
                    withTitle
                  />
                </h2>

                <div className="flex gap-4">
                  <Link
                    to={`/assignment/${id}`}
                    className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
                  >
                    এসাইনমেন্ট
                  </Link>

                  <Link
                    to={`/quiz/${id}`}
                    className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
                  >
                    কুইজে অংশগ্রহণ করুন
                  </Link>
                </div>
                <p className="mt-4 text-sm text-slate-400 leading-6">
                  {videoToPlay[0].description}
                </p>
              </div>
            </div>
            <VideoPlayerSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursePlayer;
