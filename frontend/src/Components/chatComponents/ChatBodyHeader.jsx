import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUserMinus } from "@fortawesome/free-solid-svg-icons";

export default function ChatBodyHeader() {
  return (
    <div className="chat_body_header">
      <h2>Chat</h2>
      <div className="icons">
        <a href="#">
          <FontAwesomeIcon
            icon={faUserPlus}
            size="xl"
            style={{ color: "#6f6fe0" }}
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            icon={faUserMinus}
            size="xl"
            style={{ color: "#6f6fe0" }}
          />
        </a>
      </div>
    </div>
  );
}
