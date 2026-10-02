import {
  Car,
  MediaEpisode,
  AutomotiveEvent,
  JournalArticle,
  CommunityPost,
  MerchItem,
  BrandPartner,
  FlywheelNode
} from '../types';

export const CREATOR_PROFILE = {
  name: "Minh",
  handle: "@minhinmotion",
  tagline: "Driver. Storyteller. Mechanic. Builder.",
  location: "Southern California & Alpine Passes",
  philosophy: "Authentic driving over vanity staging. Every car in this garage is tracked, wrenched on, and driven with pure mechanical sympathy.",
  stats: {
    garageCars: "4 Active Builds",
    trackHoursLogged: "1,240+ Hours",
    communityMembers: "18,400+ Drivers",
    monthlyAudienceReach: "1.4M Enthusiasts"
  }
};

export const INITIAL_CARS: Car[] = [
  {
    id: 'gt3-992',
    name: 'Porsche 911 GT3 Touring (992)',
    year: 2023,
    badge: 'Track Weapon',
    category: 'Track Weapon',
    engine: '4.0L Naturally Aspirated Flat-6',
    powerHp: 502,
    torqueNm: 470,
    weightKg: 1418,
    zeroToSixtySec: 3.2,
    topSpeedMph: 199,
    maxRpm: 9000,
    soundProfile: 'flat6',
    image: '/src/assets/images/showcase_garage_gt3_1790523002119.jpg',
    story: 'Ordered without rear wing for clean touring lines, but dialed in with Manthey Racing underbody diffuser channels, full titanium Akrapovič headers, and bespoke KW V4 Clubsport dampers for Laguna Seca and Buttonwillow.',
    modifications: [
      {
        category: 'Exhaust & Induction',
        parts: ['Akrapovič Evolution Titanium headers', 'Link pipe without OPF', 'BMC high-flow intake filters']
      },
      {
        category: 'Suspension & Chassis',
        parts: ['KW V4 Clubsport 3-way adjustable coilovers', 'Elephant Racing monoball spherical control arm bushings', 'Corner-balanced at 50.1% cross weight']
      },
      {
        category: 'Braking & Wheels',
        parts: ['Surface Transforms Carbon Ceramic Rotors', 'Pagid RSC1 track pads', 'Bespoke BBS FI-R forged lightweight wheels in Satin Bronze']
      }
    ],
    lapTimes: [
      { track: 'Laguna Seca', time: '1:33.42', condition: 'Dry / 64°F / Cup 2R' },
      { track: 'Buttonwillow CW13', time: '1:48.15', condition: 'Dry / 58°F / Cup 2R' },
      { track: 'Willow Springs (Big Willow)', time: '1:25.90', condition: 'Dry / 72°F / Cup 2' }
    ],
    dynoCurve: [
      { rpm: 3000, hp: 165, torque: 380 },
      { rpm: 4500, hp: 275, torque: 430 },
      { rpm: 6000, hp: 385, torque: 460 },
      { rpm: 7500, hp: 470, torque: 470 },
      { rpm: 8400, hp: 502, torque: 450 },
      { rpm: 9000, hp: 495, torque: 410 }
    ]
  },
  {
    id: 'r34-gtr',
    name: 'Nissan Skyline GT-R V-Spec II (R34)',
    year: 2001,
    badge: 'Mountain Canyon',
    category: 'Mountain Canyon',
    engine: '2.6L Twin-Turbo Inline-6 (RB26DETT N1 Block)',
    powerHp: 585,
    torqueNm: 620,
    weightKg: 1540,
    zeroToSixtySec: 3.4,
    topSpeedMph: 191,
    maxRpm: 8400,
    soundProfile: 'inline6Turbo',
    image: '/src/assets/images/hero_automotive_brand_1790522988318.jpg',
    story: 'Preserved in factory Bayside Blue, rebuilt from the bare block with HKS Step 2 2.8L stroker kit and twin Garrett G25-550 turbos. Built as the ultimate dawn canyon weapon with electronic ATTESA-ETS Pro AWD traction.',
    modifications: [
      {
        category: 'Engine & Turbo',
        parts: ['HKS 2.8L forged stroker crank & pistons', 'Twin Garrett G25-550 ceramic ball-bearing turbos', 'Haltech Elite 2500 ECU with custom canyon boost maps']
      },
      {
        category: 'Drivetrain & Damping',
        parts: ['Nismo Super Coppermix twin-plate clutch', 'Öhlins Road & Track DFV custom valved coilovers', 'Nismo reinforced subframe links']
      },
      {
        category: 'Aero & Wheels',
        parts: ['Rays Volk Racing TE37 Saga S-Plus 18x10.5', 'Yokohama Advan Neova AD09 275/35R18', 'Carbon front lip with integrated cooling ducts']
      }
    ],
    lapTimes: [
      { track: 'Angeles Crest Sector 2 (Closed Course)', time: '3:14.20', condition: 'Dry / Crisp 50°F' },
      { track: 'Willow Springs (Streets of Willow)', time: '1:19.80', condition: 'Dry / 68°F' }
    ],
    dynoCurve: [
      { rpm: 3000, hp: 180, torque: 420 },
      { rpm: 4200, hp: 320, torque: 560 },
      { rpm: 5500, hp: 460, torque: 620 },
      { rpm: 7000, hp: 575, torque: 590 },
      { rpm: 8200, hp: 585, torque: 510 }
    ]
  },
  {
    id: 'm3-csl',
    name: 'BMW M3 CSL (E46)',
    year: 2004,
    badge: 'Track Weapon',
    category: 'Track Weapon',
    engine: '3.2L Naturally Aspirated S54 Inline-6',
    powerHp: 360,
    torqueNm: 370,
    weightKg: 1385,
    zeroToSixtySec: 4.6,
    topSpeedMph: 178,
    maxRpm: 8200,
    soundProfile: 'inline6Turbo',
    image: '/src/assets/images/creator_media_film_1790523031695.jpg',
    story: 'The mechanical purist pinnacle. Retains the factory carbon intake plenum that makes one of the most intoxicating induction sounds in automotive history. Converted to a factory 6-speed manual with Karbonius dry-carbon roof.',
    modifications: [
      {
        category: 'Transmission',
        parts: ['Factory manual 6-speed gearbox conversion', 'Autosolutions ultra-precision short shift kit', 'Lightweight single-mass flywheel']
      },
      {
        category: 'Chassis & Brakes',
        parts: ['AP Racing Radi-CAL competition brake package', 'Intrax 4-Way ARC coilovers with remote reservoirs', 'Schirmer front uniball camber plates']
      }
    ],
    lapTimes: [
      { track: 'Laguna Seca', time: '1:37.20', condition: 'Dry / 60°F / Michelin Cup 2' },
      { track: 'Buttonwillow CW13', time: '1:53.40', condition: 'Dry / 65°F' }
    ],
    dynoCurve: [
      { rpm: 3000, hp: 130, torque: 290 },
      { rpm: 4500, hp: 210, torque: 340 },
      { rpm: 6000, hp: 295, torque: 370 },
      { rpm: 7900, hp: 360, torque: 330 }
    ]
  },
  {
    id: 'taycan-ct',
    name: 'Porsche Taycan Turbo Cross Turismo',
    year: 2024,
    badge: 'Daily Icon',
    category: 'Daily Icon',
    engine: 'Dual Permanent-Magnet Synchronous Electric Motors',
    powerHp: 670,
    torqueNm: 850,
    weightKg: 2320,
    zeroToSixtySec: 2.9,
    topSpeedMph: 155,
    maxRpm: 16000,
    soundProfile: 'v8',
    image: '/src/assets/images/event_trackday_rally_1790523016284.jpg',
    story: 'The studio production and scouting mule. 800V architecture for 270kW rapid charging across remote mountain passes, carrying camera gimbals, extra track slicks, and four full-size bags without breaking a sweat.',
    modifications: [
      {
        category: 'Production Equipment',
        parts: ['Speed Mount cinema crane receiver on reinforced roof rails', 'Dual 1000W AC pure sine inverter in rear boot', 'Auxiliary RED Komodo camera telemetry link']
      },
      {
        category: 'Chassis',
        parts: ['Porsche Dynamic Chassis Control Sport (PDCC Sport)', 'Rear-axle steering with Power Steering Plus', 'Gravel mode lift suspension']
      }
    ],
    lapTimes: [
      { track: 'Pikes Peak Sector 1 Test', time: '2:44.10', condition: 'Dry / Cold 42°F' }
    ],
    dynoCurve: [
      { rpm: 1000, hp: 420, torque: 850 },
      { rpm: 5000, hp: 670, torque: 850 },
      { rpm: 12000, hp: 650, torque: 580 }
    ]
  }
];

export const INITIAL_MEDIA: MediaEpisode[] = [
  {
    id: 'ep-01',
    title: 'The 9,000 RPM Symphony: Dawn Run Across Stelvio Pass',
    series: 'Apex Chronicles',
    duration: '22:45',
    views: '482K',
    publishDate: 'September 2026',
    featuredCar: 'Porsche 911 GT3 Touring',
    cameraRig: 'RED Komodo 6K + Ronin 2 Gyro Crane on Chase Vehicle',
    summary: 'At 04:30 AM before the tour buses awaken, we attacked the 48 hairpin turns of Stelvio Pass with zero music, only pure flat-six mechanical induction audio.',
    image: '/src/assets/images/hero_automotive_brand_1790522988318.jpg',
    highlights: [
      'Uncut 8-minute onboard sound capture using binaural boundary microphones',
      'Telemetry overlay breaking down apex speeds and tire slip angles',
      'Complete suspension travel camera analyzing curbing compression'
    ]
  },
  {
    id: 'ep-02',
    title: 'Building the Unbreakable R34: 1,000 Track Miles Reliability Test',
    series: 'The Build',
    duration: '34:10',
    views: '615K',
    publishDate: 'August 2026',
    featuredCar: 'Nissan Skyline GT-R V-Spec II',
    cameraRig: 'Sony FX6 + Cooke Anamorphic Primes',
    summary: 'Many modified Skylines sit in climate-controlled garages. We subjected our 585-HP RB26 build to 1,000 continuous track and mountain miles in triple-digit heat.',
    image: '/src/assets/images/creator_media_film_1790523031695.jpg',
    highlights: [
      'Teardown of oil analysis samples showing bearing wear levels',
      'Intercooler intake air temperature deltas on 20-minute hot stints',
      'The engineering decisions behind choosing twin-turbos over a single big turbo'
    ]
  },
  {
    id: 'ep-03',
    title: 'Laguna Seca Turn 6 Telemetry: Finding 1.8 Seconds',
    series: 'Track Battles',
    duration: '18:30',
    views: '340K',
    publishDate: 'July 2026',
    featuredCar: 'Porsche 911 GT3 Touring',
    cameraRig: 'AiM SmartyCam 3 + Dual Chase Drones',
    summary: 'Turn 6 at Laguna Seca requires absolute blind faith and precise damper rebound. Here is the step-by-step telemetry breakdown that shaved 1.8 seconds off our personal best.',
    image: '/src/assets/images/showcase_garage_gt3_1790523002119.jpg',
    highlights: [
      'Brake pressure trace comparison between progressive and trail braking',
      'How 2 clicks of front low-speed compression eliminated high-speed understeer',
      'Full cockpit footwork pedal camera'
    ]
  },
  {
    id: 'ep-04',
    title: 'Angeles Crest Dawn Patrol: Why 5:00 AM Canyons Clear the Mind',
    series: 'Canyon Patrol',
    duration: '16:15',
    views: '290K',
    publishDate: 'June 2026',
    featuredCar: 'BMW M3 CSL (E46)',
    cameraRig: 'Leica SL2-S + Arri Ultra Primes',
    summary: 'A quiet documentary reflection on car culture, mindfulness, and the emotional connection between a human being, three pedals, and an empty winding mountain road.',
    image: '/src/assets/images/event_trackday_rally_1790523016284.jpg',
    highlights: [
      'The acoustics of the carbon CSL airbox reverberating through tunnels',
      'Interviews with local dawn patrol regulars from the morning meetup',
      'Tire temperature thermal imaging breakdown after 40 miles of twisties'
    ]
  }
];

export const INITIAL_EVENTS: AutomotiveEvent[] = [
  {
    id: 'ev-01',
    title: 'Revhouse Dawn Patrol: Angeles Crest Sunrise Run',
    type: 'Canyon Dawn Patrol',
    date: 'Saturday, October 17, 2026',
    location: 'La Cañada Flintridge to Newcomb’s Ranch',
    entryFee: 45,
    spotsTotal: 40,
    spotsRemaining: 8,
    description: 'A curated 5:30 AM mountain sprint for disciplined drivers. Strict lead-follow etiquette, zero reckless behavior, followed by artisan espresso and paddock conversations at the high summit.',
    schedule: [
      { time: '05:15 AM', activity: 'Drivers Briefing & Radio Frequency Assignment' },
      { time: '05:35 AM', activity: 'First Group Wheels Rolling (Pace & Safety Car)' },
      { time: '07:00 AM', activity: 'Summit Arrival, Coffee, Bonnet-Up Tech Talks' }
    ],
    rules: [
      'DOT-compliant tires with minimum 4/32 tread remaining',
      'Working two-way VHF radio required',
      'Zero crossing the double-yellow line under any condition'
    ]
  },
  {
    id: 'ev-02',
    title: 'Revhouse Invitational: WeatherTech Raceway Laguna Seca',
    type: 'Track Invitational',
    date: 'Friday, November 6, 2026',
    location: 'Monterey, California',
    trackName: 'Laguna Seca (11 Turns / 2.238 Miles)',
    entryFee: 595,
    spotsTotal: 30,
    spotsRemaining: 4,
    description: 'An exclusive low-car-count private track day with open pit lane. Maximum 30 cars total, ensuring virtually zero traffic and clean hot laps all day, accompanied by professional telemetry coaching.',
    schedule: [
      { time: '07:30 AM', activity: 'Registration & Mechanical Sound Tech Inspection' },
      { time: '08:30 AM', activity: 'Driver Meeting & Line-Choice Chalk Talk' },
      { time: '09:00 AM', activity: 'Open Pit Lane Hot Sessions Begin' },
      { time: '12:30 PM', activity: 'Catered Paddock Lunch & Data Debrief' },
      { time: '04:30 PM', activity: 'Checkered Flag & Sunset Paddock Drinks' }
    ],
    rules: [
      'SA2020 or newer Snell certified helmet required',
      'Fresh brake fluid flushed within past 90 days',
      'Strict 92dB sound limit strictly enforced by track officials'
    ]
  },
  {
    id: 'ev-03',
    title: 'Twilight Underground: Paddock & Garage Gathering',
    type: 'Paddock Pop-Up',
    date: 'Thursday, November 19, 2026',
    location: 'Revhouse Workshop, Costa Mesa',
    entryFee: 0,
    spotsTotal: 150,
    spotsRemaining: 34,
    description: 'Free community social for all automotive enthusiasts. Live chassis dyno demonstrations, prototype merch showcase, music, and tacos under the evening shop lights.',
    schedule: [
      { time: '06:00 PM', activity: 'Roll-in & Paddock Parking' },
      { time: '07:30 PM', activity: 'Live Dyno Pull: 9,000 RPM GT3 Sound Demo' },
      { time: '09:30 PM', activity: 'Evening Wrap-Up' }
    ],
    rules: [
      'Respect the neighborhood: strictly no burnouts or rev-bombing',
      'All vehicle makes and build styles welcome'
    ]
  }
];

export const INITIAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-01',
    title: 'The Mathematics of Corner Balancing: Static Cross-Weight vs Dynamic Turn-In',
    subtitle: 'Why a 1.2% diagonal discrepancy ruins your apex commitment on corner entry',
    category: 'Engineering & Setup',
    readTime: '7 min read',
    publishDate: 'September 2026',
    author: 'Marcus Vance',
    excerpt: 'Most drivers obsess over spring rates and horsepower, yet neglect the invisible force of diagonal weight distribution. Here is how we balance the scales with driver ballast.',
    content: [
      'When your car turns left, inertial load transfers toward the right side tires. But if your static cross-weight (Left Front + Right Rear divided by Total Weight) is off by even 50 pounds, the chassis will brake with asymmetrical stability.',
      'During our setup of the 992 GT3 Touring on Intercomp digital scales, we discovered that dialing in 50.1% cross-weight with a 175-lb driver ballast in the bucket seat completely eliminated a lingering high-speed yaw instability on braking downhill into Turn 2.',
      'The lesson: suspension tuning is not about brute stiffness. It is about predictable load transfer.'
    ],
    keyTakeaways: [
      'Always scale the vehicle with driver ballast and half-tank fuel load',
      'Disconnect anti-roll bar end links prior to measuring spring perch heights to eliminate pre-load tension',
      'A true 50.0% cross-weight provides identical turn-in behavior in both clockwise and counter-clockwise circuits'
    ]
  },
  {
    id: 'art-02',
    title: 'The Unfiltered Economics of a 12-Event Track Season',
    subtitle: 'Consumables, oil analysis, brake pad taper, and tire life data from 2025–2026',
    category: 'Ownership Economics',
    readTime: '9 min read',
    publishDate: 'August 2026',
    author: 'Marcus Vance',
    excerpt: 'We tracked every dollar spent running our 911 GT3 and R34 across 12 track weekends. Here is the unvarnished spreadsheet breakdown.',
    content: [
      'Automotive media rarely talks about the true ongoing running costs of high-performance driving. The purchase price of a track car is merely the entry ticket.',
      'Over 12 events, our GT3 consumed 4 sets of Michelin Pilot Sport Cup 2 tires ($8,400), 2 sets of front brake pads ($1,650), 6 oil flushes using Motul 300V ($1,200), and $4,200 in 100-octane race fuel and entry fees.',
      'By sharing these numbers transparently, we want to help enthusiasts budget realistically before embarking on their own circuit journeys.'
    ],
    keyTakeaways: [
      'Tires represent approximately 48% of total seasonal operating expense',
      'Flushing brake fluid every 3 events prevents vapor lock and saves caliper seals',
      'Detailed maintenance logs drastically preserve collector resale value'
    ]
  },
  {
    id: 'art-03',
    title: 'Analog Retention: Why Physical Shifters & Mechanical Gauges Matter More Than Ever',
    subtitle: 'In an era of touchscreens and haptic paddles, tactile mechanical feedback is the soul of driving',
    category: 'Car Culture',
    readTime: '5 min read',
    publishDate: 'July 2026',
    author: 'Marcus Vance',
    excerpt: 'Modern cars are undeniably faster around a track. But speed without physical connection is merely a digital simulation. Here is why we fight for mechanical purity.',
    content: [
      'There is an intimate neurological dialogue that occurs when your left foot presses a heavy clutch pedal, your palm senses the dog-teeth engaging the next gear through a direct metal linkage, and a needle sweeps across an analog dial.',
      'We do not drive purely to achieve the absolute lowest lap time; we drive to experience presence. A car that demands your complete physical and sensory participation is an antidote to the distracted modern world.'
    ],
    keyTakeaways: [
      'Tactile feedback directly increases driver confidence at the limit',
      'Mechanical simplicity allows roadside troubleshooting without proprietary diagnostic software',
      'The emotional connection to a machine comes from reciprocal effort'
    ]
  }
];

export const INITIAL_COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'post-01',
    author: 'Julian Thorne',
    handle: '@thorne_motorsport',
    avatarSeed: 'julian',
    carName: '1998 Lotus Elise S1 (Type 49)',
    badge: 'Track Master',
    timestamp: '2 hours ago',
    content: 'Just installed the Nitron NTR 40mm 3-way dampers and took Marcus’ advice from the corner balancing article. Scaled it at 49.9% cross weight with my ballast. Took 1.4 seconds off my personal best at Sonoma this morning!',
    likes: 38,
    repliesCount: 6,
    tags: ['Lotus', 'SuspensionSetup', 'TrackDay']
  },
  {
    id: 'post-02',
    author: 'Elena Rostova',
    handle: '@elena_canyon',
    avatarSeed: 'elena',
    carName: '2022 Alpine A110S',
    badge: 'Driver',
    timestamp: '5 hours ago',
    content: 'Who else is joining the Angeles Crest Dawn Patrol next Saturday? Fresh Michelin Cup 2s mounted yesterday. Excited to meet everyone at 5:15 AM sharp!',
    likes: 54,
    repliesCount: 14,
    tags: ['DawnPatrol', 'AngelesCrest', 'Alpine']
  },
  {
    id: 'post-03',
    author: 'David Chen',
    handle: '@chen_builds',
    avatarSeed: 'david',
    carName: '1993 Mazda RX-7 FD3S (Twin Sequential)',
    badge: 'Builder',
    timestamp: '1 day ago',
    content: 'Completed the custom dual-pass oil cooler setup inspired by the Revhouse R34 cooling breakdown. Oil temps stayed pinned at 195°F during a 30-minute mountain ascent in 95°F ambient heat.',
    likes: 82,
    repliesCount: 19,
    tags: ['Rotary', 'RX7', 'CoolingMod']
  }
];

export const INITIAL_MERCH: MerchItem[] = [
  {
    id: 'merch-01',
    name: 'Revhouse Atelier Driving Gloves',
    price: 135,
    category: 'Gear',
    description: 'Perforated Ethiopian lambskin with open knuckles, brass snap fastener, and smartphone-compatible index fingertip. Hand-stitched in Milan.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    colorway: 'Cognac Brown / Raw Stitch'
  },
  {
    id: 'merch-02',
    name: 'The 9000 RPM Heavyweight Tee',
    price: 52,
    category: 'Apparel',
    description: '300 GSM combed cotton vintage wash tee featuring technical blueprint schematic of the 4.0L flat-six engine and 9,000 RPM tachometer graphic.',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    inStock: true,
    colorway: 'Asphalt Charcoal'
  },
  {
    id: 'merch-03',
    name: 'Billet Paddock Tire Pressure Gauge',
    price: 88,
    category: 'Gear',
    description: 'Solid CNC-machined 6061 billet aluminum gauge with rubber shock casing, braided stainless steel hose, dual bleeder valves, and 0-60 PSI glow face.',
    inStock: true,
    colorway: 'Hard Anodized Gunmetal'
  },
  {
    id: 'merch-04',
    name: 'Waxed Canvas Mechanics Tool Roll',
    price: 95,
    category: 'Gear',
    description: '18oz water-resistant waxed canvas with 12 wrench slots, zipped socket compartment, and bridle leather closure straps for canyon emergency kits.',
    inStock: true,
    colorway: 'Olive Green / Saddle Leather'
  }
];

export const INITIAL_PARTNERS: BrandPartner[] = [
  {
    id: 'michelin',
    name: 'Michelin Motorsport',
    category: 'Tires & Rubber',
    collaboration: 'Official tire partner for all circuit telemetry and canyon durability testing. Zero-compromise data sharing.',
    status: 'Active Technical Partner',
    deliverablesCount: 14
  },
  {
    id: 'brembo',
    name: 'Brembo Racing',
    category: 'Braking Systems',
    collaboration: 'Supplying carbon-ceramic and competition endurance calipers for the garage fleet and private trackdays.',
    status: 'Active Technical Partner',
    deliverablesCount: 8
  },
  {
    id: 'motul',
    name: 'Motul 300V Fluids',
    category: 'Lubricants & Fluids',
    collaboration: 'Laboratory oil analysis samples published openly to the community after every 500 track miles.',
    status: 'Long-Term Sponsor',
    deliverablesCount: 12
  },
  {
    id: 'akrapovic',
    name: 'Akrapovič Exhaust System',
    category: 'Performance Exhaust',
    collaboration: 'Titanium precision acoustic engineering and dyno testing for the GT3 Touring development series.',
    status: 'Active Technical Partner',
    deliverablesCount: 6
  }
];

export const FLYWHEEL_NODES: FlywheelNode[] = [
  {
    id: 'you',
    label: 'YOU',
    level: 1,
    parentIds: [],
    childIds: ['personal-brand'],
    category: 'identity',
    summary: 'The human origin: Your personal voice, mechanical background, track discipline, and authentic perspective that cannot be replicated.',
    tactics: [
      'Document the real struggles, mechanical failures, and genuine build progress',
      'Anchor every story in your authentic driving journey and hands-on wrenching',
      'Show up with transparency: no rented cars, no fake lifestyles, no staged drama'
    ],
    kpis: [
      { label: 'Authenticity Score', value: '100%' },
      { label: 'Hours Behind Wheel', value: '1,240+' }
    ],
    targetSection: 'overview'
  },
  {
    id: 'personal-brand',
    label: 'PERSONAL BRAND',
    level: 2,
    parentIds: ['you'],
    childIds: ['love-for-cars'],
    category: 'identity',
    summary: 'The identifiable aesthetic, driving ethos, and editorial standards that separate you from generic car influencers.',
    tactics: [
      'Establish a cohesive visual language: cinematic color grading, raw mechanical sound, restrained design',
      'Define clear non-negotiables (e.g. zero paid praise, transparent telemetry)',
      'Create signature formats (Dawn Patrol runs, Telemetry Deep Dives, Wrenching Diaries)'
    ],
    kpis: [
      { label: 'Brand Recognition', value: '94%' },
      { label: 'Retention Rate', value: '78%' }
    ],
    targetSection: 'overview'
  },
  {
    id: 'love-for-cars',
    label: 'LOVE FOR CARS',
    level: 3,
    parentIds: ['personal-brand'],
    childIds: ['cars', 'media', 'events'],
    category: 'identity',
    summary: 'The genuine passion that fuels everything: It is not about vanity or flexing, but a deep devotion to automotive engineering and the thrill of the drive.',
    tactics: [
      'Focus on the driving experience and engineering nuances over sticker prices',
      'Celebrate all car cultures: track weapons, classic restomods, canyon carving icons',
      'Transmit the visceral sensory feelings: tire scrub, rev sound, gearshift clicks'
    ],
    kpis: [
      { label: 'Passion Index', value: 'Infinite' },
      { label: 'Active Projects', value: '4 Builds' }
    ],
    targetSection: 'cars'
  },
  {
    id: 'cars',
    label: 'CARS',
    level: 4,
    parentIds: ['love-for-cars'],
    childIds: ['website'],
    category: 'pillars',
    summary: 'The physical fleet & build projects: Each vehicle represents an engineering thesis tested on track and canyon roads.',
    tactics: [
      'Maintain detailed public modification journals and real lap times',
      'Subject every modification to rigorous dyno and telemetry validation',
      'Drive them hard: cars are built to be driven, not parked as static museum pieces'
    ],
    kpis: [
      { label: 'Fleet Power', value: '2,117 HP' },
      { label: 'Track Laps Logged', value: '3,800+' }
    ],
    targetSection: 'cars'
  },
  {
    id: 'media',
    label: 'MEDIA',
    level: 4,
    parentIds: ['love-for-cars'],
    childIds: ['website'],
    category: 'pillars',
    summary: 'Cinematic visual storytelling: High-frame-rate tracking shots, authentic binaural engine audio, and masterclass production values.',
    tactics: [
      'Prioritize direct mechanical exhaust and intake sound over loud background music',
      'Use professional chase camera rigs, gyro gimbals, and telemetry data overlays',
      'Deliver documentary-grade pacing that respects the intelligence of real enthusiasts'
    ],
    kpis: [
      { label: 'Total Views', value: '14.2M' },
      { label: 'Avg Watch Time', value: '11:42 min' }
    ],
    targetSection: 'media'
  },
  {
    id: 'events',
    label: 'EVENTS',
    level: 4,
    parentIds: ['love-for-cars'],
    childIds: ['website'],
    category: 'pillars',
    summary: 'In-person gatherings that bridge digital screen to physical asphalt: Dawn canyon drives, track invitationals, and workshop meets.',
    tactics: [
      'Host strictly curated low-car-count track days with maximum open track time',
      'Enforce strict driver discipline and safety standards',
      'Create intimate paddock moments where creators, drivers, and engineers interact'
    ],
    kpis: [
      { label: 'Events Hosted', value: '24' },
      { label: 'Driver Attendance', value: '98% Cap' }
    ],
    targetSection: 'events'
  },
  {
    id: 'website',
    label: 'WEBSITE',
    level: 5,
    parentIds: ['cars', 'media', 'events'],
    childIds: ['content', 'community'],
    category: 'nexus',
    summary: 'The central digital sovereign platform: You own the domain, the user data, the content archive, and direct relationships independent of social media algorithms.',
    tactics: [
      'Host all garage specs, full-resolution films, and event ticket booking in one clean hub',
      'Zero algorithmic dependency: direct subscriber connection via newsletter and club',
      'Lightning-fast performance, minimalist typography, and ad-free experience'
    ],
    kpis: [
      { label: 'Monthly Visitors', value: '185K' },
      { label: 'Direct Traffic', value: '62%' }
    ],
    targetSection: 'overview'
  },
  {
    id: 'content',
    label: 'CONTENT',
    level: 6,
    parentIds: ['website'],
    childIds: ['audience'],
    category: 'distribution',
    summary: 'Deep-dive technical journalism, setup guides, and ownership breakdown articles that educate and inspire.',
    tactics: [
      'Publish detailed technical data: corner balancing formulas, maintenance costs, telemetry charts',
      'Address the unanswered questions in the automotive space with complete honesty',
      'Build an evergreen archive that remains valuable for years, not days'
    ],
    kpis: [
      { label: 'Articles Published', value: '48' },
      { label: 'Avg Read Time', value: '6.8 min' }
    ],
    targetSection: 'content'
  },
  {
    id: 'community',
    label: 'COMMUNITY',
    level: 6,
    parentIds: ['website'],
    childIds: ['audience'],
    category: 'distribution',
    summary: 'The Paddock Club: A high-signal space for passionate drivers to showcase their builds, ask setup advice, and connect.',
    tactics: [
      'Give members a platform to showcase their own builds and track lap times',
      'Facilitate peer-to-peer technical help and regional convoy meetups',
      'Reward helpful contributors with driver badges and VIP event access'
    ],
    kpis: [
      { label: 'Active Drivers', value: '18.4K' },
      { label: 'Weekly Posts', value: '420+' }
    ],
    targetSection: 'community'
  },
  {
    id: 'audience',
    label: 'AUDIENCE',
    level: 7,
    parentIds: ['content', 'community'],
    childIds: ['trust'],
    category: 'distribution',
    summary: 'A dedicated, highly engaged following of drivers, builders, collectors, and automotive purists worldwide.',
    tactics: [
      'Cultivate high-intent enthusiasts rather than chasing empty clickbait virality',
      'Engage directly in comments, forums, and at morning meets',
      'Segment audience by interests: track drivers, canyon carvers, DIY mechanics'
    ],
    kpis: [
      { label: 'Cross-Platform Reach', value: '1.4M' },
      { label: 'Engagement Rate', value: '8.4%' }
    ],
    targetSection: 'trust'
  },
  {
    id: 'trust',
    label: 'TRUST',
    level: 8,
    parentIds: ['audience'],
    childIds: ['brand'],
    category: 'distribution',
    summary: 'The most sacred asset in the creator economy: Complete editorial integrity, zero paid praise, and real verifiable track proof.',
    tactics: [
      'Refuse paid promotional reviews that compromise objective evaluation',
      'Publish telemetry data and fluid test results openly without manufacturer redaction',
      'Own mistakes openly and document mechanical breakdowns without sugarcoating'
    ],
    kpis: [
      { label: 'Trust Index', value: '99.2%' },
      { label: 'Unsponsored Content', value: '100% Editorial' }
    ],
    targetSection: 'trust'
  },
  {
    id: 'brand',
    label: 'BRAND',
    level: 9,
    parentIds: ['trust'],
    childIds: ['business'],
    category: 'monetization',
    summary: 'Strategic technical partnerships with world-class engineering brands (Michelin, Brembo, Motul) that enhance the builds.',
    tactics: [
      'Partner exclusively with brands whose parts you would pay your own money to install',
      'Create co-engineered technical testing programs rather than simple badge placement',
      'Provide tier-one production assets and quantified telemetry reports to partners'
    ],
    kpis: [
      { label: 'Technical Partners', value: '4 World-Class' },
      { label: 'Avg Partnership Term', value: '2.5 Years' }
    ],
    targetSection: 'business'
  },
  {
    id: 'business',
    label: 'BUSINESS',
    level: 10,
    parentIds: ['brand'],
    childIds: [],
    category: 'monetization',
    summary: 'The sustainable flywheel monetization: Diversified revenue across curated merch, ticketed trackdays, technical partnerships, and digital products.',
    tactics: [
      'Reinvest commercial earnings directly back into better fleet builds and production equipment',
      'Offer bespoke, heirloom-quality driving apparel and specialized garage tools',
      'Monetize access and high-value experiences rather than spamming intrusive ads'
    ],
    kpis: [
      { label: 'Annual Ecosystem GMV', value: '$480K+' },
      { label: 'Reinvestment Rate', value: '65% to Fleet & Media' }
    ],
    targetSection: 'business'
  }
];
