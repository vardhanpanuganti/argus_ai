import france from "../assets/flags/france.png";
import japan from "../assets/flags/japan.png";
import iceland from "../assets/flags/iceland.png";

const destinations = [
  {
    id: 1,

    name: "Paris",

    country: "France",

    flag: france,

    temperature: "26°C",

    weather: "Perfect Weather",

    rating: "4.9",

    flights: "542 Flights Today",

    description:
      "Experience world-famous art, cafés, fashion and unforgettable evenings in the City of Light.",

    lat: 48.8566,

    lng: 2.3522,
  },

  {
    id: 2,

    name: "Tokyo",

    country: "Japan",

    flag: japan,

    temperature: "23°C",

    weather: "Clear Sky",

    rating: "4.9",

    flights: "815 Flights Today",

    description:
      "Discover futuristic technology, vibrant nightlife and timeless Japanese traditions.",

    lat: 35.6762,

    lng: 139.6503,
  },

  {
    id: 3,

    name: "Reykjavík",

    country: "Iceland",

    flag: iceland,

    temperature: "8°C",

    weather: "Aurora Tonight",

    rating: "4.8",

    flights: "94 Flights Today",

    description:
      "Witness glaciers, volcanoes, waterfalls and the spectacular Northern Lights.",

    lat: 64.1466,

    lng: -21.9426,
  },
];

export default destinations;