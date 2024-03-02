import { useState } from 'react';
import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: 'asegurate de tener creditos', dangerouslyAllowBrowser: true
});

function App() {
  const [messages, setMessages] = useState([
    {
      content: "Hola! Sobre que quieres estudiar hoy?",
      role: "assistant"
    },
    {
      content: "Dame ideas",
      role: "user"
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = {
      content: e.target[0].value,
      role: "user"
    }

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);
    e.target.reset();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [...newMessages],
    }).then((response) => {
      console.log(response)
      setMessages([...newMessages, response.choices[0].message])
      setIsTyping(false)
    });


  }

  return (
    <section className='container bg-white mx-auto p-5 mt-12 xl:px-64 fixed inset-0'>
      <div className="  bg-white w-full h-full flex flex-col">
        <div className='p-5 pb-8 flex-grow overflow-auto'>
          {
            messages.length && messages.map((msg, i) => {
              return (
                <div className={`chat ${msg.role === 'assistant' ? 'chat-start' : 'chat-end'}`} key={'chatKey' + i}>
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src={msg.role === 'assistant' ? '/images/ai-bot.jpg' : '/images/person.png'} />
                    </div>
                  </div>
                  <div className="chat-bubble bg-blue-200">{msg.content}</div>
                </div>
              )
            })
          }
        </div>

        <form className="form-control m-5 items-center" onSubmit={(e) => handleSubmit(e)}>
          <div className="input-group max-w-full w-[800px] relative">
            {isTyping && <small className='absolute -top-5 left-0.5 animate-pulse'>Nuestro studIA bot está escribiendo...</small>}

            <input type="text" placeholder="Escribe un tema y te ayudaré a estudiarlo" className="input input-bordered flex-grow" required />
            <button className="btn btn-square" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default App;
