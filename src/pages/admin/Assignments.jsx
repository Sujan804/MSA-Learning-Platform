import React, { useState } from "react";
import { useSelector } from "react-redux";
import Assignment from "../../components/Assignment";
import Navbar from "../../components/Navbar";
import AddAssignmentModal from "../../components/modal/AddAssignmentModal";
const Assignments = () => {
  const assignments = useSelector((state) => state.assignment.assignments);
  const [showModal, setShowModal] = useState(false);
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
                Add Assignment
              </button>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="divide-y-1 text-base divide-gray-600 w-full">
                <thead>
                  <tr>
                    <th className="table-th">Title</th>
                    <th className="table-th">Video Title</th>
                    <th className="table-th">Mark</th>
                    <th className="table-th">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-600/50">
                  {assignments.map((assignment, index) => (
                    <Assignment
                      assignment={assignment}
                      index={index}
                      key={assignment.id}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {showModal ? (
            <AddAssignmentModal
              showModal={showModal}
              setShowModal={setShowModal}
            />
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Assignments;
