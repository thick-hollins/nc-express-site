import Articles from "./Articles";

const Home = ({ voteHistory, setVoteHistory, appUser, sortBy, setSortBy, order, setOrder }) => {
  return (
    <>
      <Articles voteHistory={voteHistory} setVoteHistory={setVoteHistory} appUser={appUser} sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder}/>
    </>
  )
};

export default Home;