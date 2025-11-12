import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const images = [
    {
      url: './gallery/IMG_2625.PNG',
      title: ''
    },
    {
      url: './gallery/IMG_2626.PNG',
      title: ''
    },
    {
      url: './gallery/IMG_2627.PNG',
      title: ''
    },
    {
      url: './gallery/IMG_2628.PNG',
      title: ''
    },
    {
      url: './gallery/IMG_2629.PNG',
      title: ''
    },
    {
      url: './gallery/IMG_2630.PNG',
      title: ''
    },
    {
      url: './gallery/IMG_2631.PNG',
      title: ''
    },
    {
      url: './gallery/IMG_2632.PNG',
      title: ''
    },
    {
      url: './gallery/IMG_2633.PNG',
      title: ''
    },
    {
      url: './gallery/IMG_2634.PNG',
      title: ''
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-4">Naše realizácie</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pozrite si ukážky našich realizovaných projektov
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow aspect-[4/3]"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}