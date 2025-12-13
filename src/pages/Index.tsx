import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { translations, type Language, languageNames } from '@/lib/translations';

const Index = () => {
  const [language, setLanguage] = useState<Language>('ru');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const t = translations[language];

  const productImages = [
    'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/f16df0b2-d901-438e-8410-91fa8426d789.jpg',
    'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/7c4019a6-52eb-4818-a598-0267a90b5327.jpg',
    'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/fa06f20e-bc5e-4f39-a311-abddaf17cb68.jpg',
    'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/2bed7989-a5c4-4447-8a1b-55284cfc72dd.jpg',
    'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/f16df0b2-d901-438e-8410-91fa8426d789.jpg',
    'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/f16df0b2-d901-438e-8410-91fa8426d789.jpg',
    'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/f16df0b2-d901-438e-8410-91fa8426d789.jpg',
    'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/f16df0b2-d901-438e-8410-91fa8426d789.jpg',
    'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/fa06f20e-bc5e-4f39-a311-abddaf17cb68.jpg',
    'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/fa06f20e-bc5e-4f39-a311-abddaf17cb68.jpg',
    'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/fa06f20e-bc5e-4f39-a311-abddaf17cb68.jpg',
    'https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/f16df0b2-d901-438e-8410-91fa8426d789.jpg'
  ];

  const advantages = [
    {
      icon: 'Truck' as const,
      title: t.advantages.delivery.title,
      description: t.advantages.delivery.description
    },
    {
      icon: 'Package' as const,
      title: t.advantages.price.title,
      description: t.advantages.price.description
    },
    {
      icon: 'Award' as const,
      title: t.advantages.quality.title,
      description: t.advantages.quality.description
    },
    {
      icon: 'Clock' as const,
      title: t.advantages.time.title,
      description: t.advantages.time.description
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
            
            <div className="hidden md:flex gap-8 items-center">
              <button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">
                {t.nav.catalog}
              </button>
              <button onClick={() => scrollToSection('advantages')} className="hover:text-primary transition-colors">
                {t.nav.advantages}
              </button>
              <button onClick={() => scrollToSection('delivery')} className="hover:text-primary transition-colors">
                {t.nav.delivery}
              </button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">
                {t.nav.contacts}
              </button>
              <div className="flex gap-2 ml-4">
                {(Object.keys(languageNames) as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1 rounded-md text-sm transition-colors ${
                      language === lang
                        ? 'bg-primary text-white'
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    {languageNames[lang]}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button className="hidden md:flex" onClick={() => scrollToSection('contacts')}>{t.nav.order}</Button>
              <button 
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>
          
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
              <button 
                onClick={() => { scrollToSection('catalog'); setMobileMenuOpen(false); }} 
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                {t.nav.catalog}
              </button>
              <button 
                onClick={() => { scrollToSection('advantages'); setMobileMenuOpen(false); }} 
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                {t.nav.advantages}
              </button>
              <button 
                onClick={() => { scrollToSection('delivery'); setMobileMenuOpen(false); }} 
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                {t.nav.delivery}
              </button>
              <button 
                onClick={() => { scrollToSection('contacts'); setMobileMenuOpen(false); }} 
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                {t.nav.contacts}
              </button>
              
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">Language / Язык / ენა</p>
                <div className="flex gap-2">
                  {(Object.keys(languageNames) as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`flex-1 px-3 py-2 rounded-md text-sm transition-colors ${
                        language === lang
                          ? 'bg-primary text-white'
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              </div>
              
              <Button className="w-full" onClick={() => { scrollToSection('contacts'); setMobileMenuOpen(false); }}>
                {t.nav.order}
              </Button>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://cdn.poehali.dev/projects/71383bf0-8bf1-4944-9dac-eb6d277035e4/files/3595e02e-4903-47f7-88f8-0b9ded6f751b.jpg)' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-white">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto animate-fade-in">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" onClick={() => scrollToSection('catalog')} className="text-lg px-8">
              {t.hero.viewCatalog}
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="text-lg px-8">
              {t.hero.getPrice}
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t.catalog.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.products.map((product, index) => (
              <Card key={index} className="transition-all hover:shadow-lg hover:scale-105 cursor-pointer overflow-hidden">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img 
                    src={productImages[index]} 
                    alt={product}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    {t.catalog.more} <Icon name="ChevronRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t.advantages.title}</h2>
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
          <h2 className="text-4xl font-bold text-center mb-12">{t.delivery.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={24} />
                  {t.delivery.geography}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {t.delivery.locations.map((location, index) => (
                    <li key={index}>• {location}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="DollarSign" size={24} />
                  {t.delivery.terms}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {t.delivery.conditions.map((condition, index) => (
                    <li key={index}>• {condition}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">{t.contacts.title}</h2>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder={t.contacts.form.name}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder={t.contacts.form.company}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="tel"
                      placeholder={t.contacts.form.phone}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder={t.contacts.form.email}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Textarea
                    placeholder={t.contacts.form.message}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  {t.contacts.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Icon name="Phone" size={24} className="mx-auto mb-2 text-primary" />
              <p className="font-semibold">+995 568 081 297</p>
              <p className="text-sm text-muted-foreground">{t.contacts.schedule}</p>
            </div>
            <div>
              <Icon name="Mail" size={24} className="mx-auto mb-2 text-primary" />
              <p className="font-semibold">maritimempire@gmail.com</p>
              <p className="text-sm text-muted-foreground">{t.contacts.response}</p>
            </div>
            <div>
              <Icon name="MapPin" size={24} className="mx-auto mb-2 text-primary" />
              <p className="font-semibold">Батуми, Kavtaradze Str</p>
              <p className="text-sm text-muted-foreground">{t.contacts.workTime}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-muted py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;