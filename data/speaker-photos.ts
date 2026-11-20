export type SpeakerPhoto = { src: string; position: string };

// Only portraits with a named local asset or a verifiable corporate source are connected.
export const speakerPhotos: Partial<Record<string, SpeakerPhoto>> = {
  'Ibrahim Canliel': { src: '/images/speakers/neutral/ibrahim-canliel.webp', position: '50% 50%' },
  'Yerbolat Baisalykov': { src: '/images/speakers/neutral/yerbolat-baisalykov.webp', position: '50% 50%' },
  'Bella Tormysheva': { src: '/images/speakers/bella-tormysheva.webp', position: '50% 24%' },
  'Yuliya Tsoy': { src: '/images/speakers/neutral/yuliya-tsoy.webp', position: '50% 50%' },
  'Johan Eidhagen': { src: '/images/speakers/johan-eidhagen.webp', position: '50% 24%' },
  'Yelena Obukhova': { src: '/images/speakers/yelena-obukhova.webp', position: '50% 22%' },
  'Alexandr Neboga': { src: '/images/speakers/alexandr-neboga.webp', position: '100% 20%' },
  'Yevgeniya Ni': { src: '/images/speakers/neutral/yevgeniya-ni.webp', position: '50% 50%' },
  'Serik Rys-Uly': { src: '/images/speakers/neutral/serik-rys-uly.webp', position: '50% 50%' },
  'Filippos Siakkas': { src: '/images/speakers/filippos-siakkas.webp', position: '50% 24%' },
  'Piyush Taori': { src: '/images/speakers/piyush-taori.webp', position: '50% 24%' },
  'Keith Wardle': { src: '/images/speakers/neutral/keith-wardle.webp', position: '50% 50%' },
  'Gerhard Coetzee': { src: '/images/speakers/gerhard-coetzee.webp', position: '50% 24%' },
  'Andy Holt': { src: '/images/speakers/andy-holt.webp', position: '50% 20%' },
  'Damon Bowles': { src: '/images/speakers/damon-bowles.webp', position: '50% 20%' },
  'Goncalo Pires': { src: '/images/speakers/goncalo-pires.webp', position: '50% 24%' },
};
