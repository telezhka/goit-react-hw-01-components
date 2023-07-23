export const FriendList = ({ friends }) => (
    <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) =>
            <li className="item" key={id}>
                <span className="status">{isOnline}</span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
</li>)}
</ul>
)