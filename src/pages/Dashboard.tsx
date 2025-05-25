
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, Users, Heart, MessageCircle, TrendingUp, Instagram, PlayCircle, Settings, Bell, Plus, Activity, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';

const Dashboard = () => {
  const stats = [
    { icon: Users, label: 'Contas Conectadas', value: '3', max: '5', color: 'text-blue-500', progress: 60 },
    { icon: Heart, label: 'Curtidas Hoje', value: '142', max: '500', color: 'text-red-500', progress: 28 },
    { icon: MessageCircle, label: 'Comentários', value: '28', max: '100', color: 'text-green-500', progress: 28 },
    { icon: TrendingUp, label: 'Seguidores', value: '+89', max: '200', color: 'text-purple-500', progress: 45 },
  ];

  const connectedAccounts = [
    { platform: 'Instagram', username: '@minha_conta', followers: '2.1K', status: 'active', avatar: '🎯' },
    { platform: 'TikTok', username: '@minha_conta_tk', followers: '892', status: 'active', avatar: '🎵' },
    { platform: 'Instagram', username: '@conta_business', followers: '5.7K', status: 'paused', avatar: '💼' },
  ];

  const recentActivity = [
    { action: 'Post agendado publicado', platform: 'Instagram', time: '2 min atrás', status: 'success', icon: CheckCircle },
    { action: '50 curtidas automáticas realizadas', platform: 'TikTok', time: '15 min atrás', status: 'success', icon: Heart },
    { action: 'Comentário automático enviado', platform: 'Instagram', time: '1h atrás', status: 'success', icon: MessageCircle },
    { action: 'Erro ao conectar conta', platform: 'Instagram', time: '2h atrás', status: 'error', icon: AlertTriangle },
  ];

  const upcomingPosts = [
    { content: 'Nova coleção chegando!', platform: 'Instagram', time: 'Hoje, 18:00', type: 'image' },
    { content: 'Tutorial de maquiagem', platform: 'TikTok', time: 'Amanhã, 12:00', type: 'video' },
    { content: 'Promoção especial', platform: 'Instagram', time: 'Amanhã, 16:00', type: 'carousel' },
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
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">
            Visão geral das suas contas e automações
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.label}
                </CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                  <span className="text-sm font-normal text-gray-500 ml-1">/ {stat.max}</span>
                </div>
                <Progress value={stat.progress} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Connected Accounts */}
          <Card className="lg:col-span-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Contas Conectadas</CardTitle>
                <CardDescription>Gerencie suas contas do Instagram e TikTok</CardDescription>
              </div>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="w-4 h-4 mr-1" />
                Adicionar
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {connectedAccounts.map((account, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-lg">{account.avatar}</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{account.username}</div>
                      <div className="text-sm text-gray-500">{account.platform} • {account.followers} seguidores</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(account.status)}>
                      {getStatusLabel(account.status)}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Plan Info */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Plano Atual</CardTitle>
              <CardDescription>Seu plano e limites de uso</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                <div className="font-semibold text-blue-900 mb-1">Plano Mensal Pro</div>
                <div className="text-sm text-blue-700">Expira em 23 dias</div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Contas conectadas</span>
                    <span>3/5</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Interações hoje</span>
                    <span>170/300</span>
                  </div>
                  <Progress value={57} className="h-2" />
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Upgrade do Plano
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* Recent Activity */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Atividade Recente</CardTitle>
              <CardDescription>Últimas ações e automações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.status === 'success' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <activity.icon className={`w-4 h-4 ${
                      activity.status === 'success' ? 'text-green-600' : 'text-red-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{activity.action}</div>
                    <div className="text-xs text-gray-500">{activity.platform} • {activity.time}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Posts */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Próximos Posts</CardTitle>
                <CardDescription>Posts agendados para publicação</CardDescription>
              </div>
              <Button size="sm" variant="outline">
                <Calendar className="w-4 h-4 mr-1" />
                Ver Todos
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingPosts.map((post, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{post.content}</div>
                    <div className="text-xs text-gray-500">{post.platform} • {post.time}</div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {post.type}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
