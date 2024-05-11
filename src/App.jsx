import Profile from './components/profile/profile'
import FriendList from './components/FriendList/friendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import userData from './userData.json'
import friends from './friends.json'
import items from './transactions.json'
import './App.css'

// function Profile() {
//   return (
//     <div></div>
//   )
// }
// const userData = {
//   username: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308
//   }
// };

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
      <TransactionHistory items = {items}/>
    </>
  )
}

export default App
