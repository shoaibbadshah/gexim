import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  {
    name: "Hammad Ali",
    src: "/Hammad.jpg",
    profile: "/Hammad.jpg",
  },
  {
    name: "Aamir Khan Maroofi",
    src: "/Maroofi.jpg",
    profile: "/Maroofi.jpg",
  },

  {
    name: "Waqas Khan",
    src: "/Waqas.jpg",
    profile: "/Waqas.jpg",
  },

  {
    name: "Naseem ur Rehman",
    src: "/Naseem.jpg",
    profile: "/Naseem.jpg",
  },
  {
    name: "Saeed ur Rehman",
    src: "/Saeed.jpg",
    profile: "/Saeed.jpg",
  },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <div className="text-xl">Contacts</div>
        <div className="flex space-x-2">
          <div className="cursor-pointer hover:bg-gray-300 rounded-xl p-1">
            <VideoCameraIcon className="h-6 " />
          </div>
          <div className="cursor-pointer hover:bg-gray-300 rounded-xl p-1">
            <SearchIcon className="h-6 " />
          </div>
          <div className="cursor-pointer hover:bg-gray-300 rounded-xl p-1">
            <DotsHorizontalIcon className="h-6 " />
          </div>
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
