// PlayList Item Component

function PlayListItem({ title, artist, length }) {
  return (
    <div className="w-full mb-2 pr-3 flex justify-between font-medium">
      <div className="wrapper text-left text-sm">
        <div className="text-base">{title}</div>
        <div className="text-butterfly-bush-950">{artist}</div>
      </div>
      <div className="length flex items-center">
        <div className="text-sm text-butterfly-bush-950">{length}</div>
      </div>
    </div>
  );
}
export default PlayListItem;
