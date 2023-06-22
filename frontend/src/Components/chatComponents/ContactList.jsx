export default function ContactList({ users, socket }) {
  return (
    <div className="contact_list">
      {users.map((user) => {
        if (socket.id !== user.socketID)
          return (
            <div className="contact_box" key={user.socketID}>
              <div className="avatar">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.lM1JCu-sVoayf25-hAm0NwHaHa%26pid%3DApi&f=1&ipt=c6577a6aad4fb5123634db24f506ed63b34207eebfc6af7baddfc30720f7d5a5&ipo=images" />
              </div>
              <div className="username">{user.username}</div>
            </div>
          );
      })}
    </div>
  );
}
//issue: two children with the same key
