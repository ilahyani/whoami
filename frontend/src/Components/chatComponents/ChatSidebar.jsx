import ContactList from "./ContactList";
import Profile from "./Profile";

export default function ChatSidebar({ users }) {
  return (
    <div className="chat_sidebar">
      <Profile users={users} />
      <div className="chat_sidebar_header">
        <h4>Active users</h4>
      </div>
      <ContactList users={users} />
    </div>
  );
}
