import React, { useState } from "react";

function FaqPage() {
  const [expandedQuestions, setExpandedQuestions] = useState([]);

  const toggleQuestion = (index) => {
    if (expandedQuestions.includes(index)) {
      setExpandedQuestions(expandedQuestions.filter((i) => i !== index));
    } else {
      setExpandedQuestions([...expandedQuestions, index]);
    }
  };

  const faqData = [
    {
      question: "Question 1",
      answer: "Answer for Question 1",
    },
    {
      question: "Question 2",
      answer: "Answer for Question 2",
    },
    // Add more questions and answers here
  ];
  return (
    <div className="flex justify-center py-8">
      <div className="flex max-w-4xl w-full">
        <div className="w-1/2 pr-8">
          <h1 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600">Additional paragraph text goes here.</p>
        </div>
        <div className="w-1/2  border-gray-300">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 last:border-b-0"
            >
              <div
                className="flex items-center justify-between py-4 cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-xl font-bold mr-4">
                  {expandedQuestions.includes(index) ? "-" : "+"}
                </span>
                <h3 className="text-lg font-semibold flex-grow">
                  {item.question}
                </h3>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedQuestions.includes(index) ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="py-4 pl-6 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
