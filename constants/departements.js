const DEPARTEMENTS = [
  { value: "01", label: "01 - Ain" },
  {
    isAllowed: true,
    value: "02",
    label: "02 - Aisne",
    company: "ud002-apt-etudiants-employeur",
    student: "ud002-apt-etudiants",
  },
  { value: "03", label: "03 - Allier" },
  { value: "04", label: "04 - Alpes-de-Haute-Provence" },
  { value: "05", label: "05 - Hautes-alpes" },
  { value: "06", label: "06 - Alpes-maritimes" },
  { value: "07", label: "07 - Ardèche" },
  { value: "08", label: "08 - Ardennes" },
  { value: "09", label: "09 - Ariège" },
  {
    isAllowed: true,
    value: "10",
    label: "10 - Aube",
    company: "ud010-apt-etudiants-employeur",
    student: "ud010-apt-etudiants",
  },
  { value: "11", label: "11 - Aude" },
  { value: "12", label: "12 - Aveyron" },
  {
    isAllowed: true,
    value: "13",
    label: "13 - Bouches-du-Rhône",
    company: "ud013-apt-etudiants-employeur-v0",
    student: "ud013-apt-etudiants-v0",
  },
  { value: "14", label: "14 - Calvados" },
  { value: "15", label: "15 - Cantal" },
  { value: "16", label: "16 - Charente" },
  { value: "17", label: "17 - Charente-maritime" },
  { value: "18", label: "18 - Cher" },
  { value: "19", label: "19 - Corrèze" },
  { value: "2a", label: "2a - Corse-du-sud" },
  { value: "2b", label: "2b - Haute-Corse" },
  { value: "21", label: "21 - Côte-d'Or" },
  { value: "22", label: "22 - Côtes-d'Armor" },
  { value: "23", label: "23 - Creuse" },
  { value: "24", label: "24 - Dordogne" },
  {
    value: "25",
    label: "25 - Doubs",
    isAllowed: true,
    company: "ud025-apt-etudiants-employeur",
    student: "ud025-apt-etudiants",
  },
  { value: "26", label: "26 - Drôme" },
  { value: "27", label: "27 - Eure" },
  { value: "28", label: "28 - Eure-et-loir" },
  { value: "29", label: "29 - Finistère" },
  { value: "30", label: "30 - Gard" },
  { value: "31", label: "31 - Haute-garonne" },
  { value: "32", label: "32 - Gers" },
  {
    value: "33",
    label: "33 - Gironde",
    isAllowed: true,
    company: "ud033-apt-etudiants-employeur",
    student: "ud033-apt-etudiants",
  },
  { value: "34", label: "34 - Hérault" },
  {
    value: "35",
    label: "35 - Ille-et-vilaine",
    isAllowed: true,
    company: "ud035-apt-etudiants-employeur",
    student: "ud035-apt-etudiants",
  },
  { value: "36", label: "36 - Indre" },
  { value: "37", label: "37 - Indre-et-loire" },
  { value: "38", label: "38 - Isère" },
  { value: "39", label: "39 - Jura" },
  { value: "40", label: "40 - Landes" },
  { value: "41", label: "41 - Loir-et-cher" },
  {
    isAllowed: true,
    value: "42",
    label: "42 - Loire",
    company: "ud042-apt-etudiants-employeur",
    student: "ud042-apt-etudiants",
  },
  { value: "43", label: "43 - Haute-loire" },
  { value: "44", label: "44 - Loire-atlantique" },
  {
    isAllowed: true,
    value: "45",
    label: "45 - Loiret",
    company: "ud045-apt-etudiants-employeur",
    student: "ud045-apt-etudiants",
  },
  { value: "46", label: "46 - Lot" },
  { value: "47", label: "47 - Lot-et-garonne" },
  { value: "48", label: "48 - Lozère" },
  { value: "49", label: "49 - Maine-et-loire" },
  { value: "50", label: "50 - Manche" },
  {
    isAllowed: true,
    value: "51",
    label: "51 - Marne",
    company: "ud051-apt-etudiant-employeur",
    student: "ud051-apt-etudiant",
  },
  {
    value: "52",
    label: "52 - Haute-marne",
    isAllowed: true,
    company: "ud052-apt-etudiants-employeur",
    student: "ud052-apt-etudiants",
  },
  { value: "53", label: "53 - Mayenne" },
  {
    isAllowed: true,
    value: "54",
    label: "54 - Meurthe-et-moselle",
    company: "ud054-apt-etudiants-employeur",
    student: "ud054-apt-etudiants",
  },
  {
    value: "55",
    label: "55 - Meuse",
    isAllowed: true,
    company: "ud055-apt-etudiants-employeur",
    student: "ud055-apt-etudiants",
  },
  { value: "56", label: "56 - Morbihan" },
  {
    isAllowed: true,
    value: "57",
    label: "57 - Moselle",
    company: "ud057-apt-etudiants-employeur",
    student: "ud057-apt-etudiants",
  },
  { value: "58", label: "58 - Nièvre" },
  {
    isAllowed: true,
    value: "59",
    label: "59 - Nord",
    company: "ud059-apt-etudiants-employeur",
    student: "ud059-apt-etudiants",
  },
  { value: "60", label: "60 - Oise" },
  { value: "61", label: "61 - Orne" },
  {
    isAllowed: true,
    value: "62",
    label: "62 - Pas-de-Calais",
    company: "ud062-apt-etudiants-employeur",
    student: "ud062-apt-etudiants",
  },
  {
    value: "63",
    label: "63 - Puy-de-dôme",
    isAllowed: true,
    company: "ud063-apt-etudiants-employeur",
    student: "ud063-apt-etudiants",
  },
  { value: "64", label: "64 - Pyrénées-atlantiques" },
  { value: "65", label: "65 - Hautes-Pyrénées" },
  { value: "66", label: "66 - Pyrénées-orientales" },
  {
    isAllowed: true,
    value: "67",
    label: "67 - Bas-rhin",
    company: "ud067-apt-etudiants-employeur",
    student: "ud067-apt-etudiants",
  },
  {
    value: "68",
    label: "68 - Haut-rhin",
    isAllowed: true,
    company: "ud068-apt-etudiants-employeur",
    student: "ud068-apt-etudiants",
  },
  {
    isAllowed: true,
    value: "69",
    label: "69 - Rhône",
    company: "ud069-apt-etudiants-employeur",
    student: "ud069-apt-etudiants",
  },
  { value: "70", label: "70 - Haute-saône" },
  { value: "71", label: "71 - Saône-et-loire" },
  { value: "72", label: "72 - Sarthe" },
  { value: "73", label: "73 - Savoie" },
  { value: "74", label: "74 - Haute-savoie" },
  {
    isAllowed: true,
    value: "75",
    label: "75 - Paris",
    company: "ud075-apt-etudiants-employeur",
    student: "ud075-apt-etudiants",
  },
  {
    isAllowed: true,
    value: "76",
    label: "76 - Seine-maritime",
    company: "ud076-apt-etudiants-employeur-emp-v0",
    student: "ud076-apt-etudiants-employeur-v0",
  },
  {
    isAllowed: true,
    value: "77",
    label: "77 - Seine-et-marne",
    company: "ud077-apt-etudiants-employeur",
    student: "ud077-apt-etudiants",
  },
  {
    isAllowed: true,
    value: "78",
    label: "78 - Yvelines",
    company: "ud078-apt-etudiants-employeur",
    student: "ud078-apt-etudiants",
  },
  { value: "79", label: "79 - Deux-sèvres" },
  {
    isAllowed: true,
    value: "80",
    label: "80 - Somme",
    company: "ud080-apt-etudiants-employeur",
    student: "ud080-apt-etudiants",
  },
  { value: "81", label: "81 - Tarn" },
  { value: "82", label: "82 - Tarn-et-garonne" },
  { value: "83", label: "83 - Var" },
  { value: "84", label: "84 - Vaucluse" },
  { value: "85", label: "85 - Vendée" },
  { value: "86", label: "86 - Vienne" },
  { value: "87", label: "87 - Haute-vienne" },
  {
    isAllowed: true,
    value: "88",
    label: "88 - Vosges",
    company: "ud088-apt-etudiants-employeur",
    student: "ud088-apt-etudiants",
  },
  { value: "89", label: "89 - Yonne" },
  { value: "90", label: "90 - Territoire de belfort" },
  {
    isAllowed: true,
    value: "91",
    label: "91 - Essonne",
    company: "ud091-apt-etudiants-employeur-v0",
    student: "ud091-apt-etudiants-v0",
  },
  {
    isAllowed: true,
    value: "92",
    label: "92 - Hauts-de-seine",
    company: "ud092-apt-etudiants-employeur-v0",
    student: "ud092-apt-etudiants-v0",
  },
  {
    isAllowed: true,
    value: "93",
    label: "93 - Seine-Saint-Denis",
    company: "ud093-apt-etudiants-employeur",
    student: "ud093-apt-etudiants",
  },
  {
    isAllowed: true,
    value: "94",
    label: "94 - Val-de-marne",
    company: "ud094-apt-etudiants-employeur",
    student: "ud094-apt-etudiants",
  },
  {
    isAllowed: true,
    value: "95",
    label: "95 - Val-d'oise",
    company: "ud095-apt-etudiants-employeur",
    student: "ud095-apt-etudiants",
  },
  { value: "97", label: "97 - Guadeloupe" },
  { value: "97", label: "97 - Martinique" },
  { value: "97", label: "97 - Guyane" },
  { value: "97", label: "97 - La réunion" },
  { value: "97", label: "97 - Saint-Pierre-et-Miquelon" },
  { value: "97", label: "97 - Mayotte" },
];

// eslint-disable-next-line import/prefer-default-export
export { DEPARTEMENTS };
