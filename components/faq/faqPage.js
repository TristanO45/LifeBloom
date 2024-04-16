import React, { useState } from "react";
import { faqData } from "../../data/data";

function FaqPage() {
  const [expandedQuestions, setExpandedQuestions] = useState([]);

  const toggleQuestion = (index) => {
    if (expandedQuestions.includes(index)) {
      setExpandedQuestions(expandedQuestions.filter((i) => i !== index));
    } else {
      setExpandedQuestions([...expandedQuestions, index]);
    }
  };

  return (
    <div className="flex justify-center py-8">
      <div className="flex max-w-4xl w-full">
        <div className="w-full mx-4  border-gray-300">
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
                  expandedQuestions.includes(index) ? "max-h-full" : "max-h-0"
                }`}
              >
                <div
                  className="py-4 pl-6 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: item.answer.replace(/\n/g, "<br />"),
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
