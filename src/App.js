import { Route, Routes } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
import StudentRoute from "./components/StudentRoute";
import AdminLogin from "./pages/admin/AdminLogin";
import AssignmentMark from "./pages/admin/AssignmentMark";
import Assignments from "./pages/admin/Assignments";
import Quizzes from "./pages/admin/Quizzes";
import Videos from "./pages/admin/Videos";
import Assignment from "./pages/student/Assignment";
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
        <Route
          path="/leaderboard"
          element={
            <StudentRoute>
              <LeaderBoard />
            </StudentRoute>
          }
        />
        <Route
          path="/video/:id"
          element={
            <StudentRoute>
              <CoursePlayer />
            </StudentRoute>
          }
        />
        <Route
          path="/quiz/:id"
          element={
            <StudentRoute>
              <Quiz />
            </StudentRoute>
          }
        />
        <Route
          path="/assignment/:id"
          element={
            <StudentRoute>
              <Assignment />
            </StudentRoute>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin">
          <Route path="" element={<AdminLogin />} />
          <Route path="login" element={<AdminLogin />} />
          <Route
            path="assignments"
            element={
              <AdminRoute>
                <Assignments />
              </AdminRoute>
            }
          />
          <Route
            path="assignment-marks"
            element={
              <AdminRoute>
                <AssignmentMark />
              </AdminRoute>
            }
          />
          <Route
            path="quizzes"
            element={
              <AdminRoute>
                <Quizzes />
              </AdminRoute>
            }
          />
          <Route
            path="videos"
            element={
              <AdminRoute>
                <Videos />
              </AdminRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
