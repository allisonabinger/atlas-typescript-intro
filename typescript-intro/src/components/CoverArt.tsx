// Cover Art Component (uses placeholder)

type CovertArtProps = {
  imageURL: string;
};

function CoverArt({ imageURL }: CovertArtProps) {
  return (
    <div className="flex cover-art mb-6 w-full justify-center">
      <img
        src={imageURL}
        alt="Current Album Cover"
        className="rounded-md md:w-400 md:h-400"
      />
    </div>
  );
}

export default CoverArt;
