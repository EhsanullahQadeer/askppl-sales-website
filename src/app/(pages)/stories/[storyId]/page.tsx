import React from "react";
import StoryContent from "../components/StoryContent";
import { sliderItems } from "../data/data";
import { notFound } from "next/navigation";

const page = async ({
  params,
}: {
  params: Promise<{ storyId: string | number }>;
}) => {
  const { storyId } = await params;
  const artist = sliderItems.find((artist) => String(artist.id) === storyId);
  if (!artist) return notFound();

  return <StoryContent {...{ artistData: artist }} />;
};

export default page;
