let count = 0;

const Message = () => {
    console.log('Message rendered', count, 'times');
  count++;
  return <div>Message {count}</div>;
};

export default Message;
