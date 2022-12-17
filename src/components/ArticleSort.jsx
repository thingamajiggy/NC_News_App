export const ArticleSort = ({ sortValue, handleChange }) => {
    return (
        <select value={sortValue} onChange={(ev) => {
            handleChange(ev.target.value)
        }} className="form-select" aria-label="Order of articles">
            <option value="Date">Date</option>
            <option value="Alphabetical">Alphabetical</option>
        </select>
    )
}
