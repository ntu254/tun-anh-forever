
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 mt-4 text-center">
      <div className="flex items-center justify-center gap-2">
        <span className="text-love-dark">Tủn</span>
        <Heart className="text-love animate-heartbeat" size={20} fill="currentColor" />
        <span className="text-love-dark">Phương Anh</span>
      </div>
      <p className="text-sm mt-2 text-muted-foreground">2023 - 2025 Mãi yêu nhau</p>
    </footer>
  );
};

export default Footer;
