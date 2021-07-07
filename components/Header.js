import Image from "next/image";
import HeaderIcon from "./HeaderIcon";

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { session, signOut, useSession } from "next-auth/client";

function Header() {
  const [session] = useSession();

  return (
    <div className="sticky bg-purple-400 top-0 z-50 flex items-center  lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="/logo.jpeg"
          layout="fixed"
          className="rounded-2xl"
          width={50}
          height={50}
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-200 p-1 pl-2">
          <SearchIcon className="h-4 sm:h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Gexim"
          />
        </div>
      </div>

      {/* center */}

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 lg:space-x-4 md:space-x-1">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* right */}

      <div className="flex items-center sm:space-x-2 justify-end">
        {/* <Image /> Profile Picture */}

        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
        />
        <p className="whitespace-nowrap font-semibold pr-3 hidden md:flex">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
