import { article } from "@/content/articles/build";

export const thermostatWiring = article({
  slug: "replacing-a-thermostat-in-an-older-house",
  category: "thermostats",
  title: "Replacing a thermostat in an older house",
  metaTitle: "Older-House Thermostats in Freeport | Millrace Heating",
  metaDescription:
    "Why a new thermostat can fail on older Freeport wiring: C-wire, heat pumps, and millivolt boiler controls. What to check before you buy one.",
  h1: "A new thermostat can be the wrong part for an older Freeport house",
  lede:
    "The thermostat on the wall is a switch and a sensor. In a house that has been heated since long before smart controls, the wires behind it may not be able to power the control you just bought. This page explains the mismatches. It is not a wiring diagram, and it is not an invitation to experiment on a gas valve.",
  image: "/photos/touch-thermostat.webp",
  imageAlt: "A modern wall thermostat, which older furnace wiring may not be able to power.",
  body: [
    {
      heading: "Start with what the old control was actually running",
      paragraphs: [
        "Before you replace a thermostat, write down the equipment. A gas furnace, a heat pump, a boiler, and a furnace-plus-air-conditioner are four different control problems. Take a photo of the old wiring before any wire comes off, and label the wires with the letters that are already on them. Those letters are not universal across brands. R, Rh, Rc, C, W, Y, G, O, and B mean something only in the context of that furnace board. If you do not know which board you have, you are not ready to translate a YouTube diagram onto it.",
        "The symptom page [thermostat not working](/guides/thermostat-not-working/) is for a control that used to run the house and now does not: blank screen, wrong mode, dead batteries. This page is for the decision to replace it, especially in an older Stephenson County house where the original control may be a simple mercury or battery thermostat and the furnace may never have grown a common wire. If the house is cold tonight, get heat back before you start a project. [How urgent a no-heat night is](/guides/how-urgent-a-no-heat-night-is/) is the decision guide.",
      ],
    },
    {
      heading: "The C wire is the usual reason a smart thermostat misbehaves",
      paragraphs: [
        "Many modern thermostats need continuous 24-volt power. The C, or common, wire is the return path for that power. Older heating-only installs often have only two wires, enough to close a switch and fire a furnace, and not enough to power a color screen. A thermostat that “steals” power through the call circuit can click, run the furnace in odd bursts, or reboot. A power-extender kit or a new cable is sometimes the real fix. Sometimes the honest fix is a simpler thermostat that runs on batteries and matches the two wires you have.",
        "Pulling a new cable through a plaster wall in an older Freeport house is not always a weekend task. The wire may be stapled in a stud bay that has been remodeled twice. Forcing it can also yank a low-voltage connection at the furnace board. If the path is not obvious, stop. A [heating repair](/services/heating-repair-freeport-il/) call that starts with “we need a C wire and here is a photo of the old terminals” is a clearer job than a call that starts with a thermostat half-installed and the furnace locked out. Do not jump terminals at the furnace to “see what happens.”",
      ],
    },
    {
      heading: "Heat pumps use the same letters for a different story",
      paragraphs: [
        "On a conventional furnace, O and B are often empty or used as a common, depending on the brand. On a heat pump, O or B usually controls the reversing valve that swaps heating and cooling. Install a furnace-only thermostat on a heat pump, or configure a universal thermostat as a furnace, and you can get cooling when you asked for heat, or backup strips that never shut off. That is not a failed compressor until someone checks the configuration.",
        "Auxiliary heat and emergency heat are separate functions. Emergency heat is a mode you choose when the outdoor unit should stay off. Auxiliary heat is backup the thermostat calls for during recovery or during defrost. Mixing those up is how a January bill or a cold house gets blamed on the heat pump. Read [cold-climate heat pumps](/guides/cold-climate-heat-pumps-northern-illinois/) and [setbacks](/guides/thermostat-setbacks-on-a-cold-night/) before you enable an aggressive recovery feature. If you are not sure you have a heat pump, look outside. A unit that looks like an air conditioner and runs in January is a heat pump. A silent outdoor unit while the gas furnace runs may be dual fuel or just an air conditioner in the off season. [Dual fuel](/guides/dual-fuel-heat-pump-and-gas-furnace/) explains the pair.",
      ],
    },
    {
      heading: "Two transformers, and the Rc and Rh terminals people jumper by habit",
      paragraphs: [
        "Some houses have a furnace transformer and a separate cooling transformer. The old thermostat may have had Rh and Rc separated, with the jumper removed. A new thermostat with a factory jumper between Rh and Rc can backfeed a transformer and blow a small fuse, after which nothing runs and the project looks like a dead furnace. The photo of the old wiring is what tells you whether that jumper belonged there.",
        "A blown low-voltage fuse is a common, and limited, failure. It is also a clue to stop. Replacing the fuse without finding why it blew can mean the next fuse lasts until the thermostat calls again. The fuse is on the furnace board, in a circuit you should not be probing if you are not comfortable around it. Say “the fuse blew after the thermostat went in” on the call. That sentence is more useful than a list of menu screens.",
      ],
    },
    {
      heading: "Millivolt boilers and floor heat are not 24-volt furnace circuits",
      paragraphs: [
        "Some older boilers, wall heaters, and gas fireplaces use a millivolt circuit from a thermopile or a powerpile. The thermostat is a dry switch in that tiny circuit. A standard 24-volt smart thermostat can damage it or simply never work, because it expects power the millivolt system does not have. If the old thermostat has two thin wires and the heat is a boiler or a wall furnace rather than a central air handler, ask before you buy a control. [Hot-water boilers](/guides/hot-water-boilers-in-older-houses/) describes the equipment. It still does not include a wiring sketch, on purpose.",
        "Radiant floor and electric baseboard sometimes use line-voltage thermostats. Those are mains power, not the 24-volt cable this page is talking about. If the old control is a heavy box in a junction box and the wires look like house wiring, leave it alone. Line voltage is not a label-and-photo project for a Saturday. Call and describe what you see without taking it apart.",
      ],
    },
    {
      heading: "Location still matters after the wires are right",
      paragraphs: [
        "A new thermostat installed in the same bad spot repeats the old problem with a brighter screen. Sun from a west window, a supply register below the device, a draft from a stairwell, and a lamp underneath all lie. Interior hallways lie in a different way: they can be satisfied while bedrooms are not, especially if doors are closed and returns are missing. [Cold bedrooms](/guides/why-an-upstairs-bedroom-stays-cold/) is the building problem a thermostat cannot program away.",
        "Height and level matter less than heat sources, but a thermostat buried behind a door that stands open against it will read the closet, not the room. If you are moving the control, the wire length and the path through the wall are the constraint. Do not splice low-voltage wire with an unprotected twist in a damp basement and call it finished. Corrosion there becomes an intermittent heat call in February, which looks exactly like [a furnace that will not stay on](/guides/furnace-short-cycling/).",
      ],
    },
    {
      heading: "Features that sound helpful and cause service calls",
      paragraphs: [
        "Learning schedules, geofencing, and aggressive recovery assume a life and a heating system that match the software. A heat pump with recovery that demands strips, a boiler that cannot swing ten degrees in an hour, and a household that is home at unpredictable times will all fight those features. Turn them off until the basic call for heat and call for cool are proven. Then add one feature and live with it for a week. [Shoulder season](/guides/shoulder-season-heat-then-cooling/) is when mode errors and smart schedules collide, because the weather is already changing its mind.",
        "Remote sensors can help a house with one stubborn room if they are placed in the living space and not in a sunbeam. They do not create airflow. If the room has no supply duct, a sensor only reports the bad news more accurately. Equipment for that room is a different project, often a [ductless unit](/guides/ductless-for-one-cold-room/) or duct work, not another sensor.",
      ],
    },
    {
      heading: "What to say if the new thermostat is already on the wall",
      paragraphs: [
        "Say what the old thermostat was, what the new one is, and which wires you landed. Say whether the furnace fuse is blown, whether the fan runs without heat, and whether this is a heat pump. Offer the photo of the old terminals. Say the town and ZIP. If you smell gas or a control was sparking, stop and leave; gas emergencies go to 911 and Nicor Gas at [888-642-6748](tel:+18886426748) from outside. Do not keep cycling power to “reset the smart thermostat” if you smell anything.",
        "This website is not a contractor and will not walk you through live wiring. The phone number connects you with an independent professional who can see the board. Read the [hiring questions](/guides/questions-before-you-hire-hvac-help/) if you are choosing who that is, and the [disclosure](/disclaimer/) if you want the pay-per-call relationship stated plainly. For a furnace that failed before anyone touched the thermostat, start at [furnace not heating](/guides/furnace-not-heating/) instead.",
      ],
    },
  ],
  relatedServices: [
    "heating-repair-freeport-il",
    "furnace-repair-freeport-il",
    "heat-pump-repair-freeport-il",
  ],
  relatedGuides: [
    "thermostat-not-working",
    "thermostat-setbacks-on-a-cold-night",
    "cold-climate-heat-pumps-northern-illinois",
  ],
});
