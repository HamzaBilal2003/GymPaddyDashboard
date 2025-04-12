import React from 'react';

interface AssessmentQuestion {
  question: string;
  answer: string;
}

interface FitnessAssessmentProps {
  questions: AssessmentQuestion[];
}

export const FitnessGymAssessment: React.FC<FitnessAssessmentProps> = ({ questions }) => {
  return (
    <div className="bg-gradient-to-r from-[#FF0000] to-[#4d0000] rounded-3xl p-8 mt-6">
      <h2 className="text-white text-xl font-semibold mb-4">Fitness Assessment</h2>
      <div className="grid grid-cols-3 gap-4">
        {questions.map((item, index) => (
          <div key={index} className="bg-[#8C0A0D] rounded-xl text-white shadow-md">
            <p className="text-lg mb-2 p-4">{item.question}</p>
            <p className="bg-[#660E10] rounded-xl p-4">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};