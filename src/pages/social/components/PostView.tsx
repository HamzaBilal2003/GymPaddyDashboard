import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface PostViewProps {
  post: {
    username: string;
    location: string;
    timeAgo: string;
    content: string;
    likes: number;
    comments: number;
    shares: number;
    image: string;
  };
}

const PostView: React.FC<PostViewProps> = ({ post }) => {
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt={post.username}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold">{post.username}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{post.location}</span>
            <span>•</span>
            <span>{post.timeAgo}</span>
            <span>•</span>
            <span className="text-red-500">Sponsored</span>
          </div>
        </div>
      </div>

      <img src={post.image} alt="Post" className="w-full rounded-xl" />

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2">
          <Heart size={24} /> {post.likes}
        </button>
        <button className="flex items-center gap-2">
          <MessageCircle size={24} /> {post.comments}
        </button>
        <button className="flex items-center gap-2">
          <Share2 size={24} /> {post.shares}
        </button>
      </div>

      <p className="text-gray-800">{post.content}</p>

      <div className="border-t pt-4 space-y-4">
        <Comment
          username="Adewale_"
          content="This is a nice innovation, i would like to always share and connects with other gym mates."
          timeAgo="1 min"
          replies={30}
        />
        <Comment
          username="Adewale_"
          content="This is a nice innovation, i would like to always share and connects with other gym mates."
          timeAgo="1 min"
          replies={30}
        />
      </div>
    </div>
  );
};

const Comment: React.FC<{
  username: string;
  content: string;
  timeAgo: string;
  replies: number;
}> = ({ username, content, timeAgo, replies }) => (
  <div className="flex gap-3">
    <img
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt={username}
      className="w-8 h-8 rounded-full"
    />
    <div>
      <h4 className="font-semibold">{username}</h4>
      <p className="text-gray-800">{content}</p>
      <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
        <button>Reply</button>
        <div className="flex items-center gap-1">
          <MessageCircle size={16} />
          <span>{replies}</span>
        </div>
        <span>{timeAgo}</span>
      </div>
    </div>
  </div>
);

export default PostView;