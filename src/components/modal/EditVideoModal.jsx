import React, { useState } from "react";
import { useEditVideoMutation } from "../../features/videos/videosApi";

const EditVideoModal = ({ setOpenModal, openModal, videoToEdit }) => {
  const [editVideos, { isSuccess }] = useEditVideoMutation();
  const [title, setTitle] = useState(videoToEdit ? videoToEdit.title : "");
  const [description, setDescription] = useState(
    videoToEdit ? videoToEdit.description : ""
  );
  const [url, setUrl] = useState(videoToEdit ? videoToEdit.url : "");
  const [views, setViews] = useState(videoToEdit ? videoToEdit.views : "");
  const [duration, setDuration] = useState(
    videoToEdit ? videoToEdit.duration : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    editVideos({
      id: videoToEdit.id,
      data: videoToEdit,
    });
    setOpenModal(false);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none min-w-full">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold text-black">
                Add a new Video
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setOpenModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-16 ">
              <form className="mt-8 space-y-6 =" onSubmit={handleSubmit}>
                <div className="block">
                  <label className="font-bold text-lg mr-2 text-black">
                    Video Title
                  </label>
                  <input
                    className="  text-lg shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    placeholder="Video title"
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="block">
                  <label className="font-bold text-lg mr-2 text-black">
                    Description
                  </label>
                  <textarea
                    className="  text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    placeholder="Video title"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="block">
                  <label className="font-bold text-lg mr-2 text-black">
                    Video url
                  </label>
                  <input
                    className="  text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    placeholder="Video url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
                <div className="block">
                  <label className="font-bold text-lg mr-2 text-black">
                    Video Views
                  </label>
                  <input
                    className=" text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    placeholder="Video url"
                    value={views}
                    onChange={(e) => setViews(e.target.value)}
                  />
                </div>
                <div className="block">
                  <label className="font-bold text-lg mr-2 text-black">
                    Video Duration
                  </label>
                  <input
                    className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    placeholder="Video url"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>

                <div className="block">
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                  >
                    Keep Changes
                  </button>
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                onClick={() => setOpenModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default EditVideoModal;
