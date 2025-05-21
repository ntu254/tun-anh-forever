
import React from 'react';
import { Trophy } from 'lucide-react';

interface Achievement {
  category: string;
  achievement: string;
  note: string;
}

const achievements: Achievement[] = [
  {
    category: 'Số ngày yêu nhau',
    achievement: 'từ 10/4 tới giờ (và vẫn chưa bị block!)',
    note: 'Tính ra còn bền hơn cục sạc iPhone!'
  },
  {
    category: 'Số lần cãi nhau nhỏ',
    achievement: '0',
    note: 'là đang cãi thì bạn ấy nhắn: "Thôi, đi ăn không?" 🍜'
  },
  {
    category: 'Số lần đi date',
    achievement: '1',
    note: 'là con số hơi ít nhưng may mắn vì luôn có nhau nắm tay ❤️'
  },
  {
    category: 'Số lần bị dỗi vô lý',
    achievement: 'hong đếm xuể',
    note: 'Dỗi xong thì xin lỗi siêu đáng yêu 🐶'
  },
  {
    category: 'Tình huống "tự nhiên thấy yêu"',
    achievement: 'hong nhớ khoảnh khắc nhỏ xíu 🥺',
    note: 'Như lúc người kia lấy đồ ăn cho mình, không nói gì cả...'
  },
  {
    category: 'Số lần "anh/em yêu anh/em"',
    achievement: 'vô số',
    note: 'Chứng nhận nghiện nhau cấp độ nặng.'
  }
];

const AchievementBoard: React.FC = () => {
  return (
    <div className="mb-8 w-full">
      <div className="love-card">
        <div className="flex items-center gap-2 mb-6">
          <Trophy className="text-love" size={24} />
          <h2 className="love-heading">Bảng thành tích yêu đương</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-romantic">
                <th className="py-3 px-4 text-left text-love-dark">Hạng mục</th>
                <th className="py-3 px-4 text-left text-love-dark">Thành tích đạt được</th>
                <th className="py-3 px-4 text-left text-love-dark">Ghi chú hài hước</th>
              </tr>
            </thead>
            <tbody>
              {achievements.map((item, index) => (
                <tr key={index} className="border-b border-romantic-light hover:bg-romantic-light transition-colors">
                  <td className="py-3 px-4 font-semibold">{item.category}</td>
                  <td className="py-3 px-4">{item.achievement}</td>
                  <td className="py-3 px-4 italic">{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AchievementBoard;
