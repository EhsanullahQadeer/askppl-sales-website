import { notFound } from "next/navigation";
import StoryContent from "../components/StoryContent";
import { sliderItems } from "../data/data";

const Page = async ({
  params,
}: {
  params: Promise<{ storyId?: string[] }>;
}) => {
  const { storyId } = await params;
  let artist;
  if (storyId?.[0]) {
    artist = sliderItems.find((a) => a.id.toString() === storyId?.[0]);
  } else {
    artist = sliderItems[0];
  }

  if (!artist) return notFound();

  return <StoryContent artistData={artist} />;
};

export default Page;
