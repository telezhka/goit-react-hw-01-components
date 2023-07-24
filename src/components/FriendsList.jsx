import css from '../styles/Friends.module.css'
import PropTypes from "prop-types"
export const FriendList = ({ friends }) => (
    <ul className={css.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => {
            if (isOnline === true) {return(
                <li className={css.item} key={id}>
                    <span className={css.green}></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>)
            } else {
                return (
                <li className={css.item} key={id}>
                    <span className={css.red}></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>
            )
                
            }
            
        })}
</ul>
)
FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
}