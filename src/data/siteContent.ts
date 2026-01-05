import peusDePorc from "../assets/images/dishes/peus-de-porc.jpg";
import txuletoVaca from "../assets/images/dishes/txuleto-vaca.jpg";
import bacallaCigrons from "../assets/images/dishes/bacalla-cigrons.jpg";
import pomaEva from "../assets/images/dishes/poma-eva.jpg";

export const siteContent = {
  hero: {
    badge: "Restaurant a Olot",
    title: {
      line1: "Cuina Casolana,",
      line2: "Gust Autèntic",
    },
    description: "Gaudir d'uns Peus de Porc amb Naps, un Bacallà amb cigrons i all negre o un Txuletò de Vaca Madurat mai havia estat tan agradable. Vine a descobrir La Canal.",
    cta: {
      text: "Reservar Taula",
      link: "#contacte",
    },
    imageAlt: "Menjador Restaurant La Canal",
  },
  about: {
    stats: {
      experience: {
        value: "30+",
        label: "Anys d'Experiència",
      },
    },
    title: {
      line1: "30 Anys de Tradició,",
      line2: "Cuina de Sempre",
    },
    description: [
      "La Canal és més que un restaurant a Olot. Després de tres dècades servint la millor cuina casolana, us convidem a gaudir del nostre espai.",
      "Cuina de xup-xup i brasa, en un espai tranquil i acollidor ideal per fer sobretaula.",
    ],
    features: [
      "Producte de proximitat",
      "Espais amplis i terrassa exterior",
      "Ideal per famílies, grups i dinars de feina",
    ],
    googleRating: {
      value: "4.4/5",
      text: "a Google Reviews",
    },
    images: {
      kitchen1: { alt: "Detall de la cuina" },
      wineCellar: { alt: "Selecció de vins" },
      kitchen2: { alt: "Cuina en acció" },
    },
  },
  highlights: {
    badge: "La Nostra Cuina",
    title: "Els Imprescindibles",
    description: "Una selecció dels nostres millors plats. Cuina honesta, producte fresc i molt d'amor.",
    dishes: [
      {
        title: "Peus de Porc amb Naps",
        description: "Un viatge a la cuina de les nostres àvies. Guisats sense pressa amb naps, llorer i vi ranci, recuperant els sabors d'abans.",
        tags: ["Tradició", "Guisats"],
        image: peusDePorc,
      },
      {
        title: "Txuletò de Vaca Madurat",
        description: "Madurat 90 dies per potenciar el sabor i aconseguir una textura inigualable. Cuit amb precisió y servit amb orgull.",
        tags: ["Madurat", "Brasa"],
        image: txuletoVaca,
      },
      {
        title: "Bacallà amb cigrons i all negre",
        description: "El peix de muntanya. Tant simple fresc i tant exquisit quan ha estat salat. Un plat humil elevat a la categoria d'imprescindible.",
        tags: ["Peix", "Muntanya"],
        image: bacallaCigrons,
      },
      {
        title: "La Poma de l'Eva",
        description: "Seria una llàstima i quasi un pecat que una Eva tant llaminera no fes una poma com aquesta. Una temptació dolça irresistible.",
        tags: ["Dolç", "Artesà"],
        image: pomaEva,
      },
    ],
  },
  reviews: {
    badge: "Testimonis",
    title: "La veu dels nostres clients",
    description: "La millor recompensa és veure com les famílies i amics gaudeixen de la nostra taula.",
    googleRating: {
      value: "4.4",
      label: "Excel·lent a Google",
    },
    items: [
      {
        name: "Sònia Roncero",
        source: "Google",
        text: "Hem anat a menjar de carta i la veritat és que tot estava exquisit. Hem demanat varis entrants (patates d'Olot, de les millors que he tastat) i 3 segons, i ens han atès de forma excel·lent. Tot boníssim, destacable el cheesecake, la cua de bou i els cargols.",
        stars: 5,
      },
      {
        name: "Christian Núñez",
        source: "Google",
        text: "Vam anar a dinar i és un lloc on tornaria encantat. Res més demanar begudes ens van portar un platet de tomàquet per picar molt bo. Els calamars es notava que els havien preparat allà mateix i l'arrebossat estava boníssim, es desfeia. L'interior del local està molt cuidat estèticament.",
        stars: 5,
      },
      {
        name: "Luis Mi Gon Ca",
        source: "Google",
        text: "Vam trucar per reservar, estava ple però ens van fer un lloc. Entrants boníssims, el pa el reposen sense dir res. 2 'chuletones' de 1200 al punt, poc fets. Postres per llepar-se els dits. Un lloc per apuntar per a una pròxima visita a La Garrotxa.",
        stars: 5,
      },
      {
        name: "Albert Cumellas",
        source: "Google",
        text: "Bon restaurant a Olot. Ambient agradable. Totalment recomanable.",
        stars: 5,
      },
      {
        name: "angel guardia",
        source: "Google",
        text: "Tenen un menú molt complet 😋 La carn a la brasa és espectacular i tendra.",
        stars: 4,
      },
      {
        name: "Isidro R",
        source: "Tripadvisor",
        text: "Excel·lent servei amb bons consells i un menjar excel·lent, molt variat i ben cuinat, i a molt bon preu. A més, s'hi pot entrar amb gos.",
        stars: 5,
      },
      {
        name: "Enric L",
        source: "Tripadvisor",
        text: "Restaurant on repetim cada estiu, plats generosos i postres ben elaborats. I a més és Dog Friendly.",
        stars: 5,
      },
      {
        name: "INBOCCANOSTRA",
        source: "Tripadvisor",
        text: "Magnífica primera experiència. Menú diari a preu imbatible de 10,00 €. Complet i racions abundants. Magnífica l'amanida de ceba i tomàquet. Bon arròs a la cassola i bons guisats. Menció especial per les postres casolanes. Excel·lent relació qualitat/preu.",
        stars: 5,
      },
      {
        name: "Olga M",
        source: "Tripadvisor",
        text: "Molt ràpids i atents. Qualitat-preu molt, molt bona. M'encanten la sopa de ceba, el llenguado i el turbot!!",
        stars: 5,
      },
      {
        name: "Joan S",
        source: "Tripadvisor",
        text: "Menjar casolà excel·lent, menú molt aconseguit i econòmic. La seva especialitat són les postres, realment magnífiques. Tot el personal molt amable.",
        stars: 5,
      },
      {
        name: "Carles S",
        source: "Tripadvisor",
        text: "Recomanable, l'espai està bé, amb tocs vintage. L'atenció molt bona i el menjar correcte. Un lloc per tornar, sobretot per celebrar aniversaris ja que tenen una sala privada a dalt.",
        stars: 4,
      },
    ],
  },
  footer: {
    description: "Cuina tradicional i casolana a Olot. Un espai ideal per gaudir de la bona taula amb la millor companyia.",
    contact: {
      title: "Contacte",
      address: {
        text: "Ctra. Riudaura, s/n\n17800 Olot, Girona",
        link: "https://www.google.com/maps/search/?api=1&query=Ctra.+Riudaura,+s/n,+17800+Olot,+Girona",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11826.050619302989!2d2.463965!3d42.182105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bacacdc7ebd0f3%3A0xe7977d52facf4c4d!2sRestaurant%20La%20Canal!5e0!3m2!1sca!2ses!4v1767561542113!5m2!1sca!2ses",
      },
      phone: {
        text: "+34 972 26 95 09",
        href: "tel:+34972269509",
      },
      cta: "Trucar per Reservar",
    },
    hours: {
      title: "Horari",
      items: [
        {
          label: "Dimarts - Diumenge",
          time1: "13:00 - 16:00",
          time2: "20:00 - 23:00",
        },
        {
          label: "Dilluns",
          time1: "Tancat",
        },
      ],
    },
    socials: {
      instagram: "https://www.instagram.com/explore/locations/242301300/restaurant-la-canal",
    },
    copyright: "Restaurant La Canal.",
  },
  header: {
    nav: [
      { label: "Inici", href: "#inici" },
      { label: "Història", href: "#sobre-nosaltres" },
      { label: "La Cuina", href: "#plats" },
      { label: "Opinions", href: "#opinions" },
    ],
    cta: "Reservar",
    phone: "+34 972 26 95 09",
  },
};