import React from "react";
import Moment from "react-moment";
const AssignmentMarkSingle = ({ assignmentMark }) => {
  console.log(assignmentMark);
  return (
    <tr>
      <td className="table-td">{assignmentMark.title}</td>
      <td className="table-td">
        {" "}
        <Moment date={assignmentMark.createdAt} />
      </td>
      <td className="table-td">{assignmentMark.student_name}</td>
      <td className="table-td">{assignmentMark.repo_link}</td>
      <td className="table-td input-mark">
        <input max="100" value="100" />
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </td>
    </tr>
  );
};

export default AssignmentMarkSingle;
