import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import PostFormCard from '../components/PostFormCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/posts/postActions';
import PostCard from '../components/PostCard';
import FollowRequestsPanel from '../components/FollowRequestsPanel';

const followRequests = [
  {
    id: 1,
    name: 'User 1',
    avatar: 'avatar1.jpg',
  },
  {
    id: 2,
    name: 'User 2',
    avatar: 'avatar2.jpg',
  },

];

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.posts.posts.products);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="flex justify-center p-4">
      <div className="w-full md:w-4/3 lg:w-2/4">
    
        <PostFormCard />
        <div>
          {products?.map((product) => (
            <PostCard product={product} key={product._id} />
          ))}
        </div>
      </div>

      <div className="w-1/8 ">
        <FollowRequestsPanel followRequests={followRequests} />
      </div>
    </div>
  );
};

export default Home;
