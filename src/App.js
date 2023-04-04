import { Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/admin/AdminLogin";
import Assignment from "./pages/admin/Assignment";
import AssignmentMark from "./pages/admin/AssignmentMark";
import Dashboard from "./pages/admin/Dashboard";
import Quizzes from "./pages/admin/Quizzes";
import Videos from "./pages/admin/Videos";
import CoursePlayer from "./pages/student/CoursePlayer";
import LeaderBoard from "./pages/student/LeaderBoard";
import Quiz from "./pages/student/Quiz";
import StudentLogin from "./pages/student/StudentLogin";
import StudentReg from "./pages/student/StudentRegistration";
function App() {
  return (
    <div>
      <Routes>
        {/* Student Routes */}
        <Route path="" element={<StudentLogin />}></Route>
        <Route path="/login" element={<StudentLogin />}></Route>
        <Route path="/registration" element={<StudentReg />}></Route>
        <Route path="/leaderbord" element={<LeaderBoard />} />
        <Route path="/video/:id" element={<CoursePlayer />} />
        <Route path="/quiz/:id" element={<Quiz />} />

        {/* Admin Routes */}
        <Route path="/admin">
          <Route path="" element={<Dashboard />} />
          <Route path="login" element={<AdminLogin />} />
          <Route path="assignments" element={<Assignment />} />
          <Route path="assignment-marks" element={<AssignmentMark />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="videos" element={<Videos />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
