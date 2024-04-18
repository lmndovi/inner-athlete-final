async function getVideoSrc(url: String) {
  // Assuming you have a function to extract the video ID from the YouTube URL
  const videoId = extractVideoId(url);
  // Constructing the embeddable YouTube URL
  return `https://www.youtube.com/embed/${videoId}`;
}

function extractVideoId(url: String) {
  // Logic to extract video ID from YouTube URL
  // For example:
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (match && match[1]) {
    return match[1];
  } else {
    throw new Error("Invalid YouTube URL");
  }
}

export default async function SpeedVideoComponent() {
  const src = await getVideoSrc(
    "https://youtu.be/3YkROUREciU?si=1W2wfwSHNH4iUBLT"
  );

  return <iframe src={src} />;
}
