const Gallery = () => {
    const galleryImages = [
        "/images/9.jpg",
        "/images/10.jpg",
        "/images/11.jpg",
        "/images/12.jpg",
        
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/6.jpg",
        "/images/7.jpg",
        "/images/8.jpg",
        "/images/13.jpg",
        "/images/14.jpg",
        "/images/15.jpg",
        "/images/16.jpg",
        "/images/17.jpg",
        "/images/18.jpg",
        "/images/19.jpg",
        "/images/20.jpg",
        "/images/21.jpg",
        "/images/22.jpg",
        "/images/24.jpg",
        "/images/25.jpg",
        "/images/26.jpg",
        "/images/27.jpg",
        "/images/28.jpg",
      ];
      
  
    return (
      <div className="bg-white py-16" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold">Gallery</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Gallery;