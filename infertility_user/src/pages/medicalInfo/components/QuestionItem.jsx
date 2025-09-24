import React from 'react';
import { useTranslation } from 'react-i18next';

const QuestionItem = ({ question, answer, onChange }) => {

          const { t, i18n } = useTranslation();
    
  return (
    <div className="w-[100%] mb-6">
      <label className="block text-md font-medium text-gray-700 mb-2">
        {i18n.language == 'en' ?  question.question_en : question.question_ar}  
        {/* <span className="block text-sm text-gray-500">{question.question_ar}</span> */}
      </label>

      {question.type === "yes_no" ? (
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name={`question-${question.id}`}
              value="yes"
              checked={answer === "yes"}
              onChange={() => onChange(question.id, "yes")}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span>{i18n.language == 'en' ?  'Yes' : 'نعم'}</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name={`question-${question.id}`}
              value="no"
              checked={answer === "no"}
              onChange={() => onChange(question.id, "no")}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span>{i18n.language == 'en' ?  'No' : 'لا'}</span>
          </label>
        </div>
      ) : (
        <input
          type="text"
          value={answer || ""}
          onChange={(e) => onChange(question.id, e.target.value)}
          className="w-[75%] p-2 border rounded-lg outline-none"
          placeholder={t("questionHolder")}
        />
      )}
    </div>
  );
};

export default QuestionItem;
