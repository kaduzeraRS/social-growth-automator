
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Heart, MessageCircle, TrendingUp, Instagram, PlayCircle, Settings, Bell, CheckCircle, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Calendar, title: 'Agendamento Inteligente', description: 'Agende posts para Instagram e TikTok com calendário visual' },
    { icon: Zap, title: 'Automação com Puppeteer', description: 'Curtidas, follows e comentários automáticos via navegador headless' },
    { icon: TrendingUp, title: 'Aquecimento de Contas', description: 'Aqueça suas contas gradualmente para crescimento orgânico' },
    { icon: Users, title: 'Múltiplas Contas', description: 'Gerencie várias contas Instagram e TikTok simultaneamente' },
  ];

  const plans = [
    {
      name: 'Quinzenal',
      price: 'R$ 29',
      period: '15 dias',
      accounts: 2,
      interactions: 100,
      features: ['2 contas', '100 interações/dia', 'Agendamento básico']
    },
    {
      name: 'Mensal',
      price: 'R$ 49',
      period: 'mês',
      accounts: 5,
      interactions: 300,
      features: ['5 contas', '300 interações/dia', 'Relatórios avançados'],
      popular: true
    },
    {
      name: 'Trimestral',
      price: 'R$ 129',
      period: '3 meses',
      accounts: 10,
      interactions: 500,
      features: ['10 contas', '500 interações/dia', 'Suporte prioritário']
    },
    {
      name: 'Anual',
      price: 'R$ 399',
      period: 'ano',
      accounts: 25,
      interactions: 1000,
      features: ['25 contas', '1000 interações/dia', 'Recursos ilimitados']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ferriacademy
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate('/login')}>
              Entrar
            </Button>
            <Button onClick={() => navigate('/dashboard')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Começar Agora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Automatize suas <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">redes sociais</span> com IA
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Agende posts, automatize interações e aqueça suas contas do Instagram e TikTok com nossa plataforma completa de crescimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => navigate('/dashboard')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8">
              Começar Gratuitamente
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/plans')}>
              Ver Planos
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">10K+</div>
              <div className="text-sm text-gray-600">Contas Gerenciadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">500K+</div>
              <div className="text-sm text-gray-600">Posts Agendados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">2M+</div>
              <div className="text-sm text-gray-600">Interações Automáticas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recursos Principais</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todas as ferramentas que você precisa para fazer suas redes sociais crescerem de forma inteligente e automatizada.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Escolha Seu Plano</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Planos flexíveis para todos os tipos de usuário, desde iniciantes até profissionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600">
                  Mais Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="font-semibold text-blue-600">{plan.accounts} contas</div>
                  <div className="font-semibold text-purple-600">{plan.interactions} interações/dia</div>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Começar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Ferriacademy</span>
              </div>
              <p className="text-gray-400">
                A plataforma mais completa para automação de redes sociais.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Recursos</a></li>
                <li><a href="#" className="hover:text-white">Preços</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Documentação</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Carreiras</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ferriacademy. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
