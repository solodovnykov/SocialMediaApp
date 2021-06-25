import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import "./createForm.scss";

const CreateForm = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <div className="form-title">{currentId ? "Edit" : "Create"} New Post</div>
      <div className="form-field">
        <div className="form-field-title">Creator</div>
        <input
          className="form-field-input"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          name="creator"
          type="text"
          placeholder="Name"
        />
      </div>

      <div className="form-field">
        <div className="form-field-title">Title</div>
        <input
          className="form-field-input"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          name="title"
          type="text"
          placeholder="Post title"
        />
      </div>

      <div className="form-field">
        <div className="form-field-title">Message</div>
        <textarea
          className="form-field-text"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          name="message"
          type="text"
          placeholder="Message"
          cols="30"
          rows="5"
        />
      </div>

      <div className="form-field">
        <div className="form-field-title">Tags</div>
        <input
          className="form-field-input"
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
          name="tags"
          type="text"
          placeholder="Coma separated"
        />
      </div>

      <div className="form-field">
        <div className="form-field-title">Image Upload</div>
        <FileBase
          className="form-field-input"
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        ></FileBase>
      </div>

      <div className="form-buttons">
        <button className="form-button blue-btn" type="submit">
          Submit
        </button>
        <button className="form-button red-btn" type="button" onClick={clear}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
