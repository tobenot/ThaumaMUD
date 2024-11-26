import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Smile, MessageCircle, UserPlus } from 'lucide-react'

export function InteractionPanel() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="grid grid-cols-3 gap-2 mb-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
          <ArrowUp className="mx-auto" />
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
          <ArrowDown className="mx-auto" />
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
          <ArrowLeft className="mx-auto" />
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
          <ArrowRight className="mx-auto" />
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded">
          Pick Up
        </button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded">
          Examine
        </button>
      </div>
      <div className="flex space-x-2 mb-4">
        <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded flex-1">
          <Smile className="mx-auto" />
        </button>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded flex-1">
          <MessageCircle className="mx-auto" />
        </button>
        <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded flex-1">
          <UserPlus className="mx-auto" />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {Array(8).fill(0).map((_, i) => (
          <div key={i} className="bg-gray-700 w-12 h-12 rounded"></div>
        ))}
      </div>
    </div>
  )
}

