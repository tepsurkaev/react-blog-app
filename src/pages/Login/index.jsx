const Login = () => {
  return (
    <div className="text-center">
      <h1 className="text-[21px] font-bold">Авторизация</h1>
      <form className="mt-[15px] flex flex-col items-center gap-[10px]">
        <input className="w-[300px] p-[7px] border rounded-[10px] border-[#f5f5f5] text-[16px] text-black" type="text" placeholder="Введите имя" />
        <input className="w-[300px] p-[7px] border rounded-[10px]  border-[#f5f5f5] text-[16px] text-black" type="password" placeholder="Введите пароль" />
        <button className="w-[300px] mt-[10px] border rounded-[10px] p-[10px] text-[16px] cursor-pointer font-bold hover:bg-[#282828] hover:text-white">Войти</button>
      </form>
    </div>
  );
};

export default Login;
