import React, { useState, useEffect, useContext } from "react";
import { fetchQuestions } from "../Services/QuizService";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar"; // ✅ Import Navbar

const Quiz = () => {
    const { user } = useContext(AuthContext);
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            alert("🚫 Please login to access the quiz!");
            navigate("/login");
        }
    }, [user, navigate]);

    useEffect(() => {
        const getQuestions = async () => {
            const data = await fetchQuestions();
            if (Array.isArray(data) && data.length > 0) {
                setQuestions(data.slice(0, 10)); // Fetch first 10 questions
            }
        };
        getQuestions();
    }, []);

    const handleOptionSelect = (answer) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [currentIndex]: answer,
        });
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleSubmit = () => {
        let newScore = 0;
        questions.forEach((q, index) => {
            if (selectedAnswers[index] === q.correctAnswer) {
                newScore += 1;
            }
        });
        setScore(newScore);
        setShowResult(true);
    };

    return (
        <>
            {/* ✅ Navbar Section */}
            <Navbar />

            {/* ✅ Background Gradient */}
            <div
                className="quiz-container d-flex flex-column align-items-center justify-content-center vh-100"
                style={{
                    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                    minHeight: "100vh",
                    paddingTop: "30px",
                }}
            >
                {showResult ? (
                    <div className="text-center text-white">
                        <h2>🎉 Quiz Completed!</h2>
                        <p>Your Score: {score} / {questions.length}</p>
                        <button className="btn btn-primary" onClick={() => navigate("/")}>
                            Go to Home
                        </button>
                    </div>
                ) : (
                    <div className="container">
                        <h2 className="text-white text-center">Welcome to the Quiz, {user?.userId}!</h2>
                        {questions.length > 0 && questions[currentIndex] ? (
                            <motion.div 
                                className="card p-4 shadow-lg"
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "15px",
                                    maxWidth: "600px",
                                    margin: "auto",
                                }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="card-title fw-bold text-center">
                                    {questions[currentIndex]?.questionText}
                                </h3>

                                {/* Display Media Based on Type */}
                                {questions[currentIndex]?.mediaType === "image" && questions[currentIndex]?.mediaUrl && (
                                    <motion.img 
                                        src={questions[currentIndex]?.mediaUrl} 
                                        alt="Question" 
                                        className="img-fluid my-3 mx-auto d-block rounded"
                                        style={{ width: "300px", height: "200px", objectFit: "cover" }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                )}
                                {questions[currentIndex]?.mediaType === "audio" && questions[currentIndex]?.mediaUrl && (
                                    <audio controls className="my-3 w-100">
                                        <source src={questions[currentIndex]?.mediaUrl} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                )}
                                {questions[currentIndex]?.mediaType === "video" && questions[currentIndex]?.mediaUrl && (
                                    <video controls className="w-100 my-2 rounded shadow" style={{ maxHeight: "300px", width: "100%" }}>
                                        <source src={questions[currentIndex]?.mediaUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}

                                {/* Answer Options */}
                                <div className="list-group my-3">
                                    {["optionA", "optionB", "optionC", "optionD"].map((opt) => (
                                        questions[currentIndex]?.[opt] && (
                                            <motion.button
                                                key={opt}
                                                className={`list-group-item list-group-item-action fw-bold text-center py-2 ${
                                                    selectedAnswers[currentIndex] === questions[currentIndex]?.[opt] 
                                                        ? "active bg-success text-white" 
                                                        : ""
                                                }`}
                                                whileHover={{ scale: 1.05 }}
                                                onClick={() => handleOptionSelect(questions[currentIndex]?.[opt])}
                                            >
                                                {questions[currentIndex]?.[opt]}
                                            </motion.button>
                                        )
                                    ))}
                                </div>

                                {/* Navigation Buttons */}
                                <div className="d-flex justify-content-between">
                                    <button 
                                        className="btn btn-secondary px-4 py-2" 
                                        onClick={handlePrev} 
                                        disabled={currentIndex === 0}
                                    >
                                        ⬅ Previous
                                    </button>
                                    <button 
                                        className="btn btn-secondary px-4 py-2" 
                                        onClick={handleNext} 
                                        disabled={currentIndex === questions.length - 1}
                                    >
                                        Next ➡
                                    </button>
                                </div>

                                {/* Submit Button */}
                                {currentIndex === questions.length - 1 && (
                                    <button 
                                        className="btn btn-success mt-3 w-100 fw-bold py-2" 
                                        onClick={handleSubmit}
                                    >
                                        🎯 Submit Quiz
                                    </button>
                                )}
                            </motion.div>
                        ) : (
                            <p className="text-center text-light fs-4">Loading questions...</p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Quiz;
