export default function SelectBar({searchInput, handleChangeSearchInput}) {
  return <div>
    <input type="text" value={searchInput} onChange={(e) => handleChangeSearchInput(e.target.value)}/>
  </div>
}
