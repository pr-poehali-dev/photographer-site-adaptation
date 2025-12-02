import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeSection, setActiveSection] = useState<"gallery" | "about">("gallery");

  const galleryImages = [
    {
      id: 1,
      url: "https://cdn.poehali.dev/projects/4f72ae0b-10cf-4778-9df8-fe44a98044a0/files/2373dd79-f7aa-4d05-b06d-1733fa870008.jpg",
      title: "Architectural Elegance",
      category: "Architecture"
    },
    {
      id: 2,
      url: "https://cdn.poehali.dev/projects/4f72ae0b-10cf-4778-9df8-fe44a98044a0/files/7b4f4660-48a8-4dcc-b33d-90f09d4813b1.jpg",
      title: "Portrait Series",
      category: "Portrait"
    },
    {
      id: 3,
      url: "https://cdn.poehali.dev/projects/4f72ae0b-10cf-4778-9df8-fe44a98044a0/files/5ac7cbd7-bc82-49da-8769-11f6f746bc54.jpg",
      title: "Golden Hour",
      category: "Landscape"
    },
    {
      id: 4,
      url: "https://cdn.poehali.dev/projects/4f72ae0b-10cf-4778-9df8-fe44a98044a0/files/2373dd79-f7aa-4d05-b06d-1733fa870008.jpg",
      title: "Urban Lines",
      category: "Architecture"
    },
    {
      id: 5,
      url: "https://cdn.poehali.dev/projects/4f72ae0b-10cf-4778-9df8-fe44a98044a0/files/7b4f4660-48a8-4dcc-b33d-90f09d4813b1.jpg",
      title: "Studio Light",
      category: "Portrait"
    },
    {
      id: 6,
      url: "https://cdn.poehali.dev/projects/4f72ae0b-10cf-4778-9df8-fe44a98044a0/files/5ac7cbd7-bc82-49da-8769-11f6f746bc54.jpg",
      title: "Natural Beauty",
      category: "Landscape"
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
            backgroundImage: `url('https://cdn.poehali.dev/projects/4f72ae0b-10cf-4778-9df8-fe44a98044a0/files/2373dd79-f7aa-4d05-b06d-1733fa870008.jpg')`
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
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
            Портфолио
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden bg-gray-100 animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                  aspectRatio: "4/5"
                }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs sm:text-sm font-light tracking-widest mb-1 sm:mb-2 text-primary">
                      {image.category}
                    </p>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-light">
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
                src="https://cdn.poehali.dev/projects/4f72ae0b-10cf-4778-9df8-fe44a98044a0/files/7b4f4660-48a8-4dcc-b33d-90f09d4813b1.jpg"
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