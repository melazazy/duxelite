import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import { useTestimonials } from '../hooks/useApi';
import type { Testimonial } from '../services/apiService';

const Testimonials: React.FC = () => {
  const { data: apiTestimonials, loading, error } = useTestimonials();

  // Fallback data in case API is not available
  const fallbackTestimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John Doe',
      title: 'CEO, TechCorp',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      quote: 'Duxelite transformed our digital presence. Their team is professional, and the results exceeded our expectations. Highly recommended!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      title: 'CTO, Innovate Inc.',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      quote: 'Working with Duxelite was a game-changer. They delivered a robust ERP system that streamlined our operations and improved efficiency.',
    },
    {
      id: 3,
      name: 'Sam Wilson',
      title: 'Founder, E-Learn Co.',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      quote: 'The e-learning platform Duxelite built for us is fantastic. It\'s user-friendly, engaging, and has received great feedback from our students.',
    },
  ];

  const DEFAULT_AVATAR = 'https://via.placeholder.com/96x96.png?text=%20';

  // Normalize potential API responses with different field names and filter invalid entries
  const normalizedFromApi: Testimonial[] = Array.isArray(apiTestimonials)
    ? apiTestimonials
        .map((t: any, idx: number) => {
          const name = t?.name || t?.full_name || t?.client_name || '';
          const title = t?.title || t?.position || t?.role || t?.company_title || '';
          const avatar = t?.avatar || t?.image || t?.photo_url || t?.avatar_url || DEFAULT_AVATAR;
          const quote = t?.quote || t?.testimonial || t?.content || t?.message || '';
          const id = t?.id ?? (idx + 1);

          if (!name || !quote) {
            return null; // drop invalid entries
          }

          return { id, name, title, avatar, quote } as Testimonial;
        })
        .filter(Boolean) as Testimonial[]
    : [];

  // Prefer valid API testimonials; otherwise use local fallback
  const testimonials: Testimonial[] = normalizedFromApi.length > 0 ? normalizedFromApi : fallbackTestimonials;

  if (loading) {
    return (
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching testimonials:", error);
    // The component will proceed to render with fallback data
  }

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540]">
            What Our Clients Say
          </h2>
          <p className="mt-2 text-gray-600">
            We are proud to have earned the trust of our amazing clients.
          </p>
        </div>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="pb-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl text-center max-w-2xl mx-auto">
                <Quote className="w-8 h-8 text-[#00CFFF] mx-auto mb-4" />
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <img 
                    src={testimonial.avatar || DEFAULT_AVATAR} 
                    alt={testimonial.name} 
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = DEFAULT_AVATAR;
                    }}
                  />
                  <div className="text-left">
                    <p className="font-medium text-[#0A2540] text-sm">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
