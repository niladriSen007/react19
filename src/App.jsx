/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Suspense, use, useRef, useState } from "react";
import { ThemeContext } from "./provider/ThemeProvider";

const PostForm = ({ addPost }) => {

  const formRef = useRef();


  const formAction = async(formData) =>{
    await new Promise((resolve) => setTimeout(resolve, 1000));

    addPost({title : formData?.get('title') ,body :  formData?.get('body')});

    formRef.current.reset();
  } 

 /*  const handleSubmit = async(e) => {
    e.preventDefault();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    addPost({title,body});
  }; */

  return (
    <form className="flex gap-2" 
    /* onSubmit={handleSubmit} */
    action={formAction}
    ref={formRef}
    >
      <input
        className="p-2 text-black border border-white rounded-md"
        type="text"
        name="title"
      />
      <input
        className="p-2 text-black border border-white rounded-md"
        type="text"
        name="body"

      />
      <button className="p-2 bg-blue-500 rounded-md" type="submit">
        Add Post
      </button>
    </form>
  );
};

const PostItem = ({ post }) => (
  <div className="p-2 border border-white rounded-md">{post?.title} - {post?.body}</div>
);

export const App = () => {
  const { toggleTheme, setToggleTheme } = use(ThemeContext);
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => setPosts([...posts, newPost]);

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-4 px-64 text-white bg-gradient-to-br from-slate-900 to-blue-600">
        <PostForm {...{ addPost }} />
        {posts.map((post, index) => (
          <PostItem key={index} {...{ post }} />
        ))}
      </div>
    </Suspense>
  );
};
