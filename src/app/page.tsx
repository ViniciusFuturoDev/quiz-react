'use client';

import { Quiz } from '@/components/Quiz';
import { quiz } from '@/data/quiz';
import { useState } from 'react';
export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="h-screen bg-blue-600 flex justify-center items-center">
      <Quiz
        type={quiz[currentQuestion].type}
        title={quiz[currentQuestion].title}
        quizQuestions={quiz[currentQuestion].quizQuestions}
        correctQuestion={quiz[currentQuestion].correctQuestion}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    </div>
  );
}
