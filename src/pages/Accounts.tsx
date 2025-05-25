
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Settings, Users, Plus, Power, AlertTriangle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';

const Accounts = () => {
  const connectedAccounts = [
    { 
      id: 1,
      platform: 'Instagram', 
      username: '@minha_conta', 
      followers: '2.1K', 
      status: 'active',
      lastActivity: '2 min atrás',
      avatar: '🎯' 
    },
    { 
      id: 2,
      platform: 'TikTok', 
      username: '@minha_conta_tk', 
      followers: '892', 
      status: 'active',
      lastActivity: '15 min atrás',
      avatar: '🎵' 
    },
    { 
      id: 3,
      platform: 'Instagram', 
      username: '@conta_business', 
      followers: '5.7K', 
      status: 'paused',
      lastActivity: '2h atrás',
      avatar: '💼' 
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Ativa';
      case 'paused': return 'Pausada';
      case 'error': return 'Erro';
      default: return 'Desconhecido';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contas Conectadas</h1>
          <p className="text-gray-600">
            Gerencie suas contas do Instagram e TikTok
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Suas Contas</CardTitle>
                  <CardDescription>Contas conectadas e seu status atual</CardDescription>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Conta
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {connectedAccounts.map((account) => (
                  <div key={account.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-xl">{account.avatar}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{account.username}</div>
                        <div className="text-sm text-gray-500">
                          {account.platform} • {account.followers} seguidores
                        </div>
                        <div className="text-xs text-gray-400">
                          Última atividade: {account.lastActivity}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(account.status)}>
                        {getStatusLabel(account.status)}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Power className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Limites do Plano</CardTitle>
                <CardDescription>Uso atual dos recursos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Contas conectadas</span>
                    <span>3/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Interações hoje</span>
                    <span>170/300</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{width: '57%'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Alertas</CardTitle>
                <CardDescription>Notificações importantes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <div className="text-sm">
                    <div className="font-medium text-yellow-800">Atenção</div>
                    <div className="text-yellow-700">Conta @conta_business está pausada há 2 horas</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
