import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
import "./Profile.scss"
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import CreatePost from '../Posts/CreatePost/CreatePost';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const { Meta } = Card;
  
  if(!user){
    return <p>Cargando...</p>
  }
  
  return (
    <div className='profilecontainer'>
  <Card className='profile'
    style={{
      width: 300,
    }}
    cover={
      <img
        alt=""
        src="https://images.vexels.com/media/users/3/267691/isolated/preview/a90b115784dc0cd1f39249cde5c5dfa9-bruja-halloween-kawaii-dibujos-animados.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={user.user.name}
      description={user.user.email}
      
    />
  </Card>
  <CreatePost/>
  <div>
          {user.user.postIds?.map((post) => (
            <div key={post._id}>
            <Link to={"/post/" + post._id}>
              <p>{post.title}</p>
              
            </Link>
            </div>
            
          ))}
          
        </div>
  </div>
  )}

export default Profile;