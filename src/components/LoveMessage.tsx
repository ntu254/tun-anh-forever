
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LoveMessage: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-8 w-full">
      <div className="love-card">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="text-love" size={24} />
          <h2 className="love-heading">Lời bày tỏ của Tủn với Phương Anh</h2>
        </div>
        
        <div className={`relative overflow-hidden transition-all duration-500 ${expanded ? 'max-h-none' : 'max-h-36'}`}>
          <p className="text-lg leading-relaxed mb-4">
            Phương Anh à, anh không giỏi văn chương như em đâu, nhưng anh muốn nói là từ ngày gặp em, cuộc sống của anh như có thêm một tia nắng ấm vậy đó.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Mỗi tin nhắn của em là một niềm vui nhỏ, mỗi nụ cười của em là một khoảnh khắc anh muốn giữ mãi. Đôi khi anh vẫn không tin là mình may mắn thế nào khi có em bên cạnh.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Ai đó đã từng nói, tình yêu không phải là nhìn chăm chăm vào nhau, mà là cùng nhìn về một hướng. Và anh thật sự hạnh phúc khi được cùng em nhìn về tương lai, cùng em trải qua những ngày thường nhật giản dị mà đầy ý nghĩa.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Cảm ơn em vì đã là em, vì đã xuất hiện trong cuộc đời anh và làm cuộc sống của anh trọn vẹn hơn. Anh hứa sẽ cố gắng để xứng đáng với tình yêu của em.
          </p>
          <p className="text-lg leading-relaxed font-semibold text-love-dark">
            Yêu em nhiều lắm! ❤️
          </p>
          
          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
          )}
        </div>
        
        <div className="flex justify-center mt-4">
          <Button 
            className="love-button"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Thu gọn' : 'Đọc thêm'} 
            <Heart className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoveMessage;
