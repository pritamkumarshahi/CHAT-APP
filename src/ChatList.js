import './App.css';
// Input: Taking time stamp as string
// output: date format in string 06/05/2022
const formatDate = (timeStamp) => {
  const date = new Date(timeStamp);

  return date.toLocaleDateString("default");
}

const ChatList = ({
  chatData,
  handleChatClick,
  chatColor
}) => {  
  return (
    <div className="chatlist" style={{backgroundColor: chatColor}}>
    {chatData.map((item, index) => (
      <div key={item.id} className="chatitem" onClick={event => handleChatClick(item, index)} >
        <div class="profile">
          <img src={item.imageURL}/>
        </div>
        <div class="chatlistPrimary">
          <p style={{color: '#000000'}}>{item?.title}</p>
          <p style={{color: '#000000'}}>{item?.orderId}</p>
          <p style={{color: '#f0f0f0'}} className='messageOptional'>{item?.messageList[0]?.message}</p>
        </div>
        <div class="chattime">
          <p>{formatDate(item?.latestMessageTimestamp)}</p>
        </div>
    </div>
    ))}
    </div>
  )
}

export default ChatList;
