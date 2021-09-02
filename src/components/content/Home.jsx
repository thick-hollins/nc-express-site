import Articles from "./Articles";

const Home = ({ voteHistory, setVoteHistory, appUser, sortBy, setSortBy, order, setOrder }) => {
  return (
    <div>
      <h4>New comments:</h4>
      <h4>Latest Articles:</h4>
      <Articles voteHistory={voteHistory} setVoteHistory={setVoteHistory} appUser={appUser} sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder}/>
    </div>
  )
};

export default Home;