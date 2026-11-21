// Shared data: company info, navigation, photos.
// Photos are hot-linked from Unsplash (Unsplash License: free for commercial use).

export const SITE_URL = 'https://www.travel-hub.biz'; // production domain (used for canonical / hreflang / sitemap)
export const DEMO = true; // true = noindex (preview on GitHub Pages)

export const COMPANY = {
  legal: 'Travel-Hub Sagl',
  brand: 'Travel Hub',
  email: 'sales@travel-hub.biz',
  uid: 'CHE-385.849.577',
  iata: '96001872',
  since: 2016,
  instagram: 'https://www.instagram.com/travel_hub_usa/',
  offices: [
    {
      key: 'mia',
      code: 'MIA',
      tz: 'America/New_York',
      city: { en: 'Miami', it: 'Miami' },
      role: { en: 'Head office', it: 'Sede principale' },
      lines: ['1975 NE 24th Ct', 'Miami, FL 33180', 'USA'],
      phone: '+1 786 654 4670',
    },
    {
      key: 'lug',
      code: 'LUG',
      tz: 'Europe/Zurich',
      city: { en: 'Bioggio · Lugano', it: 'Bioggio · Lugano' },
      role: { en: 'Branch office', it: 'Filiale' },
      lines: ['Salita Cuccarello 4b', '6934 Bioggio', { en: 'Switzerland', it: 'Svizzera' }],
      phone: '+41 76 483 36 96',
    },
    {
      key: 'ita',
      code: 'ITA',
      tz: 'Europe/Rome',
      city: { en: 'Italy', it: 'Italia' },
      role: { en: 'Booking office', it: 'Ufficio booking' },
      lines: [],
      phone: '+39 348 225 1483',
      phone2: '+39 351 919 8606',
    },
  ],
};

// page key -> slug per language (relative to site root, trailing slash)
export const PAGES = {
  home: { en: '', it: 'it/' },
  usa: { en: 'usa-canada/', it: 'it/usa-canada/' },
  global: { en: 'global-reach/', it: 'it/global-reach/' },
  contact: { en: 'contact/', it: 'it/contatti/' },
};

export const NAV = [
  { key: 'home', gate: 'A', label: { en: 'Home', it: 'Home' } },
  { key: 'usa', gate: 'B', label: { en: 'USA & Canada', it: 'USA & Canada' } },
  { key: 'global', gate: 'C', label: { en: 'Global Reach', it: 'Global Reach' } },
  { key: 'contact', gate: 'D', label: { en: 'Contact', it: 'Contatti' } },
];

// Unsplash photo ids (without the "photo-" prefix)
export const P = {
  monumentRoad: '1526763025764-2a8073a0cd43',
  monument: '1509316785289-025f5b846b35',
  grandCanyon: '1615551043360-33de8b5f410c',
  grandCanyon2: '1575527048208-6475b441e0a0',
  zion: '1443632864897-14973fa006cf',
  bryce: '1513997759259-48cbd481c69c',
  antelope: '1534868489953-ef37c20abb25',
  nyc: '1499092346589-b9b6be3e94b2',
  nycNight: '1496588152823-86ff7695e68f',
  boston: '1565127803082-69dd82351360',
  lighthouse: '1582488719899-a2a54cb479fe',
  vermont: '1757661543994-2b94ef37f097',
  moraine: '1539667547529-84c607280d20',
  quebec: '1576771304215-6d4d30f7bb63',
  vancouver: '1647655806923-e8202f4f2b8c',
  bigsur: '1581790061118-2cd9a40164b0',
  alaska: '1673114819432-1aa36952dd3e',
  route66: '1785848376358-8efbc919db19',
  yellowstone: '1529439322271-42931c09bce1',
  miami: '1506966953602-c20cc11f75e3',
  miamiPalms: '1605723517503-3cadb5818a0c',
  lofoten: '1663428520845-056989f8a664',
  norway: '1504233529578-6d46baba6d34',
  iceland: '1511300636408-a63a89df3482',
  aurora: '1515764741095-712094f48b42',
  stockholm: '1588653818221-2651ec1a6423',
  groupWalk: '1536607961765-592e80bcc19e',
  viewpoint: '1464198016405-33fd4527b89d',
  cityGroup: '1600714480856-dc99b28892eb',
  hotel: '1621293954908-907159247fc8',
  coach: '1786545638379-2c556a8ab23b',
  airport: '1767710096520-9246565a9d31',
  airportDusk: '1561131668-f63504fc549d',
  gala: '1536392706976-e486e2ba97af',
  van: '1469854523086-cc02fe5d8800',
  planeWindow: '1488085061387-422e29b40080',
  airliner: '1436491865332-7a61a109cc05',
};
