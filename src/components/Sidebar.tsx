import { NavLink } from "react-router-dom";
import { Home, Users, Calendar, Settings, Bot, CreditCard, LayoutDashboard } from "lucide-react";

export default function Sidebar() {
  const linkClass = "flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition";

  return (
    <aside className="w-60 bg-white border-r flex flex-col min-h-screen">
      <nav className="flex flex-col gap-1 py-4">
        <NavLink to="/" className={linkClass}>
          <LayoutDashboard className="w-5 h-5" /> Dashboard
        </NavLink>
        <NavLink to="/accounts" className={linkClass}>
          <Users className="w-5 h-5" /> Contas
        </NavLink>
        <NavLink to="/schedule" className={linkClass}>
          <Calendar className="w-5 h-5" /> Agendamento
        </NavLink>
        <NavLink to="/automation" className={linkClass}>
          <Bot className="w-5 h-5" /> Automação
        </NavLink>
        <NavLink to="/plans" className={linkClass}>
          <CreditCard className="w-5 h-5" /> Planos
        </NavLink>
        <NavLink to="/admin" className={linkClass}>
          <Settings className="w-5 h-5" /> Administração
        </NavLink>
      </nav>
    </aside>
  );
}
