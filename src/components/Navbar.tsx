
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Settings, User, Zap, LogOut, Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/accounts', label: 'Contas' },
    { path: '/schedule', label: 'Agendamento' },
    { path: '/automation', label: 'Automação' },
    { path: '/plans', label: 'Planos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ferriacademy
            </span>
            <Badge variant="secondary" className="ml-2 text-xs">
              Pro
            </Badge>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={isActive(item.path) ? "default" : "ghost"}
                onClick={() => navigate(item.path)}
                className={isActive(item.path) ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-red-500" />
            </Button>
            
            <Button variant="ghost" size="icon" onClick={() => navigate('/settings')}>
              <Settings className="w-5 h-5" />
            </Button>

            <Button variant="ghost" size="icon" onClick={() => navigate('/profile')}>
              <User className="w-5 h-5" />
            </Button>

            <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
              <LogOut className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
