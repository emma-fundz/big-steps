
import React, { useEffect, useRef } from 'react';
import RevealAnimation from '@/components/ui/RevealAnimation';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const LocationSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  const locations = [
    {
      title: 'BigSteps Flagship Store',
      address: '123 Fashion Avenue, Lekki Phase 1, Lagos',
      phone: '+234 123 456 7890',
      hours: 'Mon-Sat: 9AM - 8PM, Sun: 12PM - 6PM',
      email: 'lekki@bigsteps.com',
      coordinates: { lat: 6.4698, lng: 3.5852 },
    },
    {
      title: 'BigSteps Ikeja Branch',
      address: '45 Shopping Mall, Ikeja City Mall, Lagos',
      phone: '+234 123 456 7891',
      hours: 'Mon-Sat: 10AM - 9PM, Sun: 12PM - 7PM',
      email: 'ikeja@bigsteps.com',
      coordinates: { lat: 6.6018, lng: 3.3515 },
    },
    {
      title: 'BigSteps Victoria Island',
      address: '78 Luxury Lane, Victoria Island, Lagos',
      phone: '+234 123 456 7892',
      hours: 'Mon-Sat: 9AM - 8PM, Sun: 12PM - 6PM',
      email: 'vi@bigsteps.com',
      coordinates: { lat: 6.4281, lng: 3.4219 },
    },
  ];

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMapsScript = () => {
      // This is where you would normally include your Google Maps API key
      // For educational purposes, we'll create a placeholder map
      if (!window.google) {
        window.initMap = initializeMap;
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      } else {
        initializeMap();
      }
    };

    // Function to initialize the map
    const initializeMap = () => {
      if (mapRef.current && window.google) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 6.5244, lng: 3.3792 },
          zoom: 11,
          styles: [
            {
              "featureType": "administrative",
              "elementType": "all",
              "stylers": [{"saturation": "-100"}]
            },
            {
              "featureType": "administrative.province",
              "elementType": "all",
              "stylers": [{"visibility": "off"}]
            },
            {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]
            },
            {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [{"saturation": -100}, {"lightness": "50"}, {"visibility": "simplified"}]
            },
            {
              "featureType": "road",
              "elementType": "all",
              "stylers": [{"saturation": "-100"}]
            },
            {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [{"visibility": "simplified"}]
            },
            {
              "featureType": "road.arterial",
              "elementType": "all",
              "stylers": [{"lightness": "30"}]
            },
            {
              "featureType": "road.local",
              "elementType": "all",
              "stylers": [{"lightness": "40"}]
            },
            {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [{"saturation": -100}, {"visibility": "simplified"}]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]
            },
            {
              "featureType": "water",
              "elementType": "labels",
              "stylers": [{"lightness": -25}, {"saturation": -100}]
            }
          ]
        });

        // Add markers for each location
        locations.forEach((location) => {
          const marker = new window.google.maps.Marker({
            position: location.coordinates,
            map: map,
            title: location.title,
            animation: window.google.maps.Animation.DROP,
            icon: {
              url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            },
          });

          // Add info window
          const infowindow = new window.google.maps.InfoWindow({
            content: `<div style="padding: 10px;"><h3 style="margin: 0; color: #3b82f6;">${location.title}</h3><p style="margin: 5px 0;">${location.address}</p></div>`,
          });

          marker.addListener('click', () => {
            infowindow.open(map, marker);
          });
        });
      } else {
        // Fallback for when Google Maps is not available
        if (mapRef.current) {
          const fallbackMap = document.createElement('div');
          fallbackMap.className = 'bg-gray-200 rounded-lg w-full h-full flex items-center justify-center';
          fallbackMap.innerHTML = '<p class="text-gray-500">Map Loading...</p>';
          mapRef.current.appendChild(fallbackMap);
        }
      }
    };

    loadGoogleMapsScript();

    return () => {
      // Clean up any listeners or memory here
      window.initMap = () => {};
    };
  }, []);

  return (
    <section id="locations" className="section-padding bg-white">
      <div className="container mx-auto">
        <RevealAnimation>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Locations
            </span>
            <h2 className="text-4xl font-bold mb-4">Visit Our Stores</h2>
            <p className="text-gray-600">
              Experience our products in person at one of our conveniently located stores across Lagos. Our staff is ready to assist you.
            </p>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {locations.map((location, index) => (
            <RevealAnimation key={index} delay={index * 100} direction="up">
              <div className="bg-gray-50 rounded-xl p-6 shadow-soft">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{location.title}</h3>
                    <p className="text-gray-500 text-sm">{location.address}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span>{location.hours}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span>{location.email}</span>
                  </div>
                </div>
                
                <button className="mt-2 text-primary font-medium hover:underline">
                  Get Directions
                </button>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Map */}
        <RevealAnimation delay={300}>
          <div className="relative rounded-xl overflow-hidden shadow-premium h-[500px]">
            <div ref={mapRef} className="w-full h-full"></div>
            
            {/* Map overlay for when Google Maps API is unavailable */}
            <div className="absolute inset-0 flex items-center justify-center z-[-1]">
              <div className="text-center max-w-md px-6">
                <h3 className="text-xl font-semibold mb-2">Map Visualization</h3>
                <p className="text-gray-600">
                  This is where the interactive map would appear, showing all our store locations across Lagos.
                </p>
              </div>
            </div>
          </div>
        </RevealAnimation>

        {/* Areas we serve */}
        <RevealAnimation delay={500}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-5">Areas We Serve</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {[
                'Lekki', 'Victoria Island', 'Ikoyi', 'Ikeja', 'Surulere',
                'Ajah', 'Yaba', 'Maryland', 'Ogudu', 'Gbagada',
                'Magodo', 'Festac', 'Apapa', 'Obalende', 'Ojodu'
              ].map((area, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default LocationSection;
