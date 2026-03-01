export interface Ruta {
    id: string;
    title: string;
    slug: string;
    price: string;
    distance: string;
    elevation: string;
    time: string;
    difficulty: "Fácil" | "Moderada" | "Difícil" | "Extrema";
    stars: number;
    creator: string;
    creatorHandle: string;
    description: string;
    mapImg: string;
    gallery: string[];
    center: [number, number];
    zoom: number;
    coordinates: [number, number][];
}

export const RUTAS: Ruta[] = [
    {
        id: "1",
        title: "Retiro Madrid Running Nocturno",
        slug: "retiro-madrid-running-nocturno",
        price: "4,99 €",
        distance: "10,0 km",
        elevation: "45 m+",
        time: "0h 55min",
        difficulty: "Fácil",
        stars: 4,
        creator: "City Runner Madrid",
        creatorHandle: "@cityrun_md",
        description: "Una experiencia inmersiva corriendo bajo la luz de las farolas por el emblemático Parque del Retiro de Madrid. Perfecto para entrenamientos rápidos, liberar estrés al acabar el día o conocer el pulmón de la capital desde tu cinta de correr inteligente.",
        mapImg: "https://c8.alamy.com/comp/D29Y31/madrid-park-retiro-night-people-jogging-running-dusk-twilight-spain-D29Y31.jpg",
        gallery: [
            "https://c8.alamy.com/comp/D29Y31/madrid-park-retiro-night-people-jogging-running-dusk-twilight-spain-D29Y31.jpg",
            "https://thumbs.dreamstime.com/b/retiro-madrid-spain-night-cityscape-lights-61126190.jpg",
            "https://thumbs.dreamstime.com/b/tree-lined-pathway-retiro-park-madrid-illuminated-street-lamps-wide-avenue-flanked-tall-trees-autumn-foliage-426863542.jpg",
            "https://thumbs.dreamstime.com/b/retiro-park-night-madrid-lake-parque-del-spain-scene-62370742.jpg"
        ],
        center: [40.416, -3.682],
        zoom: 14,
        coordinates: [
            [40.419, -3.688],
            [40.415, -3.682],
            [40.411, -3.682],
            [40.413, -3.676],
            [40.417, -3.675],
            [40.419, -3.688]
        ]
    },
    {
        id: "2",
        title: "Ruta al Teide por el sur",
        slug: "ruta-al-teide-por-el-sur",
        price: "9,99 €",
        distance: "18,4 km",
        elevation: "1.200 m+",
        time: "6h 30min",
        difficulty: "Moderada",
        stars: 5,
        creator: "Teide Explorer",
        creatorHandle: "@teide_explorer",
        description: "Una desafiante ruta que asciende al pico más alto de España desde el lado sur. Paisajes volcánicos increíbles que te harán sentir en otro planeta. Preparación física y adaptación térmica virtual obligatoria. Sincroniza al milímetro con tu rodillo interactivo.",
        mapImg: "https://randomtrip.net/wp-content/uploads/2023/03/X_el_teide_parque_nacional_1_portada.jpg",
        gallery: [
            "https://randomtrip.net/wp-content/uploads/2023/03/X_el_teide_parque_nacional_1_portada.jpg",
            "https://www.novo-monde.com/app/uploads/2019/03/teide-lever-de-soleil.jpg",
            "https://thumbs.dreamstime.com/b/teide-woman-hiking-trail-to-summit-riscos-de-la-fortaleza-scenic-view-volcano-pico-del-mount-national-park-tenerife-canary-252728794.jpg",
            "https://randomtrip.net/wp-content/uploads/2023/03/X_el_teide_parque_nacional_2.jpg"
        ],
        center: [28.27, -16.64],
        zoom: 11,
        coordinates: [
            [28.22, -16.63],
            [28.23, -16.62],
            [28.24, -16.64],
            [28.26, -16.64],
            [28.265, -16.645],
            [28.27, -16.64]
        ]
    },
    {
        id: "3",
        title: "Lagos de Covadonga Circular",
        slug: "lagos-de-covadonga-circular",
        price: "12,99 €",
        distance: "12,7 km",
        elevation: "420 m+",
        time: "3h 15min",
        difficulty: "Moderada",
        stars: 5,
        creator: "Marcos Run",
        creatorHandle: "@marcos_run_es",
        description: "Ruta circular por los Lagos de Covadonga, un entorno de cuento dentro del paraíso natural de Asturias. Durante el recorrido podemos observar toda la esencia de la alta montaña cantábrica: vacas pastando, lagos glaciares cristalinos (Enol y Ercina) y pendientes pronunciadas perfectas para escaladores.",
        mapImg: "https://www.senditur.com/multimedia/rutas/277/imagenes/Ruta-circular-de-los-Lagos-de-Covadonga.jpg",
        gallery: [
            "https://www.senditur.com/multimedia/rutas/277/imagenes/Ruta-circular-de-los-Lagos-de-Covadonga.jpg",
            "https://www.senditur.com/multimedia/uploads/images/Rutas/Espa%C3%B1a/Asturias/Senderismo/Ruta%20circular%20de%20los%20Lagos%20de%20Covadonga/Ruta-circular-por-los-lagos-de-Covadonga-2.jpg",
            "https://cyclingdestination.cc/wp-content/uploads/2025/03/Scherm%C2%ADafbeelding-2025-03-02-om-18.51.52.jpg",
            "https://www.senditur.com/multimedia/uploads/images/Rutas/Espa%C3%B1a/Asturias/Senderismo/Ruta%20circular%20de%20los%20Lagos%20de%20Covadonga/Ruta-circular-por-los-lagos-de-Covadonga-1.jpg"
        ],
        center: [43.273, -4.980],
        zoom: 13,
        coordinates: [
            [43.273, -4.980],
            [43.270, -4.978],
            [43.265, -4.975],
            [43.268, -4.965],
            [43.272, -4.962],
            [43.275, -4.960]
        ]
    },
    {
        id: "4",
        title: "Ascenso al Mont Blanc",
        slug: "ascenso-al-mont-blanc",
        price: "19,99 €",
        distance: "12,1 km",
        elevation: "2.400 m+",
        time: "12h 00min",
        difficulty: "Extrema",
        stars: 5,
        creator: "Alpinist Pro",
        creatorHandle: "@alpinist_pro",
        description: "La joya de la corona del alpinismo europeo. Una simulación hiperrealista del dramático ascenso al Mont Blanc, capturada en condiciones climáticas perfectas. Atraviesa inmensos glaciares grietados, aristas de nieve expuestas de vértigo y el famoso paso de la muerte del Grand Couloir.",
        mapImg: "https://www.montblanc-experience.com/iconographie/c7/PA1_montblanc-ascent.jpg",
        gallery: [
            "https://www.montblanc-experience.com/iconographie/c7/PA1_montblanc-ascent.jpg",
            "https://s3.amazonaws.com/www.explorersweb.com/wp-content/uploads/2021/08/23231435/Mont-Blanc-from-Italy-c-V-Luca-Shutterstock-e1628215861985.jpg",
            "https://adventurebase--live.s3.eu-west-2.amazonaws.com/uploads/2020/09/DJI_0081-scaled.jpg",
            "https://www.thebestviewpoints.com/wp-content/uploads/2023/07/DSC_5038-HDR-1.jpg"
        ],
        center: [45.83, 6.86],
        zoom: 12,
        coordinates: [
            [45.81, 6.84],
            [45.815, 6.845],
            [45.82, 6.85],
            [45.825, 6.855],
            [45.83, 6.86]
        ]
    },
    {
        id: "5",
        title: "Picos de Europa Circular",
        slug: "picos-de-europa-circular",
        price: "14,50 €",
        distance: "24,0 km",
        elevation: "1.100 m+",
        time: "7h 45min",
        difficulty: "Moderada",
        stars: 5,
        creator: "Cantabria Trails",
        creatorHandle: "@cantabria_trails",
        description: "Espectacular ruta circular alrededor del macizo central de los Picos de Europa. Incluye imponentes paredes verticales de caliza, niebla mística rebalando por los valles y pasos técnicos divertidos asegurados virtualmente.",
        mapImg: "https://57hours.com/wp-content/uploads/2024/11/hiking-the-picos-de-europa-northern-spain-finest-trails.jpg",
        gallery: [
            "https://57hours.com/wp-content/uploads/2024/11/hiking-the-picos-de-europa-northern-spain-finest-trails.jpg",
            "https://www.senditur.com/multimedia/uploads/images/Rutas/Espa%C3%B1a/Asturias/Senderismo/Ruta%20circular%20de%20los%20Lagos%20de%20Covadonga/Ruta-circular-por-los-lagos-de-Covadonga-1.jpg",
            "https://cyclingdestination.cc/wp-content/uploads/2025/03/Scherm%C2%ADafbeelding-2025-03-02-om-18.51.52.jpg",
            "https://www.thebestviewpoints.com/wp-content/uploads/2023/07/DSC_5038-HDR-1.jpg"
        ],
        center: [43.19, -4.83],
        zoom: 12,
        coordinates: [
            [43.20, -4.85],
            [43.195, -4.845],
            [43.19, -4.84],
            [43.18, -4.83],
            [43.19, -4.82],
            [43.20, -4.85]
        ]
    },
    {
        id: "6",
        title: "7 Lagos de Bariloche",
        slug: "7-lagos-de-bariloche",
        price: "11,99 €",
        distance: "107 km",
        elevation: "1.500 m+",
        time: "4h 30min",
        difficulty: "Moderada",
        stars: 5,
        creator: "Patagonia Riders",
        creatorHandle: "@patagonia_riders",
        description: "Un recorrido épico en bicicleta por la famosa Ruta de los 7 Lagos en la Patagonia Argentina. Lagos de colores imposibles, densos bosques andinos y kilómetros de asfalto perfecto ideal para un esfuerzo constante en tu Smart Trainer.",
        mapImg: "https://picsum.photos/id/1033/1200/800",
        gallery: [
            "https://picsum.photos/id/1033/1200/800",
            "https://picsum.photos/id/1036/1200/800",
            "https://picsum.photos/id/1038/1200/800",
            "https://picsum.photos/id/1040/1200/800"
        ],
        center: [-40.75, -71.65],
        zoom: 10,
        coordinates: [
            [-41.13, -71.30],
            [-40.90, -71.50],
            [-40.75, -71.65],
            [-40.15, -71.34]
        ]
    },
    {
        id: "7",
        title: "Tour ciclista La Rioja Viñedos",
        slug: "tour-ciclista-la-rioja-vinedos",
        price: "8,99 €",
        distance: "45,2 km",
        elevation: "600 m+",
        time: "2h 15min",
        difficulty: "Fácil",
        stars: 4,
        creator: "Wine & Bike",
        creatorHandle: "@wine_bike_es",
        description: "Pedalea entre hectáreas doradas y rojas de interminables viñedos en la zona más prestigiosa de La Rioja española. Terreno estilo 'rompepiernas' suave con múltiples repechos que exigen atención en los cambios de cadencia.",
        mapImg: "https://picsum.photos/id/111/1200/800",
        gallery: [
            "https://picsum.photos/id/111/1200/800",
            "https://picsum.photos/id/112/1200/800",
            "https://picsum.photos/id/113/1200/800",
            "https://picsum.photos/id/114/1200/800"
        ],
        center: [42.46, -2.44],
        zoom: 11,
        coordinates: [
            [42.46, -2.44],
            [42.48, -2.50],
            [42.50, -2.55],
            [42.52, -2.60]
        ]
    },
    {
        id: "8",
        title: "Camino Inca a Machu Picchu",
        slug: "camino-inca-a-machu-picchu",
        price: "17,50 €",
        distance: "43,0 km",
        elevation: "2.800 m+",
        time: "14h 00min",
        difficulty: "Extrema",
        stars: 5,
        creator: "Inca Trails",
        creatorHandle: "@inca_trails_pe",
        description: "Siente la magia ancestral de los Andes peruanos. Atraviesa escalones de piedra empinados, selva nubosa húmeda y ruinas incaicas en 4K inmersivo hasta alcanzar la esperada Puerta del Sol.",
        mapImg: "https://picsum.photos/id/201/1200/800",
        gallery: [
            "https://picsum.photos/id/201/1200/800",
            "https://picsum.photos/id/202/1200/800",
            "https://picsum.photos/id/203/1200/800",
            "https://picsum.photos/id/204/1200/800"
        ],
        center: [-13.20, -72.50],
        zoom: 12,
        coordinates: [
            [-13.24, -72.43],
            [-13.22, -72.48],
            [-13.18, -72.52],
            [-13.16, -72.54]
        ]
    },
    {
        id: "9",
        title: "Sierra Nevada Granada",
        slug: "sierra-nevada-granada",
        price: "10,99 €",
        distance: "22,4 km",
        elevation: "1.400 m+",
        time: "5h 10min",
        difficulty: "Difícil",
        stars: 5,
        creator: "Andalucía Hikes",
        creatorHandle: "@andalucia_hikes",
        description: "Enfréntate a la ruta ciclista en asfalto más alta de toda Europa. Coronando el Pico Veleta superamos la zona de la muerte vegetacional, pedaleando al borde del abismo con el Mediterráneo y África en el horizonte visual simulado.",
        mapImg: "https://picsum.photos/id/1019/1200/800",
        gallery: [
            "https://picsum.photos/id/1019/1200/800",
            "https://picsum.photos/id/1021/1200/800",
            "https://picsum.photos/id/1022/1200/800",
            "https://picsum.photos/id/1023/1200/800"
        ],
        center: [37.05, -3.36],
        zoom: 12,
        coordinates: [
            [37.08, -3.39],
            [37.07, -3.37],
            [37.06, -3.36],
            [37.05, -3.36]
        ]
    },
    {
        id: "10",
        title: "Torres del Paine Patagonia",
        slug: "torres-del-paine-patagonia",
        price: "16,99 €",
        distance: "19,8 km",
        elevation: "1.050 m+",
        time: "8h 30min",
        difficulty: "Difícil",
        stars: 5,
        creator: "End of the World Tours",
        creatorHandle: "@patagonia_magic",
        description: "Experimenta la dureza patagónica en el Mirador Base Las Torres, el trekking más sobrecogedor e icónico del sur de América. Resistencia frente a ráfagas simuladas de viento constante (compatible con rodillos Wahoo KICKR HEADWIND).",
        mapImg: "https://picsum.photos/id/1020/1200/800",
        gallery: [
            "https://picsum.photos/id/1020/1200/800",
            "https://picsum.photos/id/1024/1200/800",
            "https://picsum.photos/id/1025/1200/800",
            "https://picsum.photos/id/1026/1200/800"
        ],
        center: [-50.95, -72.95],
        zoom: 11,
        coordinates: [
            [-51.00, -72.98],
            [-50.98, -72.96],
            [-50.96, -72.95],
            [-50.94, -72.95]
        ]
    },
    {
        id: "11",
        title: "Ruta del Cares Divina",
        slug: "ruta-del-cares-divina",
        price: "11,50 €",
        distance: "21,5 km",
        elevation: "250 m+",
        time: "5h 00min",
        difficulty: "Moderada",
        stars: 5,
        creator: "Asturias Senderismo",
        creatorHandle: "@cares_asturias",
        description: "El desfiladero fotográfico más espectacular de España, también conocida como 'La Garganta Divina'. Una experiencia de falso llano que recorre túneles excavados directamente en roca caliza con precipicios infinitos. No apto para quienes sufren de vértigo inmersivo.",
        mapImg: "https://picsum.photos/id/225/1200/800",
        gallery: [
            "https://picsum.photos/id/225/1200/800",
            "https://picsum.photos/id/227/1200/800",
            "https://picsum.photos/id/228/1200/800",
            "https://picsum.photos/id/229/1200/800"
        ],
        center: [43.24, -4.84],
        zoom: 13,
        coordinates: [
            [43.26, -4.83],
            [43.25, -4.84],
            [43.24, -4.85],
            [43.23, -4.88]
        ]
    },
    {
        id: "12",
        title: "Dolomitas Italia Epic MTB",
        slug: "dolomitas-italia-mtb",
        price: "13,99 €",
        distance: "55,0 km",
        elevation: "1.800 m+",
        time: "4h 45min",
        difficulty: "Difícil",
        stars: 5,
        creator: "Alpine Bikers",
        creatorHandle: "@alpine_mtb",
        description: "Sella Ronda heroica, una explosión de gigantescas torres grises y verdes praderas alpinas en el norte de Italia. Pendientes técnicas y barro dinámico que exigirá el máximo rendimiento neuromuscular de tus piernas.",
        mapImg: "https://picsum.photos/id/160/1200/800",
        gallery: [
            "https://picsum.photos/id/160/1200/800",
            "https://picsum.photos/id/161/1200/800",
            "https://picsum.photos/id/162/1200/800",
            "https://picsum.photos/id/163/1200/800"
        ],
        center: [46.50, 11.83],
        zoom: 12,
        coordinates: [
            [46.54, 11.75],
            [46.52, 11.80],
            [46.49, 11.85],
            [46.48, 11.80],
            [46.54, 11.75]
        ]
    },
    {
        id: "13",
        title: "Aneto por el Valle Pro",
        slug: "aneto-por-el-valle-pro",
        price: "15,50 €",
        distance: "23,2 km",
        elevation: "1.650 m+",
        time: "9h 30min",
        difficulty: "Extrema",
        stars: 5,
        creator: "Huesca Montaña",
        creatorHandle: "@huesca_m",
        description: "Sube al Monarca de los Pirineos cruzando un glaciar virtualizado. El temido y legendario Paso de Mahoma pondrá a prueba tu pulso en los últimos metros hacia la cumbre.",
        mapImg: "https://picsum.photos/id/292/1200/800",
        gallery: [
            "https://picsum.photos/id/292/1200/800",
            "https://picsum.photos/id/293/1200/800",
            "https://picsum.photos/id/294/1200/800",
            "https://picsum.photos/id/295/1200/800"
        ],
        center: [42.63, 0.65],
        zoom: 13,
        coordinates: [
            [42.66, 0.62],
            [42.65, 0.63],
            [42.64, 0.64],
            [42.63, 0.65]
        ]
    },
    {
        id: "14",
        title: "Ruta Senderismo Ribera Duero",
        slug: "ruta-senderismo-ribera-duero",
        price: "7,50 €",
        distance: "34,0 km",
        elevation: "320 m+",
        time: "2h 00min",
        difficulty: "Fácil",
        stars: 4,
        creator: "Castilla Riders",
        creatorHandle: "@castilla_riders",
        description: "El descanso activo perfecto. Recorre pacíficamente los majestuosos senderos de las denominaciones de origen vinícola en la cuna castellana.",
        mapImg: "https://picsum.photos/id/350/1200/800",
        gallery: [
            "https://picsum.photos/id/350/1200/800",
            "https://picsum.photos/id/351/1200/800",
            "https://picsum.photos/id/352/1200/800",
            "https://picsum.photos/id/353/1200/800"
        ],
        center: [41.59, -4.11],
        zoom: 12,
        coordinates: [
            [41.60, -4.13],
            [41.59, -4.11],
            [41.58, -4.09],
            [41.57, -4.07]
        ]
    },
    {
        id: "15",
        title: "Gran Canaria Roque Nublo Vertical",
        slug: "gran-canaria-roque-nublo-vertical",
        price: "8,99 €",
        distance: "11,5 km",
        elevation: "620 m+",
        time: "2h 45min",
        difficulty: "Moderada",
        stars: 5,
        creator: "Canarias Epic",
        creatorHandle: "@epic_canarias",
        description: "El kilómetro vertical volcánico. Partiendo de húmedos bosques de pinos y escarpados barrancos, el terreno se convierte en piedra maciza bajo el sol intenso hasta asomarte al imponente mar de nubes.",
        mapImg: "https://picsum.photos/id/380/1200/800",
        gallery: [
            "https://picsum.photos/id/380/1200/800",
            "https://picsum.photos/id/381/1200/800",
            "https://picsum.photos/id/382/1200/800",
            "https://picsum.photos/id/383/1200/800"
        ],
        center: [27.96, -15.61],
        zoom: 14,
        coordinates: [
            [27.97, -15.62],
            [27.965, -15.615],
            [27.96, -15.61],
            [27.95, -15.60]
        ]
    }
];
