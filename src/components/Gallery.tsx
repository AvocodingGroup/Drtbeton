import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1760376208640-2ece4c4a0adc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGRyaWxsaW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MTU3OTc2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Jadrové vŕtanie'
    },
    {
      url: 'https://images.unsplash.com/photo-1518701328093-5bc75f543696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGN1dHRpbmclMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2MTU3OTc2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Rezanie betónu'
    },
    {
      url: 'https://images.unsplash.com/photo-1678944827354-fb54b9040a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW1vbGl0aW9uJTIwY29uc3RydWN0aW9uJTIwd29ya3xlbnwxfHx8fDE3NjE1Nzk3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Demolačné práce'
    },
    {
      url: 'https://images.unsplash.com/photo-1579492450119-80542d516179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMHdhbGwlMjB0ZXh0dXJlfGVufDF8fHx8MTc2MTQ2OTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Práca s betónom'
    },
    {
      url: 'https://images.unsplash.com/photo-1738528575208-b9ccdca8acaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NjE1NDgwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Priemyselné projekty'
    },
    {
      url: 'https://images.unsplash.com/photo-1706201901036-6a295b4e4ef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE1NjUyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Profesionálny tím'
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