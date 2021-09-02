import Articles from "./Articles";

const Home = ({ voteHistory, setVoteHistory, appUser }) => {
  return (
    <div>
      <h4>New comments:</h4>
      <h4>Latest Articles:</h4>
      <Articles voteHistory={voteHistory} setVoteHistory={setVoteHistory} appUser={appUser} />
    </div>
  )
};

export default Home;