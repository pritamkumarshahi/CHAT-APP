import { useEffect, useState } from "react";
import ChatList from "./ChatList";

import "./App.css";

const ChatApp = () => {
  const [getChatData, setChatData] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const [searchKey, setKeywordSearch] = useState("");
  const [chatResult, setChatResult] = useState([]);
  const [activeChatList, setActiveChat] = useState([]);
  const [active, setActive] = useState(false);

  // the search result
  useEffect(() => {
    setTimeout(() => {
      fetch("https://my-json-server.typicode.com/codebuds-fk/chat/chats")
        .then((res) => res.json())
        .then((data) => setChatData(data), setLoadingState(false));
    }, 1200);
  }, []);

const searchChathandler = (searchTerm) => {
    setKeywordSearch(searchTerm)
    if(searchTerm !== "") {
        const filteredChatList = getChatData?.filter((chatItem) => {
             return Object.values(chatItem).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
        });
        setChatResult(filteredChatList)
    } else {
        setChatResult(getChatData)
    }

}

const handleChatClick = (item, index) => {
    setActiveChat(item);
}

  return (
    <div className="Main">
      {isLoading ? (
        <div className="Loading">{"Loading....."}</div>
      ) : (
        <div className="splitLeft">
          <h2>Filter by Title/ Order id</h2>
          <div className="search">
            <input type="text" placeholder="Start Typing to Search" onChange= {e => searchChathandler(e.target.value)} value={searchKey}/>
          </div>
          <ChatList chatData={searchKey.length < 1 ? getChatData : chatResult} handleChatClick={handleChatClick}/>
            {/* Chat Drawer Component Will Come here and based on activeChatList state,
            define we will get the click chat data and render in the component accordingly, 
            For time constraint I couldn't complete the design. */}
        </div>
      )}
    </div>
  );
};

export default ChatApp;
