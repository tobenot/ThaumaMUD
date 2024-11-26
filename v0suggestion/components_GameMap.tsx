import Image from 'next/image'

export function GameMap() {
  return (
    <div className="relative w-full h-0 pb-[150%]">
      <div className="absolute inset-0 bg-green-800 rounded-lg overflow-hidden">
        <div className="grid grid-cols-5 grid-rows-7 gap-1 p-1 h-full">
          {Array(35).fill(0).map((_, i) => (
            <div key={i} className="bg-green-700 rounded"></div>
          ))}
        </div>
        <Image
          src="/placeholder.svg?height=32&width=32"
          alt="Player"
          width={32}
          height={32}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src="/placeholder.svg?height=32&width=32"
          alt="NPC"
          width={32}
          height={32}
          className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  )
}

