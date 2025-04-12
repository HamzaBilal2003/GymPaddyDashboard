import React from 'react';
import { Clock, Dumbbell } from 'lucide-react';

interface ChallengeProps {
  day: number;
  title: string;
  duration: number;
  exercises: number;
  progress: number;
  status: 'active' | 'completed' | 'pending';
  imageUrl: string;
}

export const ChallengeCard: React.FC<ChallengeProps> = ({
  day,
  title,
  duration,
  exercises,
  progress,
  imageUrl,
}) => {
  return (
    <div className="bg-red-600 rounded-3xl overflow-hidden">
      <div className="relative h-64 w-full">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-red-600/90 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-4xl font-bold">Day {day}</h3>
            <div className="ml-4 h-8 w-8 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-sm">{progress}%</span>
            </div>
          </div>
          <p className="text-xl mb-4">{title}</p>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-1">
              <Clock className="w-4 h-4" />
              <span>{duration} mins</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-1">
              <Dumbbell className="w-4 h-4" />
              <span>{exercises} exercise</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <button className="w-full bg-white text-red-600 rounded-full py-2 font-semibold hover:bg-red-50 transition-colors">
          View
        </button>
      </div>
    </div>
  );
};