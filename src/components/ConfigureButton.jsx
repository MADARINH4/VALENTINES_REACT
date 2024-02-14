import Button from './Button';
import REJECTION_QUESTIONS from '../model-questions';
import { useContext, useState } from 'react';
import { ImageStatusContext } from '../store/context';

export default function ConfigureButton() {
  const { onImageChangeAccepted, onImageChangeRejected } =
    useContext(ImageStatusContext);
  const [questionsStates, setQuestionsStates] = useState({
    index: 0,
    size: null,
    state: false,
  });

  function handleQuestionRejected() {
    if (REJECTION_QUESTIONS[questionsStates.index] === REJECTION_QUESTIONS[5]) {
      onImageChangeRejected();
    }
    setQuestionsStates((prev) => {
      return {
        ...prev,
        index: prev.index + 1,
        size: prev.size + 40,
      };
    });
  }

  function handleQuestionAccepted() {
    onImageChangeAccepted();
    setQuestionsStates((prev) => {
      return {
        ...prev,
        state: true,
      };
    });
  }

  return (
    <div className="container flex">
      <span>
        <Button
          onClick={handleQuestionAccepted}
          size={questionsStates.size}
          style={{ padding: `${questionsStates.size}px` }}
          className="btn-shine bg-green-600"
          hidden={questionsStates.state}
        >
          Yes
        </Button>
      </span>
      <span>
        <Button
          hidden={questionsStates.state}
          onClick={handleQuestionRejected}
          className="btn-shine bg-red-600"
        >
          {questionsStates.index < REJECTION_QUESTIONS.length
            ? REJECTION_QUESTIONS[questionsStates.index]
            : REJECTION_QUESTIONS[15]}
        </Button>
      </span>
    </div>
  );
}
