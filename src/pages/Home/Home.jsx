import React, { useEffect, useState } from "react";
import "./home.css";
import { Header } from "../../components/Header/Header";
import { Post } from "../../components/posts/Post";
import { SideBar } from "../../components/SiderBar/SideBar";
import { Nabar } from "../../components/Navbar/Nabar";
import axios from "axios";
export const Home = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get("http://localhost:8080/api/v1/posts");
      console.log(response.data);
      setPost(response.data);
    };
    fetchApi();
  }, []);
  return (
    <div>
      <Nabar />
      <Header />

      <div className="home">
        <Post posts={post} />
        <SideBar />
      </div>
    </div>
  );
};
