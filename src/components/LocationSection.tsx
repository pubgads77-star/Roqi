import React from 'react';
import { MapPin, Navigation, Compass, Building, Plane, Coffee, Sparkles } from 'lucide-react';
import { SITE_INFO } from '../data/apartmentsData';

export const LocationSection: React.FC = () => {
  const nearbyPlaces = [
    { name: 'منتزه وحديقة الردف التفاعلية', time: '7 دقائق', icon: <Building className="w-4 h-4 text-[#C6A16B]" /> },
    { name: 'سيتي ووك وجوري مول الطائف', time: '8 دقائق', icon: <Coffee className="w-4 h-4 text-[#C6A16B]" /> },
    { name: 'تلفريك وقرية الهدا السياحية', time: '18 دقيقة', icon: <Compass className="w-4 h-4 text-[#C6A16B]" /> },
    { name: 'مطار الطائف الدولي (TIF)', time: '20 دقيقة', icon: <Plane className="w-4 h-4 text-[#C6A16B]" /> },
    { name: 'جامعة الطائف ومجمع الكليات', time: '12 دقيقة', icon: <Building className="w-4 h-4 text-[#C6A16B]" /> },
    { name: 'أرقى مطاعم ومقاهي حي النسيم وشارع ابن سيناء', time: '2 دقيقة', icon: <Coffee className="w-4 h-4 text-[#C6A16B]" /> },
  ];

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=21.2703,40.4158';

  return (
    <section id="location" className="py-16 md:py-24 bg-[#FFF9F1] text-[#3A2522] border-b border-[#C6A16B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#570A1B]/10 text-[#570A1B] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A16B]" />
            <span>موقع استراتيجي وهادئ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-alexandria font-bold text-[#570A1B]">
            في قلب أرقى أحياء الطائف الحيوية (حي النسيم)
          </h2>
          <div className="w-16 h-1 bg-[#C6A16B] mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-[#3A2522]/80 leading-relaxed font-light">
            موقع مثالي يجمع بين هدوء الحي السكني الفاخر وسهولة الوصول المباشر لأهم معالم ووجهات مدينة الطائف الساحرة.
          </p>
        </div>

        {/* 2-Column Split: Map Display & Landmarks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Visual Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#F3E2CC] rounded-3xl border-2 border-[#C6A16B] p-6 shadow-xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-3 text-right">
              <div className="flex items-center gap-2 text-[#570A1B]">
                <MapPin className="w-5 h-5 text-[#C6A16B]" />
                <h3 className="font-alexandria font-bold text-lg">
                  العنوان الدقيق والوصول
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#3A2522]/90 leading-relaxed">
                {SITE_INFO.address}
              </p>
              <div className="text-xs text-[#570A1B] bg-[#FFF9F1] p-3 rounded-xl border border-[#C6A16B]/40">
                ⭐ يتم تزويد الضيف برابط الموقع الجغرافي الدقيق ومسار المواقف المظللة فور تأكيد الحجز.
              </div>
            </div>

            {/* Interactive Mock Map Canvas */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#570A1B]/30 shadow-inner bg-[#e4d3bc] flex items-center justify-center group">
              {/* Map Graphic Vector Grid */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#570A1B_1px,transparent_1px),linear-gradient(to_bottom,#570A1B_1px,transparent_1px)] bg-[size:30px_30px]"></div>

              {/* Central Map Pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#570A1B] text-[#FFF9F1] flex items-center justify-center border-4 border-[#C6A16B] shadow-2xl animate-pulse">
                  <MapPin className="w-7 h-7 text-[#C6A16B]" />
                </div>
                <div className="mt-2 bg-[#570A1B] text-[#FFF9F1] px-3 py-1 rounded-full text-xs font-alexandria font-bold border border-[#C6A16B] shadow">
                  رُقِيّ للشقق الفندقية VIP
                </div>
              </div>

              {/* Map controls preview */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 bg-white/95 hover:bg-white text-[#570A1B] px-4 py-2 rounded-xl text-xs font-alexandria font-bold shadow-md transition-all flex items-center gap-1.5 border border-[#C6A16B]"
              >
                <Navigation className="w-3.5 h-3.5 text-[#570A1B]" />
                <span>فتح عبر خرائط Google</span>
              </a>
            </div>

            {/* Directions Action */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#570A1B] hover:bg-[#84394A] text-[#FFF9F1] py-3.5 px-4 rounded-xl font-alexandria font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 border border-[#C6A16B]"
            >
              <Navigation className="w-4 h-4 text-[#C6A16B]" />
              <span>الحصول على اتجاهات القيادة المباشرة</span>
            </a>

          </div>

          {/* Nearby Key Attractions (5 cols) */}
          <div className="lg:col-span-5 bg-[#FFF9F1] rounded-3xl border border-[#C6A16B] p-6 sm:p-8 shadow-xl flex flex-col justify-between text-right space-y-6">
            
            <div className="space-y-2">
              <h3 className="font-alexandria font-bold text-lg text-[#570A1B]">
                أبرز المعالم والوجهات القريبة
              </h3>
              <p className="text-xs text-[#3A2522]/80 font-light">
                مسافات قيادة قصيرة وسريعة بفضل القرب من المحاور الحيوية الرئيسية (شارع ابن سيناء، طريق وادي وج، وطريق الملك فهد الدائري).
              </p>
            </div>

            <div className="space-y-3">
              {nearbyPlaces.map((place, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#F3E2CC]/40 border border-[#C6A16B]/30 hover:border-[#570A1B] transition-colors text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#570A1B] flex items-center justify-center shrink-0">
                      {place.icon}
                    </div>
                    <span className="font-medium text-[#3A2522]">{place.name}</span>
                  </div>
                  <span className="font-alexandria font-bold text-[#570A1B] bg-white px-2 py-1 rounded border border-[#C6A16B]/40 shrink-0">
                    {place.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#C6A16B]/30 text-xs text-[#3A2522]/70 leading-relaxed">
              * يتوفر بالقرب من المبنى سوبرماركت وصيدليات ومغاسل ملابس فاخرة على مدار 24 ساعة.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
