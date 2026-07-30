import ReactMarkdown from "react-markdown";
export default function ChatWindow({
  messages,
  loading,
}) {
  return (
    <div className="chat-window">

      <div className="chat-header">

        <div className="status"></div>

        <h4>ARGUS AI Assistant</h4>

      </div>

      <div className="chat-body">

        {messages.map((message, index) => (

          <div
                key={index}
                className={
                    message.type === "user"
                    ? "user-message"
                    : "ai-message"
                }
                >
                <ReactMarkdown>
                    {message.text}
                </ReactMarkdown>
            </div>

        ))}

        {loading && (

          <div className="ai-message">

            ✨ ARGUS AI is thinking...

          </div>

        )}

      </div>

    </div>
  );
}