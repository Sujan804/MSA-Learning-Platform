import React, { useState } from "react";
import { useAddAssignmentsMutation } from "../../features/assignment/assignmentApi";
const AddAssignmentModal = ({ showModal, setShowModal }) => {
  const [addAssignment, { isSuccess }] = useAddAssignmentsMutation();
  const [title, setTitle] = useState("");
  const [videoId, setVideoId] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [totalMark, setTotalMark] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addAssignment({
      title,
      video_id: parseInt(videoId),
      video_title: videoTitle,
      totalMark: parseInt(totalMark),
    });
    setShowModal(false);
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
                Add a new Assignment
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
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
                    Assignment Title
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
                    Video title
                  </label>
                  <textarea
                    className="  text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    placeholder="Video title"
                    value={videoTitle}
                    onChange={(e) => setVideoTitle(e.target.value)}
                  />
                </div>
                <div className="block">
                  <label className="font-bold text-lg mr-2 text-black">
                    Video Id
                  </label>
                  <input
                    className="  text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    placeholder="Video id"
                    type="number"
                    value={videoId}
                    onChange={(e) => setVideoId(e.target.value)}
                  />
                </div>
                <div className="block">
                  <label className="font-bold text-lg mr-2 text-black">
                    Total mark
                  </label>
                  <input
                    className=" text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    placeholder="Video url"
                    type="number"
                    value={totalMark}
                    onChange={(e) => setTotalMark(e.target.value)}
                  />
                </div>

                <div className="block">
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                  >
                    Add Video
                  </button>
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                onClick={() => setShowModal(false)}
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

export default AddAssignmentModal;
