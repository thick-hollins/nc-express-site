const Sort = ({ sortBy, setSortBy, order, setOrder }) => {
  return (
      <section className='sort'>
        <label>
          Sort By:
          <select
            value={sortBy}
            onChange={(event) => {
              setSortBy(event.target.value);
            }}
          >
            <option value="created_at">Created at</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
        </label>
        <label>
          Order:
          <select
            value={order}
            onChange={(event) => {
              setOrder(event.target.value);
            }}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </label>
      </section>
  );
};

export default Sort;
