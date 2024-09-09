// Cover Art Component (uses placeholder)

type CovertArtProps = {
    coverArtPath: string;
}


function CoverArt({ coverArtPath }: CovertArtProps) {
  return (
    <div className="flex cover-art mb-6 w-full justify-center">
      <img
        src={coverArtPath}
        alt="Current Album Cover"
        className="rounded-md md:w-400 md:h-400"
      />
    </div>
  );
}

export default CoverArt;
