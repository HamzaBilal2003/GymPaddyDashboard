import React, { useState } from 'react';
import { Eye, Shield } from 'lucide-react';
import { UserProfileProps } from '../../../../../constants/Data';
import MediaSlider from './MediaSlider';
import SubscriptionModal from './SubscriptionModal';

const UserConnectProfile: React.FC<UserProfileProps> = ({ user }) => {
  const [showImageSlider, setShowImageSlider] = useState(false);
  const [showVideoSlider, setShowVideoSlider] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);

  return (
    <div className="bg-red-600 rounded-[32px] p-8 text-white">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side - Images and Buttons */}
        <div className="w-full lg:max-w-[400px]">
          <div className="grid grid-cols-3 gap-3">
            {user.images.slice(0, 6).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`User photo ${index + 1}`}
                className="w-full aspect-square object-cover rounded-xl"
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => setShowVideoSlider(true)}
              className="bg-white text-red-600 px-6 py-2 rounded-full font-medium hover:bg-red-50 transition"
            >
              View Video
            </button>
            <button
              onClick={() => setShowImageSlider(true)}
              className="bg-white text-red-600 px-6 py-2 rounded-full font-medium hover:bg-red-50 transition"
            >
              View Images
            </button>
            <span className="bg-red-700/50 px-4 py-2 rounded-full text-sm">
              Unverified
            </span>
          </div>
        </div>

        {/* Right side - User Information */}
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-x-16 gap-y-6">
            <div>
              <div className="text-sm text-red-200">Full Name</div>
              <div className="text-lg">{user.fullName}</div>
            </div>

            <div>
              <div className="text-sm text-red-200">Username</div>
              <div className="text-lg">@{user.username}</div>
            </div>

            <div>
              <div className="text-sm text-red-200">Gender</div>
              <div className="text-lg">{user.gender}</div>
            </div>

            <div>
              <div className="text-sm text-red-200">Relationship status</div>
              <div className="text-lg">{user.relationshipStatus}</div>
            </div>

            <div>
              <div className="text-sm text-red-200">Email</div>
              <div className="text-sm">{user.email}</div>
            </div>

            <div>
              <div className="text-sm text-red-200">Age</div>
              <div className="text-lg">{user.age}</div>
            </div>

            <div>
              <div className="text-sm text-red-200">Interested In</div>
              <div className="text-lg">{user.interestedIn}</div>
            </div>

            <div>
              <div className="text-sm text-red-200">Phone no</div>
              <div className="text-lg">{user.phone}</div>
            </div>

            <div>
              <div className="text-sm text-red-200">Interests</div>
              <div className="text-lg flex items-center gap-2">
                {user.interests} <Eye size={16} />
              </div>
            </div>

            <div>
              <div className="text-sm text-red-200">Distance</div>
              <div className="text-lg">{user.distance}</div>
            </div>

            <div>
              <div className="text-sm text-red-200">Date Registered</div>
              <div className="text-lg">{user.dateRegistered}</div>
            </div>

            <div>
              <div className="text-sm text-red-200">Subscription Status</div>
              <button
                onClick={() => setShowSubscription(true)}
                className="bg-white text-red-600 px-6 py-2 rounded-full font-medium hover:bg-red-50 transition flex items-center gap-2 mt-1"
              >
                Subscribed <Shield size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showImageSlider && (
        <MediaSlider
          type="image"
          media={user.images}
          onClose={() => setShowImageSlider(false)}
        />
      )}

      {showVideoSlider && (
        <MediaSlider
          type="video"
          media={user.videos}
          onClose={() => setShowVideoSlider(false)}
        />
      )}

      {showSubscription && (
        <SubscriptionModal onClose={() => setShowSubscription(false)} />
      )}
    </div>
  );
};

export default UserConnectProfile;