const blogForm = () => {
  return (
    <div className="text-center">
      <h1 className="text-xl font-bold my-[15px]">Форма для создания блога</h1>
      <form className="flex flex-col items-center">
        <input className="p-[7px] rounded-lg w-2xs" type="text" placeholder="Придумайте заголовок блога" />
        <input className="p-[7px] rounded-lg w-2xs my-[10px]" type="text" placeholder="Напишите текст" />
        <button className="w-2xs p-[10px] font-bold rounded-lg cursor-pointer border hover:bg-[#282828] hover:text-white">Опубликовать блог</button>
      </form>
      
    </div>
  );
};

export default blogForm;
