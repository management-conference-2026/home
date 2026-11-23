export type SpeakerPhoto = { src: string; position: string };

// Only portraits with a named local asset or a verifiable corporate source are connected.
export const speakerPhotos: Partial<Record<string, SpeakerPhoto>> = {
  'Ibrahim Canliel': { src: '/images/speakers/neutral/ibrahim-canliel.webp', position: '50% 50%' },
  'Yerbolat Baisalykov': { src: '/images/speakers/neutral/yerbolat-baisalykov.webp', position: '50% 50%' },
  'Bella Tormysheva': { src: '/images/speakers/neutral/bella-tormysheva.webp', position: '50% 50%' },
  'Yuliya Tsoy': { src: '/images/speakers/neutral/yuliya-tsoy.webp', position: '50% 50%' },
  'Johan Eidhagen': { src: '/images/speakers/neutral/johan-eidhagen.webp', position: '50% 50%' },
  'Yelena Obukhova': { src: '/images/speakers/neutral/yelena-obukhova.webp', position: '50% 50%' },
  'Alexandr Neboga': { src: '/images/speakers/neutral/alexandr-neboga.webp', position: '50% 50%' },
  'Yevgeniya Ni': { src: '/images/speakers/neutral/yevgeniya-ni.webp', position: '50% 50%' },
  'Serik Rys-Uly': { src: '/images/speakers/neutral/serik-rys-uly.webp', position: '50% 50%' },
  'Filippos Siakkas': { src: '/images/speakers/neutral/filippos-siakkas.webp', position: '50% 50%' },
  'Piyush Taori': { src: '/images/speakers/neutral/piyush-taori.webp', position: '50% 50%' },
  'Keith Wardle': { src: '/images/speakers/neutral/keith-wardle.webp', position: '50% 50%' },
  'Gerhard Coetzee': { src: '/images/speakers/neutral/gerhard-coetzee.webp', position: '50% 50%' },
  'Andy Holt': { src: '/images/speakers/neutral/andy-holt.webp', position: '50% 50%' },
  'Damon Bowles': { src: '/images/speakers/neutral/damon-bowles.webp', position: '50% 50%' },
  'Goncalo Pires': { src: '/images/speakers/neutral/goncalo-pires.webp', position: '50% 50%' },
};
