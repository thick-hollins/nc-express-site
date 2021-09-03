import Articles from "./Articles";
import { Link } from "react-router-dom";

const Home = ({ voteHistory, setVoteHistory, appUser, sortBy, setSortBy, order, setOrder }) => {
  return (
    <div>
      <p>Logged in as <Link to={`/users/${appUser}`}>{appUser}</Link></p>
      {sortBy === 'created_at' && order === 'desc' && <h4>Latest Articles:</h4>}
      <Articles voteHistory={voteHistory} setVoteHistory={setVoteHistory} appUser={appUser} sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder}/>
    </div>
  )
};

export default Home;