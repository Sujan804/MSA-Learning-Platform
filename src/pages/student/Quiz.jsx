import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
const Quiz = () => {
  const { id } = useParams();
  const quizzes = useSelector((state) => state.quiz.quizzes);
  const selectedQuizzes = quizzes.filter((quiz) => quiz.video_id == id);
  const videos = useSelector((state) => state.video.videos);
  const quizVideo = videos.filter((video) => video.id == id);
  if (selectedQuizzes.length == 0) {
    return (
      <>
        <Navbar />
        <section className="py-6 bg-primary">
          <div className="mx-auto max-w-7xl px-5 lg:px-0">
            <div className="mb-8">
              <h1 className="text-2xl font-bold">{quizVideo[0].title}</h1>
              <p className="text-sm text-slate-200">
                Each question contains 5 Mark
              </p>
            </div>
            <div className="space-y-8 ">
              <h1 className="text-1xl font-bold text-center text-yellow-400">
                No quiz in this video
              </h1>
            </div>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">{quizVideo[0].title}</h1>
            <p className="text-sm text-slate-200">
              Each question contains 5 Mark
            </p>
          </div>
          <div className="space-y-8 ">
            {selectedQuizzes.map((quiz, index) => (
              <div className="quiz" key={quiz.id}>
                <h4 className="question">
                  Quiz {`${index + 1} : `} {quiz.question}
                </h4>
                <form className="quizOptions">
                  {/* <!-- Option 1 --> */}
                  <label>
                    <input type="checkbox" id="option1_q1" />
                    {quiz.options[0].option}
                  </label>

                  {/* <!-- Option 2 --> */}
                  <label>
                    <input type="checkbox" id="option2_q1" />{" "}
                    {quiz.options[1].option}
                  </label>

                  {/* <!-- Option 3 --> */}
                  <label>
                    <input type="checkbox" id="option3_q1" />{" "}
                    {quiz.options[2].option}
                  </label>

                  {/* <!-- Option 4 --> */}
                  <label>
                    <input type="checkbox" id="option4_q1" />{" "}
                    {quiz.options[3].option}
                  </label>
                </form>
              </div>
            ))}
          </div>

          <button className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default Quiz;
