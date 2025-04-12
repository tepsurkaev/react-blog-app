import React, { ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { createBlog } from "../../../features/blogs/blogSlice";

const BlogForm = () => {
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");

  const dispatch = useAppDispatch();

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (title !== "" && content !== "") {
      dispatch(createBlog({ title, content }));
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-bold my-[15px]">Форма для создания блога</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          className="p-[7px] rounded-lg w-2xs"
          type="text"
          placeholder="Придумайте заголовок блога"
          onChange={handleChangeTitle}
        />
        <input
          className="p-[7px] rounded-lg w-2xs my-[10px]"
          type="text"
          placeholder="Напишите текст"
          onChange={(e) => handleChangeContent(e)}
        />
        <button className="w-2xs p-[10px] font-bold rounded-lg cursor-pointer border hover:bg-[#282828] hover:text-white">
          Опубликовать блог
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
