import React from 'react';

interface UserProfileProps {
  user: {
    fullName: string;
    gender: string;
    targetWeight: string;
    lastLogin: string;
    username: string;
    age: number;
    bodyShape: string;
    activeSessions: string;
    goal: string;
    height: string;
    targetBodyShape: string;
    focusArea: string;
    weight: string;
    dateRegistered: string;
  };
}

export const UserGymProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="bg-gradient-to-r from-[#FF0000] to-[#4d0000] rounded-3xl p-8 text-white">
      <div className="grid grid-cols-4 gap-6">
        <ProfileItem label="Full Name" value={user.fullName} />
        <ProfileItem label="Gender" value={user.gender} />
        <ProfileItem label="Target Weight" value={user.targetWeight} />
        <ProfileItem label="Last Login" value={user.lastLogin} />
        
        <ProfileItem label="Username" value={user.username} />
        <ProfileItem label="Age" value={user.age.toString()} />
        <ProfileItem label="Body Shape" value={user.bodyShape} />
        <ProfileItem label="Active Sessions" value={user.activeSessions} />
        
        <ProfileItem label="Goal" value={user.goal} />
        <ProfileItem label="Height" value={user.height} />
        <ProfileItem label="Target body Shape" value={user.targetBodyShape} />
        <ProfileItem label="Date Registered" value={user.dateRegistered} />
        
        <ProfileItem label="Focus Area" value={user.focusArea} />
        <ProfileItem label="Weight" value={user.weight} />
      </div>
    </div>
  );
};

const ProfileItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <p className="text-red-200 text-sm">{label}</p>
    <p className="font-semibold">{value}</p>
  </div>
);