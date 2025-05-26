import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Plus, Image, Settings } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Schedule = () => {
  const scheduledPosts = [
    {
      id: 1,
      content: 'Nova coleção chegando! 🔥',
      platform: 'Instagram',
      scheduledTime: 'Hoje, 18:00',
      type: 'image',
      status: 'pending'
    },
    {
      id: 2,
      content: 'Tutorial de maquiagem para iniciantes',
      platform: 'TikTok',
      scheduledTime: 'Amanhã, 12:00',
      type: 'video',
      status: 'pending'
    },
    {
      id: 3,
      content: 'Promoção especial - 50% OFF',
      platform: 'Instagram',
      scheduledTime: 'Amanhã, 16:00',
      type: 'carousel',
      status: 'pending'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'image': return '📷';
      case 'video': return '🎥';
      case 'carousel': return '📱';
      default: return '📄';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'published': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Agendamento</h1>
          <p className="text-gray-600">
            Gerencie suas postagens agendadas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Posts Agendados</CardTitle>
                  <CardDescription>Suas próximas publicações</CardDescription>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Post
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {scheduledPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-xl">{getTypeIcon(post.type)}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{post.content}</div>
                        <div className="text-sm text-gray-500">
                          {post.platform} • {post.scheduledTime}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(post.status)}>
                        Agendado
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
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
                <CardTitle>Calendário</CardTitle>
                <CardDescription>Visualização rápida</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                  {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                    <div key={day} className="p-2 font-medium text-gray-500">{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({length: 35}, (_, i) => (
                    <div key={i} className="aspect-square flex items-center justify-center text-sm hover:bg-blue-50 rounded cursor-pointer">
                      {i + 1 <= 30 ? i + 1 : ''}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Estatísticas</CardTitle>
                <CardDescription>Resumo do mês</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Posts publicados</span>
                  <span className="font-medium">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Posts agendados</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Taxa de sucesso</span>
                  <span className="font-medium text-green-600">96%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
