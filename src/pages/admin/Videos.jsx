import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Video from "../../components/Video";
import AddVideoModal from "../../components/modal/AddVideoModal";

const Videos = () => {
  const [showModal, setShowModal] = useState(false);
  const videos = useSelector((state) => state.video.videos);
  return (
    <>
      <Navbar />
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
          <div className="px-3 py-20 bg-opacity-10">
            <div className="w-full flex">
              <button
                className="btn ml-auto"
                onClick={() => setShowModal(true)}
              >
                Add Video
              </button>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="divide-y-1 text-base divide-gray-600 w-full">
                <thead>
                  <tr>
                    <th className="table-th">Video Title</th>
                    <th className="table-th">Description</th>
                    <th className="table-th">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-600/50">
                  {videos.map((video, index) => (
                    <Video
                      video={video}
                      index={index}
                      key={video.id}
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {showModal ? (
            <AddVideoModal showModal={showModal} setShowModal={setShowModal} />
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Videos;
