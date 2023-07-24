import css from '../styles/User.module.css'
import PropTypes from "prop-types"
export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile} >
    <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers: </span>
        <span className={css.quantity}>
          {stats.followers}
        </span>
    </li>
    <li>
      <span className={css.label}>Views: </span>
        <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes: </span>
        <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
)
Profile.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  username: PropTypes.string,
  stats: {
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  }

}