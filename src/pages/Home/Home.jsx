import React, { useEffect, useState } from "react";
import "./home.css";
import { Header } from "../../components/Header/Header";
import { Post } from "../../components/posts/Post";
import { SideBar } from "../../components/SiderBar/SideBar";
import { Nabar } from "../../components/Navbar/Nabar";
import axios from "axios";
import { useLocation } from "react-router-dom";
export const Home = () => {
  const [post, setPost] = useState([]);

  const { search } = useLocation();
  console.log(location);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/v1/posts" + search
      );
      console.log(response.data);
      setPost(response.data);
    };
    fetchApi();
  }, [search]);
  return (
    <div>
      <Nabar />
      <Header />

      <div className="home">
        <Post post={post} />
        <SideBar />
      </div>
    </div>
  );
};
