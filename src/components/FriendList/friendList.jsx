import FriendListItem from "./friendListItem"
import css from './friendList.module.css'

export default function FriendList({friends}) {
    return (<ul className={css.list}>
        {friends.map((friend, id) => (
	<li key={id} className={css.listItem}>
                <FriendListItem
                    
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline} 
            />
	</li>))}
</ul>)
}