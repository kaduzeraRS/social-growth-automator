import { Bell, Cog, User, LogOut } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-semibold text-primary">Ferriacademy</h1>
        <span className="px-2 py-0.5 text-xs font-medium bg-purple-100 text-purple-700 rounded">Pro</span>
      </div>

      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 cursor-pointer text-gray-600" />
        <Cog className="w-5 h-5 cursor-pointer text-gray-600" />
        <User className="w-5 h-5 cursor-pointer text-gray-600" />
        <LogOut className="w-5 h-5 cursor-pointer text-gray-600" />
      </div>
    </header>
  );
}
