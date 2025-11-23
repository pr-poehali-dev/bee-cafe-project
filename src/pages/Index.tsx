import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [selectedGallery, setSelectedGallery] = useState<'dishes' | 'interior' | 'atmosphere'>('dishes');

  const galleries = {
    dishes: [
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/0171d060-7040-489c-ad9f-56290d1672dc.jpg',
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/0171d060-7040-489c-ad9f-56290d1672dc.jpg',
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/0171d060-7040-489c-ad9f-56290d1672dc.jpg',
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/0171d060-7040-489c-ad9f-56290d1672dc.jpg',
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/0171d060-7040-489c-ad9f-56290d1672dc.jpg',
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/0171d060-7040-489c-ad9f-56290d1672dc.jpg',
    ],
    interior: [
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/4480f6c5-c82c-4945-9ec0-e227b5bfea29.jpg',
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/4480f6c5-c82c-4945-9ec0-e227b5bfea29.jpg',
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/4480f6c5-c82c-4945-9ec0-e227b5bfea29.jpg',
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/4480f6c5-c82c-4945-9ec0-e227b5bfea29.jpg',
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/4480f6c5-c82c-4945-9ec0-e227b5bfea29.jpg',
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/4480f6c5-c82c-4945-9ec0-e227b5bfea29.jpg',
    ],
    atmosphere: [
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/bb1671fb-774b-4049-8345-d6451353b810.jpg',
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/bb1671fb-774b-4049-8345-d6451353b810.jpg',
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/bb1671fb-774b-4049-8345-d6451353b810.jpg',
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/bb1671fb-774b-4049-8345-d6451353b810.jpg',
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/bb1671fb-774b-4049-8345-d6451353b810.jpg',
      'https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/bb1671fb-774b-4049-8345-d6451353b810.jpg',
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold font-serif text-primary">Кафе Гараж</h1>
          <div className="flex gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 flex justify-center animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/4275e84f-a7b5-4fd1-89db-fae717f7e584.jpg" 
              alt="Вывеска Кафе Гараж" 
              className="rounded-2xl shadow-2xl max-w-2xl w-full h-[300px] object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-6xl font-bold font-serif text-foreground leading-tight">
                Домашняя кухня с душой
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Добро пожаловать в уютное пространство, где каждое блюдо готовится с любовью, 
                как дома у бабушки. Мы создали атмосферу тепла и комфорта, где можно 
                расслабиться и насладиться вкусной едой.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#gallery" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-medium">
                  Посмотреть галерею
                  <Icon name="ArrowRight" size={20} />
                </a>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/507ab51e-00e8-4338-b5b3-dbd83dd06111/files/4480f6c5-c82c-4945-9ec0-e227b5bfea29.jpg" 
                alt="Интерьер кафе" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h3 className="text-5xl font-bold font-serif text-foreground">Наша философия</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Кафе "Гараж" — это место, где сочетается простота домашней кухни и профессионализм. 
            Мы используем только свежие продукты и готовим с вниманием к каждой детали. 
            Здесь вы почувствуете себя как дома, но с особым комфортом.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <Card className="p-6 space-y-3 bg-card hover:shadow-lg transition-shadow">
              <Icon name="Heart" size={40} className="text-primary mx-auto" />
              <h4 className="font-serif text-2xl font-semibold">С любовью</h4>
              <p className="text-muted-foreground">Каждое блюдо готовится от души</p>
            </Card>
            <Card className="p-6 space-y-3 bg-card hover:shadow-lg transition-shadow">
              <Icon name="Home" size={40} className="text-primary mx-auto" />
              <h4 className="font-serif text-2xl font-semibold">Уютно</h4>
              <p className="text-muted-foreground">Атмосфера домашнего тепла</p>
            </Card>
            <Card className="p-6 space-y-3 bg-card hover:shadow-lg transition-shadow">
              <Icon name="Leaf" size={40} className="text-primary mx-auto" />
              <h4 className="font-serif text-2xl font-semibold">Свежесть</h4>
              <p className="text-muted-foreground">Только качественные продукты</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-bold font-serif text-foreground text-center mb-12">Галерея</h3>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setSelectedGallery('dishes')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedGallery === 'dishes' 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'bg-card text-foreground hover:bg-accent'
              }`}
            >
              Наши блюда
            </button>
            <button
              onClick={() => setSelectedGallery('interior')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedGallery === 'interior' 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'bg-card text-foreground hover:bg-accent'
              }`}
            >
              Интерьер
            </button>
            <button
              onClick={() => setSelectedGallery('atmosphere')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedGallery === 'atmosphere' 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'bg-card text-foreground hover:bg-accent'
              }`}
            >
              Атмосфера
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {galleries[selectedGallery].map((image, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow animate-scale-in">
                <img 
                  src={image} 
                  alt={`Фото ${index + 1}`} 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-5xl font-bold font-serif text-foreground text-center mb-12">Контакты</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 space-y-4 bg-card">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h4 className="font-serif text-xl font-semibold mb-2">Адрес</h4>
                  <p className="text-muted-foreground">г. Москва, ул. Гаражная, д. 15</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h4 className="font-serif text-xl font-semibold mb-2">Телефон</h4>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Clock" size={24} className="text-primary mt-1" />
                <div>
                  <h4 className="font-serif text-xl font-semibold mb-2">Часы работы</h4>
                  <p className="text-muted-foreground">Пн-Вс: 10:00 - 23:00</p>
                </div>
              </div>
            </Card>
            <div className="rounded-xl overflow-hidden shadow-lg h-full min-h-[300px]">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A7e0e3f5c8f8f8f8f8f8f8f8f8f8f8f8f&amp;source=constructor" 
                width="100%" 
                height="100%" 
                frameBorder="0"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Кафе Гараж. Создано с душой для вас.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;