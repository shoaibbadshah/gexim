import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Hammad Ali",
    src: "/Hammad.jpg",
    profile: "/Hammad.jpg",
  },
  {
    name: "Waqas",
    src: "/Waqas.jpg",
    profile: "/Waqas.jpg",
  },
  {
    name: "Aamir Khan Maroofi",
    src: "/Maroofi.jpg",
    profile: "/Maroofi.jpg",
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

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
