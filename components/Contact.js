import Image from "next/image";

function Contact({ src, name }) {
  return (
    <div className="flex space-x-3 mb-1 items-center relative hover:bg-gray-300 cursor-pointer p-2 rounded-xl">
      <Image
        className="rounded-full"
        src={src}
        width={40}
        height={40}
        objectFit="cover"
        layout="fixed"
      />
      <p>{name}</p>
      <div className="absolute bg-green-500 h-2 w-2 bottom-2 left-7 rounded-full animate-bounce" />
    </div>
  );
}

export default Contact;
