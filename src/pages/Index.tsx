import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const categories = [
    { name: 'Горбуша соломка вяленая', image: 'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/f16df0b2-d901-438e-8410-91fa8426d789.jpg' },
    { name: 'Сом соломка вяленая', image: 'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/7c4019a6-52eb-4818-a598-0267a90b5327.jpg' },
    { name: 'Таранка с перцем сушёно-вяленая', image: 'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/fa06f20e-bc5e-4f39-a311-abddaf17cb68.jpg' },
    { name: 'Щука соломка вяленая', image: 'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/2bed7989-a5c4-4447-8a1b-55284cfc72dd.jpg' },
    { name: 'Минтай соломка солёно-сушёная', image: 'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/f16df0b2-d901-438e-8410-91fa8426d789.jpg' },
    { name: 'Паутинка из горбуши сушёно-вяленая', image: 'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/f16df0b2-d901-438e-8410-91fa8426d789.jpg' },
    { name: 'Паутинка лососевая с кунжутом сушёная', image: 'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/f16df0b2-d901-438e-8410-91fa8426d789.jpg' },
    { name: 'Соломка Норвежская', image: 'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/f16df0b2-d901-438e-8410-91fa8426d789.jpg' },
    { name: 'Филе леща солёно-сушёное с перцем', image: 'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/fa06f20e-bc5e-4f39-a311-abddaf17cb68.jpg' },
    { name: 'Янтарная с перцем солёно-сушёная кусочки', image: 'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/fa06f20e-bc5e-4f39-a311-abddaf17cb68.jpg' },
    { name: 'Камбала Янтарная вяленая', image: 'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/fa06f20e-bc5e-4f39-a311-abddaf17cb68.jpg' },
    { name: 'Икра горбуши вяленая', image: 'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/f16df0b2-d901-438e-8410-91fa8426d789.jpg' }
  ];

  const advantages = [
    {
      icon: 'Truck',
      title: 'Быстрая доставка',
      description: 'По всей Грузии от 1 дня'
    },
    {
      icon: 'Package',
      title: 'Оптовые цены',
      description: 'Выгодные условия от 10 кг'
    },
    {
      icon: 'Award',
      title: 'Гарантия качества',
      description: 'Сертифицированная продукция'
    },
    {
      icon: 'Clock',
      title: 'Работаем 24/7',
      description: 'Прием заказов круглосуточно'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Maritime Empire</div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">Каталог</button>
              <button onClick={() => scrollToSection('advantages')} className="hover:text-primary transition-colors">Преимущества</button>
              <button onClick={() => scrollToSection('delivery')} className="hover:text-primary transition-colors">Доставка</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contacts')}>Заказать</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/3595e02e-4903-47f7-88f8-0b9ded6f751b.jpg)' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-white">
            Пивные закуски оптом
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto animate-fade-in">
            Широкий ассортимент снеков для вашего бизнеса. Выгодные цены, надежная доставка.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" onClick={() => scrollToSection('catalog')} className="text-lg px-8">
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="text-lg px-8">
              Получить прайс
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Каталог продукции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="transition-all hover:shadow-lg hover:scale-105 cursor-pointer overflow-hidden">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    Подробнее <Icon name="ChevronRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Условия доставки</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={24} />
                  География
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Батуми — от 1 дня</li>
                  <li>• Тбилиси — от 1-2 дней</li>
                  <li>• Остальная Грузия — от 2-3 дней</li>
                  <li>• Самовывоз со склада</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="DollarSign" size={24} />
                  Условия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Минимальный заказ — 10 кг</li>
                  <li>• Скидки от объема</li>
                  <li>• Оплата после доставки</li>
                  <li>• Работа с НДС и без</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
          <Card>
            <CardHeader>
              <CardTitle>Оставьте заявку</CardTitle>
              <CardDescription>Мы свяжемся с вами в течение 15 минут</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Название компании"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Textarea
                    placeholder="Комментарий к заказу"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Icon name="Phone" size={24} className="mx-auto mb-2 text-primary" />
              <p className="font-semibold">+995 568 081 297</p>
              <p className="text-sm text-muted-foreground">Ежедневно 9:00-21:00</p>
            </div>
            <div>
              <Icon name="Mail" size={24} className="mx-auto mb-2 text-primary" />
              <p className="font-semibold">maritimempire@gmail.com</p>
              <p className="text-sm text-muted-foreground">Отвечаем в течение часа</p>
            </div>
            <div>
              <Icon name="MapPin" size={24} className="mx-auto mb-2 text-primary" />
              <p className="font-semibold">Батуми, Kavtaradze Str</p>
              <p className="text-sm text-muted-foreground">Пн-Пт 9:00-18:00</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-muted py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Maritime Empire. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;