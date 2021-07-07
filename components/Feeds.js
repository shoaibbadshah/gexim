import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

function Feeds({ posts }) {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 scrollbar-hide overflow-y-auto">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default Feeds;
