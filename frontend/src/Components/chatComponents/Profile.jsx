export default function Profile({ users, socket }) {
  return (
    <div className="contact_list" key={socket.id}>
      {users.map((user) => {
        if (socket.id === user.socketID)
          return (
            <div className="contact_box" key={user.socketID}>
              <div className="avatar">
                <img src={user.avatar} alt="avatar" />
              </div>
              <div className="username">{user.username}</div>
            </div>
          );
      })}
    </div>
  );
}
