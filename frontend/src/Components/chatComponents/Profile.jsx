export default function Profile({ users, socket }) {
  const user = users?.find((user) => user.socketID === socket.id);
  return (
    <div className="contact_list" key={socket.id}>
      <div className="contact_box" key={user?.socketID}>
        <div className="avatar">
          <img src={user?.avatar} alt="avatar" />
        </div>
        <div className="username">{user?.username}</div>
      </div>
    </div>
  );
}
