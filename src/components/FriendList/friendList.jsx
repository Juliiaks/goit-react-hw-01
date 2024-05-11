import FriendListItem from "./friendListItem"

export default function FriendList({friends}) {
    return (<ul>
        {friends.map((friend, id) => (
	<li key={id}>
                <FriendListItem
                    
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline} 
            />
	</li>))}
</ul>)
}