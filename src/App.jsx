import Profile from "./components/Profile/Profile";
import userData from "./Data/userData.json";
import FriendList from "./components/Friends/Friendlist";
import friends from "./Data/friends.json";
import transactions from "./Data/transactions.json";
import TransactionHistory from "./components/Transactions/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
