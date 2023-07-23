import { Profile } from '../components/User.jsx'
import user from '../data/user.json'
import { Statistics } from './Stats.jsx';
import data from '../data/data.json'
import { FriendList } from './FriendsList.jsx';
import friends from '../data/friends.json'
import { TransactionHistory } from './Transactions.jsx';
import transactions from '../data/transactions.json'


export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column'
      }}
    >
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
