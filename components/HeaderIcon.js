function HeaderIcon({ Icon, active }) {
  return (
    <div className="hover:animate-bounce flex items-center cursor-pointer md:px-5 sm:h-14 md:hover:bg-gray-300  rounded-xl active:border-b-2 active:border-blue-500 group">
      <Icon
        className={`h-5 text-gray-600 text-center sm:h-7 mx-auto group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
