import { User, Package, Scroll, Book, Users, Settings, HelpCircle, LogOut } from 'lucide-react'

export function MenuBar() {
  return (
    <div className="bg-gray-800 p-2 rounded-lg shadow-lg flex justify-between">
      <MenuButton icon={<User />} label="Character" />
      <MenuButton icon={<Package />} label="Inventory" />
      <MenuButton icon={<Scroll />} label="Quests" />
      <MenuButton icon={<Book />} label="Skills" />
      <MenuButton icon={<Users />} label="Friends" />
      <MenuButton icon={<Settings />} label="Settings" />
      <MenuButton icon={<HelpCircle />} label="Help" />
      <MenuButton icon={<LogOut />} label="Exit" />
    </div>
  )
}

function MenuButton({ icon, label }) {
  return (
    <button className="text-white hover:bg-gray-700 p-2 rounded flex flex-col items-center">
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  )
}

