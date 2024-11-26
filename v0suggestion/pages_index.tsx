import { PlayerInfo } from '../components/PlayerInfo'
import { GameMap } from '../components/GameMap'
import { InteractionPanel } from '../components/InteractionPanel'
import { ChatWindow } from '../components/ChatWindow'
import { MenuBar } from '../components/MenuBar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <PlayerInfo />
          <div className="mt-4">
            <GameMap />
          </div>
        </div>
        <div className="col-span-2">
          <InteractionPanel />
          <div className="mt-4">
            <ChatWindow />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <MenuBar />
      </div>
    </div>
  )
}

