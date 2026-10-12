export type ImageCredit = {
  file: string;
  src: string;
  alt: string;
  author: string;
  license: string;
  licenseUrl?: string;
  sourceUrl: string;
  changes: string;
  used: string;
};

export const IMAGE_CREDITS: ImageCredit[] = [
  {
    file: "downtown-freeport-illinois.webp",
    src: "/photos/downtown-freeport-illinois.webp",
    alt: "Downtown Freeport, Illinois, with brick storefronts along a main street.",
    author: "IvoShandor",
    license: "CC BY 2.5",
    licenseUrl: "https://creativecommons.org/licenses/by/2.5",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Freeport_Il_Downtown1.JPG",
    changes: "Center-cropped to 3:2, resized to 1200×800, and saved as WebP.",
    used: "Homepage hero",
  },
  {
    file: "spring-jackson-freeport-illinois.webp",
    src: "/photos/spring-jackson-freeport-illinois.webp",
    alt: "Houses at the corner of Spring and Jackson streets in Freeport, Illinois.",
    author: "Wayne Wilkinson",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Corner_of_Spring_and_Jackson,_Freeport,_Illinois_(7828391060).jpg",
    changes: "Center-cropped to 3:2, resized to 1200×800, and saved as WebP.",
    used: "Residential pages and the services index",
  },
  {
    file: "stephenson-county-courthouse-freeport.webp",
    src: "/photos/stephenson-county-courthouse-freeport.webp",
    alt: "Stephenson County Courthouse in Freeport, Illinois.",
    author: "Nyttend",
    license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Stephenson_County_Courthouse.jpg",
    changes: "Center-cropped to 3:2, resized to 1200×800, and saved as WebP.",
    used: "About page",
  },
  {
    file: "snow-street-oak-park-illinois.webp",
    src: "/photos/snow-street-oak-park-illinois.webp",
    alt: "Snow-covered houses along a street in Oak Park, Illinois.",
    author: "David Wilson",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:19980309_04_North_Blvd._%26_Home_Ave._(6336375404).jpg",
    changes: "Center-cropped to 3:2, resized to 1200×800, and saved as WebP.",
    used: "Winter and urgent-call pages. This street is in Oak Park, not Freeport.",
  },
  {
    file: "gas-furnace-utility.webp",
    src: "/photos/gas-furnace-utility.webp",
    alt: "High-efficiency gas furnace in a utility space.",
    author: "Wtshymanski",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Condensing_Forced_Air_Gas_Furnace.jpg",
    changes:
      "Center-cropped to 3:2, resized to 1200×800, and saved as WebP. The adapted file stays under CC BY-SA 4.0.",
    used: "Furnace and humidifier pages",
  },
  {
    file: "outdoor-ac-condenser.webp",
    src: "/photos/outdoor-ac-condenser.webp",
    alt: "Outdoor air-conditioner condenser on a concrete pad beside a house.",
    author: "Andreyanov D",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Air_cond_ext_block.jpg",
    changes: "Center-cropped to 3:2, resized to 1200×800, and saved as WebP.",
    used: "Air conditioner and heat pump pages",
  },
  {
    file: "hvac-technicians-servicing-unit.webp",
    src: "/photos/hvac-technicians-servicing-unit.webp",
    alt: "Two technicians in work clothes servicing a packaged heating and cooling unit.",
    author: "U.S. Air Force photo by Airman 1st Class Skylar Ellis",
    license: "Public domain (U.S. government work)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:HVAC_Technicians_Power_Mission_Success_(8850029).jpg",
    changes: "Center-cropped to 3:2, resized to 1200×800, and saved as WebP.",
    used: "Service and maintenance pages. These are not this website’s technicians.",
  },
  {
    file: "digital-wall-thermostat.webp",
    src: "/photos/digital-wall-thermostat.webp",
    alt: "Digital thermostat mounted on an interior wall.",
    author: "Dvortygirl",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Digital_thermostat_wall.JPG",
    changes:
      "Center-cropped to 3:2, resized to 1200×800, and saved as WebP. The adapted file stays under CC BY-SA 3.0.",
    used: "Uneven-temperature guide",
  },
  {
    file: "sheet-metal-air-duct.webp",
    src: "/photos/sheet-metal-air-duct.webp",
    alt: "Round sheet-metal air duct with a branch takeoff.",
    author: "Mk2010",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Air_duct.jpg",
    changes:
      "Center-cropped to 3:2, resized to 1200×800, and saved as WebP. The adapted file stays under CC BY-SA 3.0.",
    used: "Filtration and airflow pages",
  },
  {
    file: "basement-flexible-ducts.webp",
    src: "/photos/basement-flexible-ducts.webp",
    alt: "Flexible air ducts in an unfinished basement.",
    author: "Martin Cathrae",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Basement_(7029986093).jpg",
    changes:
      "Center-cropped to 3:2, resized to 1200×800, and saved as WebP. The adapted file stays under CC BY-SA 2.0.",
    used: "Indoor-air pages",
  },
  {
    file: "rooftop-packaged-hvac-units.webp",
    src: "/photos/rooftop-packaged-hvac-units.webp",
    alt: "Packaged rooftop heating and cooling units on a commercial roof.",
    author: "P199",
    license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rooftop_Packaged_Units.JPG",
    changes: "Center-cropped to 3:2, resized to 1200×800, and saved as WebP.",
    used: "Commercial pages",
  },
  {
    file: "ductless-indoor-unit.webp",
    src: "/photos/ductless-indoor-unit.webp",
    alt: "Wall-mounted ductless indoor unit in a room.",
    author: "DerHexer",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Duisburg_(DerHexer)_2010-08-12_112.jpg",
    changes:
      "Center-cropped to 3:2, resized to 1200×800, and saved as WebP. The adapted file stays under CC BY-SA 3.0.",
    used: "Ductless mini-split pages",
  },
];
