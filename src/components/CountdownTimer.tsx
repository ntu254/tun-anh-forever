
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface TimerProps {
  startDate: Date;
  endDate: Date;
}

const CountdownTimer: React.FC<TimerProps> = ({ startDate, endDate }) => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      
      // Calculate time elapsed since start date
      const elapsedMs = now.getTime() - startDate.getTime();
      const elapsedDays = Math.floor(elapsedMs / (1000 * 60 * 60 * 24));
      const elapsedHours = Math.floor((elapsedMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const elapsedMinutes = Math.floor((elapsedMs % (1000 * 60 * 60)) / (1000 * 60));
      const elapsedSeconds = Math.floor((elapsedMs % (1000 * 60)) / 1000);
      
      setTimeElapsed({
        days: elapsedDays,
        hours: elapsedHours,
        minutes: elapsedMinutes,
        seconds: elapsedSeconds
      });
      
      // Calculate time remaining until end date
      const remainingMs = endDate.getTime() - now.getTime();
      
      if (remainingMs > 0) {
        const remainingDays = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((remainingMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
        const remainingSeconds = Math.floor((remainingMs % (1000 * 60)) / 1000);
        
        setTimeRemaining({
          days: remainingDays,
          hours: remainingHours,
          minutes: remainingMinutes,
          seconds: remainingSeconds
        });
      } else {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [startDate, endDate]);
  
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="mb-8 w-full">
      <div className="love-card border-romantic-dark">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="text-love animate-heartbeat" size={28} />
          <h2 className="love-heading text-center">Kỷ niệm yêu nhau</h2>
          <Heart className="text-love animate-heartbeat" size={28} />
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="text-center">
            <h3 className="love-subheading mb-2">Đã yêu nhau được</h3>
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-bold bg-romantic rounded-lg py-2 px-3 text-love-dark">
                  {formatNumber(timeElapsed.days)}
                </div>
                <span className="text-xs mt-1">ngày</span>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-bold bg-romantic rounded-lg py-2 px-3 text-love-dark">
                  {formatNumber(timeElapsed.hours)}
                </div>
                <span className="text-xs mt-1">giờ</span>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-bold bg-romantic rounded-lg py-2 px-3 text-love-dark">
                  {formatNumber(timeElapsed.minutes)}
                </div>
                <span className="text-xs mt-1">phút</span>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-bold bg-romantic rounded-lg py-2 px-3 text-love-dark">
                  {formatNumber(timeElapsed.seconds)}
                </div>
                <span className="text-xs mt-1">giây</span>
              </div>
            </div>
            <p className="text-sm mt-2 italic text-muted-foreground">Kể từ ngày 10/4/2025</p>
          </div>
          
          <div className="text-center">
            <h3 className="love-subheading mb-2 flex items-center justify-center">
              <span>Đếm ngược đến 7/6/2025</span>
              <span className="ml-2 bg-love text-white text-sm font-medium px-3 py-1 rounded-full animate-pulse">
                Còn {timeRemaining.days} ngày
              </span>
            </h3>
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-bold bg-romantic rounded-lg py-2 px-3 text-love-dark">
                  {formatNumber(timeRemaining.days)}
                </div>
                <span className="text-xs mt-1">ngày</span>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-bold bg-romantic rounded-lg py-2 px-3 text-love-dark">
                  {formatNumber(timeRemaining.hours)}
                </div>
                <span className="text-xs mt-1">giờ</span>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-bold bg-romantic rounded-lg py-2 px-3 text-love-dark">
                  {formatNumber(timeRemaining.minutes)}
                </div>
                <span className="text-xs mt-1">phút</span>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-bold bg-romantic rounded-lg py-2 px-3 text-love-dark">
                  {formatNumber(timeRemaining.seconds)}
                </div>
                <span className="text-xs mt-1">giây</span>
              </div>
            </div>
            <p className="text-sm mt-2 italic text-muted-foreground">Ngày kỷ niệm đặc biệt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
