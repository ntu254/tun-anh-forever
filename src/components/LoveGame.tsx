
import React, { useState } from 'react';
import { Heart, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Question {
  id: number;
  text: string;
}

const questions: Question[] = [
  { id: 1, text: 'Ai là người nhắn tin trước nhiều hơn?' },
  { id: 2, text: 'Người kia hay dỗi vì điều gì vô lý nhất?' },
  { id: 3, text: 'Lúc người kia cute nhất là khi nào?' },
  { id: 4, text: 'Lần gần nhất người kia ghen là vì...?' },
  { id: 5, text: 'Món ăn người ấy có thể ăn hoài không chán?' },
  { id: 6, text: 'Tình huống "muốn phát điên" nhất khi yêu?' },
  { id: 7, text: 'Lời khen hay "đỉnh" nhất từng được nghe từ người kia?' },
  { id: 8, text: 'Nếu người kia là con vật, họ sẽ là con gì và vì sao? 🐒' },
  { id: 9, text: 'Một "bí mật ngớ ngẩn" bạn chưa nói với người ấy?' },
  { id: 10, text: 'Người kia làm điều gì khiến bạn thấy "ok fine, yêu quá nên tha"? 😂' }
];

const rewards = [
  'Gửi ảnh "dễ thương nhất hệ mặt trời" 🌞',
  'Bao trà sữa lần hẹn hò tiếp theo 🧋'
];

const LoveGame: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
    }
  };

  return (
    <div className="mb-8 w-full">
      <div className="love-card">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="text-love" size={24} />
          <h2 className="love-heading">Mini Game: "Ai là người yêu giỏi nhất?" 💘</h2>
        </div>
        
        <div className="bg-romantic-light p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-love-dark mb-2 text-xl">🕹 Cách chơi:</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Mỗi người trả lời các câu hỏi theo kiểu tự thú hoặc đoán xem đối phương sẽ nói gì.</li>
            <li>Ai trả lời đúng nhiều hơn, sẽ được tuyên dương là "người yêu giỏi nhất" 😎</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <div className="bg-white border-2 border-romantic rounded-xl p-6 mb-6 shadow-md relative">
            <div className="absolute -top-3 -left-3 bg-love text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              {currentQuestion + 1}
            </div>
            <p className="text-xl text-center font-medium text-love-dark">
              {questions[currentQuestion].text}
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button 
              className="love-button"
              onClick={handleNextQuestion}
            >
              Câu hỏi tiếp theo <Heart className="ml-2" size={16} />
            </Button>
          </div>
        </div>
        
        <div className="bg-romantic-light p-4 rounded-lg">
          <h3 className="font-semibold text-love-dark mb-2 text-xl">🎁 Phần thưởng (tự nghĩ ra, càng lầy càng vui):</h3>
          <p className="font-medium mb-2">Người thua phải...</p>
          <ul className="list-disc list-inside space-y-2">
            {rewards.map((reward, index) => (
              <li key={index}>{reward}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoveGame;
