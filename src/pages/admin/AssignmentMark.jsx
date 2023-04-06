import React from "react";
import { useSelector } from "react-redux";
import AssignmentMarkSingle from "../../components/AssignmentMarkSingle";
import Navbar from "../../components/Navbar";
const AssignmentMark = () => {
  const assignmentMarks = useSelector(
    (state) => state.assignmentMark.assignmentMarks
  );
  let countPending = 0;
  let countMarkSent = 0;

  for (let assM of assignmentMarks) {
    if (assM === "pending") {
      countPending++;
    } else {
      countMarkSent++;
    }
  }

  return (
    <>
      <Navbar />
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
          <div className="px-3 py-20 bg-opacity-10">
            <ul className="assignment-status">
              <li>
                Total <span>{countMarkSent + countPending}</span>
              </li>
              <li>
                Pending <span>{countPending}</span>
              </li>
              <li>
                Mark Sent <span>{countMarkSent}</span>
              </li>
            </ul>
            <div className="overflow-x-auto mt-4">
              <table className="divide-y-1 text-base divide-gray-600 w-full">
                <thead>
                  <tr>
                    <th className="table-th">Assignment</th>
                    <th className="table-th">Date</th>
                    <th className="table-th">Student Name</th>
                    <th className="table-th">Repo Link</th>
                    <th className="table-th">Mark</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-600/50">
                  {assignmentMarks.map((assignmentMark, index) => (
                    <AssignmentMarkSingle
                      index={index}
                      assignmentMark={assignmentMark}
                      key={index}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssignmentMark;
