import ContactList from "./ContactList";

export default function ChatSidebar() {
  return (
    <div className="chat_sidebar">
      <div className="chat_sidebar_header">
        <h1>Recent Chats</h1>
      </div>
      <ContactList />
    </div>
  );
}
