type Props = {
  question: string;
  correct: number;
  index: number;
  wasClicked: number | null;
  checkQuestion: (i: number) => void;
  showFinal: () => void;
};

export const QuizQuestion = ({ question, correct, index, wasClicked, checkQuestion, showFinal }: Props) => {
  return (
    <div className="mb-4 cursor-pointer" onClick={() => checkQuestion(index)}>
      <div
        onClick={showFinal}
        className={`text-lg font-medium p-2 mx-4 bg-blue-300 bg-opacity-85 border border-blue-500 rounded hover:bg-opacity-50
        ${wasClicked === index && wasClicked === correct && 'bg-green-300 border-green-500 animate-pulse-fast'}
        ${wasClicked === index && wasClicked !== correct && 'bg-red-300 border-red-500 animate-pulse-fast'}`}
        key={index}
      >
        {question}
      </div>
    </div>
  );
};
