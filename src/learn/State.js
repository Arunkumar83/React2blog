import React, { useState } from "react";

function MessageApp() {
  const [message, setMessage] = useState("");

  const showMessage = () => {
    alert("You said: " + message);
  };

  const sendMessage = () => {
    setTimeout(showMessage, 3000);
  };

  const handleChangeMessage = e => {
    setMessage(e.target.value);
  };

  return (
    <>
      <input type="text" value={message} onChange={handleChangeMessage} />
      <button onClick={sendMessage}> Send </button>
    </>
  );
}

export default MessageApp;
