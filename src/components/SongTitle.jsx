// Song Title Component

function SongTitle({ title, artist }) {
  return (
    <div>
      <h2 className="leading-8 text-2xl font-bold mb-2 text-vista-blue-900">{title}</h2>
      <p className="mb-4 text-vista-blue-900">{artist}</p>
    </div>
  );
}

export default SongTitle;
