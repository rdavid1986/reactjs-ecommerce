const products = [
  {
    id: 1,
    title: "Samsung Galaxy S22 Ultra 12gb 256gb Phantom White",
    price: 382.999,
    stock: 49,
    category: "smartphones",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_638927-MLA52132546720_102022-O.webp",
    description:
      "Dispositivo liberado para que elijas la compañía telefónica que prefieras.Compatible con redes 5G.Pantalla Dynamic AMOLED 2X de 6.8.Tiene 4 cámaras traseras de 108Mpx/10Mpx/10Mpx/12Mpx.Cámara delantera de 40Mpx.Procesador Snapdragon 8 Gen 1 Octa-Core de 3GHz con 12GB de RAM.Batería de 5000mAh con carga inalámbrica.Memoria interna de 256GB.Resistente al agua.Con reconocimiento facial y sensor de huella dactilar.Resistente al polvo y a las caídas",
  },
  {
    id: 2,
    title: "Samsung Galaxy S21 5G 128 GB phantom white 8 GB RAM",
    description:
      "Dispositivo liberado para que elijas la compañía telefónica que prefieras.Compatible con redes 5G.Pantalla Dynamic AMOLED 2X de 6.2.Tiene 3 cámaras traseras de 64Mpx/12Mpx/12Mpx.Cámara delantera de 10Mpx.Batería de 4000mAh con carga inalámbrica.Memoria interna de 128GB.Resistente al agua.Con sensor de huella dactilar.Resistente al polvo.Tarjeta eSIM incluida.",
    price: 279.999,
    stock: 34,
    category: "smartphones",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_858070-MLA49947983070_052022-O.webp",
  },
  {
    id: 3,
    title: "Samsung Galaxy A03 64 GB negro 4 GB RAM",
    description:
      "Dispositivo liberado para que elijas la compañía telefónica que prefieras.Pantalla PLS de 6.5.Tiene 2 cámaras traseras de 48Mpx/2Mpx.Cámara delantera de 5Mpx.Batería de 5000mAh.Memoria interna de 64GB.",
    price: 39.999,
    stock: 34,
    category: "smartphones",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_773113-MLA52148554030_102022-O.webp",
  },
  {
    id: 4,
    title: "Samsung Galaxy Z Fold4 Panthom Black 256 Gb 12gb X6c",
    description:
      "Poderoso. ProductivoPantalla grande y envolventeNuestro foldable más resistente hasta el momentoCámara nocturnaDesplegá tu mundoSe destaca. Se levanta. Se despliegaHace mucho en una mano con su pantalla de cubierta de 6.2 pulgadas.1 En ambas manos, la pantalla principal de 7.6 pulgadas lo convierte en el mejor dispositivo para hacer más cosas.2 Y cuando necesites tener las manos libres, simplemente ajustalo, encontrá un buen ángulo y dejalo allí mientras haces más.3Un giro nuevo en slimBásicamente son dos teléfonos en uno, con casi el peso de un smartphone menos flexible. Adelgazado en todas partes, pero la pantalla, los biseles minimizados y los materiales livianos hacen que este Fold sea aún más fácil de llevar.",
    price: 629.999,
    stock: 123,
    category: "smartphones",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_695374-MLA52320011740_112022-O.webp",
  },
  {
    id: 5,
    title: "Samsung Galaxy A52s 5G 128 GB awesome black 6 GB RAM",
    description:
      "Dispositivo liberado para que elijas la compañía telefónica que prefieras.Compatible con redes 5G.Pantalla Super AMOLED de 6.5.Tiene 4 cámaras traseras de 64Mpx/12Mpx/5Mpx/5Mpx.Cámaras delanteras de 32Mpx.Procesador Snapdragon 778G 5G Octa-Core de 2.4GHz con 6GB de RAM.Batería de 4500mAh.Memoria interna de 128GB.A prueba de agua.Con sensor de huella dactilar.Resistente al polvo.",
    price: 499,
    stock: 32,
    category: "smartphones",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_602576-MLA48271786544_112021-O.webp",
  },
  {
    id: 6,
    title: "NOTEBOOK GAMER GM-15Z11 GTX 1650",
    description:
      "Notebook Banghó Game Master GM-15Z11 GTX 1650, fue creada para aportar mayor velocidad en el juego y portabilidad. Equipada con Procesador Intel Core i5 10440H de 11ava generación de serie H, placa gráfica NVIDIA Geforce GTX 1650 de 4GB GDDR6 y pantalla Full HD 15,6.",
    price: 331.499,
    stock: 9,
    category: "laptops",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_851399-MLA51804536075_102022-O.webp",
  },
  {
    id: 7,
    title:
      "Notebook Dell Gaming 5515 AMD Ryzen 5 Ram 12GB SSD 512GB Windows 11",
    description:
      "Marca:	Dell Modelo:	G5 5515 Línea:	Gaming EAN:	7427251180146 Capacidad Del Disco Rigido	No Aplica Capacidad Del Ssd	512 GB Memoria Ram	12 GB Resolución De Pantalla	1920 X 1080 Tamaño De Pantalla	15.6 Tipo De Procesador	AMD Ryzen 5",
    price: 266.999,
    stock: 14,
    category: "laptops",
    imgurl:
      "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/KENC269A/1000x1000-KENC269A.jpg&w=500&q=100",
  },
  {
    id: 8,
    title: "Notebook Lenovo Ideapad 3",
    description:
      "Marca	Lenovo Modelo y Numero de parte	 Lenovo ideapad 3 15ITH06 Gaming Procesador	Intel Core i5 Modelo Procesador	 intel i5 11300H Caracteristicas Procesador	Intel Core i5 11300H (2.0 Ghz – 4.5 Ghz, 8Mb Caché, 4 Nucleos, 8 Subprocesos) Memoria Ram	 8 Gb Tipo de disco	 SSD Disco SSD 256Gb Pantalla	15.6 Resolucion pantalla Full HD, IPS Placa de video	 Dedicada Nvidia Geforce Modelo Placa de Video Nvidia Geforce RTX 3050 4Gb GDDR6 Teclado	 Teclado Americano con teclado numerico – Retroiluminado Puertos de conexion	 1 Hdmi, 2 Usb 3.1, 1 Usb tipo C, rj-45, Entrada Microfono/Auricular Conectividad	 Wi-Fi 6 11ax, 2×2 + BT5.0 Sistema operativo	 windows 11 home Bateria	4 Celdas, 41 Wh Li Tipo de usuario Alta gama, Arquitecto, Gamer, Ideal Gamers, Diseñadores y exigentes, Multimedia",
    price: 254.999,
    stock: 68,
    category: "laptops",
    imgurl:
      "https://www.cordobanotebooks.com.ar/wp-content/uploads/2021/05/lenovo-gaming-i5-8.jpg.webp",
  },
  {
    id: 9,
    title: "Notebook Gamer Asus Tuf Fx506l I5 8gb Ssd 512 Gtx1650/4g 144",
    description:
      "Xp Informatica La Plata - Nuevo Local Comercial Plaza Dardo RochaHorario de atención: Lunes a Viernes 9 a 18hs - Sábados de 9 a 13hs - Emitimos Factura A y B - Envíos a todo el pais Garantias: Todos nuestros productos cuentan con la Garantía Oficial del Fabricante. Notebook Gamer Asus TUF FX506L: Disfrutá de la perfecta combinación de rendimiento y diseño con esta notebook Asus TUF FX506L. Encontrarás en ella una excelente herramienta para tus trabajos de todos los días y para tus momentos de entretenimiento. Aprovechá la experiencia extraordinaria que la marca tiene para ofrecerte y optimizá la calidad de tus imágenes y videos. Pantalla con gran impacto visual Su pantalla LED de 15.6 y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle. Eficiencia a tu alcance Su procesador Intel Core i5 de 4 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. Con esta unidad central, la máquina llevará a cabo varios procesos de forma simultánea, desde edición de videos hasta retoques fotográficos con programas profesionales.Potente disco sólido El disco sólido de 512 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas. Un procesador exclusivo para los gráficos. Su placa de video NVIDIA GeForce GTX 1650 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.",
    price: 289.0,
    stock: 96,
    category: "laptops",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_926023-MLA50955029253_082022-O.webp",
  },
  {
    id: 10,
    title: "Notebook Acer Nitro 5 I5-10300h Gtx1650-4g 15.6 Win10",
    description:
      " Memoria RAM: 8 GB Con pantalla táctil: NoTamaño de la pantalla: 15.6 Características generales Marca Acer Línea Win Modelo Nitro 5 Pantalla Frecuencia de actualización de la pantalla 144 Hz Resolución de la pantalla 1920 px x 1080 px Con pantalla táctil No Tamaño de la pantalla 15.6  Sistema operativo Nombre del sistema operativo Windows Versión del sistema operativo 10 Edición del sistema operativo Home Otros Con teclado retroiluminado Sí Memoria Memoria RAM 8 GB Tipo de memoria RAM DDR4 Almacenamiento Capacidad del disco rígido 1 TB Procesador Tarjeta gráfica NVIDIA GeForce GTX 1650 Marca del procesador Intel Línea del procesador Core i5 Modelo del procesador 5600 H Cantidad de núcleos 6 Peso y dimensiones Peso 1.9 kg Especificaciones Es ultrabook No Es 2 en 1 No Es gamer Sí",
    price: 268.999,
    stock: 89,
    category: "laptops",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_940841-MLA49934352181_052022-O.webp",
  },
  {
    id: 11,
    title:
      "Placa de video Nvidia Zotac  Gaming GeForce RTX 30 Series RTX 3090 ZT-A30900D-10P 24GB",
    description:
      "Interfaz PCI-Express 4.0. Bus de memoria: 384bit. Cantidad de núcleos: 10496. Frecuencia boost del núcleo de 1695MHz. Resolución máxima: 7680x4320. Compatible con directX y openGL. Requiere de 750W de alimentación. Diseñada con IA: imágenes más nítidas y óptimas. Con tecnología ray tracing de alto nivel. Permite la conexión de hasta 4 pantallas simultáneas. Formatos de conexión: 3 DisplayPort 1.4a, HDMI 2.1. Incluye accesorios.Ideal para trabajar a alta velocidad.",
    price: 297.999,
    stock: 65,
    category: "Nvidia",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_659938-MLA51558829194_092022-O.webp",
  },
  {
    id: 12,
    title: "Nvidia MSI GeForce RTX 3080 Ti VENTUS 3X 12G OC Edition 12GB",
    price: 379.999,
    stock: 52,
    category: "Nvidia",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_833921-MLA47855385378_102021-O.webp",
  },
  {
    id: 13,
    title:
      "Nuevo  |  63 vendidos Placa de video Nvidia Evga XC Gaming GeForce RTX 30 Series RTX 3070 08G-P5-3755-KR 8GB",
    description:
      "Interfaz PCI-Express 4.0. Bus de memoria: 256bit. Cantidad de núcleos: 5888. Frecuencia boost del núcleo de 1770MHz. Resolución máxima: 7680x4320. Compatible con directX y openGL. Requiere de 650W de alimentación. Formatos de conexión: 3 DisplayPort 1.4a, HDMI 2.1. Ideal para trabajar a alta velocidad.",
    price: 299.99,
    stock: 61,
    category: "Nvidia",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_832769-MLA45259993797_032021-O.webp",
  },
  {
    id: 14,
    title: "Nvidia MSI Gaming GeForce RTX 30 Series RTX 3060 Ti GAMING X 8G ",
    description:
      "Interfaz PCI-Express 4.0. Bus de memoria: 256bit. Cantidad de núcleos: 4864. Frecuencia boost del núcleo de 1770MHz. Resolución máxima: 7680x4320. Compatible con directX y openGL. Requiere de 600W de alimentación. Con iluminación LED blanca. Permite la conexión de hasta 4 pantallas simultáneas. Formatos de conexión: 3 DisplayPort 1.4a, HDMI 2.1. Ideal para trabajar a alta velocidad.",
    price: 217.611,
    category: "Nvidia",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_915989-MLA51759130916_092022-O.webp",
  },
  {
    id: 15,
    title:
      "Nvidia MSI  Ventus GeForce RTX 30 Series RTX 3050 GeForce RTX 3050 VENTUS 2X 8G OC OC Edition 8GB",
    description:
      "Interfaz PCI-Express 4.0. Bus de memoria: 128bit. Cantidad de núcleos: 2560. Frecuencia boost del núcleo de 1807MHz. Resolución máxima: 7680x4320. Compatible con directX y openGL. Requiere de 550W de alimentación. Permite la conexión de hasta 4 pantallas simultáneas. Formatos de conexión: 3 DisplayPort 1.4a, HDMI 2.1.Ideal para trabajar a alta velocidad.",
    price: 133.999,
    stock: 105,
    category: "Nvidia",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_924906-MLA51231267460_082022-O.webp",
  },
  {
    id: 16,
    title:
      "Placa de Video AsRock Radeon RX 6800 XT Phantom Gaming D OC 16Gb GDDR6",
    description:
      "Chip: RX 6800 XT Core Clock: 1875 MHz Stream Processors: 4608 Tamaño y tipo de memoria: GDDR6 16GB Interfaz de memoria: 256-bit Velocidad de memoria: 16 Gbps  Microsoft DirectX: 12 OpenGL: 4.6 Interfaz: 1 x HDMI™ 2.1 VRR,  3 x DisplayPort™ 1.4 with DSC Tamaño de la placa: 330 x 140 x 56 mm, 2.8-slot Conectores de fuente: 3 x 8-pin Fuente recomendada: 800W Garantía: 12 Meses Modelo: GV-R68XTGAMING-OC-16GD",
    price: 299998,
    stock: 110,
    category: "AMD-Radeon",
    imgurl:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/Q7MotGFWp2YmCQVc3ZE7/imagen",
  },
  {
    id: 17,
    title:
      "Placa de Video Powercolor Radeon RX 6700 Fighter 10Gb GDDR6 OEM (Simil RX 6600 XT)",
    description:
      "Chipset: AXRX 6700 Core Clock: 2495 MHz Stream Processor: 2304 Units Tamaño y tipo de memoria: 10GB GDDR6 Interfaz de memoria: 256bit Velocidad de memoria: 16.0 Gbps Microsoft DirectX: 12 OpenGL: 4.5 Interfaz: 1x HDMI 2.1 , 3x DisplayPort 1.4 Tamaño de la placa: 228*109*32mm Conectores de fuente: 6 - 6+2 pin Fuente recomendada: 650W Modelo: AXRX 6700 10GBD6-3DH/OC",
    price: 178570,
    stock: 78,
    category: "AMD-Radeon",
    imgurl:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/vQhY6VNpBc5hhrjY9QFZ/imagen",
  },
  {
    id: 18,
    title: "Placa de Video Powercolor Radeon RX 6600 Fighter 8Gb GDDR6 OEM",
    description:
      "Interfaz PCI-Express 4.0. Bus de memoria: 128bit. Cantidad de núcleos: 1792. Resolución máxima: 7680x4320. Compatible con directX y openGL. Requiere de 500W de alimentación. Formatos de conexión: HDMI 2.1, 3 DisplayPort 1.4.Ideal para trabajar a alta velocidad.",
    price: 89.999,
    stock: 54,
    category: "AMD-Radeon",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_993388-MLA50291500308_062022-O.webp",
  },
  {
    id: 19,
    title:
      "Placa de Video PowerColor AMD Radeon RX 6500 XT Fighter 4GB OC GDDR6",
    description:
      "Tipo De ConexionPCI Express 4.0 Chipset GPUAXRX 6500 XTProducto LHRNo Conectividad Salidas HDMI1 Salidas DVI-DNo Salidas DisplayPort1 Salidas VGANo Dimensiones Ancho126 Mm Largo191 Mm Grosor40 Mm Energia Consumo200 W Watts Recomendados (Fuente)400 W Conexion De Energia1 X 6-Pin Coolers Cantidad De Coolers Fan2 Detalles Velocidad Del Core Base2650MHz Velocidad Del Core Turbo2820MHz Tipo De MemoriaGDDR6 Capacidad De Memoria4 GB Velocidad De Memoria18 Gbps Interface De Memoria64 Bit Tipos De ProcesosCUDA Cantidad De Procesos1024",
    price: 109.629,
    stock: 88,
    category: "AMD-Radeon",
    imgurl:
      "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/AXRX-6500XT-4GBD6-DH-OC_800.jpg",
  },

  {
    id: 20,
    title: "Placa de Video Powercolor Radeon RX 550 Red Dragon 4GB GDDR5",
    description:
      "Chip: Radeon™ RX 550 Core Clock: 1500MHz Stream Processor: 512 Units Tamaño y tipo de memoria: 4GB GDDR5 Interfaz de memoria: 128bit Velocidad de memoria: 7Gbps Microsoft DirectX: 12 OpenGL: 4.6 Interfaz: 1x DL DVI-D/ 1x HDMI Tamaño de la placa: 225mm*128mm*38mm Conectores de fuente: - Fuente recomendada: 250W Modelo: AXRX 550 4GBD5-HLE",
    price: 78570,
    stock: 140,
    category: "AMD-Radeon",
    imgurl:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/Mfnuvjdpa2Jntw9TfyyE/imagen",
  },
  {
    id: 21,
    title: "mart Tv Philco Pld55us22api Led 4k 55'' Con Google Tv",
    description:
      "Su resolución es 4K.Con Netflix, YouTube.Control LG Magic Remote no incluido.Sistema operativo Linux.Conectá tus dispositivos mediante sus 3 puertos HDMI y sus 2 puertos USB.Dimensiones: 123cm de ancho, 71.4cm de alto, 7.9cm de profundidad.Entretenimiento y conectividad en un mismo lugar.",
    price: 132.999,
    stock: 133,
    category: "tv",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_959748-MLA52388549129_112022-O.webp",
  },
  {
    id: 22,
    title: "Smart TV Philips 7000 Series 55PUD7406/77 LED 4K 55 110V/240V",
    description:
      "Su resolución es 4K.Tecnología HDR para una calidad de imagen mejorada.Modo de sonido: Dolby Atmos, AI Sound.Con Prime Video, Disney+, YouTube, Netflix, Web browser, GloboPlay.Google Assistant incorporado.Control LG Magic Remote no incluido.Sistema operativo Android 10.Capacidad de almacenamiento de 8GB.Conectá tus dispositivos mediante sus 4 puertos HDMI y sus 2 puertos USB.Dimensiones: 1226.8mm de ancho, 711.8mm de alto, 86.6mm de profundidad.Entretenimiento y conectividad en un mismo lugar.",
    price: 129.999,
    stock: 146,
    category: "tv",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_656674-MLA48707824436_122021-O.webp",
  },
  {
    id: 23,
    title: "Smart TV Samsung Neo QLED 4K QN55QN85BAGCZB QLED 4K 55",
    description:
      "Su resolución es 4K.Tecnología HDR para una calidad de imagen mejorada.Modo de sonido: Dolby Atmos, Dolby Digital Plus, Adaptive Sound +, OTS, Q-Symphony.Tiene función Screen Share.Con Samsung TV Plus, Netflix, Apple TV, Prime Video, YouTube, Web browser, Home Yoga, Music, SmartThings, Google Duo.Bixby, Google Assistant y Alexa incorporados.Control LG Magic Remote no incluido.Sistema operativo Tizen.Conectá tus dispositivos mediante sus 4 puertos HDMI y sus 2 puertos USB.Dimensiones: 1227.4mm de ancho, 705.6mm de alto, 26.9mm de profundidad.Entretenimiento y conectividad en un mismo lugar.",
    price: 389.499,
    stock: 26,
    category: "tv",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_725411-MLA51838343158_102022-O.webp",
  },
  {
    id: 24,
    title: "Smart TV Samsung Series 7 UN55AU7000GXUG LED 4K 55 ",
    description:
      "Su resolución es 4K.Tecnología HDR para una calidad de imagen mejorada.Modo de sonido: Dolby Digital Plus, Q-Symphony.Tiene función Screen Share.Con Gallery, Web browser.Control LG Magic Remote no incluido.Sistema operativo Tizen.Conectá tus dispositivos mediante sus 3 puertos HDMI y su puerto USB.Con sistema de cables ocultos.Dimensiones: 1230.5mm de ancho, 707.2mm de alto, 59.9mm de profundidad.Entretenimiento y conectividad en un mismo lugar.",
    price: 150.499,
    stock: 113,
    category: "tv",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_743668-MLA48700227253_122021-O.webp",
  },
  {
    id: 25,
    title: "Smart Tv Noblex 55 Pulgadas Dk55x6550 4k Uhd",
    description:
      "Control LG Magic Remote no incluido.Cuenta con conexión HDMI y USB.Entretenimiento y conectividad en un mismo lugar.",
    price: 109.199,
    stock: 47,
    category: "tv",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_896897-MLA51786368670_102022-O.webp",
  },
  {
    id: 26,
    title: "Sony PlayStation 5 825GB Digital Edition color blanco y negro",
    description:
      "Incluye joystick.Resolución de 3840px x 2160px.Memoria RAM de 16GB.Horas de diversión garantizada.Cuenta con: 1 cable de alimentación ca, 1 cable hdmi, 1 cable de carga usb, 1 dock, 1 guía de inicio rápido.La duración de la batería de los controles depende del uso que se le dé al producto.",
    price: 344.999,
    stock: 131,
    category: "videogames",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_791396-MLA47058527002_082021-O.webp",
  },
  {
    id: 27,
    title: "Sony Playstation 5 825gb lector Edition Ps5",
    description:
      "Capacidad 825 GBTipo de consola De sobremesa.Cantidad de controles incluidos 1Memoria RAM 16 GBCon Wi-Fi Sí",
    price: 419.999,
    stock: 17,
    category: "videogames",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_739160-MLA44484414453_012021-O.webp",
  },
  {
    id: 28,
    title: "Microsoft Xbox Series X 1tb Standard Negro",
    description:
      "Capacidad 1 TBTipo de consola De sobremesaCantidad de controles incluidos 1Memoria RAM 16 GBCon Wi-Fi Sí",
    price: 329.999,
    stock: 54,
    category: "videogames",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_963862-MLA45041918050_032021-O.webp",
  },
  {
    id: 29,
    title: "Microsoft Xbox Series S 512GB Standard color blanco",
    description:
      "Incluye control.Resolución de 2560px x 1440px.Memoria RAM de 10GB.Horas de diversión garantizada.Cuenta con: 1 cable hdmi, 1 cable de alimentación ca.La duración de la batería de los controles depende del uso que se le dé al producto.",
    price: 173.999,
    stock: 7,
    category: "videogames",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_627149-MLA44484230438_012021-O.webp",
  },
  {
    id: 30,
    title: "Nintendo Switch 32GB Standard color rojo neón, azul neón y negro",
    description:
      "Incluye 2 controles.Resolución de 1920px x 1080px.Memoria RAM de 4GB.Tiene pantalla táctil.Horas de diversión garantizada.Cuenta con: 1 joy-con grip, 2 correas para joy-con, 1 dock, 1 cable hdmi, 1 adaptador de corriente.La duración de la batería depende del uso que se le dé al producto.",
    price: 149.999,
    stock: 54,
    category: "videogames",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_883371-MLA32731749246_112019-O.webp",
  },
];

export default products;
