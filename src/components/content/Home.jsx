import Articles from "./Articles";

const Home = ({ sortBy, setSortBy, order, setOrder }) => {
  return (
    <>
      <Articles sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder}/>
    </>
  )
};

export default Home;