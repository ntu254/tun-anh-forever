
import React from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import LoveMessage from '@/components/LoveMessage';
import AchievementBoard from '@/components/AchievementBoard';
import LoveGame from '@/components/LoveGame';
import Footer from '@/components/Footer';
import { Heart } from 'lucide-react';

const Index: React.FC = () => {
  // Start date: April 10, 2023
  const startDate = new Date(2023, 3, 10); // Month is 0-indexed in JavaScript
  
  // End date: June 7, 2023
  const endDate = new Date(2023, 5, 7); // Month is 0-indexed in JavaScript

  return (
    <div className="min-h-screen bg-gradient-to-b from-romantic-light to-white">
      <div className="container max-w-4xl px-4 py-8">
        <header className="text-center mb-10">
          <div className="flex justify-center items-center gap-3 mb-2">
            <Heart className="text-love animate-heartbeat" size={36} fill="currentColor" />
            <h1 className="text-5xl md:text-6xl font-bold text-love-dark">Tủn & Phương Anh</h1>
            <Heart className="text-love animate-heartbeat" size={36} fill="currentColor" />
          </div>
          <p className="text-xl text-love italic">Hành trình yêu thương của chúng mình</p>
        </header>

        <main>
          <CountdownTimer startDate={startDate} endDate={endDate} />
          <LoveMessage />
          <AchievementBoard />
          <LoveGame />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
