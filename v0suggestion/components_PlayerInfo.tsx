import Image from 'next/image'
import { Heart, Droplet, Zap } from 'lucide-react'

export function PlayerInfo() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <Image
          src="/placeholder.svg?height=64&width=64"
          alt="Player Avatar"
          width={64}
          height={64}
          className="rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold text-white">Merlin</h2>
          <div className="flex items-center">
            <span className="text-yellow-400 mr-2">Lv. 10</span>
            <div className="w-24 bg-gray-700 rounded-full h-2">
              <div className="bg-yellow-400 rounded-full h-2 w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <StatusBar icon={<Heart className="w-4 h-4 text-red-500" />} value={75} max={100} color="bg-red-500" />
        <StatusBar icon={<Droplet className="w-4 h-4 text-blue-500" />} value={50} max={100} color="bg-blue-500" />
        <StatusBar icon={<Zap className="w-4 h-4 text-yellow-500" />} value={90} max={100} color="bg-yellow-500" />
      </div>
      <div className="flex mt-2 space-x-2">
        <StatusEffect emoji="🔥" />
        <StatusEffect emoji="⚡" />
        <StatusEffect emoji="🛡️" />
      </div>
    </div>
  )
}

function StatusBar({ icon, value, max, color }) {
  return (
    <div className="flex items-center">
      {icon}
      <div className="w-full bg-gray-700 rounded-full h-2 ml-2">
        <div className={`${color} rounded-full h-2`} style={{ width: `${(value / max) * 100}%` }}></div>
      </div>
    </div>
  )
}

function StatusEffect({ emoji }) {
  return (
    <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-sm">
      {emoji}
    </div>
  )
}

