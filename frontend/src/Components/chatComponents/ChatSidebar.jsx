import ContactList from "./ContactList";

export default function ChatSidebar() {
  return (
    <div className="chat_sidebar">
      <div className="chat_sidebar_header">
        <h1>Connected users</h1>
      </div>
      <ContactList />
    </div>
  );
}
