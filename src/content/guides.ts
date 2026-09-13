export type Guide = {
  slug: string;
  href: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  datePublished: string;
  image: string;
  imageAlt: string;
  body: { heading: string; paragraphs: string[] }[];
  relatedServices: string[];
  relatedGuides: string[];
};

export const guides: Guide[] = [
  {
    slug: "ac-blowing-warm-air",
    href: "/guides/ac-blowing-warm-air/",
    title: "AC blowing warm air in Freeport",
    metaTitle: "AC Blowing Warm Air in Freeport, IL",
    metaDescription:
      "When a Freeport air conditioner runs but the supply air stays warm, the blower is not the cooling system. Safe checks, local causes, and when to request repair.",
    h1: "The AC is on. The air still feels like a Stephenson County July.",
    lede:
      "Warm air from the registers is not a thermostat misunderstanding. In Freeport the outdoor unit often sat idle from first frost to the first sticky week. The indoor blower can move air the whole time the refrigeration side does nothing.",
    datePublished: "2026-09-13",
    image: "/photos/ac-outdoor.jpg",
    imageAlt:
      "Outdoor air conditioner beside a Freeport home after a long idle winter",
    body: [
      {
        heading: "Running is not the same as cooling",
        paragraphs: [
          "Homeowners often report that the system is “working” because they hear the indoor fan. That fan only circulates whatever the coil is doing. If the coil is not getting cold, the air that reaches a west-facing bedroom on an 82°F afternoon will feel like it came from outdoors.",
          "A silent outdoor unit, a humming outdoor unit that never spins, or a fan that spins while the house still climbs are three different failures. Millrace Heating & Air treats them as cooling-circuit problems, not as a reason to keep lowering the setpoint.",
        ],
      },
      {
        heading: "Three checks that are actually safe",
        paragraphs: [
          "Confirm the thermostat is in cool, not heat or emergency heat, and that the setpoint is a few degrees below the indoor temperature. After a long heating season, leftover heat mode is a real Freeport mistake, especially on the first warm Saturday.",
          "Look at the filter. A packed filter after winter dust and a closed-up house can starve the indoor coil. Replace a collapsed or gray filter, then stop. Do not add refrigerant from a can, do not open electrical panels, and do not keep resetting a tripped breaker.",
          "Walk outside and look. If the outdoor fan is still, the disconnect is off, or the unit is buried in last fall’s leaves, that is useful information for the service call. It is not a DIY repair list.",
        ],
      },
      {
        heading: "Why this shows up after an Illinois idle season",
        paragraphs: [
          "Stephenson County is a heating climate. The outdoor condenser spends months under snow, freeze-thaw, and salt-adjacent road grime, then is asked to pull humidity on short notice. Capacitors weaken. Contactors pit. A fan motor that never moved from November to May can seize on the first real call for cooling.",
          "“It cooled fine last August” only means the last run cycle succeeded. It does not mean the parked equipment is ready for the first humid stretch around 61032.",
        ],
      },
      {
        heading: "What usually sits behind warm supply air",
        paragraphs: [
          "A failed start or run capacitor, a stuck contactor, or an outdoor fan that will not turn can leave the compressor unable to do useful work. A dirty indoor or outdoor coil after a winter of neglect has the same symptom: air moves, heat does not leave the house.",
          "Low refrigerant is a leak story, not a seasonal top-off. Guessing the charge hides the leak and can wreck a compressor. That work belongs on a repair visit, not in a driveway experiment.",
        ],
      },
      {
        heading: "Humidity can make “warm” feel worse",
        paragraphs: [
          "Freeport summers are shorter than the winters, but July nights near the 60s still leave moisture in the house. A system that runs without cooling also fails to wring water out of the air. Rooms feel sticky even when a thermometer has not moved much.",
          "If only one floor is miserable, the problem may be airflow or duct layout rather than a dead condenser. That still needs a diagnosis. It is not a reason to close more registers and hope.",
        ],
      },
      {
        heading: "When to request AC repair",
        paragraphs: [
          "Call if the outdoor unit is silent, the breaker trips more than once, the air stays warm after a clean filter and a correct thermostat setting, or the house is already uncomfortable during a hot spell. If someone in the home is vulnerable to heat, treat it as urgent cooling help rather than waiting for “a cooler day.”",
          "Millrace Heating & Air diagnoses the refrigeration side, the blower, and the simple control mistakes that look identical from the couch. Request AC repair and describe what the outdoor unit is doing. That sentence saves time on the visit.",
        ],
      },
    ],
    relatedServices: [
      "ac-repair-freeport-il",
      "ac-maintenance-freeport-il",
      "emergency-hvac-freeport-il",
    ],
    relatedGuides: [
      "ac-freezing-up",
      "ac-constantly-running",
      "poor-airflow",
    ],
  },
  {
    slug: "ac-freezing-up",
    href: "/guides/ac-freezing-up/",
    title: "AC freezing up in Freeport",
    metaTitle: "AC Freezing Up in Freeport, IL",
    metaDescription:
      "Ice on a Freeport air conditioner is a symptom of airflow or charge trouble, not a cold snap. What you can safely do, what to leave alone, and when to request repair.",
    h1: "Ice on the AC is a warning, not a weather report.",
    lede:
      "A coil or suction line coated in frost in Stephenson County June is not “the system working too well.” Ice means heat is not moving the way it should. Keep running it and you can starve the compressor and soak the drain path.",
    datePublished: "2026-09-13",
    image: "/photos/tech-ac-service.jpg",
    imageAlt:
      "Technician checking an air conditioner that has been icing during a Freeport cooling call",
    body: [
      {
        heading: "Frost means the coil is starving for heat",
        paragraphs: [
          "An air conditioner cools by boiling refrigerant in the indoor coil. If not enough indoor air crosses that coil, or if the refrigerant charge is wrong, the coil temperature drops below freezing. Moisture in Freeport’s humid stretches then turns into a white shell.",
          "The outdoor unit can ice in other ways, but the homeowner-visible problem is usually a slushy indoor coil, a hissing line set, or water under the furnace closet after the ice melts. All of those are service symptoms.",
        ],
      },
      {
        heading: "Turn it off. Do not chip the ice.",
        paragraphs: [
          "Set the thermostat to off so the compressor stops making more ice. Leave the fan on if you can, or simply wait. Ice should melt into the drain, not onto finished floors. Put towels down if the closet already weeps.",
          "Do not hammer, scrape, or pour boiling water on a coil. You can puncture fins, bend tubing, and turn a repair into a replacement conversation. Hair dryers and heat guns around refrigerant lines and wiring are a bad idea.",
        ],
      },
      {
        heading: "The filter and the closed-register habit",
        paragraphs: [
          "A dense or months-old filter is the most common ice trigger after a closed-up Freeport winter. Dust that sat in ducts all heating season loads the first cooling week. Swap a plugged filter before you assume the machine is dying.",
          "Closing upstairs registers to “force” air downstairs does the same harm. Many 61032 houses already have tight returns. Starve the coil and it will glaze. Open the supply registers, check the return grille is not blocked by a sofa or laundry, then stop.",
        ],
      },
      {
        heading: "Why this climate produces ice after a long off-season",
        paragraphs: [
          "The outdoor unit sat through snow and freeze-thaw. The indoor coil sat behind a heating-season filter. The first humid afternoon asks that neglected coil to pull a lot of water out of the air. Restricted airflow plus a wet coil is how a Freeport system ices in weather that is nowhere near freezing outdoors.",
          "Low refrigerant from a slow leak can look identical. You cannot tell those two apart by staring at frost. That is why “adding a little gas” without finding a leak is not a plan.",
        ],
      },
      {
        heading: "After the ice is gone",
        paragraphs: [
          "If you restart cooling and the coil ices again within a day, the restriction or the charge problem is still there. Repeated freeze-thaw can throw water into the blower compartment and trip safety switches. That is a repair visit, not a new filter every morning.",
          "Millrace Heating & Air looks at airflow first, then the refrigeration circuit, then the drain. Describe whether the ice was indoors, outdoors, or on the copper lines. Those details change the first tests on site.",
        ],
      },
    ],
    relatedServices: [
      "ac-repair-freeport-il",
      "hvac-repair-freeport-il",
      "ac-maintenance-freeport-il",
    ],
    relatedGuides: [
      "ac-blowing-warm-air",
      "poor-airflow",
      "ac-constantly-running",
    ],
  },
  {
    slug: "ac-constantly-running",
    href: "/guides/ac-constantly-running/",
    title: "AC that never shuts off in Freeport",
    metaTitle: "AC Running Constantly in Freeport, IL",
    metaDescription:
      "A Freeport air conditioner that never stops may be fighting humidity, a dirty coil, leaky ducts, or the wrong size for the house. How to tell normal long runtimes from a problem.",
    h1: "An AC that never rests is not automatically “working hard.”",
    lede:
      "Freeport only books on the order of 690 cooling degree days. Those days are still sticky. A system can run a long afternoon and be doing its job — or it can run from breakfast to midnight because it cannot finish the job. The difference is whether the house actually gets cooler and drier.",
    datePublished: "2026-09-13",
    image: "/photos/ac-outdoor.jpg",
    imageAlt:
      "Outdoor condenser running through a humid Freeport afternoon",
    body: [
      {
        heading: "Long runtimes can be honest weather",
        paragraphs: [
          "On a humid July day with highs around 82°F, a correctly sized system may run most of the afternoon. That is how it wrings moisture out of the air. Short bursts that never pull humidity leave the house clammy even when the thermostat eventually hits the number.",
          "The worry starts when the setpoint never arrives, the outdoor unit runs after sunset with little change indoors, or you feel a weak, lukewarm breeze at the register the entire time.",
        ],
      },
      {
        heading: "What keeps a Freeport system from catching up",
        paragraphs: [
          "A coil still dirty from the heating season, a failing capacitor that keeps the compressor from reaching full work, or a refrigerant leak will all produce an endless run. So will attic or basement ducts that leak cooled air into spaces you do not live in.",
          "Older Freeport houses often have a thermostat in a hallway that cooks by late day while the living room sits behind heavy drapes. The equipment then chases a sensor that does not represent the house. That is a placement and airflow problem, not a reason to keep dropping the setpoint two more degrees.",
        ],
      },
      {
        heading: "Oversized and undersized both feel like “always on”",
        paragraphs: [
          "An undersized or neglected system runs without arriving. An oversized system can also feel restless: it slams the thermostat, short-cycles, and never dehumidifies, so someone turns it down again. Both show up in Stephenson County housing that grew a porch, a finished attic, or a kitchen bump-out after the original equipment was chosen.",
          "Replacement talk belongs after a diagnosis. Runtime alone is not a shopping list, and this page will not turn a symptom into a price.",
        ],
      },
      {
        heading: "Heat pumps confuse the story",
        paragraphs: [
          "If the outdoor unit is a heat pump, long runtimes in shoulder seasons can be normal. The same unit running without heat or cool arriving is not. Auxiliary heat that never drops off is a different complaint and needs heat-pump service, not a cooling-only guess.",
          "Say what kind of outdoor unit you have when you request help. A nameplate photo is enough. Millrace Heating & Air will not diagnose a heat pump as if it were a one-speed air conditioner from the driveway.",
        ],
      },
      {
        heading: "What to do before you call",
        paragraphs: [
          "Change a filthy filter, open supply registers, and make sure the outdoor coil is not packed with cottonwood or grass clippings. Note whether the house is losing ground or merely taking all afternoon to get there.",
          "If the breaker trips, the air turns warm, or ice appears, stop the cooling call and treat those as repair symptoms. Otherwise request AC repair or a maintenance check and describe the runtime, the indoor temperature, and how the air feels at the register.",
        ],
      },
    ],
    relatedServices: [
      "ac-repair-freeport-il",
      "ac-replacement-freeport-il",
      "hvac-maintenance-freeport-il",
    ],
    relatedGuides: [
      "ac-blowing-warm-air",
      "uneven-temperatures",
      "hvac-maintenance-checklist",
    ],
  },
  {
    slug: "furnace-not-heating",
    href: "/guides/furnace-not-heating/",
    title: "Furnace not heating in a Freeport winter",
    metaTitle: "Furnace Not Heating in Freeport, IL",
    metaDescription:
      "If a Freeport furnace will not heat, treat gas and carbon monoxide first. Then use the safe checks, know what lockouts look like, and request heating repair.",
    h1: "A dark furnace on an 11°F night is a safety problem first.",
    lede:
      "January nights in Freeport sit near 11°F. Indoor temperatures fall fast in older houses, and pipes are not hypothetical. Millrace Heating & Air can diagnose a furnace that will not heat — after the house is safe to occupy.",
    datePublished: "2026-09-13",
    image: "/photos/hero-home-winter.jpg",
    imageAlt:
      "Freeport home in winter when indoor heat has to hold against a hard freeze",
    body: [
      {
        heading: "Leave first if the air is not safe",
        paragraphs: [
          "If you smell rotten-egg gas, hear hissing near the meter or furnace, or a carbon monoxide alarm is sounding, get everyone out. Do not flip light switches, use a garage door opener, or call from inside the house. From a safe place, call 911 and Nicor Gas at 888-642-6748.",
          "HVAC troubleshooting starts only after emergency personnel say the property is safe. A no-heat call is not more important than a combustion emergency.",
        ],
      },
      {
        heading: "“Not heating” is several different failures",
        paragraphs: [
          "The furnace may be completely silent. It may try, click, and lock out. It may run the blower and push cold air. It may heat for a minute and quit. Those are different paths: ignition, safety switches, heat exchanger limits, or a thermostat that is not actually calling for heat.",
          "Stephenson County weather makes the distinction urgent. A lockout that would be annoying in October becomes a pipe-risk problem when the low is in the teens and the house has been closed for months.",
        ],
      },
      {
        heading: "The only homeowner checks that belong here",
        paragraphs: [
          "If there is no gas odor and no CO alarm, check three things. The thermostat has power and is set to heat with a setpoint above room temperature. The furnace switch — it looks like a light switch on or near the unit — is on. The filter is not a felt wall.",
          "Then stop. Do not remove burner covers, tap igniters, bypass rollout or pressure switches, or keep cycling the power hoping the board forgets a lockout. Those moves hide the fault and can create a worse one.",
        ],
      },
      {
        heading: "Why Freeport nights expose a weak furnace",
        paragraphs: [
          "This county sees on the order of 6,956 heating degree days and many nights at or below freezing. Igniters, flame sensors, inducer motors, and pressure switches work a full season of cycles. A furnace that “was fine yesterday” can still fail when the outdoor temperature drops and the unit is asked to run for hours.",
          "Older Freeport housing stock is mostly forced-air. When that air handler stops, there is no hidden radiator loop keeping rooms livable. The house cools from the outside walls in.",
        ],
      },
      {
        heading: "Cold air from the registers is still a no-heat call",
        paragraphs: [
          "A blower that runs without burners lighting is not “the furnace working.” It is circulating basement air and making the house colder. Turn the system off if you are sure the house is otherwise safe, then request furnace repair.",
          "If only some rooms have heat, you may be looking at a zone damper, a closed register campaign, or a furnace that can no longer carry the load. That still needs an on-site decision. It is not a reason to run space heaters on extension cords overnight without watching them.",
        ],
      },
      {
        heading: "Request help while the house is still recoverable",
        paragraphs: [
          "Call for furnace repair or emergency HVAC help if the unit will not ignite, keeps locking out, or blows cold air. Say how cold it is indoors, whether you have a gas smell or a CO alarm (if you do, you should already be outside), and what you already checked.",
          "Millrace Heating & Air will not ask you to tear the cabinet apart on the phone. The goal is a safe house and a diagnosis, not a parts-guessing contest at midnight.",
        ],
      },
    ],
    relatedServices: [
      "furnace-repair-freeport-il",
      "emergency-hvac-freeport-il",
      "heating-repair-freeport-il",
    ],
    relatedGuides: [
      "furnace-short-cycling",
      "furnace-replacement-signals",
      "hvac-strange-noises",
    ],
  },
  {
    slug: "furnace-short-cycling",
    href: "/guides/furnace-short-cycling/",
    title: "Furnace short cycling in Freeport cold weather",
    metaTitle: "Furnace Short Cycling in Freeport, IL",
    metaDescription:
      "A Freeport furnace that fires, stops, and repeats is not saving energy. What a full cycle should look like, why deep cold exposes it, and when to request repair.",
    h1: "A furnace that chatters on and off is failing the cycle.",
    lede:
      "In a heating-dominated climate, a furnace is supposed to run long enough to warm the heat exchanger, satisfy the thermostat, and shut down cleanly. Two minutes of flame, a pause, and another try is not thrift. It is a limit, a sensor, or a design problem interrupting the job.",
    datePublished: "2026-09-13",
    image: "/photos/furnace-service.jpg",
    imageAlt:
      "HVAC technician diagnosing a furnace that is not completing a full heat cycle",
    body: [
      {
        heading: "What a finished cycle looks like",
        paragraphs: [
          "A healthy winter cycle is boring. The inducer starts, ignition happens, burners stay lit, the blower comes in, and the system runs until the house actually gains heat. Then it stops. You should not be counting restarts from the kitchen.",
          "Short cycling is the pattern: flame for a short burst, shutdown, repeat. Sometimes you hear a click and a whoosh. Sometimes you only notice that rooms never get comfortable even though the furnace “keeps coming on.”",
        ],
      },
      {
        heading: "Overheating from the way the house is used",
        paragraphs: [
          "Freeport homeowners often close bedroom supplies all day to “save heat,” then wonder why the furnace trips a high-limit and dumps the flame. A dirty filter after months of closed windows does the same thing. The burner is fine. The air cannot carry the heat away.",
          "Open registers, replace a packed filter, and keep furniture off the return. If the chatter continues on a hard-cold night, the airflow restriction is deeper than a filter — a blower, a crushed duct, or equipment that was never matched to the house.",
        ],
      },
      {
        heading: "Ignition parts after a long off-season",
        paragraphs: [
          "Flame sensors and igniters sit unused through a Stephenson County summer, then work every few minutes once nights stay below freezing. A dirty sensor can prove flame, drop the gas valve, and try again. That looks like short cycling and ends in a lockout if you keep resetting it.",
          "Cleaning a flame sensor is not a homeowner project if it means pulling burner covers and guessing at hardware. Request furnace repair and describe the pattern: how long it fires, whether the blower ever starts, and whether it eventually gives up for good.",
        ],
      },
      {
        heading: "Venting and pressure switches in real winter",
        paragraphs: [
          "Snow, ice, and wind against a sidewall vent can confuse a pressure switch. The furnace starts, cannot prove a clear vent, and shuts down. That is more common after drifting snow around 33 to 35 inches a year than it is in a brochure climate.",
          "Do not run a shop-vac down a vent or tape a switch closed. Clearing snow away from a visible termination, without climbing on ice, is the limit of a safe outdoor look. Anything inside the vent path is a service call.",
        ],
      },
      {
        heading: "Oversizing is a diagnosis, not a sales pitch",
        paragraphs: [
          "A furnace that is too large for the load can satisfy a hallway thermostat before distant rooms move. It then sits, the house drifts, and it fires again. Replacement might be the answer later. So might duct changes or a control problem. Millrace Heating & Air will not treat every short cycle as a reason to swap the box.",
          "Repeated lockouts on a design-cold night are urgent. A mild short cycle that started last week is still a repair visit. Neither one is a DIY board reset ritual.",
        ],
      },
    ],
    relatedServices: [
      "furnace-repair-freeport-il",
      "furnace-maintenance-freeport-il",
      "furnace-installation-freeport-il",
    ],
    relatedGuides: [
      "furnace-not-heating",
      "poor-airflow",
      "furnace-replacement-signals",
    ],
  },
  {
    slug: "hvac-strange-noises",
    href: "/guides/hvac-strange-noises/",
    title: "Strange HVAC noises in Freeport homes",
    metaTitle: "Strange HVAC Noises in Freeport, IL",
    metaDescription:
      "Booms, squeals, rattles, and bangs from a Freeport furnace or air conditioner are information. Which sounds can wait for service, and which mean stop and leave.",
    h1: "New noises from the furnace or AC are the system talking.",
    lede:
      "Forced-air equipment in older Freeport houses is rarely silent. A soft whoosh at startup is normal. A boom, a metal-on-metal grind, or a scream from the outdoor fan is not. Treat a new sound as a symptom, not as background for the winter.",
    datePublished: "2026-09-13",
    image: "/photos/furnace.jpg",
    imageAlt:
      "Furnace cabinet where startup booms and blower noises show up first",
    body: [
      {
        heading: "A sound you did not have last week matters",
        paragraphs: [
          "Houses in 61032 expand and contract through huge temperature swings. Duct ticks on the first heat of the day can be metal moving. A repeatable bang at ignition, a squeal that follows the blower, or a rattle that tracks the outdoor fan is mechanical wear, debris, or delayed ignition.",
          "Note whether the noise is at the furnace, in the ceiling, or outside. That single sentence is more useful than “it sounds bad.”",
        ],
      },
      {
        heading: "Heating sounds that need a visit",
        paragraphs: [
          "A boom or thud when burners light can be delayed ignition — gas filling the heat exchanger before it lights. That is a repair problem, not a quirk of cold weather. Whistling at the burner or a roaring that is new can point to combustion or airflow changes.",
          "Squeals and chirps that start when the blower comes on are often bearings or a belt on older air handlers. Grinding is worse. Turn the system off if the sound is harsh and the house is otherwise safe, then request heating repair.",
        ],
      },
      {
        heading: "Cooling sounds after a long sit",
        paragraphs: [
          "The first spring start in Stephenson County is when outdoor fans announce seized bearings, debris in the blade, or a loose access panel that buzzes. A scream from the condenser is not “getting the rust out.” Shut the cooling off and request AC repair.",
          "A rattle that comes and goes with wind may be a loose grille. A rattle that comes and goes with the compressor is not something to chase with a screwdriver while the disconnect is on.",
        ],
      },
      {
        heading: "Duct noises in older Freeport layouts",
        paragraphs: [
          "Popping sheet metal when the blower starts is common in long, undersized runs and in additions tied onto the original trunk. It can be a comfort issue, an airflow issue, or both. It is rarely fixed by closing more registers.",
          "A sudden whistle at one grille often means a damper or a crushed flex run. Those belong on an HVAC repair visit with the blower actually running so the sound can be traced.",
        ],
      },
      {
        heading: "Noise plus smell is not a tuning problem",
        paragraphs: [
          "Burning dust on the first heat of the fall can last a short time and fade. A sharp electrical smell, hot insulation, or anything like gas is a stop-and-leave moment if gas or carbon monoxide is in play. Out of the house, then 911 and Nicor Gas at 888-642-6748.",
          "If the house is safe and the smell is “hot dust” that does not clear, still request service. Do not keep running a furnace that smells like wiring.",
        ],
      },
      {
        heading: "What Millrace needs on the call",
        paragraphs: [
          "Say when the sound happens: ignition, blower start, mid-cycle, or shutdown. Say whether heat, cooling, or both make it. Mention if it started after a power blip, a filter change, or the first cold snap.",
          "Millrace Heating & Air will diagnose from the equipment, not from a noise vocabulary list. The point of this page is to keep you from ignoring a boom or taking a cabinet apart to look.",
        ],
      },
    ],
    relatedServices: [
      "hvac-repair-freeport-il",
      "furnace-repair-freeport-il",
      "ac-repair-freeport-il",
    ],
    relatedGuides: [
      "furnace-not-heating",
      "ac-blowing-warm-air",
      "furnace-replacement-signals",
    ],
  },
  {
    slug: "poor-airflow",
    href: "/guides/poor-airflow/",
    title: "Poor airflow in Freeport forced-air homes",
    metaTitle: "Poor HVAC Airflow in Freeport, IL",
    metaDescription:
      "Weak air at the register in a Freeport house is usually a filter, return, duct, or blower problem. Why closed rooms and dense filters make winter and summer worse.",
    h1: "If the register barely breathes, the equipment is already in trouble.",
    lede:
      "Forced-air heat and cooling only work if air can complete a loop. Many Freeport houses were built around a basement furnace and a short list of returns. Starve that loop and you get cold rooms, iced coils, short cycling, and a blower that sounds busier than it is.",
    datePublished: "2026-09-13",
    image: "/photos/iaq-filter.jpg",
    imageAlt:
      "Furnace filter that has loaded up and is restricting airflow",
    body: [
      {
        heading: "Weak air is a system problem, not a “vent” problem",
        paragraphs: [
          "Homeowners often hunt for one closed damper. The more common Freeport pattern is a filter that has become a wall, a return blocked by storage, or a blower that can no longer move the design amount of air. One weak bedroom can be a crushed run. Every register feeling soft is the air handler or the filter.",
          "Hold a piece of tissue at the return. If it does not pull, the system is not circulating. That is worth a service request even if the furnace still makes heat.",
        ],
      },
      {
        heading: "Filter choices that choke a northern Illinois furnace",
        paragraphs: [
          "A thicker, tighter filter is not automatically better. Many furnaces in older 61032 houses were never set up for a dense media cabinet. A filter that looks “more serious” can drop airflow until the heat exchanger overheats or the AC coil ices.",
          "Use the size printed on the old filter, keep it seated so air cannot bypass the edge, and change it when it is loaded — more often during a closed winter than a marketing calendar says. If a high-resistance filter was installed and the house immediately felt stuffy, bring that up on the call.",
        ],
      },
      {
        heading: "Closed rooms work against the furnace",
        paragraphs: [
          "Shutting every upstairs supply to push heat downstairs is a common Stephenson County habit. It raises static pressure, trips limits, and still leaves the closed rooms to freeze overnight. The same habit in summer ices the coil.",
          "Interior doors that never have a jumper or undercut also starve returns. The equipment is then asked to pull air from a sealed box. That is a house-use problem Millrace Heating & Air can explain on site. It is not fixed by a hotter setpoint.",
        ],
      },
      {
        heading: "Ducts in additions and older trunks",
        paragraphs: [
          "Freeport houses collect porch enclosures, attic rooms, and kitchen expansions. The original trunk is often still sized for the first floor plan. Flex that dips, disconnected takeoffs in a crawl, and leaky returns in an unfinished basement all steal air before it reaches the grille you care about.",
          "Finding that is diagnostic work with the blower running. It is not a weekend of unhooking ducts without a plan.",
        ],
      },
      {
        heading: "What happens if you ignore weak air",
        paragraphs: [
          "In winter you get short cycling and rooms that never recover on an 11°F night. In summer you get freeze-ups and an AC that runs without drying the house. Both look like “bad equipment” when the air path is the fault.",
          "Request HVAC repair or maintenance and say which rooms are weak, whether it started after a filter change, and whether heat, cooling, or both feel anemic. Bring a photo of the filter if you have one.",
        ],
      },
    ],
    relatedServices: [
      "hvac-repair-freeport-il",
      "hvac-maintenance-freeport-il",
      "indoor-air-quality-freeport-il",
    ],
    relatedGuides: [
      "uneven-temperatures",
      "ac-freezing-up",
      "furnace-short-cycling",
    ],
  },
  {
    slug: "uneven-temperatures",
    href: "/guides/uneven-temperatures/",
    title: "Uneven temperatures in Freeport houses",
    metaTitle: "Uneven Temperatures in Freeport, IL",
    metaDescription:
      "Why one Freeport room stays cold in January or hot in July while the thermostat is happy. Ducts, two-story stacks, additions, and when a mini split is the honest tool.",
    h1: "The thermostat can be comfortable while the back bedroom is not.",
    lede:
      "A hallway sensor does not heat a converted attic or a parlor with three exterior walls. Uneven temperatures in Freeport are usually a building-and-duct story. Sometimes they are a failing blower or a heat pump in defrost. They are rarely solved by one more closed register.",
    datePublished: "2026-09-13",
    image: "/photos/hero-home-winter.jpg",
    imageAlt:
      "Two-story Freeport house where upstairs and downstairs rarely feel the same",
    body: [
      {
        heading: "Winter stacks heat. Summer stacks the opposite.",
        paragraphs: [
          "In a two-story house, warm air wants the upstairs. During a long Stephenson County heating season that can leave the first floor chasing the thermostat while bedrooms overshoot. In July the upstairs holds the day’s heat and the basement feels fine.",
          "That pattern is physics plus duct layout. It is not proof the furnace is “too small” or the AC is “too big” until someone looks at both the load and the air path.",
        ],
      },
      {
        heading: "Rooms the original system never met",
        paragraphs: [
          "Additions, sunrooms, and finished third-floor spaces are common on older Freeport lots. A single basement furnace with one return in a hallway was never a plan for those rooms. They lose heat through more glass and more exterior surface, then receive the leftover air at the end of a long run.",
          "Closing doors to those rooms makes the rest of the house easier and those rooms worse. If you need them livable, say so on the visit. The answer might be duct changes, balancing, or a ductless head — not a hotter furnace setpoint that overheats the living room.",
        ],
      },
      {
        heading: "When the equipment is actually the uneven part",
        paragraphs: [
          "A weak blower, a failing zone damper, or a heat pump that spends long stretches in defrost can make the whole house feel like it is taking turns. Rooms nearest the air handler stay closer to the setpoint. Distant rooms drift.",
          "If uneven comfort started suddenly after years of being “good enough,” think repair before redesign. A slow drift over a decade of added insulation in one room and none in another is a different conversation.",
        ],
      },
      {
        heading: "Ductless as a room tool, not a slogan",
        paragraphs: [
          "A ductless mini split can heat and cool a stubborn addition without forcing the original trunk to do work it cannot do. That is useful in a heating-first climate if the head is chosen and placed for January, not only for a July demo.",
          "Millrace Heating & Air will not pretend a wall unit fixes a cracked heat exchanger or a house-wide airflow failure. It is a tool for rooms the ducts cannot serve honestly.",
        ],
      },
      {
        heading: "What to record before a visit",
        paragraphs: [
          "Write down three temperatures at the same hour: thermostat hallway, worst cold room, worst hot room. Note whether the problem is winter, summer, or both. Note which doors stay closed.",
          "Request HVAC repair if the change was sudden. Request a broader heating or ductless conversation if the house has always had a dead room and you are done living around it. Nearby towns in the same climate — Lena, Cedarville, Dakota — see the same stack effect. The house details still have to be yours.",
        ],
      },
    ],
    relatedServices: [
      "hvac-repair-freeport-il",
      "ductless-mini-split-freeport-il",
      "furnace-repair-freeport-il",
    ],
    relatedGuides: [
      "poor-airflow",
      "heat-pump-basics-northern-illinois",
      "indoor-air-quality-closed-homes",
    ],
  },
  {
    slug: "hvac-maintenance-checklist",
    href: "/guides/hvac-maintenance-checklist/",
    title: "HVAC maintenance checklist for Freeport seasons",
    metaTitle: "HVAC Maintenance Checklist for Freeport, IL",
    metaDescription:
      "A seasonal HVAC checklist for Freeport homes: what you can do safely before winter and summer, and what belongs on a Millrace Heating & Air maintenance visit.",
    h1: "Maintenance here follows the heating year, not a generic calendar.",
    lede:
      "A furnace that will face roughly 7,000 heating degree days needs a fall check. An air conditioner that sat under snow needs a spring check. This list is the split Millrace Heating & Air uses in Stephenson County: homeowner tasks that are safe, and work that is not a Saturday project.",
    datePublished: "2026-09-13",
    image: "/photos/maintenance.jpg",
    imageAlt:
      "Seasonal HVAC maintenance on equipment that has to face a Freeport winter",
    body: [
      {
        heading: "Two seasons, two jobs",
        paragraphs: [
          "Fall is for combustion, venting, ignition, and airflow before nights stay below freezing. Spring is for the outdoor unit, coils, and a cooling test before the first humid week. Doing both on one random afternoon in March skips the season that is about to punish the machine.",
          "Maintenance does not prevent every failure. It finds dirty burners, weak capacitors, unsafe venting, and plugged drains earlier than a lockout at 10°F.",
        ],
      },
      {
        heading: "Fall tasks that stay on your side of the cabinet",
        paragraphs: [
          "Replace a loaded filter. Make sure the furnace switch is on and the thermostat can call for heat. Keep storage, paint cans, and cardboard off the sides of the furnace and away from the vent path. Walk the outdoor vent termination after the first wet snow and keep it visible — from the ground, not from a ladder on ice.",
          "Test carbon monoxide alarms with their own buttons. That is household safety, not HVAC repair. If an alarm sounds for real, leave and use 911 and Nicor Gas at 888-642-6748.",
        ],
      },
      {
        heading: "What a fall heating visit is actually for",
        paragraphs: [
          "A technician should look at ignition, flame quality, safety switches, condensate on high-efficiency equipment, blower operation, and whether the system completes a cycle instead of chatting on and off. That is also when cracked-heat-exchanger warning signs and blocked vents should be caught.",
          "You do not need a parts list in advance. You need the unit run through a real heat call, not a two-minute glance with the door closed.",
        ],
      },
      {
        heading: "Spring tasks before the first sticky week",
        paragraphs: [
          "Clear cottonwood, leaves, and winter debris from around the outdoor unit so air can move across the coil. Confirm the disconnect is on. Put the thermostat in cool for a short test on a mild day, then listen: outdoor fan, indoor blower, and whether the air at the register actually turns cold.",
          "If the breaker trips, the outdoor unit stays silent, or the air stays warm, stop the test and request AC repair. A spring “peek” that ends in a dead compressor is not a DIY win.",
        ],
      },
      {
        heading: "What a spring cooling visit is actually for",
        paragraphs: [
          "Idle-season damage shows up here: capacitors, contactors, fan motors, dirty coils, and drains that will overflow the first time the system pulls humidity. The point is to find that before an 82°F afternoon when every house in 61032 wants the same help.",
          "If you already had ice, warm air, or a trip last summer, say that on the request. Those are not footnotes. They are the reason for the visit.",
        ],
      },
      {
        heading: "Mid-season, keep it simple",
        paragraphs: [
          "In January, watch for short cycling, new noises, and filters that load faster because the house is shut. In July, watch for ice, weak air, and a drain that smells like it is sitting wet. Change filters when they are dirty, not when a sticker says a year has passed.",
          "Space heaters and window units are not a maintenance plan. They are stopgaps. If you are living on them, request repair or a replacement conversation for the central system.",
        ],
      },
      {
        heading: "How to request a check",
        paragraphs: [
          "Ask for HVAC maintenance and say whether you want the heating visit, the cooling visit, or both on their proper seasons. Mention nearby equipment — humidifier, heat pump, mini split — so the visit is not planned as a single-furnace glance.",
          "The useful move is a seasonal check timed to Freeport weather, then repair if the check finds something that should not wait.",
        ],
      },
    ],
    relatedServices: [
      "hvac-maintenance-freeport-il",
      "furnace-maintenance-freeport-il",
      "ac-maintenance-freeport-il",
    ],
    relatedGuides: [
      "furnace-replacement-signals",
      "ac-blowing-warm-air",
      "indoor-air-quality-closed-homes",
    ],
  },
  {
    slug: "furnace-replacement-signals",
    href: "/guides/furnace-replacement-signals/",
    title: "When a Freeport furnace is telling you it is done",
    metaTitle: "Furnace Replacement Signals in Freeport, IL",
    metaDescription:
      "Replacement signals for a Freeport furnace: safety, repeat failures, rooms that never recover, and equipment that cannot face another Stephenson County winter. No price list.",
    h1: "Replacement is a reliability decision, not a birthday party for the furnace.",
    lede:
      "Age matters. A cracked heat exchanger, a cabinet that cannot keep the house livable on a design-cold night, and a parts chase every freeze matter more. Millrace Heating & Air treats replacement as the end of a diagnosis, not the start of a catalog.",
    datePublished: "2026-09-13",
    image: "/photos/furnace.jpg",
    imageAlt:
      "Older gas furnace that may be past honest repair in a Freeport basement",
    body: [
      {
        heading: "Safety closes the conversation",
        paragraphs: [
          "A heat exchanger that is cracked, a furnace that spills combustion products, or a unit that cannot vent correctly is not a “repair vs replace” debate you shop around. The house has to be safe. If gas odor or a carbon monoxide alarm is involved, leave first, then 911 and Nicor Gas at 888-642-6748.",
          "After the property is safe, the equipment decision is simple: it does not go back into service in that condition. How you heat the house next is a separate, on-site talk.",
        ],
      },
      {
        heading: "The same failure on the next cold snap",
        paragraphs: [
          "One igniter, one dirty sensor, one pressure switch — those can be honest repairs on a furnace that still carries the load. The signal is the pattern: lockouts every time the low drops toward the January normal, a blower that was already replaced, a control board that has been swapped, and the house still going dark in the next Arctic front.",
          "Stephenson County will give that furnace another long heating season. If last winter was a string of no-heat nights, this page is the replacement conversation, not another hopeful part.",
        ],
      },
      {
        heading: "Comfort the repair cannot restore",
        paragraphs: [
          "If distant rooms never recover even with clean filters and open registers, the furnace may be undersized, the ducts may be wrong, or the heat exchanger and blower may no longer move enough heat. A technician has to separate those. A website cannot.",
          "Replacement without looking at ducts can leave you with a new box and the same cold parlor. Ask for that to be part of the visit. It is not an upsell story. It is how Freeport houses actually fail to heat.",
        ],
      },
      {
        heading: "Parts and the age of the design",
        paragraphs: [
          "Some older furnaces are still serviceable. Some use heat exchangers, boards, or heat-exchanger styles that are no longer a sane repair path. Availability and condition matter more than a round number of winters.",
          "Bring the model and serial if you can read them without taking the cabinet apart. Photographs of the data plate help. Do not force panels to get a prettier picture.",
        ],
      },
      {
        heading: "A heat pump can be part of the same talk",
        paragraphs: [
          "If the furnace is at the end, you can ask whether a cold-climate heat pump, a dual-fuel pair, or another gas furnace fits this house. That question is climate math — about 6,956 heating degree days versus about 690 cooling degree days — not a rebate flyer.",
          "A heat pump that cannot heat near Freeport’s January nights is the wrong machine. Say you want that said out loud. Millrace Heating & Air will not pretend northern Illinois is a mild-climate brochure.",
        ],
      },
      {
        heading: "What this page will not do",
        paragraphs: [
          "This page does not quote equipment prices. Repair versus replacement depends on the furnace, the ducts, and how the house is behaving.",
          "Request furnace repair if you are still on the fence and the house is failing now. Request a furnace installation conversation if you already know the current unit should not be asked to do another January. Either way, start with what the furnace is doing tonight, not with a catalog page.",
        ],
      },
    ],
    relatedServices: [
      "furnace-installation-freeport-il",
      "hvac-replacement-freeport-il",
      "furnace-repair-freeport-il",
    ],
    relatedGuides: [
      "furnace-not-heating",
      "furnace-short-cycling",
      "heat-pump-basics-northern-illinois",
    ],
  },
  {
    slug: "heat-pump-basics-northern-illinois",
    href: "/guides/heat-pump-basics-northern-illinois/",
    title: "Heat pump basics for northern Illinois",
    metaTitle: "Heat Pump Basics for Freeport, IL",
    metaDescription:
      "How heat pumps actually heat a Freeport house: capacity in the cold, defrost, backup heat, and dual fuel. Written for Stephenson County winters, not a mild-climate brochure.",
    h1: "A heat pump in Freeport has to heat. Cooling is the easy half.",
    lede:
      "Heat pumps move heat. In July that is simple. In January, when Freeport nights sit near 11°F, the outdoor air holds less heat and the unit has to work differently. If you do not understand defrost and backup heat, the machine will look broken on the nights it is doing its hardest job.",
    datePublished: "2026-09-13",
    image: "/photos/heat-pump.jpg",
    imageAlt:
      "Heat pump outdoor unit that must heat through a northern Illinois winter",
    body: [
      {
        heading: "One outdoor unit, two seasons, unequal work",
        paragraphs: [
          "A heat pump cools like an air conditioner and heats by reversing that cycle. Stephenson County’s year is not balanced. Heating degree days dwarf cooling degree days. Equipment, backup heat, and duct design have to be chosen for the long season, not for a shoulder-week demo.",
          "If someone talks only about summer efficiency, they are not talking about 61032.",
        ],
      },
      {
        heading: "Capacity falls as the thermometer does",
        paragraphs: [
          "Cold-climate heat pumps exist and can heat in this weather when they are selected and installed for it. Bargain units copied from a milder catalog lose capacity as outdoor temperatures drop. Rooms fall behind. Electric strips or a furnace take over — or the house simply goes cold.",
          "“It ran fine in October” is not evidence it will hold a design-cold night. Ask what the system is supposed to do near the January normal, not at 40°F.",
        ],
      },
      {
        heading: "Defrost looks like a failure if nobody explained it",
        paragraphs: [
          "When the outdoor coil ices, the heat pump briefly reverses to melt it. Steam, a whoosh, and a pause in useful heat are expected. Long, frequent defrosts, a fan buried in ice that never clears, or indoor air that goes cold for long stretches are not “just defrost.” Those are service symptoms.",
          "Keep the outdoor unit clear of drifting snow so it can breathe and defrost. Do not chip ice off the coil. Request heat-pump repair if ice wins.",
        ],
      },
      {
        heading: "Backup heat is part of the system",
        paragraphs: [
          "Strips, a gas furnace in a dual-fuel pair, or another auxiliary source cover the hours when the pump cannot carry the full load — or when it is defrosting. Auxiliary heat that never stops, or a dual-fuel setup that never uses the pump, means the controls or the outdoor unit need a look.",
          "Turning off backup heat to “make the heat pump work” on a single-digit night is how people end up with a cold house. The backup is not a moral failing. It is how northern Illinois stays livable.",
        ],
      },
      {
        heading: "If you already own one and it is misbehaving",
        paragraphs: [
          "No heat, lukewarm air, a unit that runs without changing the house, or a defrost cycle that never ends belong on a heat-pump repair visit. Describe outdoor temperature, whether steam is coming off the unit, and whether you have a furnace paired with it.",
          "Do not add refrigerant yourself. Do not keep switching modes hoping the reversing valve guesses correctly.",
        ],
      },
      {
        heading: "If you are considering one during a furnace conversation",
        paragraphs: [
          "Say it on the call. The honest questions are load, ducts, backup plan, and whether the house can be heated when the low is near 11°F. Dual fuel is common in heating-dominated climates for a reason. All-electric can be right in some houses and wrong in others.",
          "Millrace Heating & Air will not turn this into a rebate shopping page or an anti-heat-pump rant. It is climate math, then an on-site look. Request heat-pump installation only when you want that conversation, not when you need heat tonight — that is repair.",
        ],
      },
    ],
    relatedServices: [
      "heat-pump-repair-freeport-il",
      "heat-pump-installation-freeport-il",
      "heat-pump-maintenance-freeport-il",
    ],
    relatedGuides: [
      "furnace-replacement-signals",
      "uneven-temperatures",
      "hvac-maintenance-checklist",
    ],
  },
  {
    slug: "indoor-air-quality-closed-homes",
    href: "/guides/indoor-air-quality-closed-homes/",
    title: "Indoor air in closed-up Freeport winters",
    metaTitle: "Indoor Air in Closed Freeport Homes",
    metaDescription:
      "What happens to indoor air when Freeport homes stay shut from late fall through March: dry heat, loaded filters, dusty coils, and when the problem is combustion instead.",
    h1: "From first freeze to thaw, the house recirculates itself.",
    lede:
      "Windows in Stephenson County stay closed for months. Snow season around 33 to 35 inches is not a ventilation plan. The furnace moves the same indoor air through the same filter and the same ducts. That can feel stale or dry even when the heat is working. This page is about comfort and equipment — not about treating any condition.",
    datePublished: "2026-09-13",
    image: "/photos/humidifier.jpg",
    imageAlt:
      "Whole-home humidifier on a Freeport furnace during the closed-window season",
    body: [
      {
        heading: "Closed-building season is the local fact",
        paragraphs: [
          "A Freeport winter is a long recirculation loop. Cooking, laundry, dust from old plaster and carpets, and whatever is sitting in the returns all stay inside. Forced-air heat also dries the air because cold outdoor air holds little moisture and heated indoor air feels drier still.",
          "That combination is why people start hunting for an “air quality product” in January. Start with the air path you already have: filter, coil, humidity controls, and a furnace that completes a cycle instead of short-cycling dusty air.",
        ],
      },
      {
        heading: "Dry air is a comfort and woodwork problem",
        paragraphs: [
          "Low winter humidity shows up as static, shrinking woodwork, and air that feels dry in the house. A humidifier on the furnace can add moisture when it is sized, installed, and maintained as part of the heating system. A portable unit in one room only treats that room and can wet the wrong surfaces if it runs unattended.",
          "Humidifiers need clean water paths and a seasonal shutdown. A neglected pad becomes a smell source. Request a humidity conversation as equipment service, not as a wellness promise.",
        ],
      },
      {
        heading: "Filters that clean the air still have to let air through",
        paragraphs: [
          "A loaded filter after months of closed windows will push dust around the bypass and starve the furnace. A filter that is too tight for the blower will do the same with a cleaner-looking pleat. Neither one “purifies the house.”",
          "If you want a better filter, the cabinet and the blower have to be able to use it. That is an indoor-air and maintenance visit, not a thicker pad shoved into a slot that used to hold a cheap fiberglass rectangle.",
        ],
      },
      {
        heading: "Coils and ducts collect the winter",
        paragraphs: [
          "An indoor coil that never gets cleaned becomes a wet, dusty mat the first time cooling runs — and it can smell long before that if the drain is sitting. Returns in unfinished basements pull whatever is stored down there. Those are HVAC cleanliness problems.",
          "Opening a trunk line to “clean ducts” without a plan can make a mess and not fix a dirty coil. Say what you smell and when you smell it. Millrace Heating & Air will start with the equipment that actually contacts the airstream.",
        ],
      },
      {
        heading: "Gas and carbon monoxide are not an accessory",
        paragraphs: [
          "A combustion problem is not an indoor-air upgrade. If you smell gas or a carbon monoxide alarm sounds, leave. Call 911 and Nicor Gas at 888-642-6748 from outside. Do not unbox a filter or a humidifier on the way out.",
          "Soot, spilled fumes, or a furnace that smells like exhaust belong on emergency or heating repair after the house is cleared. They do not belong on a product page.",
        ],
      },
      {
        heading: "What to request",
        paragraphs: [
          "Ask for indoor air quality service if the issue is filtration, humidity equipment, or a system that recirculates dust because it cannot move air. Ask for maintenance if you have not had a fall heating check. Ask for repair if the furnace is short cycling or the coil is filthy enough to smell.",
          "This is not a medical page and it is not a cost page. The useful outcome in a closed Freeport house is equipment that moves clean-enough air without choking the furnace — and a house you can stay in because combustion is handled as safety, not as a gadget.",
        ],
      },
    ],
    relatedServices: [
      "indoor-air-quality-freeport-il",
      "air-filtration-freeport-il",
      "humidifiers-dehumidifiers-freeport-il",
    ],
    relatedGuides: [
      "hvac-maintenance-checklist",
      "poor-airflow",
      "uneven-temperatures",
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
