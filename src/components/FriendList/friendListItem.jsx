import css from './friendList.module.css'
import clsx from 'clsx'

 

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div className={css.container}>
  <img className={css.image} src={avatar} alt="Avatar" width="48" />
  <p className={css.name}>{name}</p>
  <p className={clsx(isOnline ? css.online : css.offline)}>{isOnline ? "Online" : "Offline"}</p>
</div>
    )
}

