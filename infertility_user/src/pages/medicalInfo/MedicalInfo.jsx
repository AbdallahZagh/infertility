import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import FileInput from './components/fileInput';
import QuestionItem from './components/QuestionItem';

const MedicalInfo = () => {
    const { i18n } = useTranslation();

    const questions = [
  {
    "id": 1,
    "type": "yes_no",
    "question_en": "Have you been trying to conceive for more than 12 months?",
    "question_ar": "هل تحاولين الإنجاب منذ أكثر من 12 شهرًا؟"
  },
  {
    "id": 2,
    "type": "yes_no",
    "question_en": "Do you have irregular menstrual cycles?",
    "question_ar": "هل دورتك الشهرية غير منتظمة؟"
  },
  {
    "id": 3,
    "type": "yes_no",
    "question_en": "Have you experienced any miscarriages before?",
    "question_ar": "هل سبق وأن تعرضتِ لإجهاض؟"
  },
  {
    "id": 4,
    "type": "yes_no",
    "question_en": "Have you ever been diagnosed with polycystic ovary syndrome (PCOS)?",
    "question_ar": "هل تم تشخيصك بمتلازمة تكيس المبايض؟"
  },
  {
    "id": 5,
    "type": "yes_no",
    "question_en": "Has your partner done a semen analysis?",
    "question_ar": "هل قام شريكك بتحليل السائل المنوي؟"
  },
  {
    "id": 6,
    "type": "yes_no",
    "question_en": "Do you experience pelvic pain or discomfort?",
    "question_ar": "هل تعانين من ألم أو انزعاج في منطقة الحوض؟"
  },
  {
    "id": 7,
    "type": "text",
    "question_en": "Please describe any previous fertility treatments you have tried.",
    "question_ar": "يرجى وصف أي علاجات خصوبة سابقة قد جربتيها."
  },
  {
    "id": 8,
    "type": "text",
    "question_en": "Do you have any known medical conditions that may affect fertility?",
    "question_ar": "هل لديك أي حالات طبية معروفة قد تؤثر على الخصوبة؟"
  },
  {
    "id": 9,
    "type": "text",
    "question_en": "What is your average menstrual cycle length (in days)?",
    "question_ar": "ما هو متوسط طول دورتك الشهرية (بالأيام)؟"
  },
  {
    "id": 10,
    "type": "text",
    "question_en": "Please mention any medications or supplements you are currently taking.",
    "question_ar": "يرجى ذكر أي أدوية أو مكملات تتناولينها حالياً."
  }
]

 const [answers, setAnswers] = useState({});

 const handleAnswerChange = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Answers:", answers);
    alert("Form submitted. Check console.");
  };


    

  return (
    <div className='h-screen flex justify-between items-center bg-[#F5F5F5] relative' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
        <div className='w-64 h-screen'>
            <SideBar/>
        </div>
         <div className='w-[82%] h-screen bg-[#F5F5F5] relative' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
       <Header/>
       <FileInput/>
       <form onSubmit={handleSubmit} className="w-[99%] mx-auto bg-white pt-32 p-4 rounded-xl shadow-md grid grid-cols-2 place-items-center mt-5">
      {questions.map((q) => (
        <QuestionItem
          key={q.id}
          question={q}
          answer={answers[q.id]}
          onChange={handleAnswerChange}
        />
      ))}
      <button
        type="submit"
        className="w-[50%] col-span-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Submit Answers
      </button>
    </form>
    </div>
    </div>
  )
}

export default MedicalInfo