import { Era } from '../types';

export const eras: Era[] = [
  {
    id: 'hadean',
    name: 'Hadean Eon',
    period: '4.6 - 4.0 billion years ago',
    description: 'The Hadean eon represents Earth\'s earliest history, characterized by a molten surface, frequent meteorite impacts, and the formation of Earth\'s core and early atmosphere.',
    keyFeatures: [
      'Formation of the Moon',
      'Development of Earth\'s core',
      'Creation of early atmosphere',
      'Cooling of Earth\'s surface'
    ],
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80',
  },
  {
    id: 'archean',
    name: 'Archean Eon',
    period: '4.0 - 2.5 billion years ago',
    description: 'The Archean eon saw the emergence of the first life forms and the beginning of photosynthesis, which would eventually lead to the oxygenation of Earth\'s atmosphere.',
    keyFeatures: [
      'First bacterial life forms',
      'Beginning of photosynthesis',
      'Formation of first continents',
      'Early atmosphere rich in methane'
    ],
    image: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&q=80',
    creatures: [
      {
        name: 'Stromatolites',
        description: 'Ancient layered structures created by microorganisms',
        image: 'https://geolodiaavila.com/wp-content/uploads/2023/05/1_.jpg'
      },
      {
        name: 'Cyanobacteria',
        description: 'Photosynthetic bacteria that produced oxygen',
        image: 'https://www.deq.ok.gov/wp-content/uploads/state-environmental-laboratory-services/Microscope_BGA_2-1200x411.jpg'
      }
    ]
  },
  {
    id: 'paleozoic',
    name: 'Paleozoic Era',
    period: '541 - 252 million years ago',
    description: 'The Paleozoic era marked the explosion of complex life forms, including the first vertebrates, land plants, and insects.',
    keyFeatures: [
      'Cambrian explosion',
      'First vertebrates',
      'Colonization of land',
      'Formation of Pangaea'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Trilobite_Heinrich_Harder.jpg',
    creatures: [
      {
        name: 'Trilobites',
        description: 'Ancient marine arthropods that dominated the early Paleozoic seas',
        image: 'https://content.nationalgeographic.com.es/medio/2023/08/14/trilobites_7663a887_230814102106_1280x1138.jpg'
      },
      {
        name: 'Dunkleosteus',
        description: 'Large armored fish that was one of the first vertebrate apex predators',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Qb7h0AmfskwLRpfQKWUNq7WAb1yZ7ms-eA&s'
      }
    ]
  },
  {
    id: 'mesozoic',
    name: 'Mesozoic Era',
    period: '252 - 66 million years ago',
    description: 'Known as the Age of Dinosaurs, the Mesozoic era saw the rise and dominance of dinosaurs, the first mammals, and the emergence of flowering plants.',
    keyFeatures: [
      'Dominance of dinosaurs',
      'First mammals and birds',
      'Evolution of flowering plants',
      'Breakup of Pangaea'
    ],
    image: 'https://humanidades.com/wp-content/uploads/2019/03/era-mesozoica-fauna-e1554080111663.jpg',
    creatures: [
      {
        name: 'Tyrannosaurus Rex',
        description: 'One of the largest land carnivores of all time',
        image: 'https://imagenes.elpais.com/resizer/v2/PFFAQ3CQUNFUPJACQ3XD7LE3JA.jpg?auth=e6e934a2867c98bfc5d4f490cba8d7867a5fd6c0b6cfc89cd36081ddd14545cd&width=1960&height=1470&focal=1182%2C725'
      },
      {
        name: 'Brachiosaurus',
        description: 'Large herbivorous dinosaur with a long neck',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6_N2jkocHLw5W2kCUhQvs4EG3LSrQPtN3w&s'
      }
    ]
  },
  {
    id: 'cenozoic',
    name: 'Cenozoic Era',
    period: '66 million years ago - Present',
    description: 'The current era, marked by the extinction of the dinosaurs and the rise of mammals and modern plants.',
    keyFeatures: [
      'Rise of mammals',
      'Evolution of primates',
      'Modern climate patterns',
      'Human evolution'
    ],
    image: 'https://humanidades.com/wp-content/uploads/2019/04/cenozoico-4-e1588717981916.jpg',
    creatures: [
      {
        name: 'Woolly Mammoth',
        description: 'Ice age mammal adapted to cold climates',
        image: 'https://www.geoevolucion.com/wp-content/uploads/2023/08/descubre-las-caracteristicas-de-la-era-cenozoica.jpg'
      },
      {
        name: 'Smilodon',
        description: 'Saber-toothed cat that hunted large prey',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Smilodon_fatalis.jpg/640px-Smilodon_fatalis.jpg'
      }
    ]
  }
];