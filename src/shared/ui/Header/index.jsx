import ProfileIcon from "../icons/ProfileIcon";
import BookmarkIcon from "../icons/BookmarkIcon";

function Header() {
  return (
    <div className="border border-black rounded-[10px] flex justify-between items-center h-[50px] p-[10px] mb-[20px]">
      <h1 className="text-[24px]">logo</h1>
      <div className="flex gap-[6px]">
        <BookmarkIcon className="w-[25px] h-[25px]" />
        <ProfileIcon className="w-[25px] h-[25px]" />
      </div>
    </div>
  );
}

export default Header;
