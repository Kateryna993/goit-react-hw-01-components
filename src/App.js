import React from 'react';
import Profile from './homework/social-profile/components/Profile';
import user from './homework/social-profile/user.json';
import Container from './homework/Components-container/Container';
import Statistics from './homework/statistics/Statistics';
import statisticalData from './homework/statistics/statistical-data.json';
import FriendsList from './homework/friends-list/FriendsList';
import friends from './homework/friends-list/friends.json';
import TransactionHistory from './homework/transaction-history/TransactionHistory';
import transactions from './homework/transaction-history/transactions.json';

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
}

export default App;
