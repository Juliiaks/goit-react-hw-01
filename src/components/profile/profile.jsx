import css from "./profile.module.css"

export default function Profile({name, tag, location, image, stats}) {
    return (
        <div className={css.container}>
            <div className={css.content}>
    <img className={css.image}
      src={image}
      alt="User avatar"
    />
    <p className={css.name}>{name}</p>
    <p className={css.text}>@{tag}</p>
    <p className={css.text}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.listItem}>
      <span>Followers</span>
      <span className={css.numbers}>{stats.followers}</span>
    </li>
    <li className={css.listItem}>
      <span>Views</span>
      <span className={css.numbers}>{stats.views}</span>
    </li>
    <li className={css.listItem}>
      <span>Likes</span>
      <span className={css.numbers}>{stats.likes}</span>
    </li>
  </ul>
        </div>
    )
}