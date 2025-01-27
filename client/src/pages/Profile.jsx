import React,{useEffect, useState} from 'react'
import Leftbar from '../components/Leftbar/Leftbar'
import Navbar from '../components/navbar/Navbar'
import Rightbar from '../components/Rightbar/Rightbar'
import Feed from '../components/Feed/Feed'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Profile.css'
function Profile() {
  const [user, setUser] = useState({})
  const username=useParams().username;
  useEffect(() => {
    const getUser=async()=>{
        const res=await axios.get(`/user?username=${username}`);
        setUser(res.data)
        
      }
      getUser();
}, [username])

  return (
    <>
      <Navbar />
      <div className="profile">
        <Leftbar />
        <div className="profileright">
          <div className="profilerighttop">
            <div className='profilecover'>
              <img src={user.coverPicture?user.coverPicture:`/Assets/nocover.jpeg`} alt="" className="profilecoverimage" />
              <img src={user.profilePicture?user.profilePicture:`/Assets/noimage.png`} alt="" className="profileuserimage" />
            </div>
            <div className="profileinfo">
              <h4 className="profileinfoname">{user.username}</h4>
              <span className="profileinfodesc">{user.desc}</span>
            </div>
          </div>
          <div className="profilerightbottom">
           <Feed username={username}/>
            <Rightbar user={user}/>
          </div>

        </div>
      </div>
    </>
  )
}

export default Profile