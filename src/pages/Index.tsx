import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeSection, setActiveSection] = useState<"gallery" | "about">("gallery");

  const galleryImages = [
    {
      id: 1,
      url: "https://cdn.poehali.dev/files/2d93b9e7-3984-41bc-81e0-69c60b7cd7c7.JPG",
      title: "Трансформация",
      category: "Portrait"
    },
    {
      id: 2,
      url: "https://cdn.poehali.dev/files/9fa03b26-e212-4b05-9915-a9f19c4f5b91.JPG",
      title: "Нежность",
      category: "Family"
    },
    {
      id: 3,
      url: "https://cdn.poehali.dev/files/167549e4-47b2-4648-a60a-c4d22f11069e.JPG",
      title: "Контраст",
      category: "Portrait"
    },
    {
      id: 4,
      url: "https://cdn.poehali.dev/files/9d1bc2fd-6303-4408-9268-5862ae177750.JPG",
      title: "Стиль",
      category: "Fashion"
    },
    {
      id: 5,
      url: "https://cdn.poehali.dev/files/fdcf9ff5-20d2-44ec-a2aa-a0e871c91606.JPG",
      title: "Подводный мир",
      category: "Creative"
    },
    {
      id: 6,
      url: "https://cdn.poehali.dev/files/147eda3a-d1b9-413c-a81f-e3fda5351305.JPG",
      title: "История мужества",
      category: "Portrait"
    },
    {
      id: 7,
      url: "https://cdn.poehali.dev/files/f6d30502-8377-486a-9052-1c46bc77197f.JPG",
      title: "Элегантность",
      category: "Fashion"
    },
    {
      id: 8,
      url: "https://cdn.poehali.dev/files/8c684d10-e14c-487a-8811-9ca9ea44f023.JPG",
      title: "Сезоны жизни",
      category: "Portrait"
    },
    {
      id: 9,
      url: "https://cdn.poehali.dev/files/7b361cd6-c1e1-4221-8e38-e9630cd8a123.JPG",
      title: "Гламур и стиль",
      category: "Fashion"
    },
    {
      id: 10,
      url: "https://cdn.poehali.dev/files/a57ab8d5-c2f0-4387-9df3-407ace4ce9e9.JPG",
      title: "Четыре образа",
      category: "Creative"
    }
  ];

  const scrollToSection = (section: "gallery" | "about") => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
              АЛЕКСАНДР ИВАНОВ
            </h1>
            <div className="flex gap-4 sm:gap-8">
              <button
                onClick={() => scrollToSection("gallery")}
                className={`text-sm sm:text-base font-medium transition-colors ${
                  activeSection === "gallery" ? "text-primary" : "text-gray-600 hover:text-primary"
                }`}
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`text-sm sm:text-base font-medium transition-colors ${
                  activeSection === "about" ? "text-primary" : "text-gray-600 hover:text-primary"
                }`}
              >
                О фотографе
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/fdcf9ff5-20d2-44ec-a2aa-a0e871c91606.JPG')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-light mb-4 sm:mb-6 tracking-wider">
            ФОТОГРАФИЯ
          </h2>
          <p className="text-base sm:text-xl lg:text-2xl font-light tracking-widest mb-8 sm:mb-12">
            КАК ИСКУССТВО
          </p>
          <Button
            onClick={() => scrollToSection("gallery")}
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
          >
            Смотреть работы
            <Icon name="ArrowDown" className="ml-2" size={18} />
          </Button>
        </div>
      </section>

      <section id="gallery" className="py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
            Портфолио
          </h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 lg:gap-8 space-y-4 sm:space-y-6 lg:space-y-8">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden bg-gray-100 break-inside-avoid animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs sm:text-sm font-light tracking-widest mb-1 text-primary">
                      {image.category}
                    </p>
                    <h3 className="text-base sm:text-lg lg:text-xl font-light">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-center mb-8 sm:mb-12 lg:mb-16">
            О фотографе
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 sm:mb-6">
                Александр Иванов
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Профессиональный фотограф с 15-летним опытом работы в жанрах портретной,
                архитектурной и пейзажной съёмки. Мой подход к фотографии основан на
                поиске уникальных ракурсов и работе со светом.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                Работы публиковались в ведущих изданиях и представлены на международных
                выставках. Каждый снимок — это история, рассказанная через объектив.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Button
                  variant="default"
                  className="bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 py-2 text-sm sm:text-base"
                >
                  Связаться
                  <Icon name="Mail" className="ml-2" size={18} />
                </Button>
                <Button
                  variant="outline"
                  className="px-4 sm:px-6 py-2 text-sm sm:text-base"
                >
                  Instagram
                  <Icon name="Instagram" className="ml-2" size={18} />
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://cdn.poehali.dev/files/9d1bc2fd-6303-4408-9268-5862ae177750.JPG"
                alt="Александр Иванов"
                className="w-full rounded-lg shadow-2xl"
                style={{ aspectRatio: "3/4" }}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light mb-4">
            АЛЕКСАНДР ИВАНОВ
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6">
            Профессиональная фотография
          </p>
          <div className="flex justify-center gap-4 sm:gap-6">
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              <Icon name="Facebook" size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              <Icon name="Mail" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;