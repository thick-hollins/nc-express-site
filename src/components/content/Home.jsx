import Articles from "./Articles";

const Home = ({ voteHistory, setVoteHistory, sortBy, setSortBy, order, setOrder }) => {
  return (
    <>
      <Articles voteHistory={voteHistory} setVoteHistory={setVoteHistory} sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder}/>
    </>
  )
};

export default Home;