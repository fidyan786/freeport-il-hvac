export type ServiceCategory =
  | "heating"
  | "cooling"
  | "hvac"
  | "heat-pump"
  | "ductless"
  | "iaq"
  | "commercial";

export type ServicePageContent = {
  slug: string;
  href: string;
  category: ServiceCategory;
  navLabel: string;
  navDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  lede: string;
  image: string;
  imageAlt: string;
  problems: { title: string; text: string }[];
  symptoms: string[];
  explanation: string[];
  causes: { title: string; text: string }[];
  process: { title: string; text: string }[];
  whenToCall: string[];
  nextSteps: string[];
  why: string[];
  local: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: ServicePageContent[] = [
  {
    slug: "ac-repair-freeport-il",
    href: "/services/ac-repair-freeport-il/",
    category: "cooling",
    navLabel: "AC Repair",
    navDescription: "Cooling that failed after sitting through winter.",
    metaTitle: "AC Repair in Freeport After a Long Idle Winter",
    metaDescription:
      "Freeport air conditioners sit idle through snow and freeze-thaw. If the first hot afternoon leaves the house warm, call for AC repair in Stephenson County.",
    h1: "The first real cooling day is when Freeport air conditioners show their winter damage.",
    eyebrow: "Cooling repair · Freeport 61032",
    lede: "The outdoor unit made it through snow. That is not a diagnosis. If the thermostat is on cool and the house still climbs, Millrace Heating & Air will find whether the refrigeration circuit is actually working.",
    image: "/photos/tech-ac-service.jpg",
    imageAlt:
      "Technician checking an outdoor air conditioner after winter idle in Freeport, Illinois",
    problems: [
      {
        title: "Silent outdoor unit on a sticky afternoon",
        text: "The indoor blower can run while the condensing unit never starts. That is not “the AC working.” It is a fan moving house air.",
      },
      {
        title: "Warm supply air",
        text: "Vents feel like attic air. The compressor, charge, outdoor fan, or indoor coil may not be doing any cooling work.",
      },
      {
        title: "Breaker that will not stay on",
        text: "A trip on the first call for cooling often points to a seized fan, a shorted capacitor, or a compressor that is trying and failing to start.",
      },
      {
        title: "Ice on the indoor coil in July",
        text: "Ice is a symptom, not a setting. Restricted airflow and a refrigerant problem can both freeze a coil on a mild Freeport summer day.",
      },
    ],
    symptoms: [
      "Thermostat calls for cool and the outdoor fan never moves",
      "A click at the outdoor unit, then nothing",
      "House humidity stays high even though the system “runs”",
      "One floor cools a little; the upstairs does not",
      "A burning or electrical smell from the outdoor disconnect",
      "Short bursts of cooling that stop after a few minutes",
    ],
    explanation: [
      "Cooling equipment in Stephenson County lives most of the year off. Snow, ice, and unused start components sit on the pad from the last useful August through the first useful June. Capacitors weaken. Contactors pit. Insects and debris take the condenser. None of that announces itself until someone finally asks the machine to reject heat.",
      "Repair starts with the obvious and safe: thermostat mode, filter, breaker, and whether the outdoor fan and compressor are even trying. After that, guessing refrigerant from a can is not a plan. Charge problems hide leaks. A locked compressor is not a DIY capacitor swap.",
      "If the unit is old, we will still diagnose it. Age is a fact. It is not an automatic sales script. Some first-hot-day failures are a failed start component. Some are a system that has been leaking slowly for years. You get the difference in plain language.",
    ],
    causes: [
      {
        title: "Idle-season electrical wear",
        text: "Start capacitors and contactors sit unused through a long heating season, then get asked for a hard start on the first 80-degree afternoon.",
      },
      {
        title: "Airflow the house forgot about",
        text: "A packed filter, a dirty indoor coil, or closed upstairs registers can look like “the AC died” when the refrigeration circuit is still intact.",
      },
      {
        title: "Charge that left during the off months",
        text: "A slow leak does not care that you did not use cooling from October to May. The first real load exposes it.",
      },
      {
        title: "Outdoor fan that froze, rusted, or seized",
        text: "A fan that will not turn overheats the compressor. That is a repair clock, not a wait-and-see.",
      },
    ],
    process: [
      {
        title: "Confirm it is actually a cooling call",
        text: "We check mode, set point, power, and whether the indoor blower is the only thing running.",
      },
      {
        title: "Look at the outdoor unit as found",
        text: "Ice, debris, a still fan, and burnt terminals tell a story before gauges come out.",
      },
      {
        title: "Test the circuit, not a hunch",
        text: "Capacitor, contactor, fan motor, and compressor behavior get measured. Refrigerant work stays regulated and leak-aware.",
      },
      {
        title: "Say what the house needs next",
        text: "Repair, a coil-and-condenser conversation, or a spring maintenance plan if this was preventable idle damage.",
      },
    ],
    whenToCall: [
      "The outdoor unit is silent while the house warms up",
      "Supply air is warm on a day that should be an easy cooling load",
      "The breaker trips when cooling is called",
      "You see ice on the copper or the indoor coil",
      "Water is around the furnace cabinet during a cooling cycle",
    ],
    nextSteps: [
      "Set the thermostat to cool and note whether the outdoor unit starts.",
      "Check the filter. If it is packed, replace it, then stop opening panels.",
      "Call or request service. Describe what you hear at the outdoor unit.",
    ],
    why: [
      "We treat “it worked last August” as a history note, not a diagnosis.",
      "Refrigerant is not a top-off product. If charge is wrong, we look for why.",
      "You hear repair versus replacement after the test, not before we arrive.",
    ],
    local: [
      "Freeport’s cooling season is short next to the heat. Roughly 690 cooling degree days still produce real July afternoons near 82°F, and humidity does the rest.",
      "The outdoor condenser sits through about 35 inches of snow and a long freeze-thaw stretch. First-run failures after that idle period are common here, not mysterious.",
      "Older 61032 houses often have marginal ducts upstairs. Weak cooling on the second floor can be airflow, not only a tired compressor.",
    ],
    faqs: [
      {
        q: "Why did the AC fail the first afternoon I needed it?",
        a: "It sat unused through a Stephenson County winter. Start components, contactors, and outdoor fans often fail on the first real call for cooling, not in August when you last remember it working.",
      },
      {
        q: "The blower is running. Isn’t that the air conditioner?",
        a: "No. The blower moves air. Cooling happens at the coil and outdoor unit. Warm vents with a running blower still belong on a repair visit.",
      },
      {
        q: "Can I add refrigerant from a hose kit?",
        a: "No. Refrigerant work is regulated, and extra gas hides leaks. Call for AC repair instead of charging a system you cannot see.",
      },
      {
        q: "Is ice on the lines a good sign in summer?",
        a: "No. Ice usually means airflow or charge trouble. Turn the system off if the coil is a block of ice and request service.",
      },
      {
        q: "Do you only work on brand-new equipment?",
        a: "No. We diagnose the unit that is on the pad. Age matters for parts and remaining life. It does not decide the visit before we test.",
      },
    ],
    related: [
      "ac-maintenance-freeport-il",
      "ac-replacement-freeport-il",
      "emergency-hvac-freeport-il",
      "hvac-repair-freeport-il",
    ],
  },
  {
    slug: "ac-installation-freeport-il",
    href: "/services/ac-installation-freeport-il/",
    category: "cooling",
    navLabel: "AC Installation",
    navDescription: "New AC sized for the house and the short cooling season.",
    metaTitle: "AC Installation in Freeport for Real Houses, Not Catalogs",
    metaDescription:
      "New air conditioning in Freeport has to match older ducts and a heating-first climate. Talk through AC installation for a 61032 house before you buy a box.",
    h1: "A new air conditioner in Freeport has to fit the house, not a cooling-heavy catalog.",
    eyebrow: "Cooling installation · Stephenson County",
    lede: "This is not a market that needs a resort-sized condenser. Millrace Heating & Air sizes cooling for the house you have, the ducts already in the walls, and the handful of weeks Freeport actually asks the system to dehumidify.",
    image: "/photos/ac-install.jpg",
    imageAlt:
      "New outdoor air conditioner being set on a pad beside a Freeport home",
    problems: [
      {
        title: "A house that never had honest central cooling",
        text: "Some older Freeport homes added a coil later, or never got one. Installation here is often a first real match between furnace, coil, and condenser.",
      },
      {
        title: "A condenser that never matched the indoor coil",
        text: "Mixing leftover parts from two decades is how you get a system that “installs” and still cannot control humidity.",
      },
      {
        title: "Ducts that were built for heat, not July",
        text: "Forced-air heat is common in 61032. Those same trunks may starve upstairs bedrooms when cooling is asked to do more than trickle.",
      },
      {
        title: "A pad and line set that were never right",
        text: "A tilted, sunken, or snow-buried pad and a mashed line set are installation problems, not personality quirks of the old unit.",
      },
    ],
    symptoms: [
      "Window units or portable coolers doing the real work every July",
      "A furnace with no coil, or a coil that never belonged to the outdoor unit",
      "Cooling that never reaches the second floor even when the unit is new-ish",
      "A condenser crammed against a fence with no airflow",
      "You are planning a furnace change and do not want a leftover mismatch",
    ],
    explanation: [
      "Installing air conditioning in a heating-dominated town is a restraint problem. The machine has to dehumidify on 82°F afternoons without being so oversized that it short-cycles and leaves the house clammy. Catalog tonnage from a hotter climate is the wrong starting point.",
      "The indoor side matters as much as the box on the pad. Coil match, drain, furnace airflow, and return size decide whether a new condenser is a comfort upgrade or an expensive outdoor sculpture. We look at the house before we talk model numbers.",
      "If a ductless head is the cleaner answer for a room the trunks will never serve, we will say that. Installation is not loyalty to one product shape.",
    ],
    causes: [
      {
        title: "Cooling load that was never calculated for this house",
        text: "Square footage guesses ignore insulation, shade, and the short but humid Freeport cooling season.",
      },
      {
        title: "Indoor equipment that cannot move the air",
        text: "A new condenser on a weak blower or a cramped coil is not a finished install.",
      },
      {
        title: "Line sets and electrical that were never upgraded",
        text: "Old copper, a tired disconnect, and a circuit that was “close enough” show up on the first hard day.",
      },
      {
        title: "A pad that will sit in snow for months",
        text: "Clearance, height, and drainage matter more here than in a town where the condenser runs year-round.",
      },
    ],
    process: [
      {
        title: "Walk the house, not just the pad",
        text: "We look at ducts, returns, electrical, drain path, and how the second floor actually behaves in heat.",
      },
      {
        title: "Match indoor and outdoor as a pair",
        text: "Coil, furnace airflow, and condenser get treated as one system. Leftover mismatches get named out loud.",
      },
      {
        title: "Set the equipment so winter does not wreck it",
        text: "Pad, clearances, and line-set protection have to survive snow and freeze-thaw, not only a photo on install day.",
      },
      {
        title: "Start it up and explain the first season",
        text: "You should know how the new system should sound, how the drain should behave, and when to call if it does not.",
      },
    ],
    whenToCall: [
      "The house never had central cooling that actually kept up",
      "You are already replacing a furnace and do not want a leftover coil",
      "Window units are doing the work and you want a real system conversation",
      "A previous “install” left the outdoor unit fighting a fence or a flower bed",
    ],
    nextSteps: [
      "Note which rooms fail first on a warm afternoon.",
      "If you know the furnace age or have a photo of the current coil, have that ready.",
      "Request service to walk the house. Do not buy a condenser from a flyer first.",
    ],
    why: [
      "We size for Stephenson County weather, not a cooling-heavy brochure.",
      "The indoor coil and the ducts are part of the install, not extras.",
      "If a mini-split is the honest room fix, we say so instead of forcing a trunk.",
    ],
    local: [
      "Freeport books far more heating degree days than cooling degree days. A new AC still has to handle July humidity, but it should not be sized like a city that cools from May through October.",
      "A lot of 61032 housing is older forced-air stock. The condenser is the easy photo. The return and the upstairs run are the hard part.",
      "Nearby towns such as Lena or Cedarville are confirmed on the phone. We do not pretend every driveway is automatically on the route.",
    ],
    faqs: [
      {
        q: "Can you just set a new condenser on the old pad?",
        a: "Sometimes the pad, circuit, and coil are fit to reuse. Often they are not. The visit is how we find out, not a website promise.",
      },
      {
        q: "Should I buy the biggest AC I can fit?",
        a: "No. Oversized cooling in a short, humid season short-cycles and leaves the house damp. The house load matters more than a round tonnage number.",
      },
      {
        q: "Do I have to replace the furnace to add air conditioning?",
        a: "Not always. The furnace has to move enough air and accept a matched coil. That is an on-site check.",
      },
      {
        q: "What about a house with almost no ducts to the addition?",
        a: "That is often a ductless conversation, not a bigger condenser. See the mini-split pages if a room was never on the trunks.",
      },
      {
        q: "Will you install a unit I already bought?",
        a: "Ask on the call. An unmatched box sitting in the garage can be a problem, not a head start.",
      },
    ],
    related: [
      "ac-replacement-freeport-il",
      "ac-maintenance-freeport-il",
      "hvac-replacement-freeport-il",
      "ductless-mini-split-freeport-il",
    ],
  },
  {
    slug: "ac-maintenance-freeport-il",
    href: "/services/ac-maintenance-freeport-il/",
    category: "cooling",
    navLabel: "AC Maintenance",
    navDescription: "Spring checks after snow, ice, and months of sitting idle.",
    metaTitle: "AC Maintenance in Freeport Before the First Hot Week",
    metaDescription:
      "Spring AC maintenance in Freeport finds winter damage before the first sticky week. Request a spring cooling check after snow season in Stephenson County.",
    h1: "Spring is when we find what snow and idle months did to the outdoor unit.",
    eyebrow: "Cooling tune-up · Freeport",
    lede: "You do not need a cooling “membership pitch.” You need the condenser checked after it sat through an Illinois winter, before the first afternoon the house actually asks it to run.",
    image: "/photos/ac-outdoor.jpg",
    imageAlt:
      "Outdoor air conditioner beside a Freeport home after winter weather",
    problems: [
      {
        title: "A condenser that spent winter as a snowbank",
        text: "Drifts, ice, and lawn debris pack the coil. The fan may be free in April and bound in June if nobody looks.",
      },
      {
        title: "A drain that only matters in cooling",
        text: "The condensate path sits dry all winter. Algae, a crushed hose, or a full pan show up the first week of real cooling.",
      },
      {
        title: "A filter the furnace tolerated that cooling will not",
        text: "Heat can limp on a dirty filter. Cooling ices a coil. Spring is when that difference appears.",
      },
      {
        title: "Electrical parts that never cycled",
        text: "A maintenance visit is the cheap time to find a swollen capacitor. The expensive time is a Saturday in July.",
      },
    ],
    symptoms: [
      "You cannot remember the last time anyone ran the AC on purpose",
      "The outdoor coil looks furred with cottonwood or grass clippings",
      "Last summer the system cooled, but never felt dry",
      "The furnace closet smells musty when you switch to cool",
      "You want the first hot week to be a test, not a rescue",
    ],
    explanation: [
      "Maintenance on a Freeport air conditioner is mostly an after-winter inspection. The machine did not work for months. That is the opposite of a southern system that runs half the year and tells on itself. Here, neglect is quiet until it is not.",
      "A real check is not a filter slap and a handshake. We look at the outdoor coil, electrical start parts, indoor coil access if we can reach it, the condensate path, and a measured cooling cycle when weather allows.",
      "If we find a repair, we say so. Maintenance is not a promise that nothing will fail in July. It is how you stop discovering failures only when guests are already sweating.",
    ],
    causes: [
      {
        title: "Months with no run cycle",
        text: "Lubrication, capacitors, and contact faces change while the thermostat stays on heat.",
      },
      {
        title: "Winter weather sitting on the pad",
        text: "Snow load, ice, and spring melt leave dirt in the fins and water where it should not stay.",
      },
      {
        title: "Cottonwood and grass season",
        text: "The same weeks you want cooling are the weeks the coil wants to become a filter.",
      },
      {
        title: "A drain that dried out",
        text: "Idle traps and hoses clog. The first cooling week dumps water in the basement instead of the drain.",
      },
    ],
    process: [
      {
        title: "Clear and look before we run it",
        text: "Debris, winter damage, and obvious electrical issues get found before a blind start.",
      },
      {
        title: "Check the parts that sat still",
        text: "Capacitor, contactor, fan, and indoor airflow are the usual idle-season suspects.",
      },
      {
        title: "Open the condensate path",
        text: "A dry winter drain is not assumed to be open. We treat it as a cooling-season part.",
      },
      {
        title: "Run a cooling cycle if the day allows",
        text: "When outdoor temperature cooperates, we want to see the system actually take heat out of the house.",
      },
    ],
    whenToCall: [
      "The outdoor unit has not run since last summer",
      "You are heading into the first warm stretch and have not had a check",
      "Last year the system cooled late or never dried the air",
      "You found the condenser buried or boxed in after winter",
    ],
    nextSteps: [
      "Keep leaves and snow cover off the outdoor unit as the season turns.",
      "Change a packed filter before the first cooling week.",
      "Request a spring cooling check. Do not wait for the first 85-degree day.",
    ],
    why: [
      "Idle equipment hides problems. We look for those on purpose.",
      "A spring visit is about the machine you have, not a coupon booklet.",
      "If the unit is already failing, we switch to repair talk instead of pretending a rinse fixed it.",
    ],
    local: [
      "Outdoor AC in Freeport sits unused through a long snow season. A spring check is how you meet the machine before humidity does.",
      "July highs around 82°F do not sound dramatic until the house has been closed and the coil is dirty. Maintenance is timed for that first sticky week.",
      "If you are in Ridott, Pearl City, or another nearby town, say so when you call. Service there is confirmed, not assumed.",
    ],
    faqs: [
      {
        q: "When should a Freeport AC get checked?",
        a: "After winter, before you need it. The useful window is spring, not the first heat wave when every condenser in the county wakes up at once.",
      },
      {
        q: "Can I just turn it on for ten minutes in March?",
        a: "A brief run does not replace looking at the coil, drain, and start parts. It also does not help if the outdoor temperature is still a heating day.",
      },
      {
        q: "Is maintenance the same as a recharge?",
        a: "No. Systems that are tight do not need annual gas. “Recharge” as a ritual usually means someone is not looking for a leak.",
      },
      {
        q: "What if you find a bad capacitor in April?",
        a: "Then we talk repair while you still have time. That is the point of looking before July.",
      },
      {
        q: "Do you maintain window units?",
        a: "This page is for central air. Ask on the phone if you have a different setup. We will not invent a service we cannot do.",
      },
    ],
    related: [
      "ac-repair-freeport-il",
      "hvac-maintenance-freeport-il",
      "ac-replacement-freeport-il",
      "humidifiers-dehumidifiers-freeport-il",
    ],
  },
  {
    slug: "ac-replacement-freeport-il",
    href: "/services/ac-replacement-freeport-il/",
    category: "cooling",
    navLabel: "AC Replacement",
    navDescription: "When a tired outdoor unit and indoor coil need replacing.",
    metaTitle: "AC Replacement in Freeport When Repair Stops Making Sense",
    metaDescription:
      "Replace a tired Freeport air conditioner when repairs stack up or the coil no longer matches. Talk through AC replacement for a 61032 house after a diagnosis.",
    h1: "Replacing an air conditioner here is about the coil, the ducts, and a short cooling season.",
    eyebrow: "Cooling replacement · 61032",
    lede: "A dead condenser is not automatically a shopping trip. Millrace Heating & Air will say when a repair still holds, and when the outdoor unit and indoor coil are too far gone to keep pairing.",
    image: "/photos/ac-install.jpg",
    imageAlt:
      "Replacement air conditioner ready for a Freeport, Illinois home",
    problems: [
      {
        title: "A compressor that has already been rescued once",
        text: "Repeat hard starts and a growing repair list are how a replacement conversation starts — after numbers, not before.",
      },
      {
        title: "An indoor coil that does not belong to the new world",
        text: "Swapping only the box on the pad can leave you with a mismatch that never dehumidifies.",
      },
      {
        title: "Refrigerant hardware from a fading generation",
        text: "Parts and refrigerant access change. That can push a tired system toward replacement even when it still “runs.”",
      },
      {
        title: "Cooling that never caught the second floor",
        text: "If the old system was fighting the ducts, a like-for-like swap repeats the same upstairs complaint.",
      },
    ],
    symptoms: [
      "Repair visits are stacking on the same outdoor unit",
      "The coil is leaking or packed beyond a reasonable clean",
      "Cooling runs constantly on a mild day and still feels wet",
      "The furnace is also near the end and the pair should be planned together",
      "The outdoor cabinet is rotting, leaning, or oil-stained at the joints",
    ],
    explanation: [
      "Replacement is a decision, not a default. In a town with a short cooling season, people keep old condensers alive for good reasons. We respect that. We also say when the indoor coil, the leak rate, or the electrical parts are writing the same ending.",
      "A Freeport replacement has to survive winter idle after we leave. Clearances, a pad that will not sink under snow load, and a coil match that can dry the house on an 82°F afternoon matter more than a brochure SEER argument.",
      "If the furnace is the weak half of the pair, we will not pretend a new condenser fixes heat. That becomes an HVAC replacement talk instead of an AC-only swap.",
    ],
    causes: [
      {
        title: "A leak that will not stay fixed",
        text: "Coil and line-set leaks return. Repeated charging is not ownership. It is a delay.",
      },
      {
        title: "Mismatched indoor and outdoor leftovers",
        text: "Years of “just replace the outside” leave a system that cannot do the job even when it runs.",
      },
      {
        title: "Airflow the original install never solved",
        text: "Replacement is the moment to talk returns and upstairs runs, or you buy the same complaint again.",
      },
      {
        title: "A cabinet and electrical that are finished",
        text: "Rust-through, burnt lugs, and a compressor that is electrically tired are replacement signs, not personality.",
      },
    ],
    process: [
      {
        title: "Diagnose the unit you already have",
        text: "We do not skip the test to get to a proposal. Some “replacement” calls are still a capacitor.",
      },
      {
        title: "Look at the pair, not the pad",
        text: "Coil condition, furnace airflow, drain, and ducts decide whether this is an AC swap or a larger job.",
      },
      {
        title: "Price the honest scope",
        text: "If the coil, pad, or circuit has to change, that is in the conversation. No surprise outdoor-only story.",
      },
      {
        title: "Install so next winter does not punish it",
        text: "The new unit still has to sit idle through snow. We set it like that matters.",
      },
    ],
    whenToCall: [
      "You have already paid for a major repair and the unit is failing again",
      "The indoor coil is leaking or the outdoor unit is oil-stained",
      "Cooling never dries the house and the equipment is old as a set",
      "You want a clear repair-versus-replace answer, not a catalog",
    ],
    nextSteps: [
      "Write down what has already been repaired, if you know.",
      "Note which rooms still fail on a warm day.",
      "Call for a diagnosis. Replacement talk comes after that.",
    ],
    why: [
      "We will still repair a unit that deserves a repair.",
      "Coil match is part of replacement here, not fine print.",
      "If the furnace is the real problem, we will not hide that behind a new condenser.",
    ],
    local: [
      "Because cooling sits idle so long in 61032, replacement often follows a first-hot-day failure that exposed years of quiet decline, not a mid-August breakdown.",
      "Older Freeport duct systems were frequently built around heat. A replacement visit is a chance to say whether a new condenser can even use those trunks well.",
      "Orangeville, Dakota, and other nearby towns are confirmed when you call. Replacement scheduling is not an automatic county-wide claim.",
    ],
    faqs: [
      {
        q: "Can you replace only the outdoor unit?",
        a: "Sometimes, if the indoor coil and refrigerant circuit truly match. Often the honest job includes the coil. We will say which case you are in.",
      },
      {
        q: "The unit still cools a little. Is replacement wasteful?",
        a: "Not if it is leaking, mismatched, or spending your summers on repeat repairs. Weak cooling is still a data point, not a reason to rush.",
      },
      {
        q: "Will a new AC lower my bills in Freeport?",
        a: "It can, especially if the old unit was short-cycling or running blind. This climate’s big energy story is still heat. We will not oversell cooling savings.",
      },
      {
        q: "Should I replace heat and cooling at the same time?",
        a: "When both halves are tired or mismatched, yes, that conversation belongs on the HVAC replacement page. When only the condenser is done, we stay on this one.",
      },
      {
        q: "Do you push one brand?",
        a: "We talk about what fits the house and what we can support. We do not invent factory partnerships or badge loyalty on this site.",
      },
    ],
    related: [
      "ac-installation-freeport-il",
      "ac-repair-freeport-il",
      "hvac-replacement-freeport-il",
      "ac-maintenance-freeport-il",
    ],
  },
  {
    slug: "furnace-repair-freeport-il",
    href: "/services/furnace-repair-freeport-il/",
    category: "heating",
    navLabel: "Furnace Repair",
    navDescription: "No heat, weak heat, or a furnace that will not stay on.",
    metaTitle: "Furnace Repair in Freeport When the House Will Not Stay Warm",
    metaDescription:
      "No heat, a furnace that will not ignite, or short cycling on a Freeport night is a repair call. Millrace Heating & Air diagnoses gas furnaces in 61032.",
    h1: "When a Freeport furnace quits, the house does not have time for guesswork.",
    eyebrow: "Gas furnace repair · Stephenson County",
    lede: "January nights near 11°F are not a theory. If the burners will not stay lit, the blower runs cold, or the furnace locks out after a few tries, call. We diagnose the cabinet in the basement, not a symptom list from a forum.",
    image: "/photos/furnace-service.jpg",
    imageAlt:
      "HVAC technician servicing a residential furnace in a Midwestern basement",
    problems: [
      {
        title: "No heat after a normal evening",
        text: "The house was fine at bedtime. By morning the thermostat is calling and the furnace has given up. That is a lockout, a failed igniter, or a safety switch doing its job.",
      },
      {
        title: "Burners that light and quit",
        text: "A flame that appears, then dies, is often a dirty flame sensor, a pressure switch, or venting that cannot prove itself in the cold.",
      },
      {
        title: "A boom on startup",
        text: "Delayed ignition is not “an old furnace personality.” It is unburned gas lighting late. That needs a technician, not a longer wait.",
      },
      {
        title: "Rooms that never recover on a single-digit night",
        text: "The furnace may be running. The blower, filter, or ducts may not be delivering the heat the burners made.",
      },
    ],
    symptoms: [
      "Thermostat says heat and the burners never light",
      "Inducer runs, then the sequence stops",
      "Furnace starts, runs a minute, and shuts off",
      "Blower air is barely warm on a hard-cold night",
      "A rattling inducer or a squeal from the blower",
      "Water or rust around a high-efficiency drain or collector",
    ],
    explanation: [
      "A gas furnace in Freeport works a long season. Igniters, flame sensors, inducers, and pressure switches accumulate cycles that milder towns never ask for. When one of those parts fails, the symptom is simple: the house cools off.",
      "Safe homeowner checks are short. Thermostat on heat, furnace switch on, filter not a wall. After that, the burner compartment is not a weekend project. Do not bypass a limit or a pressure switch to “get through the night.”",
      "If you smell rotten-egg gas or a carbon monoxide alarm is sounding, this page is not the next step. Leave. From outside, call 911 and Nicor Gas at 888-642-6748. Furnace repair starts after the house is safe.",
    ],
    causes: [
      {
        title: "Ignition parts that ran all winter",
        text: "Hot-surface igniters and flame sensors fail more often here because the furnace actually runs for months.",
      },
      {
        title: "Venting that hates extreme cold",
        text: "Restricted intake, icing, or a tired inducer can stop a furnace that looked healthy in October.",
      },
      {
        title: "Airflow the furnace interprets as danger",
        text: "A plugged filter or closed returns overheat the heat exchanger and trip the limit. Short cycling follows.",
      },
      {
        title: "A control that has locked out",
        text: "Several failed tries become a quiet cabinet and a house that keeps losing degrees.",
      },
    ],
    process: [
      {
        title: "Make sure the house is safe to work in",
        text: "Gas odor and CO alarms change the job. Those are leave-the-house problems first.",
      },
      {
        title: "Verify the easy inputs",
        text: "Thermostat, switch, filter, and venting basics get checked before parts get blamed.",
      },
      {
        title: "Watch a full heat sequence",
        text: "Inducer, igniter, flame, and blower each have a moment they can fail. We watch the sequence, not a guess.",
      },
      {
        title: "Explain repair against remaining life",
        text: "A failed igniter on a sound heat exchanger is a repair. A cracked exchanger is a different conversation.",
      },
    ],
    whenToCall: [
      "The furnace will not ignite or stay running",
      "You hear a boom when the burners light",
      "Heat is weak on a night that should be a normal load for the house",
      "The furnace short cycles or locks out repeatedly",
      "You have already checked the thermostat, switch, and filter",
    ],
    nextSteps: [
      "If you smell gas or a CO alarm sounds, leave and call 911 and Nicor Gas at 888-642-6748.",
      "If the house is otherwise safe, check thermostat, furnace switch, and filter, then stop.",
      "Call for furnace repair. Say whether you have any heat at all.",
    ],
    why: [
      "We diagnose the sequence. We do not start at replacement.",
      "Safety switches get respected. They are not nuisances to jump out.",
      "Older furnaces still get an honest repair-versus-replace talk based on the heat exchanger and parts, not a birthday.",
    ],
    local: [
      "Stephenson County is a heating climate — on the order of 6,956 heating degree days. Furnaces here accumulate a full season of cycles, not a few cold snaps.",
      "January normals near 28°F by day and 11°F at night mean a failed furnace is a pipes-and-people problem, not an inconvenience.",
      "Forced-air gas furnaces are common in older Freeport housing. That is the machine this page is written around.",
    ],
    faqs: [
      {
        q: "The furnace worked yesterday. How can it be dead tonight?",
        a: "Cold snaps expose weak ignition, a dirty flame sensor, a failing pressure switch, or venting that only fails when the air is dense and the run time is long.",
      },
      {
        q: "Is weak heat always a dying furnace?",
        a: "No. Filters, blowers, and leaky or starved ducts can steal heat from a furnace that is still lighting correctly. That is why we test.",
      },
      {
        q: "Can I tap the furnace or reset it all night?",
        a: "A single reset after a safe check is one thing. Repeated resets hide a lockout. Call instead of training the board to fail at 2 a.m.",
      },
      {
        q: "Do you work on older furnaces?",
        a: "Yes. Heat exchanger condition and parts availability matter more than a round age. Some older units are repairable. Some are not.",
      },
      {
        q: "What if I have a boiler or a heat pump, not a furnace?",
        a: "Use the heating repair page and say what you have on the call. This page is for gas furnaces in the basement or utility closet.",
      },
    ],
    related: [
      "furnace-maintenance-freeport-il",
      "heating-repair-freeport-il",
      "emergency-hvac-freeport-il",
      "furnace-installation-freeport-il",
    ],
  },
  {
    slug: "furnace-installation-freeport-il",
    href: "/services/furnace-installation-freeport-il/",
    category: "heating",
    navLabel: "Furnace Installation",
    navDescription: "New furnaces that fit older Freeport duct and vent work.",
    metaTitle: "Furnace Installation in Freeport Built Around Older Homes",
    metaDescription:
      "A new furnace in Freeport has to fit older ducts, venting, and a long heating season. Talk through furnace installation for a 61032 house before you pick a box.",
    h1: "A furnace that matches an older Freeport house beats a bigger box in the basement.",
    eyebrow: "Furnace installation · 61032",
    lede: "Heating degree days here are the job. Millrace Heating & Air treats a new furnace as a fit to the ducts, the venting, and the way this house actually loses heat — not a bigger burner because January is cold.",
    image: "/photos/furnace-install.jpg",
    imageAlt:
      "New furnace installation in a Freeport, Illinois utility space",
    problems: [
      {
        title: "A furnace that never had enough air to begin with",
        text: "Stuffing a larger cabinet into the same return is how you get noise, short cycling, and rooms that still never catch up.",
      },
      {
        title: "Venting from a different decade",
        text: "Chimney, PVC, or a shared vent that made sense for the old unit may not be legal or safe for the new one. That is an install question, not paperwork trivia.",
      },
      {
        title: "A coil leftover from the last air conditioner",
        text: "If you have central cooling, the new furnace has to live with that coil or the cooling half becomes the next complaint.",
      },
      {
        title: "A house that leaks heat through the envelope",
        text: "Older Freeport stock can be drafty. The answer is still a correctly sized furnace, not a giant one that roars and shuts off.",
      },
    ],
    symptoms: [
      "The current furnace cannot hold the house on a design-cold night",
      "You are tired of repairing a cabinet that is rusting through",
      "The heat exchanger conversation already happened",
      "A renovation or addition changed the load and the old unit was never revisited",
      "You want gas heat installed as a planned job, not a panic swap",
    ],
    explanation: [
      "Installing a furnace in 61032 is a winter-first job. The machine will run for months. Sizing, venting, gas, condensate (when it is a high-efficiency unit), and the existing ducts all have to be honest on a night that actually gets below freezing.",
      "Bigger is not warmer. An oversized furnace in an older house short-cycles, never evens out the rooms, and still leaves the far bedrooms behind. We would rather match the house than impress the basement.",
      "If a heat pump or dual-fuel setup is on the table, say that on the call. This page is for people who want a furnace installed as furnace work, with the cooling coil treated as a neighbor, not an afterthought.",
    ],
    causes: [
      {
        title: "A load that was never figured for this climate",
        text: "Rules of thumb from milder towns under-heat a Stephenson County house or oversize the cabinet.",
      },
      {
        title: "Ducts that cannot carry the new airflow",
        text: "Old trunks and a tiny return were common. The new furnace does not get to pretend they grew.",
      },
      {
        title: "Venting and combustion air that changed with the house",
        text: "Finished basements, tighter remodels, and tired chimneys all change how a furnace can be installed.",
      },
      {
        title: "A cooling coil that has to stay in the airstream",
        text: "Ignoring the coil during a furnace swap is how next July becomes a second project.",
      },
    ],
    process: [
      {
        title: "Look at the house as a heating problem",
        text: "Rooms that fail, duct sizes, returns, and how the current unit behaves on a cold night all matter.",
      },
      {
        title: "Plan gas, vent, drain, and electrical together",
        text: "A high-efficiency furnace is not “the same hole in the floor.” Condensate and venting get designed, not improvised.",
      },
      {
        title: "Set the cabinet so airflow is real",
        text: "Filter access, return, and coil relationship are part of the install, not punch-list leftovers.",
      },
      {
        title: "Fire it into a real heat call",
        text: "We want a completed sequence, even heat at the supplies, and a homeowner who knows the new sounds.",
      },
    ],
    whenToCall: [
      "The heat exchanger is done, or parts are no longer a reasonable path",
      "You want a planned furnace install before the heating season, not during it",
      "The house changed and the old furnace never did",
      "You have cooling now and need the new furnace to respect that coil",
    ],
    nextSteps: [
      "List the rooms that stay cold on a hard night.",
      "If you have the current furnace model or a photo of the venting, keep it handy.",
      "Request a house visit. Do not order a furnace from a square-foot chart.",
    ],
    why: [
      "We size for Freeport winter, not a round cabinet number.",
      "Venting and combustion air are part of the job, not extras.",
      "If dual-fuel or a heat pump is the better heating plan, we will say so instead of forcing a furnace-only story.",
    ],
    local: [
      "Older Freeport houses often already have forced-air furnaces. Installation is frequently a replacement-in-kind with better fit, not a first heating system.",
      "Nights at or below freezing are routine here. A new furnace has to vent and drain in that weather, not only on a 40-degree install day.",
      "German Valley, Davis, and other nearby towns are confirmed by phone. We do not treat the county line as an automatic yes.",
    ],
    faqs: [
      {
        q: "Should I buy a bigger furnace because Freeport is cold?",
        a: "No. Cold weather is already in the load. An oversized furnace short-cycles and still leaves rooms uneven. The house decides the size.",
      },
      {
        q: "Can you reuse my old chimney or vent?",
        a: "Sometimes. Newer furnaces often need different venting. We will not reuse a vent that cannot do the job just because it is already there.",
      },
      {
        q: "What happens to my air conditioner if I replace the furnace?",
        a: "The coil has to match airflow and sit correctly. A furnace install that ignores cooling becomes a summer complaint.",
      },
      {
        q: "Is this the same as an emergency swap tonight?",
        a: "This page is planned installation. If you have no heat tonight, call about emergency HVAC and furnace repair first. We do not invent swap timelines here.",
      },
      {
        q: "Do you install oil or propane furnaces?",
        a: "Say what you have on the call. This page is written around the common Freeport gas forced-air setup. Other fuels are confirmed, not assumed.",
      },
    ],
    related: [
      "furnace-repair-freeport-il",
      "furnace-maintenance-freeport-il",
      "hvac-replacement-freeport-il",
      "heat-pump-installation-freeport-il",
    ],
  },
  {
    slug: "furnace-maintenance-freeport-il",
    href: "/services/furnace-maintenance-freeport-il/",
    category: "heating",
    navLabel: "Furnace Maintenance",
    navDescription: "Fall service before nights settle at or below freezing.",
    metaTitle: "Furnace Maintenance in Freeport Before the Hard Freeze",
    metaDescription:
      "Fall furnace maintenance in Freeport is a heating-season check, not a coupon ritual. Request service before Stephenson County nights settle below freezing.",
    h1: "Fall service is how a furnace earns the right to run through January.",
    eyebrow: "Heating tune-up · Freeport",
    lede: "A furnace that sat quiet through a mild stretch still has a long job ahead. Millrace Heating & Air uses fall maintenance to watch a heat sequence on purpose — before a lockout happens on an 11°F night.",
    image: "/photos/furnace-service.jpg",
    imageAlt:
      "HVAC technician checking a residential furnace before the heating season",
    problems: [
      {
        title: "A flame sensor that is already tired",
        text: "It may light fine on a 50-degree October day and fail when the unit runs for hours in January.",
      },
      {
        title: "A filter the house has been “getting away with”",
        text: "Summer barely used the blower. Heating will. A packed filter becomes a limit trip after the first cold week.",
      },
      {
        title: "A drain or collector box you only notice when it freezes",
        text: "High-efficiency furnaces make water. Fall is when we want to see that path before it ices or backs up.",
      },
      {
        title: "Venting that looks fine until the wind and cold arrive",
        text: "Intake screens, pitch, and termination get checked while you still have a choice of afternoon.",
      },
    ],
    symptoms: [
      "You cannot remember the last heat-season service",
      "Last winter the furnace needed a mid-season rescue",
      "The blower sounds different than it used to",
      "You find rust, water, or a sour smell near the cabinet",
      "The filter slot is a mystery even to the people who live there",
    ],
    explanation: [
      "Furnace maintenance in a heating-dominated climate is not optional theater. The machine will run for months. The useful time to find a weak igniter, a dirty flame sensor, or a restricted filter is October, not the night the pipes become the topic.",
      "We watch a complete heat call: inducer, ignition, flame signal, blower, and venting. We look at the filter setup the house actually uses. If the heat exchanger raises a concern, that becomes a direct conversation — not a scare line and not a shrug.",
      "Maintenance does not make a cracked exchanger safe. It does not promise a winter without repairs. It is how you stop meeting the furnace only when it has already quit.",
    ],
    causes: [
      {
        title: "A long run-time season ahead",
        text: "Parts that “worked last March” still have thousands of cycles coming. Fall is the inspection, not the victory lap.",
      },
      {
        title: "Dust the cooling season never moved",
        text: "Heating starts and the blower pulls a winter’s worth of household dust through a filter that may already be wrong.",
      },
      {
        title: "Animals and debris in the vent path",
        text: "Idle summer vents collect nests and leaves. The furnace notices on the first hard call.",
      },
      {
        title: "A condensate path that sat dry",
        text: "High-efficiency drains and traps need to work when heat returns. Fall is when we treat them as live parts.",
      },
    ],
    process: [
      {
        title: "Inspect as found",
        text: "Filter, venting, cabinet, and obvious rust or water get noted before we start changing things.",
      },
      {
        title: "Clean the parts that fail dirty",
        text: "Flame sensors and burners that we can service get attention. We do not “tune” a safety out of the system.",
      },
      {
        title: "Run a real heat sequence",
        text: "We want to see ignition and a stable flame, not a two-second burner flash.",
      },
      {
        title: "Leave you with the honest list",
        text: "Watch items, repair items, and “this is fine” are different sentences. You get all three if they apply.",
      },
    ],
    whenToCall: [
      "Heating season is coming and the furnace has not been checked",
      "Last winter included a no-heat call you do not want to repeat",
      "You have a high-efficiency furnace and have never thought about the drain",
      "The cabinet, vent, or filter setup looks neglected",
    ],
    nextSteps: [
      "Replace a packed filter if you can do it without opening the burner compartment.",
      "Keep storage off the furnace and the vent pipes.",
      "Request fall furnace maintenance before nights settle below freezing.",
    ],
    why: [
      "We would rather find a weak igniter in daylight than explain a lockout after midnight.",
      "Maintenance is a look at your furnace, not a script of upsells.",
      "If the heat exchanger is the story, we say that in ordinary words.",
    ],
    local: [
      "Many Freeport nights sit at or below freezing. Fall maintenance is timed for that stretch, not for a climate where heat is occasional.",
      "About 35 inches of snow and a long idle-to-work swing for the rest of the HVAC system make the furnace the machine that cannot wait until “sometime.”",
      "If you are in Winslow, Rock City, or another nearby town, mention it when you request service. Those visits are confirmed, not auto-routed.",
    ],
    faqs: [
      {
        q: "Is a fall furnace check actually different from a sticker visit?",
        a: "It should be. We want a completed heat sequence, venting, filter reality, and any drain the unit uses — not a logo on the cabinet.",
      },
      {
        q: "Can I skip a year if the furnace “sounds fine”?",
        a: "You can skip anything. The risk in this climate is that “sounds fine” in November becomes a lockout in January when run time triples.",
      },
      {
        q: "Do you clean the heat exchanger on every visit?",
        a: "We inspect what we can reach and we do not invent a teardown as routine maintenance. If something looks wrong, that becomes its own job.",
      },
      {
        q: "Should I run the furnace in September to “test it”?",
        a: "A short heat call on a cool day is useful. It is not a substitute for looking at ignition parts, venting, and the filter.",
      },
      {
        q: "What if you find a problem during maintenance?",
        a: "We stop calling it a tune-up and tell you what failed. You decide on repair. We do not hide a needed part inside a maintenance price.",
      },
    ],
    related: [
      "furnace-repair-freeport-il",
      "hvac-maintenance-freeport-il",
      "heating-repair-freeport-il",
      "humidifiers-dehumidifiers-freeport-il",
    ],
  },
  {
    slug: "heating-repair-freeport-il",
    href: "/services/heating-repair-freeport-il/",
    category: "heating",
    navLabel: "Heating Repair",
    navDescription: "Heat that quit — furnace, heat pump, or something else.",
    metaTitle: "Heating Repair in Freeport for Whatever Is Keeping You Cold",
    metaDescription:
      "Heat failed in Freeport and you may not care what the machine is called. Call for heating repair in 61032 — furnace, heat pump, or another system on site.",
    h1: "Heat failed. The equipment type is our problem, not yours.",
    eyebrow: "Heating repair · Freeport",
    lede: "Not every cold house in Stephenson County is a textbook gas furnace story. If the rooms are losing degrees, tell us what you see and hear. Millrace Heating & Air will sort furnace, heat pump, electric backup, or a hybrid once we are looking at it.",
    image: "/photos/hero-home-winter.jpg",
    imageAlt:
      "Freeport home in winter when indoor heat has to hold against the cold",
    problems: [
      {
        title: "The house is cold and the thermostat is not helping",
        text: "You have already raised the set point. Air is still, or air is moving and it is not heat. That is enough to call.",
      },
      {
        title: "One system label, three possible machines",
        text: "A “furnace” in conversation is sometimes a heat pump air handler, an electric coil, or a dual-fuel pair. The repair is different. The discomfort is the same.",
      },
      {
        title: "Heat that works until the outdoor temperature drops",
        text: "That pattern often belongs to a heat pump, a failing furnace at the edge of its capacity, or backup heat that never came on.",
      },
      {
        title: "A building that has more than one heat source",
        text: "Basement furnace plus a shop heater plus a ductless head is a Freeport reality. We need to know which one quit.",
      },
    ],
    symptoms: [
      "Indoor temperature falling with the thermostat set to heat",
      "Auxiliary or emergency heat on a heat-pump thermostat that never stops",
      "Hot water baseboard or a boiler-looking appliance that will not wake up",
      "A utility closet that is quiet when it should be running",
      "Some rooms hold; a wing or an addition does not",
    ],
    explanation: [
      "This page exists because homeowners should not have to name the appliance correctly to get help. Heating repair in Freeport means: the house is not holding temperature, and we will identify the machine before we start swapping parts.",
      "A gas furnace, a heat pump in heating mode, electric strip heat, or a ductless head in an addition can all present as “the heat died.” The safe checks overlap — thermostat, power, filter — then the paths split. We would rather you call than guess the wrong YouTube video.",
      "If the smell is gas or a CO alarm is sounding, stop being a detective. Leave and call 911 and Nicor Gas at 888-642-6748. Heating repair is for a house that is safe to occupy.",
    ],
    causes: [
      {
        title: "The wrong heat stage never started",
        text: "Dual-fuel and heat-pump systems rely on a second stage in real Freeport cold. If that stage is dead, the house slowly loses.",
      },
      {
        title: "A thermostat that no longer matches the equipment",
        text: "A replacement thermostat wired for a furnace on a heat pump — or the reverse — looks like an equipment failure.",
      },
      {
        title: "A primary unit down and a forgotten backup",
        text: "Space heaters are not a heating system. If the primary failed, we fix that rather than normalizing the workaround.",
      },
      {
        title: "Airflow or distribution, not burner trouble",
        text: "The plant can be making heat while a closed zone, a failed blower, or a starved addition never receives it.",
      },
    ],
    process: [
      {
        title: "Identify the actual heating plant",
        text: "Furnace, heat pump, dual-fuel, electric, or something else. We start by naming the machine correctly.",
      },
      {
        title: "See which stage is missing",
        text: "In this climate, “it runs” is not enough. We check whether the heat that should be on at this outdoor temperature is on.",
      },
      {
        title: "Repair the failed piece, not the whole label",
        text: "A bad outdoor sensor is not a new system. A dead gas valve is not a heat-pump sales talk.",
      },
      {
        title: "Point you to the tighter page if you need it",
        text: "Once we know it is a furnace or a heat pump, the follow-up may live on those pages. This one gets you in the door.",
      },
    ],
    whenToCall: [
      "The house is losing heat and you are not sure what equipment you own",
      "A heat-pump thermostat is stuck on auxiliary language you do not trust",
      "One part of the house has heat and another does not",
      "You already checked the thermostat batteries and the filter",
    ],
    nextSteps: [
      "If gas or CO is involved, leave and use 911 and Nicor Gas at 888-642-6748.",
      "Look at the thermostat. Note whether it says heat, aux, or emergency heat.",
      "Call and describe the equipment in ordinary words. Brand stickers help if you can read them safely.",
    ],
    why: [
      "You should not need the right noun to get a heating visit.",
      "We identify the system on site instead of selling the first matching page.",
      "Safety still comes first. Comfort work starts after the house is safe.",
    ],
    local: [
      "Freeport winters are long enough that “some kind of heat” is the household priority. The county’s heating load dwarfs its cooling load, so this page stays heating-first.",
      "Housing stock here mixes furnaces, later heat pumps, and room systems in additions. A single label on a website would miss half the phone calls.",
      "Lena, Cedarville, and similar towns are confirmed when you call. Heating repair does not auto-dispatch across the map.",
    ],
    faqs: [
      {
        q: "How is this different from furnace repair?",
        a: "Furnace repair assumes a gas furnace. This page is for the house that is cold when you are not sure — or when you know it is not a simple furnace.",
      },
      {
        q: "My thermostat says AUX. Is that a failure?",
        a: "Auxiliary heat can be normal in Freeport cold on a heat pump. It can also mean the outdoor unit gave up. If the house is still losing temperature, call.",
      },
      {
        q: "We have a wood stove going. Do we still need the furnace?",
        a: "A stove can hold a room. Pipes and far bedrooms still follow the central system. Do not treat a stove as a completed repair.",
      },
      {
        q: "Can you repair electric baseboard?",
        a: "Ask on the phone. Some electric heat is an HVAC visit; some is a different trade. We will not claim work we cannot do.",
      },
      {
        q: "The addition has a wall unit and the main house has a furnace. Who do I call?",
        a: "Us, if either side is HVAC equipment. Say that you have two systems. We would rather know that on the first call.",
      },
    ],
    related: [
      "furnace-repair-freeport-il",
      "heat-pump-repair-freeport-il",
      "emergency-hvac-freeport-il",
      "hvac-repair-freeport-il",
    ],
  },
  {
    slug: "hvac-repair-freeport-il",
    href: "/services/hvac-repair-freeport-il/",
    category: "hvac",
    navLabel: "HVAC Repair",
    navDescription: "Shared blowers, thermostats, and ducts that fail both ways.",
    metaTitle: "HVAC Repair in Freeport When Heat and Cooling Share the Fault",
    metaDescription:
      "When the blower, thermostat, or ducts fail, Freeport homes lose heat and cooling together. Call Millrace Heating & Air for system-level HVAC repair in 61032.",
    h1: "Sometimes the trouble is the whole system, not just the furnace or the AC.",
    eyebrow: "System repair · Stephenson County",
    lede: "The same blower, the same filter slot, and the same thermostat run both seasons. If comfort failed and you cannot honestly blame “only heat” or “only AC,” this is the repair page.",
    image: "/photos/maintenance.jpg",
    imageAlt:
      "Indoor HVAC system that serves both heating and cooling in a Freeport home",
    problems: [
      {
        title: "A blower that quit, taking both seasons with it",
        text: "No air in heat and no air in cool is not two mysteries. It is often one motor, capacitor, or board.",
      },
      {
        title: "A thermostat that is lying to both machines",
        text: "Wrong mode, a dead common wire, or a control that no longer matches the equipment looks like two failed appliances.",
      },
      {
        title: "Ducts that waste whatever the plant makes",
        text: "Disconnected trunks in a crawl, crushed returns, and closed rooms show up as weak heat in January and weak cooling in July.",
      },
      {
        title: "A drain or cabinet problem that appears when the season changes",
        text: "Water in the furnace closet during cooling, or a trip that only happens after a long heat run, still lives in the shared box.",
      },
    ],
    symptoms: [
      "No airflow in any mode",
      "The system hunts between heat and cool or never finishes a cycle",
      "Every vent is weak, not just one bedroom",
      "The filter collapses or sucks tight to the rack",
      "You had a furnace repair last winter and the same closet is failing in cooling",
    ],
    explanation: [
      "HVAC repair is the unglamorous middle. Homeowners get sent to furnace pages or AC pages and still have a shared component problem. In older Freeport forced-air houses, that shared heart is usually the air handler side of the furnace: blower, filter, limit, and the ducts attached to it.",
      "We start by asking what the system does in both modes, even if you only noticed today’s season. A blower that died in May was already the heating system. A thermostat that cannot hold a call will ruin January and July equally.",
      "This is still diagnosis first. “HVAC repair” is not a license to replace everything in the closet. It is permission to look at the system as a system.",
    ],
    causes: [
      {
        title: "One blower, two jobs",
        text: "When that motor or its capacitor fails, the house loses heat delivery and cooling delivery at the same time.",
      },
      {
        title: "Controls that serve the whole plant",
        text: "Thermostats, transformers, and control boards do not pick a season. They just stop.",
      },
      {
        title: "Filtration that starves the whole cabinet",
        text: "The wrong filter, or a return that was always too small, shows up whenever the blower runs hard.",
      },
      {
        title: "Distribution that was never sealed or sized",
        text: "Older trunks leak and starve rooms. The equipment can be innocent.",
      },
    ],
    process: [
      {
        title: "Ask what failed in both seasons",
        text: "Even if you called about today’s weather, the other mode is a clue.",
      },
      {
        title: "Test the shared pieces first",
        text: "Airflow, thermostat, power, and safety limits get attention before we pick a specialty page.",
      },
      {
        title: "Split the job only when the evidence does",
        text: "A dead condenser stays an AC repair. A dead gas valve stays a furnace repair. A dead blower stays here.",
      },
      {
        title: "Tell you if the ducts are the real patient",
        text: "Replacing equipment will not fix a trunk that is disconnected under the floor.",
      },
    ],
    whenToCall: [
      "There is no airflow in heat or cool",
      "The thermostat behaves like it is not connected to the equipment",
      "Comfort failed in a way that does not match “burners out” or “condenser out”",
      "You want one visit that looks at the system instead of two guesses",
    ],
    nextSteps: [
      "Try heat and cool only if it is safe and note what the blower does in each.",
      "Look at the filter. If it is a solid wall, replace it and stop.",
      "Call and say the airflow story, not only the outdoor temperature.",
    ],
    why: [
      "Shared parts deserve a shared diagnosis.",
      "We will send you to a tighter page when the failed part is clearly one season.",
      "Ducts get named when they are the problem. Equipment does not get blamed by default.",
    ],
    local: [
      "Most older Freeport houses run heat and cooling through the same forced-air cabinet. That is why a “whole system” repair page belongs here.",
      "The climate still leans hard on heat — thousands more heating degree days than cooling — but the blower does not get a summer vacation if you have central air.",
      "Pearl City, Ridott, and other nearby towns are confirmed on the call. HVAC repair is not a blanket county dispatch.",
    ],
    faqs: [
      {
        q: "Should I have called the furnace page or the AC page?",
        a: "If you know the burners will not light, use furnace repair. If the outdoor unit is dead in summer, use AC repair. If airflow or the thermostat failed, this page is the right start.",
      },
      {
        q: "Can a dirty filter really stop both heat and cooling?",
        a: "Yes. The blower and the heat exchanger or coil all drink from the same return. A filter that has become cardboard will trip limits and freeze coils.",
      },
      {
        q: "Is this the same as an emergency call?",
        a: "If the house is already dangerously cold or dangerously hot, use the emergency HVAC page and call. This page is the system-level diagnosis once you can talk through symptoms.",
      },
      {
        q: "Do you repair ducts?",
        a: "We look for disconnected, crushed, or obviously leaking runs we can reach. A full redesign is a different scope and we will say so if that is what you need.",
      },
      {
        q: "My heat works and my AC does not. Is that still HVAC repair?",
        a: "That is usually AC repair. Come here if the blower, thermostat, or ducts are the common thread.",
      },
    ],
    related: [
      "furnace-repair-freeport-il",
      "ac-repair-freeport-il",
      "hvac-maintenance-freeport-il",
      "emergency-hvac-freeport-il",
    ],
  },
  {
    slug: "hvac-maintenance-freeport-il",
    href: "/services/hvac-maintenance-freeport-il/",
    category: "hvac",
    navLabel: "HVAC Maintenance",
    navDescription: "Fall heat checks and spring cooling checks in one plan.",
    metaTitle: "HVAC Maintenance in Freeport for a Two-Season Climate",
    metaDescription:
      "Freeport HVAC maintenance is fall heat and spring cooling, because the climate is not one season. Request a two-visit seasonal check for a 61032 house.",
    h1: "In a heating climate, maintenance is two seasons of work, not one coupon visit.",
    eyebrow: "Seasonal maintenance · 61032",
    lede: "A single “annual tune-up” copied from a milder town misses how Freeport actually uses equipment. Millrace Heating & Air treats maintenance as a fall heating check and a spring cooling check — two different machines, one house.",
    image: "/photos/maintenance.jpg",
    imageAlt:
      "Seasonal HVAC maintenance visit for a Freeport home’s heating and cooling",
    problems: [
      {
        title: "A furnace that was last touched after a no-heat call",
        text: "Crisis service is not a maintenance plan. Fall is when we want the heat sequence on purpose.",
      },
      {
        title: "An air conditioner that has not run since last August",
        text: "Spring is the only honest time to find idle damage before humidity arrives.",
      },
      {
        title: "A filter habit that serves neither season",
        text: "The same slot feeds winter heat and summer cooling. The wrong media hurts both.",
      },
      {
        title: "Indoor air that only gets discussed when someone is annoyed",
        text: "Humidity and filtration belong next to maintenance, without medical stories.",
      },
    ],
    symptoms: [
      "You only call when something is already broken",
      "Last winter and last summer each produced a surprise failure",
      "Nobody in the house knows when the filter was last changed",
      "The outdoor unit is still wrapped in last fall’s leaves",
      "You want one company looking at both seasons without two sales pitches",
    ],
    explanation: [
      "HVAC maintenance in Stephenson County has a calendar. Heat is the long job. Cooling is the idle job. Checking a condenser in November tells you almost nothing. Skipping the furnace until January is how lockouts get scheduled by the weather.",
      "A combined maintenance visit in one day can make sense when both machines are accessible and the weather cooperates. Often the honest plan is still two trips: heat before the freeze, cooling after the snow.",
      "Seasonal service is available. If we find a repair, it is named as a repair.",
    ],
    causes: [
      {
        title: "Two idle patterns in one house",
        text: "The furnace rests in summer. The AC rests in winter. Each rest creates a different failure list.",
      },
      {
        title: "Shared airflow that gets ignored",
        text: "Filters, blowers, and returns are year-round parts pretending to be seasonal.",
      },
      {
        title: "Weather that punishes skipped visits",
        text: "A missed fall check meets January normals in the teens. A missed spring check meets the first humid week.",
      },
      {
        title: "Add-on devices nobody services",
        text: "Humidifiers, extra filters, and UV lights (when present) get forgotten between crises.",
      },
    ],
    process: [
      {
        title: "Pick the season that is actually coming",
        text: "We do not pretend a cooling rinse is furnace work. The visit matches the weather ahead.",
      },
      {
        title: "Inspect the shared cabinet every time",
        text: "Filter, blower access, drains, and safety switches get looked at because both seasons use them.",
      },
      {
        title: "Run the mode you came to check",
        text: "A heat sequence in fall. A cooling cycle in spring when the day allows.",
      },
      {
        title: "Write down what can wait and what cannot",
        text: "Maintenance ends with a list, not a fog of “looked good.”",
      },
    ],
    whenToCall: [
      "You want a fall heating check before nights stay below freezing",
      "You want a spring cooling check after the outdoor unit sat in snow",
      "Both seasons surprised you last year",
      "You have add-on humidity or filtration that never gets looked at",
    ],
    nextSteps: [
      "Decide whether you are calling about the coming heating season or the coming cooling season.",
      "Change a packed filter if you can do it safely.",
      "Request HVAC maintenance and say what equipment is in the house.",
    ],
    why: [
      "We schedule maintenance against Freeport weather, not a generic annual sticker.",
      "Repairs found on a check get named as repairs.",
      "The shared blower and filter are never “someone else’s season.”",
    ],
    local: [
      "A climate with roughly 6,956 heating degree days and 690 cooling degree days does not get one identical visit. The furnace needs fall. The condenser needs spring.",
      "Snow around 35 inches is why we do not treat the outdoor unit as a year-round machine. It has to be found again after winter.",
      "Orangeville, Dakota, and other nearby towns are confirmed when you request service. Maintenance routes are not an automatic claim.",
    ],
    faqs: [
      {
        q: "Can you check heat and AC maintenance in one visit?",
        a: "Sometimes, if both can be tested honestly. A 30-degree day is a poor cooling test. We would rather split the visits than fake a season.",
      },
      {
        q: "Is this a membership or a club?",
        a: "No. This page is seasonal service you can request. We do not invent a plan name, perks, or a service club here.",
      },
      {
        q: "What should I do between visits?",
        a: "Keep the filter honest, keep the outdoor unit clear of snow and weeds, and call if the system starts failing a cycle instead of waiting for the next season.",
      },
      {
        q: "Do you maintain heat pumps on this visit type?",
        a: "Heat pumps need their own year-round logic. See heat pump maintenance. We will not copy a furnace-and-AC checklist onto a reversing system.",
      },
      {
        q: "Will maintenance prevent every breakdown?",
        a: "No. It finds a lot of idle-season and dirty-system failures. Parts still fail on a Thursday in February. That is repair, not a broken promise.",
      },
    ],
    related: [
      "furnace-maintenance-freeport-il",
      "ac-maintenance-freeport-il",
      "hvac-repair-freeport-il",
      "indoor-air-quality-freeport-il",
    ],
  },
  {
    slug: "hvac-replacement-freeport-il",
    href: "/services/hvac-replacement-freeport-il/",
    category: "hvac",
    navLabel: "HVAC Replacement",
    navDescription: "Matched heating and cooling when piecemeal repairs pile up.",
    metaTitle: "HVAC Replacement in Freeport When the Whole System Is Tired",
    metaDescription:
      "Replace heating and cooling together in Freeport when the pair no longer matches. Millrace Heating & Air talks through whole-system HVAC replacement in 61032.",
    h1: "Replacing heat and cooling together only makes sense when the pieces no longer match.",
    eyebrow: "System replacement · Freeport",
    lede: "Piecemeal swaps leave a new condenser on a tired furnace, or a new furnace pushing air through a leftover coil. When both halves are done, Millrace Heating & Air will talk about the system — still after a diagnosis, still sized for a heating-first town.",
    image: "/photos/hero-home-winter.jpg",
    imageAlt:
      "Freeport home that needs a matched heating and cooling system replacement",
    problems: [
      {
        title: "A new piece attached to a leftover piece",
        text: "The house has one recent repair and one antique. Comfort and humidity both suffer.",
      },
      {
        title: "A furnace and AC that failed in the same year",
        text: "That is often the moment to stop playing singles and plan the pair.",
      },
      {
        title: "Ducts that will sabotage any new equipment",
        text: "Replacement without an airflow talk repeats the same cold bedroom and the same clammy July.",
      },
      {
        title: "A fuel or equipment-type decision that was never made on purpose",
        text: "Furnace-only, heat pump, or dual-fuel is a climate decision in 61032, not a brochure flip.",
      },
    ],
    symptoms: [
      "Both the furnace and the outdoor unit are on a first-name basis with repair",
      "Cooling was replaced once and heat still cannot keep up",
      "You are facing a heat exchanger and a dead compressor in the same season",
      "The thermostat has been a translator between mismatched equipment for years",
      "An addition or insulation change made the old pair feel accidental",
    ],
    explanation: [
      "Whole-system replacement is for when the house has outgrown frankensteined equipment. It is not the default ending of every repair visit. In Freeport, the heating half still carries the year. Any replacement plan that treats cooling as the main character has the climate backwards.",
      "The useful conversation is match and load. Furnace and coil and condenser, or a heat pump and backup, plus the ducts that have to move the air. We would rather walk the house than quote a package from a flyer.",
      "If only one half is finished, we will send you to furnace installation or AC replacement. Honesty about scope is the whole point of this page.",
    ],
    causes: [
      {
        title: "Years of replacing the cheaper half",
        text: "The surviving half eventually cannot partner with anything new.",
      },
      {
        title: "Refrigerant and coil generations that no longer line up",
        text: "A leftover indoor coil can block an otherwise sensible outdoor replacement.",
      },
      {
        title: "A heating load the old pair never met",
        text: "If January already lost, a pretty new condenser will not fix January.",
      },
      {
        title: "Controls that were layered instead of designed",
        text: "Thermostats, dual-fuel kits, and add-ons stacked over time become a system nobody can service cleanly.",
      },
    ],
    process: [
      {
        title: "Decide whether this is really a pair",
        text: "We will not replace a healthy furnace to decorate a condenser sale.",
      },
      {
        title: "Choose the heating strategy first",
        text: "Gas furnace, heat pump, or dual-fuel gets decided against Stephenson County winter, then cooling is matched.",
      },
      {
        title: "Include the air path",
        text: "Returns, filter rack, and the rooms that already fail are part of the scope or they stay complaints.",
      },
      {
        title: "Install as one system",
        text: "Start-up means heat and cooling both get a real test as weather allows, plus a thermostat that matches the equipment.",
      },
    ],
    whenToCall: [
      "Both heating and cooling are near the end at the same time",
      "A recent half-replacement created a mismatch",
      "You want a heating-first replacement plan, not a cooling package",
      "The ducts or the thermostat are part of why the old pair failed",
    ],
    nextSteps: [
      "Write down what has already been replaced in the last several years.",
      "Note the rooms that fail in January and the rooms that fail in July. They are often different.",
      "Request a system visit. Bring your questions about furnace versus heat pump if you have them.",
    ],
    why: [
      "We will still repair a half that deserves a repair.",
      "Heating climate math goes first. Cooling is matched, not featured.",
      "Ducts and controls are in the conversation or the new pair inherits the old complaints.",
    ],
    local: [
      "Freeport’s heating degree days dwarf cooling degree days. A whole-system replacement that starts with a giant condenser is the wrong story for 61032.",
      "Older housing stock here means the replacement often has to live in a tight basement with existing trunks. The pretty outdoor photo is the easy part.",
      "Davis, German Valley, and other nearby towns are confirmed by phone. A replacement visit is scheduled, not assumed.",
    ],
    faqs: [
      {
        q: "Do I have to replace heat and AC together?",
        a: "No. Together is for mismatched or jointly failing pairs. A sound furnace can stay. A sound condenser can stay. We will say which case you have.",
      },
      {
        q: "Is a heat pump the automatic replacement now?",
        a: "No. A cold-climate heat pump or dual-fuel system can be right. A mild-climate heat pump is not. That is an on-site decision.",
      },
      {
        q: "Will new equipment fix the cold upstairs bedroom?",
        a: "Only if we treat the ducts and returns as part of the job. A matched pair on starved trunks repeats the same room complaint.",
      },
      {
        q: "Can I replace now and worry about cooling next year?",
        a: "You can stage work, but the coil and furnace still have to match. Staging without a plan is how leftover mismatches get built.",
      },
      {
        q: "Do you quote a package sight unseen?",
        a: "No. The house, the existing pair, and the rooms that already fail decide the scope. Call or request a visit.",
      },
    ],
    related: [
      "furnace-installation-freeport-il",
      "ac-replacement-freeport-il",
      "heat-pump-installation-freeport-il",
      "hvac-maintenance-freeport-il",
    ],
  },
  {
    slug: "emergency-hvac-freeport-il",
    href: "/services/emergency-hvac-freeport-il/",
    category: "hvac",
    navLabel: "Emergency HVAC",
    navDescription: "Urgent no-heat or no-cooling help. Call first.",
    metaTitle: "Emergency HVAC in Freeport: Call First, Then We Sort It",
    metaDescription:
      "No heat in a Freeport freeze or no cooling in a heat wave is a phone call first. Request emergency HVAC help in 61032 after the house is confirmed safe.",
    h1: "Call first. We will sort heat, cooling, and whether the house is safe.",
    eyebrow: "Urgent HVAC · Freeport 61032",
    lede: "If the furnace stopped on a Stephenson County night, or the AC died when the house was already hot, do not wait on a long form. Call Millrace Heating & Air. Availability is confirmed on the phone.",
    image: "/photos/emergency-night.jpg",
    imageAlt:
      "Freeport home at night when heating or cooling has failed and a call is needed",
    problems: [
      {
        title: "No heat while the outdoor temperature is already dangerous",
        text: "January nights near 11°F drop indoor temperatures fast in older houses. Pipes are not theoretical.",
      },
      {
        title: "A furnace that will not stay running",
        text: "Lockouts and short cycles can leave you with a little heat now and none at 3 a.m.",
      },
      {
        title: "No cooling during a stretch the house cannot tolerate",
        text: "Freeport summers are shorter, but a closed-up house on an 82°F humid day still becomes a health-and-sleep problem for some households.",
      },
      {
        title: "A smell or alarm that is not an HVAC convenience issue",
        text: "Gas odor and carbon monoxide are leave-the-house emergencies. Equipment talk starts after 911 and Nicor Gas.",
      },
    ],
    symptoms: [
      "Indoor temperature falling with no useful heat",
      "A furnace that tries, fails, and locks out",
      "No cooling while occupants are already miserable",
      "Burning smell from equipment after you have confirmed the house is otherwise safe",
      "Water flooding a furnace closet during a cooling call",
    ],
    explanation: [
      "Emergency HVAC on this site means: the house is already in trouble and the next action is a phone call. It does not mean a promised arrival window, a 24-hour shop, or a guarantee we can be everywhere at once. Those claims stay off the page unless they are later verified as business facts.",
      "Safety still outranks comfort. Rotten-egg gas, hissing at the meter, or a sounding CO alarm means you leave. From outside, call 911 and Nicor Gas at 888-642-6748. Do not keep resetting a furnace to “see.”",
      "If the house is safe, the useful homeowner checks are short: thermostat, power switch, filter. Then call. Describe whether you have any heat or cooling at all, and what you already tried.",
    ],
    causes: [
      {
        title: "A heating plant that chose the coldest hours to quit",
        text: "Ignition, venting, and lockouts show up when run time is longest — usually overnight.",
      },
      {
        title: "Cooling that sat all winter and failed on the first real day",
        text: "An emergency cooling call in June is often last winter’s idle damage arriving late.",
      },
      {
        title: "A shared blower or control that took both modes down",
        text: "No air at all is urgent in January. It is still urgent in a heat wave.",
      },
      {
        title: "A problem that was “watching it” for too long",
        text: "Short cycling and weak heat become no heat on the night you cannot borrow time.",
      },
    ],
    process: [
      {
        title: "Safety first, always",
        text: "Gas and CO change the script. We do not troubleshoot a house that should be empty.",
      },
      {
        title: "Stabilize what we can",
        text: "The first job is usable heat or cooling if the equipment and the house allow it.",
      },
      {
        title: "Diagnose enough to be honest",
        text: "A temporary restore and a deeper repair are different sentences. You hear which one you are in.",
      },
      {
        title: "Plan the follow-up if the night was only a hold",
        text: "Some urgent visits buy time. The lasting fix may be a daytime repair or a replacement talk.",
      },
    ],
    whenToCall: [
      "There is no heat and the house is already getting cold",
      "There is no cooling and people in the house cannot safely wait",
      "The furnace will not stay running after a safe reset",
      "You smell gas or a CO alarm is sounding — after you are outside and have called 911 and Nicor Gas",
    ],
    nextSteps: [
      "If you smell gas or a CO alarm sounds, leave. Call 911 and Nicor Gas at 888-642-6748.",
      "If the house is safe, check thermostat, furnace or air-handler switch, and filter. Then stop opening panels.",
      "Call. Say you have no heat or no cooling and whether anyone is at risk in the house.",
    ],
    why: [
      "We would rather you call than keep resetting a locked-out furnace.",
      "We will not advertise response times or round-the-clock coverage we cannot keep.",
      "Safety contacts for gas and carbon monoxide stay on this page because they matter before any HVAC visit.",
    ],
    local: [
      "Freeport January nights average near 11°F. A dead heating system is a pipes-and-people problem before it is a parts problem.",
      "Older 61032 houses lose heat quickly. Waiting until morning is sometimes a choice you do not actually have.",
      "Nearby towns are confirmed when you call. An urgent request from Lena or Cedarville is not an automatic dispatch.",
    ],
    faqs: [
      {
        q: "Do you offer after-hours emergency service?",
        a: "Call and ask what we can do with the situation you have. Availability is confirmed on the phone. We do not advertise round-the-clock coverage we cannot keep.",
      },
      {
        q: "What counts as an HVAC emergency?",
        a: "No heat in freezing weather, a furnace that will not stay on, no cooling the household cannot tolerate, a system that will not start, or equipment smells after the house is confirmed safe.",
      },
      {
        q: "Should I try to fix the furnace myself at night?",
        a: "Do not open the burner compartment, bypass safeties, or ignore a gas odor. Thermostat, switch, and filter are the usual safe checks. Then call.",
      },
      {
        q: "The house is cold but I do not smell gas. Still call?",
        a: "Yes. A safe house can still lose heat fast enough to matter. Request service and say how cold it already is inside.",
      },
      {
        q: "Can I request a callback instead of calling?",
        a: "You can, but if the house is already losing heat or overheating, the phone is the faster path. Forms wait on people. Weather does not.",
      },
    ],
    related: [
      "furnace-repair-freeport-il",
      "ac-repair-freeport-il",
      "heating-repair-freeport-il",
      "hvac-repair-freeport-il",
    ],
  },
  {
    slug: "heat-pump-repair-freeport-il",
    href: "/services/heat-pump-repair-freeport-il/",
    category: "heat-pump",
    navLabel: "Heat Pump Repair",
    navDescription: "Heat pumps that struggle, ice up, or lean on backup heat.",
    metaTitle: "Heat Pump Repair in Freeport for Cold-Climate Equipment",
    metaDescription:
      "A heat pump that ices up, blows cool air, or leans on backup heat in Freeport needs an on-site diagnosis. Call for heat pump repair in Stephenson County.",
    h1: "A heat pump that struggles in Freeport cold is a diagnosis, not a slogan.",
    eyebrow: "Heat pump repair · northern Illinois",
    lede: "This climate will tell you quickly if the outdoor unit can still heat. If the house is cool, the unit is a block of ice, or auxiliary heat never stops, Millrace Heating & Air will test the machine you have — including whether it was ever the right machine.",
    image: "/photos/heat-pump.jpg",
    imageAlt:
      "Air-source heat pump outside a Freeport home in a heating climate",
    problems: [
      {
        title: "Outdoor unit iced into a sculpture",
        text: "Some frost in heat mode is normal. A solid block that never clears is a defrost or airflow failure.",
      },
      {
        title: "Air that feels cool while the thermostat says heat",
        text: "Heat-pump supply air is not furnace-hot. Truly cold air, or no temperature rise, is still a repair call.",
      },
      {
        title: "Backup heat that never arrives — or never leaves",
        text: "Strips or a furnace stage that stay off leave the house behind. Strips that never stop can mean the outdoor unit gave up.",
      },
      {
        title: "A reversing valve that picked a season and stayed there",
        text: "Stuck in cooling on a January day is not a thermostat argument. It is a mechanical one.",
      },
    ],
    symptoms: [
      "Heavy ice on the outdoor coil that does not melt between cycles",
      "Loud defrost or a unit that steams, then never returns to heat",
      "Auxiliary heat on the thermostat for hours on a mild winter day",
      "The outdoor fan runs and the house still loses temperature",
      "Error codes on a communicating thermostat you cannot clear honestly",
    ],
    explanation: [
      "Heat pump repair in Freeport has to respect January normals near 11°F. A unit that heated fine in October can fail defrost, lose charge, or lean entirely on electric strips once the real winter arrives. That is a test, not a lecture about heat pumps in general.",
      "We separate “this is how a heat pump feels” from “this heat pump is not heating.” Supply air in the 90s can be normal. A house that cannot hold temperature is not. Backup heat that runs all day on a 35-degree afternoon is a clue, not a lifestyle.",
      "If the equipment was selected for a milder catalog climate, we will say that after we diagnose the failure. Repair still comes first. Replacement talk waits on facts.",
    ],
    causes: [
      {
        title: "Defrost that never finishes",
        text: "Failed sensors, boards, or reversing action leave the coil buried. Heating output collapses.",
      },
      {
        title: "Charge or outdoor airflow problems",
        text: "A dirty coil, a tired fan, or a leak shows up first as weak heat, then as ice.",
      },
      {
        title: "Backup heat that is open, tripped, or miswired",
        text: "In this climate the second stage is not optional. If it is dead, the house knows.",
      },
      {
        title: "Controls that never learned the equipment",
        text: "A furnace thermostat on a heat pump — or a bad outdoor sensor — produces nonsense calls.",
      },
    ],
    process: [
      {
        title: "See what the thermostat is actually asking for",
        text: "Heat, aux, emergency heat, and outdoor temperature belong in the first minute.",
      },
      {
        title: "Look at ice, airflow, and the outdoor fan",
        text: "A buried coil and a free-spinning fan tell different stories.",
      },
      {
        title: "Test the refrigeration and defrost path",
        text: "We diagnose. We do not “add heat” as a personality fix.",
      },
      {
        title: "Check that backup heat can still do its job",
        text: "Strips or a dual-fuel furnace stage get verified, not assumed.",
      },
    ],
    whenToCall: [
      "The outdoor unit is a block of ice and the house is cooling off",
      "Auxiliary heat is on constantly and indoor temperature is still falling",
      "The heat pump is blowing truly cold air in heat mode",
      "You have error codes and a house that is not holding",
    ],
    nextSteps: [
      "Note whether the thermostat shows aux or emergency heat.",
      "Look at the outdoor unit from the doorway. Do not chip ice off the coil with tools.",
      "Call for heat pump repair. Say how cold it is inside and outside if you know.",
    ],
    why: [
      "We distinguish normal heat-pump air from a unit that is not heating.",
      "Defrost and backup heat get tested because this climate uses both.",
      "A poorly selected machine still gets a diagnosis before a sales talk.",
    ],
    local: [
      "Heat pumps in 61032 have to heat through a season measured in thousands of heating degree days, not a few frosty mornings.",
      "Defrost behavior that looks dramatic on a damp 25°F day is common here. A coil that never clears is not.",
      "If you are in Dakota or Orangeville, say so when you call. Heat pump repair is confirmed, not auto-served.",
    ],
    faqs: [
      {
        q: "Is ice on a heat pump always a failure?",
        a: "Light frost in heat mode can be normal. A thick shell that never melts, or ice plus a cold house, is a service call.",
      },
      {
        q: "Why is the air from the vents cooler than my old furnace?",
        a: "Heat pumps often deliver cooler supply air than a gas furnace even when they are working. If rooms will not hold temperature, that is still a repair visit.",
      },
      {
        q: "Should I switch the thermostat to emergency heat?",
        a: "If the house is losing temperature and you know how your control works, emergency heat can be a temporary hold. It is not a repair. Call either way.",
      },
      {
        q: "Can you repair a heat pump that was never right for this winter?",
        a: "We can often restore what the machine is capable of. Capability and climate match are separate sentences. You will hear both.",
      },
      {
        q: "The outdoor unit is steaming. Is it on fire?",
        a: "Defrost can make steam. Burning smells or electrical smoke are different. If you are unsure and the house is safe, call and describe it.",
      },
    ],
    related: [
      "heat-pump-maintenance-freeport-il",
      "heat-pump-installation-freeport-il",
      "heating-repair-freeport-il",
      "emergency-hvac-freeport-il",
    ],
  },
  {
    slug: "heat-pump-installation-freeport-il",
    href: "/services/heat-pump-installation-freeport-il/",
    category: "heat-pump",
    navLabel: "Heat Pump Installation",
    navDescription: "Cold-climate heat pumps and dual-fuel conversations.",
    metaTitle: "Heat Pump Installation in Freeport Written for Real Winter",
    metaDescription:
      "Installing a heat pump in Freeport only makes sense if the machine can heat here. Talk through cold-climate or dual-fuel installation for a 61032 house.",
    h1: "If a heat pump is going to heat 61032, it has to be chosen for this winter.",
    eyebrow: "Heat pump installation · Stephenson County",
    lede: "Roughly 6,956 heating degree days versus 690 cooling degree days is the whole briefing. Millrace Heating & Air will not install a mild-climate heat pump and hope January is polite.",
    image: "/photos/heat-pump.jpg",
    imageAlt:
      "Cold-climate heat pump installation discussion for a Freeport home",
    problems: [
      {
        title: "A furnace replacement that turned into a heat-pump question",
        text: "That can be a good question. It is a climate-and-backup question, not a trend question.",
      },
      {
        title: "An existing air handler that cannot deliver heat-pump air",
        text: "Ducts and blower speed that were “fine” for a hot furnace can fail with cooler supply air.",
      },
      {
        title: "No honest backup plan",
        text: "Electric strips, a remaining furnace, or a machine actually rated for this cold — one of those has to be real.",
      },
      {
        title: "A cooling-only outdoor pad being asked to become the heating plant",
        text: "Clearance, elevation, and snow matter more when the outdoor unit has to run in January, not sit.",
      },
    ],
    symptoms: [
      "You are replacing a furnace and want to know if a heat pump belongs in the plan",
      "The current heat pump was installed like an air conditioner and never kept up",
      "Ducts already struggle and you are considering a different heating strategy",
      "You want dual-fuel explained in ordinary words, not slogans",
    ],
    explanation: [
      "Heat pump installation in Freeport is a heating conversation that also cools. The outdoor unit will run in weather that shuts a normal air conditioner down for the season. Pad height, defrost drainage, line-set protection, and backup heat are part of the install, not accessories.",
      "Some houses do well with a cold-climate heat pump. Some do better with dual-fuel — a heat pump for the shoulder months and gas when the math and the comfort say so. Some houses should keep a furnace as the primary plant. We would rather say that on the visit than force a product.",
      "If a room was never on the ducts, a ductless head may be the cleaner install than asking a new heat pump to fix an addition through a six-inch run.",
    ],
    causes: [
      {
        title: "Equipment chosen for a brochure climate",
        text: "A heat pump that cannot heat near Freeport’s January normals is the wrong heat pump, however pretty the sticker.",
      },
      {
        title: "Ducts designed around hot furnace air",
        text: "Cooler supply air needs more airflow or better distribution. Ignoring that makes a new install feel weak.",
      },
      {
        title: "Backup heat treated as optional",
        text: "In a heating-dominated town, the second stage is part of the design.",
      },
      {
        title: "An outdoor location that will bury the coil",
        text: "Snow drifting against a low pad is how January becomes a service call.",
      },
    ],
    process: [
      {
        title: "Start with the heating load",
        text: "We care how the house loses heat on a design-cold night, not only how it feels in July.",
      },
      {
        title: "Pick a strategy the house can support",
        text: "Cold-climate heat pump, dual-fuel, or furnace-primary with a later conversation. Named out loud.",
      },
      {
        title: "Design the outdoor unit for snow and defrost",
        text: "Height, clearance, and where the melt water goes are installation details here.",
      },
      {
        title: "Set controls that match the equipment",
        text: "A communicating or dual-fuel thermostat is not a leftover furnace control with the wires forced.",
      },
    ],
    whenToCall: [
      "You want a heat pump installed as heating equipment, not as a cooling upgrade",
      "A furnace replacement has you considering dual-fuel",
      "The last heat pump in the house never held January",
      "You need an honest no if the house or the ducts are not ready",
    ],
    nextSteps: [
      "Write down how the house behaves below freezing now.",
      "If you already have a furnace you might keep, say that on the call.",
      "Request a visit. Do not buy an outdoor unit from a mild-climate ad first.",
    ],
    why: [
      "Climate math goes first. Marketing copy does not.",
      "Backup heat is part of the install conversation in 61032.",
      "We will recommend a furnace-primary plan when that is the honest fit.",
    ],
    local: [
      "January highs near 28°F and lows near 11°F are normal here. A heat pump install that cannot speak to those numbers is not finished thinking.",
      "Unlike a Freeport air conditioner, a heat pump outdoor unit does not get a long idle winter. It has to run, defrost, and stay above the snow.",
      "Rock City, Winslow, and other nearby towns are confirmed when you call. Installation scheduling is not an automatic county claim.",
    ],
    faqs: [
      {
        q: "Do heat pumps work in Freeport winters?",
        a: "Some cold-climate heat pumps can. Many older or poorly selected units struggle as outdoor temperatures fall toward the January normals. The machine has to be chosen for northern Illinois.",
      },
      {
        q: "Can a heat pump replace a gas furnace here?",
        a: "Sometimes, with the right equipment and a house that can be heated that way. Dual-fuel is also common. That is an on-site decision, not a website yes.",
      },
      {
        q: "What is dual-fuel in ordinary words?",
        a: "The heat pump handles the milder days. A gas furnace takes over when it is the better heat. The thermostat has to be set up for that on purpose.",
      },
      {
        q: "Will you install any heat pump I buy online?",
        a: "Ask on the call. An unmatched or mild-climate unit sitting in the garage can be a problem, not a head start.",
      },
      {
        q: "Is this the same as a mini-split?",
        a: "Ductless mini-splits are heat pumps too, but they are a different install. Use the ductless pages if you are talking about wall heads, not a ducted pair.",
      },
    ],
    related: [
      "heat-pump-repair-freeport-il",
      "heat-pump-maintenance-freeport-il",
      "furnace-installation-freeport-il",
      "hvac-replacement-freeport-il",
    ],
  },
  {
    slug: "heat-pump-maintenance-freeport-il",
    href: "/services/heat-pump-maintenance-freeport-il/",
    category: "heat-pump",
    navLabel: "Heat Pump Maintenance",
    navDescription: "Year-round service for machines that never really rest.",
    metaTitle: "Heat Pump Maintenance in Freeport for Year-Round Machines",
    metaDescription:
      "Heat pumps in Freeport run through winter, not only through summer. Request seasonal heat pump maintenance in 61032 for defrost, coils, and backup heat checks.",
    h1: "Heat pumps here do not get an off-season. Service has to follow that.",
    eyebrow: "Heat pump service · Freeport",
    lede: "A Freeport air conditioner can sit from frost to lilacs. A heat pump cannot. Millrace Heating & Air maintains the outdoor unit, the indoor airflow, and the backup heat because all three work in this climate.",
    image: "/photos/heat-pump.jpg",
    imageAlt:
      "Heat pump outdoor unit that runs through Freeport winters and needs maintenance",
    problems: [
      {
        title: "A coil that has been heating and cooling without a look",
        text: "The outdoor coil works both directions. Dirt and bent fins cost you heat first in this town.",
      },
      {
        title: "Defrost parts nobody has tested",
        text: "Sensors and boards fail quietly until a January ice shell appears.",
      },
      {
        title: "Backup heat that has not been asked to run on purpose",
        text: "Strips or a furnace stage that only fail during a cold snap are a maintenance miss.",
      },
      {
        title: "A filter habit copied from a furnace-only house",
        text: "Heat pumps are picky about airflow in both modes. The same packed filter ices a coil in summer and starves heat in winter.",
      },
    ],
    symptoms: [
      "You have a heat pump and have only ever scheduled “AC tune-ups”",
      "Last winter included a surprise ice-up or an aux-heat bill shock",
      "The outdoor coil looks matted and nobody has rinsed it",
      "The indoor coil or filter rack is a guess",
      "You want a check before the heating season, not after the first ice event",
    ],
    explanation: [
      "Heat pump maintenance is not AC maintenance with a different title. The machine heats through Stephenson County winter, defrosts, and still has to cool in July. A spring-only visit leaves the heating half unexamined. A fall-only visit leaves the cooling half unexamined.",
      "A useful visit looks at both coils, airflow, electrical start parts, defrost operation as conditions allow, and whether backup heat still answers. We will not invent a special brand of plan. We will look at the unit you have.",
      "If we find a failing reversing valve or a leak, that becomes repair talk. Maintenance is how you meet those problems in daylight.",
    ],
    causes: [
      {
        title: "Year-round outdoor run time",
        text: "Fans, capacitors, and coils wear in January and July. There is no long rest.",
      },
      {
        title: "Defrost that only proves itself in real weather",
        text: "A fall check that never asks the unit to defrost can miss the part you need in January.",
      },
      {
        title: "Backup heat that sits unused in mild spells",
        text: "Unused strips still corrode and trip. Unused furnace stages still fail to light.",
      },
      {
        title: "Snow and cottonwood taking turns on the same coil",
        text: "Winter buries it. Late spring coats it. Both are maintenance weather here.",
      },
    ],
    process: [
      {
        title: "Treat it as a year-round plant",
        text: "We ask how it heated last winter and how it cooled last summer. Both answers matter.",
      },
      {
        title: "Clean and inspect both coils as access allows",
        text: "Outdoor fins and the indoor coil path get attention because both do work here.",
      },
      {
        title: "Check defrost and backup on purpose",
        text: "If weather allows a real observation, we take it. If not, we still test the parts we can.",
      },
      {
        title: "Leave a list that names heating and cooling risks",
        text: "A swollen capacitor is a both-seasons problem. You should hear that.",
      },
    ],
    whenToCall: [
      "Your heat pump has never had a visit that mentioned defrost or backup heat",
      "Last winter included ice, aux-heat drama, or weak heat",
      "You are heading into heating season and the outdoor coil looks neglected",
      "You have been using AC-only maintenance on a reversing system",
    ],
    nextSteps: [
      "Keep snow and weeds off the outdoor unit. Do not force ice off the fins.",
      "Keep the filter honest. Heat pumps notice packed media quickly.",
      "Request heat pump maintenance and say whether winter or summer is your bigger worry.",
    ],
    why: [
      "We will not copy an air-conditioner checklist onto a machine that heats January.",
      "Backup heat gets checked because Freeport uses it.",
      "Problems become repairs when they are repairs. Maintenance stays a look-and-test visit.",
    ],
    local: [
      "A heat pump in Freeport is a winter machine that also cools. That is the reverse of how most 61032 condensers live.",
      "Nights at or below freezing are routine. Defrost and backup heat are maintenance topics here, not rarities.",
      "Cedarville, Pearl City, and other nearby towns are confirmed on the phone. We do not auto-route those visits.",
    ],
    faqs: [
      {
        q: "Is heat pump maintenance the same as HVAC maintenance?",
        a: "It overlaps on filters and coils. It is not the same. Defrost, reversing, and backup heat are extra work a furnace-and-AC visit can miss.",
      },
      {
        q: "When should I schedule it?",
        a: "Before the heating season is the high-value time in this climate. A second look before cooling season still helps. Ask when you call.",
      },
      {
        q: "Can you maintain a dual-fuel system?",
        a: "Yes, as a system — heat pump plus the furnace stage. Say that you have dual-fuel so we do not treat it like a single box.",
      },
      {
        q: "Do you recharge heat pumps every year?",
        a: "No. A tight system does not need a seasonal charge. Repeated “recharge” usually means a leak is being ignored.",
      },
      {
        q: "What should I do after a heavy snow?",
        a: "Clear snow around the unit so it can breathe and defrost. Do not hammer ice off the coil. If it is buried and the house is cooling off, call.",
      },
    ],
    related: [
      "heat-pump-repair-freeport-il",
      "hvac-maintenance-freeport-il",
      "heat-pump-installation-freeport-il",
      "furnace-maintenance-freeport-il",
    ],
  },
  {
    slug: "ductless-mini-split-freeport-il",
    href: "/services/ductless-mini-split-freeport-il/",
    category: "ductless",
    navLabel: "Ductless Mini Splits",
    navDescription: "Room-by-room heating and cooling without new ductwork.",
    metaTitle: "Ductless Mini Splits in Freeport for Rooms Without Decent Ducts",
    metaDescription:
      "Ductless mini splits in Freeport heat and cool rooms older trunks never served. Talk through heads, outdoor units, and whether ducts are the wrong project.",
    h1: "Ductless heating and cooling for the rooms Freeport houses never quite served.",
    eyebrow: "Ductless systems · 61032",
    lede: "An enclosed porch, a finished attic, or an addition on a six-inch run is a Freeport story. Millrace Heating & Air uses this page for the whole ductless conversation — when a wall head is the honest tool, and when it is not.",
    image: "/photos/mini-split.jpg",
    imageAlt:
      "Ductless mini-split indoor head in a Freeport home without strong ductwork",
    problems: [
      {
        title: "A room the furnace never really owned",
        text: "The trunks stop, the addition starts, and every January that room is a project. Ductless is often cleaner than pretending a damper will appear.",
      },
      {
        title: "A house that cannot take new ducts without a remodel",
        text: "Plaster, brick, and finished floors make trunk work a construction job. Line sets are still work. They are usually smaller work.",
      },
      {
        title: "One outdoor unit asked to cover three different lives",
        text: "A bedroom, a shop, and a sunroom do not want the same set point. Zoning is the point of heads, not a slogan.",
      },
      {
        title: "People comparing ductless to a whole-house swap they do not need",
        text: "If the main furnace still heats the main house, a head can be a room tool. It does not have to become a religion.",
      },
    ],
    symptoms: [
      "An addition that needs space heaters every winter",
      "A second floor that never cools because the trunks were built for heat",
      "A garage shop or bonus room with no honest HVAC",
      "You were told new ducts through the whole house or nothing",
      "You already have a head that nobody in the house knows how to use",
    ],
    explanation: [
      "Ductless mini-splits are heat pumps with indoor heads. In Freeport they have to heat, not only cool a bedroom in July. That means outdoor placement, winter run time, and a head location that actually throws air across the room you care about.",
      "This page is the overview. Repair and installation have their own pages because a leaking line set and a first-time layout are different jobs. If you are not sure which one you need, start here and say what the room does today.",
      "Ductless is not automatically better than ducts. If the existing trunks can be made to work, that can still be the quieter house. We would rather tell you that than hang a head for sport.",
    ],
    causes: [
      {
        title: "Housing that grew in pieces",
        text: "Older Freeport homes pick up enclosed porches and rear additions. The original furnace rarely gets a matching trunk.",
      },
      {
        title: "Ducts that were always heating-first",
        text: "A second floor that starves in July is sometimes a ductless candidate, sometimes a return problem. We look before we pick.",
      },
      {
        title: "A desire to condition one room hard",
        text: "A shop, a guest suite, or a sunroom can justify its own system without touching the main plant.",
      },
      {
        title: "An existing head that was placed for the photo",
        text: "A unit over a door, behind a curtain, or fighting a stairwell is a layout problem that feels like an equipment problem.",
      },
    ],
    process: [
      {
        title: "Name the room and the job",
        text: "Heat, cool, or both. Occasional guest use or daily living. Those change the layout.",
      },
      {
        title: "See whether ducts can still win",
        text: "If a trunk fix is honest, we say so. Ductless is a tool, not a default.",
      },
      {
        title: "Talk heads, outdoor location, and line-set path",
        text: "Older walls have opinions. The pretty indoor photo is the easy part.",
      },
      {
        title: "Send you to install or repair with a clear next step",
        text: "New system, sick existing system, or “keep the furnace and add a head.” Named.",
      },
    ],
    whenToCall: [
      "A room is unlivable in January or July and the main system cannot reach it",
      "You were quoted a whole-house duct job and want a second look",
      "You already own a mini-split and need to know if it is a repair or a poor layout",
      "You want heating and cooling in a space that has no ducts",
    ],
    nextSteps: [
      "Walk the room. Note windows, doors, and where people actually sit.",
      "If a head already exists, note error lights and whether the outdoor unit runs.",
      "Call and describe the space. Bring the install page or the repair page if you already know the job.",
    ],
    why: [
      "We will not hang a head to avoid telling you the ducts can be fixed.",
      "Heating performance in Freeport winter is part of the ductless talk, not a footnote.",
      "Overview, repair, and installation stay separate so the page matches the job.",
    ],
    local: [
      "Older 61032 houses often have a room that was never on the original forced-air plan. That is the usual ductless conversation here.",
      "A mini-split outdoor unit in Freeport still sits through snow. Placement cannot be “wherever the line set was shortest.”",
      "Lena, Ridott, and other nearby towns are confirmed when you call. Ductless work is not auto-dispatched.",
    ],
    faqs: [
      {
        q: "Can a mini-split heat a room through a Freeport winter?",
        a: "A properly selected and placed head can heat a room. A decorative cooling-only leftover cannot. We talk about the room and the outdoor unit, not a slogan.",
      },
      {
        q: "Do I still need my furnace if I add ductless?",
        a: "Usually yes, for the rest of the house. A head is often a room tool, not a whole-house replacement.",
      },
      {
        q: "Is ductless cheaper than new ducts?",
        a: "Sometimes. Plaster, path, electrical, and how many rooms you want conditioned decide that. Ask on the call.",
      },
      {
        q: "Can one outdoor unit serve several rooms?",
        a: "Multi-zone systems exist. Each head still needs a real load and a real place on the wall. More heads are not automatically smarter.",
      },
      {
        q: "Where should I go if the existing head is broken?",
        a: "The mini-split repair page. Use installation if you do not have a system yet.",
      },
    ],
    related: [
      "mini-split-installation-freeport-il",
      "mini-split-repair-freeport-il",
      "heat-pump-installation-freeport-il",
      "ac-installation-freeport-il",
    ],
  },
  {
    slug: "mini-split-repair-freeport-il",
    href: "/services/mini-split-repair-freeport-il/",
    category: "ductless",
    navLabel: "Mini-Split Repair",
    navDescription: "Heads that freeze, error out, or blow without comfort.",
    metaTitle: "Mini-Split Repair in Freeport When a Head Stops Doing Its Job",
    metaDescription:
      "A mini-split that errors out, ices up, or blows without changing the room is a repair call. Millrace Heating & Air diagnoses ductless systems in Freeport.",
    h1: "A silent head or a frozen outdoor unit is a mini-split problem, not a mystery.",
    eyebrow: "Ductless repair · Freeport",
    lede: "Wall heads talk in codes. Outdoor units sit in snow. If the room is not heating or cooling, Millrace Heating & Air will read the system instead of treating it like a window unit with extra wires.",
    image: "/photos/mini-split.jpg",
    imageAlt:
      "Ductless mini-split head being diagnosed in a Freeport, Illinois room",
    problems: [
      {
        title: "A head that beeps and does nothing useful",
        text: "Communication errors, a failed board, or a line-set issue can all look like “the remote is broken.”",
      },
      {
        title: "Ice on the head or the outdoor coil",
        text: "Indoor ice in cooling, outdoor ice in heating — both are airflow or refrigeration problems, not weather décor.",
      },
      {
        title: "A room that never catches even though the fan is loud",
        text: "The blower can run while the refrigeration circuit is empty, reversed, or locked out.",
      },
      {
        title: "Water on the floor under a cooling head",
        text: "A clogged condensate path in a plaster wall is a repair, and a finish problem if it sits.",
      },
    ],
    symptoms: [
      "Error codes that return after you pull the breaker",
      "One head dead on a multi-zone system while another still works",
      "Outdoor unit silent while the indoor fan runs",
      "A sour smell or wet stain below the indoor unit",
      "The head swings its vanes and the room temperature does not move",
    ],
    explanation: [
      "Mini-split repair is still HVAC diagnosis. The difference is the communication between head and outdoor unit, the tiny condensate path, and an outdoor machine that may have spent January trying to heat a sunroom through a snowbank.",
      "Homeowner checks stay small: remote batteries, set mode, a washable filter in the head if you can reach it without forcing plastic. After that, opening a charge port or “topping off” a mini-split is a good way to hide a leak.",
      "If the unit never heated the room even when it was new, say that. Repair cannot invent a load the head never had. That becomes a placement or sizing talk after we see why it is failing today.",
    ],
    causes: [
      {
        title: "Filters and coils inside a head nobody opened",
        text: "A clogged cassette ices and stops cooling. It also smells like the drain is the problem when the filter is the problem.",
      },
      {
        title: "Line-set or flare leaks",
        text: "Small charges disappear. The head still fans. The room does not change.",
      },
      {
        title: "Outdoor units boxed in by snow or storage",
        text: "A heat-mode coil that cannot breathe ices and shuts down.",
      },
      {
        title: "Boards and sensors that fail in communicating systems",
        text: "A dead head on a living outdoor unit is often a control or addressing problem, not a new condenser.",
      },
    ],
    process: [
      {
        title: "Read the codes and the room",
        text: "We want the error, the mode, and whether any head on the system still works.",
      },
      {
        title: "Inspect filters, drain, and outdoor clearance",
        text: "A lot of “dead mini-splits” are dirty, wet, or buried.",
      },
      {
        title: "Test communication and the refrigeration circuit",
        text: "Gauges and meters come after the obvious. Charge work stays leak-aware.",
      },
      {
        title: "Say whether the layout is also at fault",
        text: "A repaired head in a dead corner of the room will still disappoint. We will say that.",
      },
    ],
    whenToCall: [
      "The head shows a code and the room is not holding temperature",
      "Water is coming from the indoor unit",
      "The outdoor unit is iced or silent in weather that should be an easy load",
      "One zone died and the others did not",
    ],
    nextSteps: [
      "Photograph the error code if there is one.",
      "Clean the head’s washable filter if you can do it without breaking clips. Then stop.",
      "Call for mini-split repair. Say how many heads you have and which one failed.",
    ],
    why: [
      "We treat communicating systems as systems, not as window units.",
      "Leaks get looked for. Refrigerant is not a seasonal additive.",
      "If the head was never in the right place, repair will not pretend it was.",
    ],
    local: [
      "Mini-split outdoor units in Freeport see snow and freeze-thaw like every other pad. Heating-mode ice that never clears is a local repair pattern, not a rare exotic.",
      "Sunrooms and enclosed porches here swing hard between January and July. A failed head in those rooms is uncomfortable fast.",
      "German Valley, Davis, and other nearby towns are confirmed when you request service.",
    ],
    faqs: [
      {
        q: "The remote works but the room never changes. What is that?",
        a: "The indoor fan can run without a working refrigeration circuit or a working outdoor unit. That is a repair visit, not new batteries.",
      },
      {
        q: "Can you repair one head on a multi-zone system?",
        a: "Often yes. Sometimes the outdoor unit or the shared line set is the real failure. We test before we order a head.",
      },
      {
        q: "Is dripping in cooling mode always a failed pump?",
        a: "Not always. Clogged filters, a dirty coil, and a pitched drain line all make water. We look at the path.",
      },
      {
        q: "Should I chip ice off the outdoor unit?",
        a: "No. You can clear snow around it. Tools on the fins cause leaks. If it is a solid block and the room is losing heat, call.",
      },
      {
        q: "Do you work on every ductless brand?",
        a: "Say the brand on the call. Parts and software access vary. We will not invent coverage for a system we cannot support.",
      },
    ],
    related: [
      "mini-split-installation-freeport-il",
      "ductless-mini-split-freeport-il",
      "heat-pump-repair-freeport-il",
      "ac-repair-freeport-il",
    ],
  },
  {
    slug: "mini-split-installation-freeport-il",
    href: "/services/mini-split-installation-freeport-il/",
    category: "ductless",
    navLabel: "Mini-Split Installation",
    navDescription: "Honest room loads and clean line-set routes in older walls.",
    metaTitle: "Mini-Split Installation in Freeport Without Tearing the House Apart",
    metaDescription:
      "Mini-split installation in Freeport is room load, head placement, and a line-set path through older walls. Request a layout visit before you buy a kit.",
    h1: "Line sets and honest room loads beat ripping plaster for new ducts.",
    eyebrow: "Ductless installation · Stephenson County",
    lede: "Hanging a head is the visible hour. Getting copper through an older Freeport wall, setting the outdoor unit above snow, and aiming air at the actual living space is the job. Millrace Heating & Air starts there.",
    image: "/photos/mini-split.jpg",
    imageAlt:
      "Mini-split installation planning for an older Freeport house",
    problems: [
      {
        title: "A kit already sitting in the box",
        text: "Retail systems without a load or a path become a weekend that leaks. Ask before you buy when you can.",
      },
      {
        title: "A head placed where the stud bay was easy",
        text: "Easy is not the same as the chair, the bed, or the workbench. Placement is comfort.",
      },
      {
        title: "An outdoor unit dropped in a drift path",
        text: "The shortest line set can still bury the coil after the first real snow.",
      },
      {
        title: "Electrical that was “probably fine”",
        text: "A dedicated circuit and a disconnect are part of the install. A random garage outlet is not a plan.",
      },
    ],
    symptoms: [
      "A room you want conditioned and no honest duct path",
      "A previous DIY or handyman head that never worked",
      "You want heat and cooling in a shop, porch, or suite",
      "The main furnace is fine and you do not want to touch it",
      "You were told the only option is ducts through finished rooms",
    ],
    explanation: [
      "Mini-split installation in 61032 is a heating install that also cools. The outdoor unit will run when other condensing units are idle under snow. Height, clearance, and melt-water matter. Indoors, the head has to see the room, not a soffit that was convenient.",
      "Older plaster, brick, and stacked additions make the line-set route the design problem. We would rather walk the path than promise an invisible install that chews a dining room later.",
      "If two rooms need conditioning, we talk about one larger head versus two smaller ones versus leaving one room on the furnace. More equipment is not automatically the adult answer.",
    ],
    causes: [
      {
        title: "Rooms that were never in the original heat plan",
        text: "Additions and enclosed porches are the usual reason this install exists in Freeport.",
      },
      {
        title: "Duct projects that would wreck finishes",
        text: "When trunks mean opening plaster across three rooms, ductless becomes the smaller scar.",
      },
      {
        title: "A desire to stop using space heaters as architecture",
        text: "A real head with a real circuit beats a heater on a bedroom outlet.",
      },
      {
        title: "An existing outdoor pad that cannot take another condenser",
        text: "Sometimes the new unit needs its own location, not a squeeze beside the old AC.",
      },
    ],
    process: [
      {
        title: "Measure the room as it is used",
        text: "Glass, insulation, and whether anyone sleeps there in January all change the head.",
      },
      {
        title: "Pick the wall and the outdoor spot together",
        text: "A pretty indoor location with a buried outdoor unit is a failed install.",
      },
      {
        title: "Plan copper, condensate, and power",
        text: "The path through older walls gets talked through before we cut.",
      },
      {
        title: "Start it up in the mode you will use first",
        text: "If we are installing before winter, we care about heat. If before summer, we care about cooling. You should know the remote before we leave.",
      },
    ],
    whenToCall: [
      "You want a mini-split installed as a planned job, not a boxed kit surprise",
      "A room has no ducts and needs heat you can live with",
      "A prior install never conditioned the space",
      "You want to add a head and leave the main furnace alone",
    ],
    nextSteps: [
      "Photograph the room, the likely outdoor wall, and the electrical panel if you can do that safely.",
      "Do not buy a retail system first if you can wait for the visit.",
      "Request a layout visit. Say whether the room must heat in January.",
    ],
    why: [
      "Placement and path are the install. The head is the last piece.",
      "Winter operation is part of a Freeport ductless install, not a summer extra.",
      "We will still tell you when a duct fix or a different system is the better scar.",
    ],
    local: [
      "Older Freeport walls — plaster, brick, tight additions — are why we walk the line-set route instead of promising a clean photo.",
      "Outdoor units have to live through about 35 inches of snow. A pad against the driveway drift is a January problem waiting for a calendar.",
      "Orangeville, Cedarville, and other nearby towns are confirmed by phone before we treat them as a yes.",
    ],
    faqs: [
      {
        q: "How long does a mini-split install take?",
        a: "It depends on the wall, the electrical, and how many heads. We will not invent a half-day promise for every house.",
      },
      {
        q: "Can you install a system I already purchased?",
        a: "Ask on the call. An unmatched or undersized kit can be a liability. Sometimes the honest answer is “not that one.”",
      },
      {
        q: "Will there be a line-set cover on the outside?",
        a: "Usually yes, or another agreed finish. Older houses still get a visible path. We will show you where before we cut.",
      },
      {
        q: "Can a single head heat an entire older house?",
        a: "Rarely in a closed-up 61032 winter. Doors, stairs, and leaky envelopes stop “one head for everything” from being a plan.",
      },
      {
        q: "Do I need a condensate pump?",
        a: "Only if gravity will not take the water where it needs to go. That is a layout detail, not an upgrade package.",
      },
    ],
    related: [
      "ductless-mini-split-freeport-il",
      "mini-split-repair-freeport-il",
      "heat-pump-installation-freeport-il",
      "hvac-replacement-freeport-il",
    ],
  },
  {
    slug: "indoor-air-quality-freeport-il",
    href: "/services/indoor-air-quality-freeport-il/",
    category: "iaq",
    navLabel: "Indoor Air Quality",
    navDescription: "Dust, dryness, and stale air in closed-up winter houses.",
    metaTitle: "Indoor Air Quality in Freeport for Houses That Stay Shut",
    metaDescription:
      "Indoor air in Freeport winters is closed windows and recirculated heat. Talk with Millrace Heating & Air about filtration and humidity — not medical claims.",
    h1: "Closed-up Freeport winters recirculate whatever the furnace already moves.",
    eyebrow: "Indoor air · Stephenson County",
    lede: "From the first hard freeze until someone opens a window in April, the house is a closed box. Millrace Heating & Air will talk about filters, coils, and humidity as HVAC work. We will not diagnose your health.",
    image: "/photos/iaq-filter.jpg",
    imageAlt:
      "Furnace filter and indoor HVAC air path in a closed-up Freeport home",
    problems: [
      {
        title: "Air that feels used by afternoon",
        text: "The furnace has been looping the same cubic feet since breakfast. That is a building-and-system issue, not a mystery illness.",
      },
      {
        title: "Dust that settles faster than you can chase it",
        text: "Leaky returns, a dirty blower, and a filter that does not seal will decorate the coffee table. Those are mechanical.",
      },
      {
        title: "Dryness that cracks skin and furniture",
        text: "Forced-air heat in a tight winter is dry. Humidification is a comfort discussion, not a medical device pitch.",
      },
      {
        title: "Odors that appear when the blower starts",
        text: "A dirty coil, a wet drain, or something in the ducts can smell like “the air.” It still needs a technician, not a candle.",
      },
    ],
    symptoms: [
      "The house smells like the furnace closet when heat starts",
      "Dust on vents within days of cleaning",
      "Static and dry air all winter",
      "A filter that collapses or never quite fits the rack",
      "You want a straight talk about add-ons without a health brochure",
    ],
    explanation: [
      "Indoor air quality on this site means the HVAC side of a closed Freeport house: filtration, humidity, coil cleanliness, and whether the system is short-cycling instead of moving a full pass of air. It does not mean we treat, cure, or prevent illness.",
      "Carbon monoxide and gas odors are not indoor-air accessories. They are leave-the-house emergencies. 911 and Nicor Gas at 888-642-6748 come first. After the house is safe, combustion and venting can be part of a heating visit.",
      "A lot of “air quality” calls start with maintenance. A packed filter and a filthy coil will make any house feel stale. Add-on products come after that look, not before.",
    ],
    causes: [
      {
        title: "Months without an open window",
        text: "Stephenson County winter keeps the envelope shut. Everyday dust and cooking stay inside.",
      },
      {
        title: "Forced-air heat as the only mover",
        text: "Whatever is in the return gets delivered to the bedrooms. The furnace is not a fresh-air machine.",
      },
      {
        title: "Filters that leak around the edges",
        text: "Unfiltered air bypasses a high-MERV media sitting crooked in an old rack.",
      },
      {
        title: "Humidity that is too low or, in summer, too high",
        text: "Those are two different devices and two different seasons. See the humidifier page when that is the actual complaint.",
      },
    ],
    process: [
      {
        title: "Separate emergencies from comfort",
        text: "Gas and CO are out of the house first. Everything else can wait for a scheduled look.",
      },
      {
        title: "Look at the air path you already have",
        text: "Filter fit, blower cleanliness, coil access, and short cycling tell most of the story.",
      },
      {
        title: "Name the add-on only if the base system can support it",
        text: "A thick filter on a starving return is a downgrade. A humidifier on a leaking duct is a mess.",
      },
      {
        title: "Keep the claims mechanical",
        text: "We talk about dust, dryness, odor, and humidity readings — not bodies.",
      },
    ],
    whenToCall: [
      "The house smells like the equipment when the blower starts",
      "Dust and dryness are clearly tied to the heating season",
      "You are being sold air products and want a mechanical second look",
      "A filter or humidifier is already installed and nobody services it",
    ],
    nextSteps: [
      "If a CO alarm sounds or you smell gas, leave and call 911 and Nicor Gas at 888-642-6748.",
      "Check whether the filter actually seals in the rack.",
      "Request an indoor air visit as HVAC work. Bring your real complaint: dust, odor, or dryness.",
    ],
    why: [
      "We will not make medical claims about air, lungs, or sleep.",
      "Maintenance and fit come before catalogs of add-ons.",
      "Gas and carbon monoxide stay on the emergency path, not the product path.",
    ],
    local: [
      "Freeport winters keep windows closed for months. The furnace recirculates what is already in the house. That is the local indoor-air story.",
      "Older housing stock often has leaky returns in unfinished basements. Those returns eat basement air and send it upstairs.",
      "Nearby towns are confirmed when you call. Indoor air visits are not an automatic county route.",
    ],
    faqs: [
      {
        q: "Will a new filter fix the air in my house?",
        a: "A crushed or overdue filter can wreck airflow and comfort. It will not fix a dirty coil, a leaky return, or a house with no ventilation plan.",
      },
      {
        q: "Can you make the air healthier?",
        a: "We can talk about filtration, humidity, and cleanliness of the HVAC path. We do not claim medical results.",
      },
      {
        q: "Why does the house feel worse from November to March?",
        a: "The building stays shut. Heat runs almost constantly. Dust and dryness have nowhere to go. That is climate and construction, not a curse.",
      },
      {
        q: "Is this the page for carbon monoxide?",
        a: "If an alarm is sounding, leave and call 911 and Nicor Gas. After the house is safe, heating repair and furnace maintenance are the HVAC follow-ups.",
      },
      {
        q: "Should I start with a gadget or a maintenance visit?",
        a: "Start with the system you have. Filters, coils, and humidity devices already in place get a look before anything new is discussed.",
      },
    ],
    related: [
      "air-filtration-freeport-il",
      "humidifiers-dehumidifiers-freeport-il",
      "hvac-maintenance-freeport-il",
      "furnace-maintenance-freeport-il",
    ],
  },
  {
    slug: "air-filtration-freeport-il",
    href: "/services/air-filtration-freeport-il/",
    category: "iaq",
    navLabel: "Air Filtration",
    navDescription: "Filters that actually fit the return, not just the box.",
    metaTitle: "Air Filtration in Freeport That Does Not Choke the Furnace",
    metaDescription:
      "Thicker is not always better in an older Freeport return. Talk through air filtration that seals, fits the rack, and still lets the furnace move air in 61032.",
    h1: "A thicker filter is not always a better filter in an older return.",
    eyebrow: "Filtration · Freeport homes",
    lede: "The filter slot in a 61032 furnace closet was often built for a thin media and a lot of air. Stuffing a dense pad into a leaky rack can starve the heat exchanger. Millrace Heating & Air cares about fit and airflow, not a MERV brag.",
    image: "/photos/iaq-filter.jpg",
    imageAlt:
      "Furnace filter rack and return in an older Freeport forced-air system",
    problems: [
      {
        title: "A filter that has become a wall",
        text: "Packed media trips limits, ices coils, and makes the blower sound like it is working harder than the house.",
      },
      {
        title: "A high-MERV pad in a rack that never sealed",
        text: "Air goes around the filter through the gaps. You bought restriction without filtration.",
      },
      {
        title: "The wrong size “cut to fit”",
        text: "A 16x25 hole with a 16x20 pad and a flashlight gap is not a filtration strategy.",
      },
      {
        title: "A cabinet that cannot handle the media you were sold",
        text: "Some older blowers will not move air through dense filters. That is physics, not a sales objection.",
      },
    ],
    symptoms: [
      "The filter sucks tight to the rack after a week",
      "The furnace short cycles or the AC ices after a “better” filter",
      "Dust still appears at the vents",
      "You cannot remember the last time the slot was opened",
      "A box of filters in the basement does not match the opening",
    ],
    explanation: [
      "Air filtration here is a mechanical fit problem. Older Freeport returns are often undersized. The furnace needs air more than it needs a dense souvenir in the slot. We would rather you run a filter that seals and gets changed than a trophy filter that collapses the airflow.",
      "This is not a medical page. Filters catch household dust and protect equipment. They do not get credited with clinical outcomes on this site.",
      "If someone sold you a thick media cabinet, we can talk about whether the blower and return can support it. If they cannot, the honest upgrade might be a better rack and a sane media — or leaving the idea on the shelf.",
    ],
    causes: [
      {
        title: "Returns that were always small",
        text: "Older forced-air houses in 61032 often have one modest return doing the whole job.",
      },
      {
        title: "Media that does not match the blower",
        text: "Restriction the furnace cannot overcome becomes heat and cooling complaints.",
      },
      {
        title: "Racks that leak",
        text: "Unfiltered air bypasses the pad and still dirties the blower.",
      },
      {
        title: "Change intervals copied from a store endcap",
        text: "A house with pets and a dirty basement return will pack a filter faster than a catalog says.",
      },
    ],
    process: [
      {
        title: "Measure the opening, not the leftover box",
        text: "The rack decides the size. The basement shelf does not.",
      },
      {
        title: "See how the current filter sits",
        text: "Bypass marks, collapse, and dirt on the dirty side tell us if filtration is even happening.",
      },
      {
        title: "Match media to the blower and the return",
        text: "We would rather drop a MERV number than overheat a heat exchanger.",
      },
      {
        title: "Talk cabinets only if the air path can feed them",
        text: "A media cabinet on a starved return is a pretty restriction.",
      },
    ],
    whenToCall: [
      "A new “better” filter made the furnace or AC worse",
      "Dust at the vents continues with filters you change on time",
      "The slot and the pads you buy do not agree",
      "You were quoted a thick-media cabinet and want a blower-reality check",
    ],
    nextSteps: [
      "Pull the filter and look at the size printed on the frame. Note gaps.",
      "If it is packed solid, replace it with the correct size and a media the system has tolerated before.",
      "Request a filtration look if the rack leaks, the size is a mystery, or comfort got worse after an upgrade.",
    ],
    why: [
      "Airflow protection is part of filtration. We will not choke a furnace to win a rating argument.",
      "No medical claims. Dust and equipment stay the topics.",
      "Fit and seal beat a thicker pad in a leaky slot.",
    ],
    local: [
      "Older Freeport forced-air returns were often sized for thin filters and heating-first airflow. Dense media is where those systems complain.",
      "Closed-up winters mean the same filter does more weeks of work. Change interval is a house fact, not a package promise.",
      "If you are in Pearl City or Ridott, mention it when you call. Filtration visits are confirmed like any other service.",
    ],
    faqs: [
      {
        q: "What MERV should I run?",
        a: "The number that still lets your furnace move air and actually seals in the rack. We will not recite a single MERV as a rule for every 61032 house.",
      },
      {
        q: "Why is there dust if I use expensive filters?",
        a: "Bypass around a leaky rack, returns in a dirty basement, and ducts that leak return air will all dust a house while the pad looks fancy.",
      },
      {
        q: "Can a filter be too restrictive?",
        a: "Yes. Limit trips, weak heat, iced coils, and a roaring blower are how the system votes.",
      },
      {
        q: "Do I need a media cabinet?",
        a: "Only if the return and blower can support it and the cabinet can be sealed. It is not a default upgrade.",
      },
      {
        q: "How often should I change the filter?",
        a: "When it is loaded. Pets, remodeling, and a dirty return shorten that. A calendar date is a reminder, not physics.",
      },
    ],
    related: [
      "indoor-air-quality-freeport-il",
      "hvac-maintenance-freeport-il",
      "furnace-maintenance-freeport-il",
      "humidifiers-dehumidifiers-freeport-il",
    ],
  },
  {
    slug: "humidifiers-dehumidifiers-freeport-il",
    href: "/services/humidifiers-dehumidifiers-freeport-il/",
    category: "iaq",
    navLabel: "Humidity Control",
    navDescription: "Winter moisture and summer humidity as two separate jobs.",
    metaTitle: "Humidifiers and Dehumidifiers for Freeport's Two Extremes",
    metaDescription:
      "Freeport winters dry the house out; July afternoons can feel sticky. Talk through humidifiers and dehumidifiers as HVAC add-ons — comfort, not medical claims.",
    h1: "January dryness and July stickiness are two different jobs in the same house.",
    eyebrow: "Humidity · 61032",
    lede: "Forced-air heat in a shut-up Stephenson County winter pulls moisture down. A humid July afternoon does the opposite. Millrace Heating & Air treats those as two devices and two seasons — not one gadget with a health story.",
    image: "/photos/humidifier.jpg",
    imageAlt:
      "Whole-house humidifier on a Freeport furnace during the dry heating season",
    problems: [
      {
        title: "Static, dry wood, and a house that feels parched by February",
        text: "That is winter humidification territory — if the ducts and the water line can support it, and if someone will service the pad.",
      },
      {
        title: "A sticky house in cooling season even when the AC runs",
        text: "Short cycling, an oversized condenser, or a house that needs dehumidification beyond what the coil is doing.",
      },
      {
        title: "A humidifier that has been dry-rotting on the plenum",
        text: "An unused pad becomes a restriction and a smell. Installed is not the same as working.",
      },
      {
        title: "A portable unit in one room doing a whole-house job",
        text: "Portables have a place. They also get forgotten, overfilled, and aimed at a single chair.",
      },
    ],
    symptoms: [
      "Gaps in woodwork that open every heating season",
      "A furnace-mounted humidifier you have never opened",
      "Cooling that drops temperature but leaves the air wet",
      "Window condensation that appeared after someone “turned the humidifier up”",
      "A basement that feels wet in summer while the upstairs feels dry in winter",
    ],
    explanation: [
      "Humidity equipment in Freeport has a calendar. Bypass and fan-powered humidifiers belong to the heating season. Dehumidification belongs to the cooling season and to damp basements. Using one word for both jobs is how people buy the wrong box.",
      "We do not claim humidifiers prevent illness or dehumidifiers treat a diagnosis. We talk about comfort, wood, static, and whether the air feels wet or brittle. Windows that sweat in January mean the setting is too aggressive for how cold the glass is — not a reason to chase a number.",
      "A whole-house humidifier is still an HVAC accessory. It needs a clean pad, a working saddle valve or tap, and a control that is not stuck on. If the furnace is sick, fix that first.",
    ],
    causes: [
      {
        title: "Long heating run times in a closed house",
        text: "Thousands of heating degree days dry indoor air. That is the winter half of this page.",
      },
      {
        title: "Cooling that does not run long enough to wring out moisture",
        text: "A short cooling season still has humid weeks. An oversized or short-cycling AC leaves the house clammy.",
      },
      {
        title: "Pads and drains that were never serviced",
        text: "Humidifier media becomes mineral board. Dehumidifier coils get filthy. Both stop being useful.",
      },
      {
        title: "Controls set like a slogan",
        text: "A high winter set point on a 0°F night wets windows. A dehumidifier in the wrong room never sees the air that matters.",
      },
    ],
    process: [
      {
        title: "Name the season and the complaint",
        text: "Dry heat or sticky cooling. We do not install the opposite machine out of habit.",
      },
      {
        title: "Look at what is already bolted on",
        text: "Plenty of Freeport furnaces already have a dead humidifier. That is a service or a removal, not an automatic new unit.",
      },
      {
        title: "Check whether the HVAC system can support the add-on",
        text: "A leaking plenum, a starving return, or a failed AC is the first repair.",
      },
      {
        title: "Set expectations about maintenance",
        text: "Pads, drains, and clean coils are the ownership. We will say that before anyone is excited.",
      },
    ],
    whenToCall: [
      "Winter air is uncomfortably dry and you want a whole-house conversation",
      "A humidifier is already installed and smells, leaks, or does nothing",
      "Cooling leaves the house clammy and you want the coil and the humidity talked about together",
      "Window condensation started after a humidity change",
    ],
    nextSteps: [
      "Decide whether your complaint is this winter’s dryness or last summer’s stickiness.",
      "If a humidifier is on the furnace, look at it. Do not take the pad apart if you do not know the water shutoff.",
      "Request service and name the season. Bring both only if you truly have both problems.",
    ],
    why: [
      "Two seasons, two jobs. We will not mash them into one pitch.",
      "No medical claims. Comfort and the building are the topics.",
      "Existing humidifiers get serviced or retired before we talk about new ones.",
    ],
    local: [
      "January dryness here comes from long furnace run times and closed windows, not from a single cold snap.",
      "July highs around 82°F with humidity still make a short cooling season feel wet if the AC cannot wring the air.",
      "Winslow, Rock City, and other nearby towns are confirmed when you call.",
    ],
    faqs: [
      {
        q: "Should I run a humidifier all winter at the same setting?",
        a: "No. Colder glass means a lower indoor humidity if you want dry windows. The outdoor temperature matters.",
      },
      {
        q: "Can a humidifier help me get sick less often?",
        a: "We will not make that claim. We talk about dryness, static, and comfort. Health questions belong with a clinician.",
      },
      {
        q: "Why is my house sticky when the AC is on?",
        a: "The coil may not run long enough, the system may be oversized, or the house may need a dedicated dehumidifier conversation. That is a cooling diagnosis first.",
      },
      {
        q: "The humidifier on my furnace has not been touched in years. Now what?",
        a: "It may be a service, a pad change, a water leak, or a candidate for isolation. Do not assume it is helping.",
      },
      {
        q: "Is a portable dehumidifier the same as a whole-house unit?",
        a: "No. Portables treat a room or a basement. Whole-house devices tie into the air path. Say which problem you have.",
      },
    ],
    related: [
      "indoor-air-quality-freeport-il",
      "ac-maintenance-freeport-il",
      "furnace-maintenance-freeport-il",
      "air-filtration-freeport-il",
    ],
  },
  {
    slug: "commercial-hvac-freeport-il",
    href: "/services/commercial-hvac-freeport-il/",
    category: "commercial",
    navLabel: "Commercial HVAC",
    navDescription: "Offices, shops, and storefronts — not a factory division.",
    metaTitle: "Commercial HVAC in Freeport for Shops, Offices, and Storefronts",
    metaDescription:
      "Commercial HVAC in Freeport is for offices, shops, and storefronts that must open. Call Millrace Heating & Air about the equipment on site — not a plant crew.",
    h1: "Small Freeport businesses need equipment that holds overnight and through opening.",
    eyebrow: "Small commercial · 61032",
    lede: "A storefront on a corridor, a shop that cannot freeze over the weekend, an office that still has to be usable on Monday — that is the commercial work this page is written for. Millrace Heating & Air does not claim a factory division we have not verified.",
    image: "/photos/commercial.jpg",
    imageAlt:
      "Small commercial rooftop HVAC equipment serving a Freeport business",
    problems: [
      {
        title: "A unit that failed before the doors opened",
        text: "Staff arriving to a cold office or a hot sales floor is an operations problem, not a homeowner inconvenience.",
      },
      {
        title: "Equipment that has outlived several tenants",
        text: "Rooftops and closets in older Freeport commercial spaces collect patches. Someone has to look at what is actually there.",
      },
      {
        title: "A weekend setback that went too far",
        text: "Pipes, product, and finish work do not care that the thermostat was trying to save money from Friday to Monday.",
      },
      {
        title: "A space that is not a house and not a plant",
        text: "Churches, shops, and small offices sit in the middle. This page is that middle. Industrial process work is a different claim.",
      },
    ],
    symptoms: [
      "One zone dead while the rest of the building is fine",
      "A rooftop that will not start on a business day",
      "Customers or staff complaining about the same corner every season",
      "A closet unit that has been “temporary” for years",
      "You need heat and cooling talked about as opening-day equipment",
    ],
    explanation: [
      "Commercial HVAC on this site means small business spaces in Freeport and the surrounding towns we can confirm: offices, retail, shops, and similar buildings. The machines are often rooftop units, split systems, or leftover residential equipment doing commercial hours.",
      "The difference from a house is consequence. A failed unit can close a floor, spoil a workspace, or make a Monday unusable. The difference from industrial work is honesty. We will not pretend we staff a millwright crew.",
      "If you need after-hours access or a planned shutdown, say that on the call. We do not invent a night shift on the website.",
    ],
    causes: [
      {
        title: "Runtime that does not match a house",
        text: "Open hours, occupancy, and weekend setbacks wear equipment on a different calendar.",
      },
      {
        title: "Rooftops that sit in the same snow as everything else",
        text: "Access, ice, and neglected filters on a roof are a Freeport commercial pattern.",
      },
      {
        title: "Tenant changes without an equipment plan",
        text: "A new use in an old space keeps the same tired unit and wonders why comfort failed.",
      },
      {
        title: "Controls nobody currently understands",
        text: "A thermostat or time clock from a prior owner can fight the staff every morning.",
      },
    ],
    process: [
      {
        title: "Identify the building and the equipment",
        text: "Rooftop, split, unit heater, or something else. Photos from the roof hatch help if they are safe to take.",
      },
      {
        title: "Learn the hours that matter",
        text: "Opening time, weekend setback, and whether customers walk into the space decide urgency.",
      },
      {
        title: "Diagnose the failed piece",
        text: "Commercial does not mean replace-the-rooftop as a reflex. It means the business can operate.",
      },
      {
        title: "Point to maintenance or a tighter repair page",
        text: "Ongoing care, cooling-only, and heating-only commercial calls have their own pages.",
      },
    ],
    whenToCall: [
      "A small commercial space in Freeport lost heat or cooling",
      "You are taking over a building and do not know what is on the roof",
      "The same unit keeps interrupting opening",
      "You want commercial help that stays in the small-business lane",
    ],
    nextSteps: [
      "Note opening hours and whether the space is occupied now.",
      "If you can safely photograph the rooftop or closet label, do that.",
      "Call and say it is a business. Ask about commercial AC repair, heating repair, or maintenance if you already know the season.",
    ],
    why: [
      "We stay in the small commercial lane we can stand behind.",
      "Opening-day comfort is the measure, not a residential script copied onto a rooftop.",
      "We confirm after-hours coverage on the phone for the situation you have.",
    ],
    local: [
      "Downtown and corridor buildings in Freeport often mix older rooftops, splits, and equipment that has been patched through several owners.",
      "The same heating-dominated climate applies. Overnight heat still matters more days of the year than cooling, even for a shop.",
      "Lena, Dakota, and other nearby towns are confirmed when a business calls. We do not auto-serve every commercial address in the county.",
    ],
    faqs: [
      {
        q: "Do you handle large industrial plants?",
        a: "This page is for small commercial spaces — offices, shops, churches, and similar buildings. Specialized industrial work is only claimed if it is later verified.",
      },
      {
        q: "Can a business get help outside published hours?",
        a: "Call and ask. After-hours commercial coverage is confirmed on the phone.",
      },
      {
        q: "Is this the same as residential service with a different invoice?",
        a: "The core diagnosis is similar. Access, rooftop safety, business hours, and who can authorize work are not.",
      },
      {
        q: "We have no heat in a shop with a unit heater. Right page?",
        a: "Start here or on commercial heating repair. Say “unit heater” on the call so we know it is not a rooftop.",
      },
      {
        q: "Can you look at a building before we lease it?",
        a: "Ask on the phone. An equipment look is sometimes possible.",
      },
    ],
    related: [
      "commercial-hvac-maintenance-freeport-il",
      "commercial-ac-repair-freeport-il",
      "commercial-heating-repair-freeport-il",
      "emergency-hvac-freeport-il",
    ],
  },
  {
    slug: "commercial-hvac-maintenance-freeport-il",
    href: "/services/commercial-hvac-maintenance-freeport-il/",
    category: "commercial",
    navLabel: "Commercial Maintenance",
    navDescription: "Planned commercial service before a season starts badly.",
    metaTitle: "Commercial HVAC Maintenance in Freeport Before Opening Day Fails",
    metaDescription:
      "Commercial HVAC maintenance in Freeport is planned before heating season and before July humidity. Request a check so opening day is not the first test.",
    h1: "Shop and office systems fail on the day you cannot close. Plan before that.",
    eyebrow: "Commercial maintenance · Freeport",
    lede: "A rooftop that has not been opened since last August will pick a busy Saturday. Millrace Heating & Air uses commercial maintenance to look at filters, belts, coils, and heat before the season does the inspecting for you.",
    image: "/photos/commercial.jpg",
    imageAlt:
      "Rooftop commercial HVAC equipment in Freeport being checked before a season",
    problems: [
      {
        title: "Filters that have been “someone else’s job” through two tenants",
        text: "A packed rooftop filter is how a compressor or a heat exchanger gets the next complaint.",
      },
      {
        title: "Belts, condensers, and drains that only fail in public",
        text: "Maintenance is the private version of that failure.",
      },
      {
        title: "A heating check skipped because last winter “worked”",
        text: "Commercial heat still has to hold a weekend setback in a climate with nights below freezing.",
      },
      {
        title: "No record of what is on the roof",
        text: "Maintenance starts with knowing the machines. Labels, photos, and a simple list beat folklore.",
      },
    ],
    symptoms: [
      "Nobody can name the last rooftop visit",
      "Last season included an opening-day rescue",
      "The store smells like a dirty coil when cooling starts",
      "You hear a belt or a rattling panel every morning",
      "You want a plan before heating season or before the first humid week",
    ],
    explanation: [
      "Commercial maintenance in Freeport still follows the climate: heat is the long season, cooling is the idle-then-sudden season. A shop rooftop that sat through snow needs a spring look. A unit heater that has to hold January needs a fall look.",
      "Seasonal commercial service is available. If we find a repair, it is a repair. If the building needs a different contractor for a crane or a specialized control, we will say that.",
      "Access is part of the visit. Roof hatches, keys, and hours when we can shut a unit down without emptying the floor get decided on the call.",
    ],
    causes: [
      {
        title: "Public hours hiding private neglect",
        text: "The unit runs while customers are present. Nobody goes on the roof until it stops.",
      },
      {
        title: "The same idle-winter problem as residential AC, with higher stakes",
        text: "A condenser that sat in snow does not care that it is over a store.",
      },
      {
        title: "Weekend setbacks without a spring or fall test",
        text: "The first Monday after a polar night is a poor time to learn the heat is weak.",
      },
      {
        title: "Multiple small units and no list",
        text: "One closet split and one rooftop become two forgotten machines.",
      },
    ],
    process: [
      {
        title: "Get access and the equipment list straight",
        text: "We cannot maintain a unit we cannot reach or have not been told about.",
      },
      {
        title: "Match the visit to the coming season",
        text: "Heat before the freeze. Cooling after winter idle. Both if the building and the day allow an honest test.",
      },
      {
        title: "Service the parts that shut businesses down",
        text: "Filters, belts, coils, drains, and a completed heat or cool cycle as conditions allow.",
      },
      {
        title: "Leave a written list a manager can keep",
        text: "Watch items and repair items, in ordinary language. Not a fog of checkmarks.",
      },
    ],
    whenToCall: [
      "You want a fall heating check on commercial equipment before the hard freeze",
      "You want a spring cooling check after rooftop units sat in snow",
      "Opening day last year was a rescue",
      "You took over a space and have no equipment history",
    ],
    nextSteps: [
      "Write down opening hours and who has roof or mechanical-room keys.",
      "List every unit you know about, even the closet one.",
      "Request commercial maintenance and name the season you are trying to protect.",
    ],
    why: [
      "We would rather find a belt in private than explain a silent rooftop at opening.",
      "Seasonal timing follows Freeport weather, not a generic annual sticker.",
      "Seasonal service is available. If we find a repair, it is named as a repair.",
    ],
    local: [
      "Small commercial buildings here face the same 6,956-to-690 heating-to-cooling imbalance as houses. Maintenance still leans toward not missing heat.",
      "Snow on a Freeport rooftop is why spring cooling checks are not optional theater for a store that sat closed on Sundays.",
      "Pearl City, Orangeville, and other nearby towns are confirmed when a business requests maintenance.",
    ],
    faqs: [
      {
        q: "Do you offer a commercial maintenance contract?",
        a: "Ask on the call what we can set up. This page does not invent a branded plan, perks, or a discount ladder.",
      },
      {
        q: "Can you service the unit while we are open?",
        a: "Sometimes, if the work does not shut the floor down. Some jobs need a quieter hour. Say your hours when you request service.",
      },
      {
        q: "Is rooftop access your problem or ours?",
        a: "Safe access is a shared problem. We need a legal way onto the roof and a unit we can reach. Ladders and hatches get talked through first.",
      },
      {
        q: "What if you find a failed compressor during a check?",
        a: "Then it is a repair conversation, not a buried line on a maintenance ticket.",
      },
      {
        q: "We have a mix of rooftop and unit heaters. One visit?",
        a: "Say that up front. Different machines can still be one trip if access and time allow. They do not get the same checklist.",
      },
    ],
    related: [
      "commercial-hvac-freeport-il",
      "commercial-ac-repair-freeport-il",
      "commercial-heating-repair-freeport-il",
      "hvac-maintenance-freeport-il",
    ],
  },
  {
    slug: "commercial-ac-repair-freeport-il",
    href: "/services/commercial-ac-repair-freeport-il/",
    category: "commercial",
    navLabel: "Commercial AC Repair",
    navDescription: "Rooftop and split cooling that failed when customers arrived.",
    metaTitle: "Commercial AC Repair in Freeport When the Store Gets Hot",
    metaDescription:
      "When a Freeport shop stays hot, commercial AC repair is a business-hours problem. Call about rooftop or split cooling that failed after sitting through winter.",
    h1: "When the rooftop sits through winter, July is a rude reminder.",
    eyebrow: "Commercial cooling repair · 61032",
    lede: "A storefront condenser or rooftop that idle-slept through snow does not care about your Saturday traffic. Millrace Heating & Air diagnoses commercial cooling when the sales floor or office has already started to climb.",
    image: "/photos/commercial.jpg",
    imageAlt:
      "Commercial air conditioning equipment on a Freeport business after winter idle",
    problems: [
      {
        title: "A rooftop that will not start on the first humid week",
        text: "The same idle-season electrical failures as a house, with a room full of people attached.",
      },
      {
        title: "One suite hot and the hallway fine",
        text: "A single compressor, a zone damper, or a closet split can take down a tenant without touching the neighbors.",
      },
      {
        title: "Cooling that runs and never dries the space",
        text: "Retail and offices feel a clammy room as “the AC is broken” even when the fan is loud.",
      },
      {
        title: "A drain pan that chose opening day to overflow",
        text: "Condensate that sat dry all winter shows up as a ceiling tile or a closet flood.",
      },
    ],
    symptoms: [
      "Staff propping doors because the floor will not cool",
      "A rooftop fan still while the indoor blower runs",
      "Breaker trips when cooling is called",
      "A corner of the store that is always the complaint",
      "Water in a closet or on a ceiling during a cooling call",
    ],
    explanation: [
      "Commercial AC repair in Freeport is still refrigeration diagnosis. The difference is access, who can authorize the work, and the fact that a failed unit can empty a floor. The climate difference is the same idle winter: snow on the roof, then a sudden ask in July.",
      "We will not treat a rooftop like a mystery brand of physics. Capacitors, contactors, fans, dirty coils, and charge problems are still the usual list. We will treat the building like a business: hours, keys, and whether we can shut the unit down to test.",
      "If the unit is at the end of its life, that becomes a replacement conversation after the test — and it stays in the small-commercial lane. We do not invent a 40-ton plant specialty here.",
    ],
    causes: [
      {
        title: "Winter idle on a roof",
        text: "Months without a run cycle, plus snow and debris, then a hard start when the first humid week arrives.",
      },
      {
        title: "Filters and coils that were skipped because the store was “fine”",
        text: "Fine in May is not a clean condenser in July.",
      },
      {
        title: "A closet split doing commercial hours",
        text: "Residential-grade equipment in a small shop still fails like commercial when it runs all afternoon.",
      },
      {
        title: "Electrical and disconnects that weathered on the roof",
        text: "Burnt lugs and tired contactors show up as a silent box over a full parking lot.",
      },
    ],
    process: [
      {
        title: "Get on the equipment safely",
        text: "Roof, closet, or pad. If we cannot reach it safely, that is the first problem to solve.",
      },
      {
        title: "See what the space is doing",
        text: "One zone or the whole floor, and whether the blower is the only thing working.",
      },
      {
        title: "Test the cooling circuit",
        text: "Start parts, fans, coils, and charge as indicated. No ritual “add gas.”",
      },
      {
        title: "Talk repair against the business week",
        text: "What can restore cooling now, and what needs a planned follow-up, in ordinary words.",
      },
    ],
    whenToCall: [
      "The shop or office is hot and the outdoor or rooftop unit is not helping",
      "Cooling failed the first week you needed it after winter",
      "A single tenant space is down",
      "Water appeared when cooling started",
    ],
    nextSteps: [
      "Note whether any cooling is happening and which area failed.",
      "If you can safely see the rooftop or closet unit, note whether the fan is moving.",
      "Call and say it is commercial cooling. Give opening hours and access.",
    ],
    why: [
      "Idle-winter failures are expected here. We look for them instead of acting surprised.",
      "Business hours and access are part of the repair, not an afterthought.",
      "We stay in small commercial cooling. We will say when a job is outside that lane.",
    ],
    local: [
      "Commercial condensers in 61032 sit unused through a long snow season, then get asked to dehumidify a full room on short notice. That is the local failure pattern.",
      "July afternoons near 82°F are enough to make a packed shop miserable when the rooftop is silent.",
      "Ridott, Dakota, and other nearby towns are confirmed when a business calls for cooling repair.",
    ],
    faqs: [
      {
        q: "Can you repair a rooftop while we stay open?",
        a: "Sometimes. Some tests need the unit off. Say whether you can spare a zone or a quieter hour.",
      },
      {
        q: "Our AC is a house-style unit behind the shop. Still commercial?",
        a: "Yes, if it cools a business. Tell us it is a split or a residential condenser serving a shop so we bring the right expectations.",
      },
      {
        q: "Should we just replace the rooftop if it is old?",
        a: "Not from a website. Age is a fact. The test decides whether this is a start component or a larger conversation.",
      },
      {
        q: "The ceiling is wet. Is that AC?",
        a: "It can be a condensate problem. It can also be a roof leak. We will look at the unit’s drain path and tell you if the water is ours to own.",
      },
      {
        q: "Do you stock commercial parts?",
        a: "Ask on the call. We will not invent a warehouse. Some parts are on the truck, some are ordered, and you hear which.",
      },
    ],
    related: [
      "commercial-hvac-freeport-il",
      "commercial-hvac-maintenance-freeport-il",
      "ac-repair-freeport-il",
      "emergency-hvac-freeport-il",
    ],
  },
  {
    slug: "commercial-heating-repair-freeport-il",
    href: "/services/commercial-heating-repair-freeport-il/",
    category: "commercial",
    navLabel: "Commercial Heating Repair",
    navDescription: "Unit heaters, rooftops, and office heat that will not hold.",
    metaTitle: "Commercial Heating Repair in Freeport After a Frozen Weekend",
    metaDescription:
      "A cold shop on Monday or an office that will not hold is commercial heating repair. Call Millrace Heating & Air in Freeport about the heat that failed.",
    h1: "A cold shop on Monday morning is a heating call, not a wait-and-see.",
    eyebrow: "Commercial heating repair · Stephenson County",
    lede: "Weekend setbacks, unit heaters over a bay, rooftop gas heat over an office — when Monday is already cold, the building has used its slack. Millrace Heating & Air diagnoses commercial heat after you confirm the space is safe.",
    image: "/photos/commercial.jpg",
    imageAlt:
      "Commercial heating equipment serving a Freeport shop or office in winter",
    problems: [
      {
        title: "A shop that lost heat over the weekend",
        text: "Unit heaters and hanging equipment fail quietly while nobody is there. Monday is when the floor is a slab of bad news.",
      },
      {
        title: "An office rooftop that will not prove heat",
        text: "Ignition, venting, and lockouts look like residential furnace problems with worse access.",
      },
      {
        title: "A zone that froze a pipe or a product",
        text: "That is no longer a comfort complaint. It is a building-loss complaint that still needs the heat restored.",
      },
      {
        title: "A thermostat or time clock fighting the staff",
        text: "A setback that never returns, or a control nobody can override, presents as “no heat.”",
      },
    ],
    symptoms: [
      "Monday indoor temperature far below Friday’s set point",
      "A unit heater that will not fire over a work bay",
      "Rooftop heat that tries and locks out",
      "One suite cold and another livable",
      "Staff using space heaters as the building plan",
    ],
    explanation: [
      "Commercial heating repair in Freeport is winter-first work. The climate does not give a shop a mild season to hide in. Nights at or below freezing are common. A setback that was aggressive on Friday becomes a pipe conversation by Sunday night.",
      "Safety still leads. Gas odor and carbon monoxide are leave-and-call-911-and-Nicor events, same as a house. After the building is safe, we identify the plant: unit heater, rooftop, furnace in a closet, or something else.",
      "We do not claim industrial process heat, make-up air specialties we have not verified, or a guaranteed overnight crew. We do claim a diagnosis of the small-commercial heat that is actually on site.",
    ],
    causes: [
      {
        title: "Weekend setbacks in a real heating climate",
        text: "The building loses degrees all Saturday and Sunday. Monday is the audit.",
      },
      {
        title: "Unit heaters that only run when the bay is occupied",
        text: "Dust, failed ignition, and tired blowers show up when someone finally needs the space.",
      },
      {
        title: "Rooftop heat with neglected venting or ignition",
        text: "The same parts as a furnace, plus weather and access.",
      },
      {
        title: "Controls from a prior tenant",
        text: "A time clock that nobody reset after a power blip will happily keep a building cold.",
      },
    ],
    process: [
      {
        title: "Confirm the building is safe to enter",
        text: "Gas and CO first. Heat second.",
      },
      {
        title: "Identify every heat source that should be working",
        text: "One rooftop and two unit heaters is three possible failures, not one story.",
      },
      {
        title: "Restore what we can and name what we cannot",
        text: "A failed heat exchanger or a parts delay gets said in ordinary words.",
      },
      {
        title: "Talk setback and follow-up like adults",
        text: "If the control strategy caused the freeze risk, you hear that. It is not a scolding. It is how the next weekend goes better.",
      },
    ],
    whenToCall: [
      "A shop, office, or storefront will not hold heat",
      "A unit heater will not fire",
      "A rooftop is locked out in heating weather",
      "You found the building much colder than the set point after a weekend",
    ],
    nextSteps: [
      "If you smell gas or a CO alarm sounds, leave and call 911 and Nicor Gas at 888-642-6748.",
      "If the building is safe, note which areas are cold and what equipment you can name.",
      "Call and say it is commercial heat. Mention pipes, occupancy, and access.",
    ],
    why: [
      "Monday-morning heat is a business problem. We treat it like one.",
      "We identify unit heaters, rooftops, and closet furnaces instead of forcing one script.",
      "Safety contacts stay public. Coverage for a given night is confirmed when you call.",
    ],
    local: [
      "Stephenson County nights routinely sit at or below freezing. A commercial setback that works in a milder town can be a freeze here.",
      "Older Freeport commercial buildings often mix a rooftop over the office with unit heaters in the bay. Both have to work.",
      "Cedarville, Lena, and other nearby towns are confirmed when a business calls. Commercial heating repair is not auto-dispatched.",
    ],
    faqs: [
      {
        q: "The shop has hanging unit heaters. Can you work on those?",
        a: "Often yes. Say “unit heater” and the fuel if you know it. Some specialized equipment is a no — we will say that rather than guess.",
      },
      {
        q: "We turned the thermostat down for the weekend and came back to a cold building. Is that on us?",
        a: "Setbacks can be reasonable. In this climate they can also go too far. We restore heat and talk about the control. Blame is not the job.",
      },
      {
        q: "Is this an emergency HVAC call?",
        a: "If the building is already at risk — pipes, occupancy, or no heat in dangerous weather — call and say so. Use the emergency page for the safety steps.",
      },
      {
        q: "Can you repair heat if we cannot get on the roof today?",
        a: "Not if the failed unit is on the roof and nobody can provide safe access. Access is part of the repair.",
      },
      {
        q: "Do you work on boilers in small commercial buildings?",
        a: "Ask on the phone. This page is written around forced-air rooftops, closet furnaces, and unit heaters. Boiler work is confirmed, not assumed.",
      },
    ],
    related: [
      "commercial-hvac-freeport-il",
      "commercial-hvac-maintenance-freeport-il",
      "heating-repair-freeport-il",
      "emergency-hvac-freeport-il",
    ],
  },
];

export function getService(slug: string): ServicePageContent | undefined {
  return services.find((service) => service.slug === slug);
}

export function servicesByCategory(
  category: ServiceCategory,
): ServicePageContent[] {
  return services.filter((service) => service.category === category);
}

