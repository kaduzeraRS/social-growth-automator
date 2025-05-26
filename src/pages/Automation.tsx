import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Heart, Users, MessageCircle, Settings, Activity, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Automation = () => {
  const automationSettings = [
    {
      id: 1,
      name: 'Auto Curtidas',
      description: 'Curtir posts automaticamente',
      icon: Heart,
      enabled: true,
      dailyLimit: 50,
      used: 23,
      color: 'text-red-500'
    },
    {
      id: 2,
      name: 'Auto Seguidores',
      description: 'Seguir usuários automaticamente',
      icon: Users,
      enabled: true,
      dailyLimit: 30,
      used: 12,
      color: 'text-blue-500'
    },
    {
      id: 3,
      name: 'Auto Comentários',
      description: 'Comentar em posts automaticamente',
      icon: MessageCircle,
      enabled: false,
      dailyLimit: 20,
      used: 0,
      color: 'text-green-500'
    }
  ];

  const recentActivity = [
    { action: 'Curtiu post de @usuario123', time: '2 min atrás', platform: 'Instagram' },
    { action: 'Seguiu @novouser', time: '5 min atrás', platform: 'Instagram' },
    { action: 'Curtiu post de @influencer', time: '8 min atrás', platform: 'TikTok' },
    { action: 'Seguiu @marketing_pro', time: '12 min atrás', platform: 'Instagram' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
     
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Automação</h1>
          <p className="text-gray-600">
            Configure e monitore suas automações
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Configurações de Automação</CardTitle>
                <CardDescription>Ative ou desative suas automações</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {automationSettings.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <setting.icon className={`w-6 h-6 ${setting.color}`} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{setting.name}</div>
                        <div className="text-sm text-gray-500">{setting.description}</div>
                        <div className="text-xs text-gray-400">
                          Hoje: {setting.used}/{setting.dailyLimit} ações
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant={setting.enabled ? "default" : "secondary"}>
                        {setting.enabled ? 'Ativo' : 'Inativo'}
                      </Badge>
                      <Switch checked={setting.enabled} />
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
                <CardDescription>Últimas ações automatizadas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Activity className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{activity.action}</div>
                      <div className="text-xs text-gray-500">{activity.platform} • {activity.time}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Estatísticas Hoje</CardTitle>
                <CardDescription>Resumo das ações</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Curtidas</span>
                  <div className="text-right">
                    <div className="font-medium">23</div>
                    <div className="text-xs text-gray-500">de 50</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Seguindo</span>
                  <div className="text-right">
                    <div className="font-medium">12</div>
                    <div className="text-xs text-gray-500">de 30</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Comentários</span>
                  <div className="text-right">
                    <div className="font-medium">0</div>
                    <div className="text-xs text-gray-500">de 20</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Performance</CardTitle>
                <CardDescription>Últimos 7 dias</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Crescimento</span>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="font-medium text-green-600">+5.2%</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Engajamento</span>
                  <span className="font-medium">12.3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Alcance</span>
                  <span className="font-medium">2.1K</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automation;
