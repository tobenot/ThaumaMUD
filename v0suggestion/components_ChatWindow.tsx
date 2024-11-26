import { useState } from 'react'

export function ChatWindow() {
  const [messages, setMessages] = useState([
    { type: 'system', content: 'Welcome to Magic Academy!' },
    { type: 'world', sender: 'Alice', content: 'Hello everyone!' },
    { type: 'private', sender: 'Bob', content: 'Hey, want to form a team?' },
  ])
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { type: 'world', sender: 'You', content: input }])
      setInput('')
    }
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col h-64">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.type === 'system' ? 'text-yellow-400' : 'text-white'}`}>
            {msg.type !== 'system' && <span className="font-bold">{msg.sender}: </span>}
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-gray-700 text-white p-2 rounded-l"
          placeholder="Type your message..."
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r">
          Send
        </button>
      </form>
    </div>
  )
}

