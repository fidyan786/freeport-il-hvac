import { article } from "@/content/articles/build";

export const lockouts = article({
  slug: "when-a-furnace-locks-out",
  category: "troubleshooting",
  title: "When a furnace locks out",
  metaTitle: "Furnace Lockouts in Freeport | Millrace Heating",
  metaDescription:
    "Why a Freeport furnace starts, stops, and then refuses to retry, and why another reset is not a repair.",
  h1: "A furnace lockout means it already tried",
  lede:
    "Modern gas furnaces will attempt to light, detect a fault, and then stop trying until someone resets power or the thermostat call. That pause is a lockout. It is the control board refusing to repeat a failure. The reset that “works for an hour” has not found the fault.",
  image: "/photos/gas-furnace-utility.webp",
  imageAlt: "A gas furnace in a utility room. Repeated resets are not a repair for a lockout.",
  body: [
    {
      heading: "What a lockout feels like from the living room",
      paragraphs: [
        "The thermostat is calling. You may hear the inducer, a click, even a short roar of burners, and then silence. An hour later it may try again, or it may sit quietly until you turn the breaker off and on. The house cools. People describe this as [short cycling](/guides/furnace-short-cycling/) or as [no heat](/guides/furnace-not-heating/). Short cycling can be a high-limit trip that happens before a formal lockout. A lockout is the board giving up after failed ignition, a pressure-switch fault, a rollout, or another condition the manufacturer told it not to ignore. The blink code on the control is the sentence. The legend is usually inside the blower door. Write the pattern down. Do not clear it and hope.",
        "If you smell gas, you are not diagnosing a lockout. Leave, and from outside call 911 and Nicor Gas at [888-642-6748](tel:+18886426748). The same is true for a carbon monoxide alarm. [Carbon monoxide safety](/guides/carbon-monoxide-safety/) is the exit. A lockout article is for a house that is still safe and a furnace that will not stay in heat.",
      ],
    },
    {
      heading: "Ignition faults: the flame that does not prove",
      paragraphs: [
        "Hot-surface igniters crack. Flame sensors get a film of oxide and stop proving a flame that is actually there. A gas valve that does not open, or a valve that opens and a sensor that does not see the flame, both end in a lockout after the allowed retries. Cleaning a flame sensor is a real repair technicians do with the right care and the power off. It is also a way for a homeowner to break an igniter, lose a screw in the burner, or reassemble a sensor so it grounds out. If you have not done it on this exact model, do not make this the evening you learn. Say “it lights and then quits” or “it never lights and then goes silent” on the call. Those are different.",
        "A dirty filter does not usually cause a flame-sensor lockout. It causes a limit lockout or a limit recycle, because the heat exchanger gets too hot when airflow is poor. Check the filter once, using [the filter page](/guides/furnace-filter-merv-and-blower-limits/), and then stop resetting. If a clean filter still produces a hot-limit trip, the blower, a closed duct system, or the heat exchanger needs a person with instruments. Do not run the furnace with the filter slot empty as a permanent test. A five-minute test with the blower door arranged the way the manual allows is as far as a curious owner should go, and many manuals do not allow that without a door switch held in a listed way. When in doubt, leave the door on.",
      ],
    },
    {
      heading: "Pressure switches and the condensate trap",
      paragraphs: [
        "The pressure switch proves the inducer is moving exhaust and that the vent is not blocked. A wet switch hose, a clogged [condensate trap](/guides/high-efficiency-furnace-condensate-problems/), a snow-buried plastic vent, or a failing inducer will open that switch and end in a lockout. This is extremely common on high-efficiency furnaces during a Freeport cold snap. It is less common on an older metal-vent furnace, which may instead spill exhaust at a draft hood and never tell you with a helpful blink. Blocked chimneys and spilled exhaust are safety problems, not a switch to bypass.",
        "Never jumper a pressure switch to force a heat call. The switch is how the furnace knows it is not venting into the basement. A jumper makes heat and can make carbon monoxide. The same is true of a rollout switch, which trips when flame rolls out of the burner opening. Rollout can mean a cracked heat exchanger, a blocked vent, or a serious burner problem. Resetting rollout repeatedly is how people get hurt. One reset after an obvious and corrected filter blockage is the most this page will even discuss, and only if the manual describes it. A rollout that trips again is a call, with the furnace left off.",
      ],
    },
    {
      heading: "Limit switches are airflow stories",
      paragraphs: [
        "The high limit opens when the heat exchanger is too hot. Causes include a loaded filter, closed registers, a failing blower capacitor or motor, a collapsed duct, and a heat exchanger that is not transferring heat the way it should. The furnace may retry when the metal cools, which feels like short cycling, and then lock out if it happens too often. [Weak airflow](/guides/poor-airflow/) and [basement ducts](/guides/ducts-in-basements-and-cold-attics/) belong in this branch of the diagnosis. A bigger blower speed is not the first move. More speed on a cracked exchanger is the wrong direction.",
        "Supply air that is extremely hot at the nearest register, with weak flow, fits a limit problem. Supply air that never gets warm fits an ignition or fuel problem, or a [furnace blowing cold air](/guides/furnace-blowing-cold-air/) because the burners are not staying lit. Tell those apart. “It gets hot and quits” and “the blower runs and the air stays cold” are different blink codes and different parts.",
      ],
    },
    {
      heading: "How many resets are already too many",
      paragraphs: [
        "The installation manual names a reset procedure, often a break in the thermostat call or a power cycle, and it implies you will fix the cause. Cycling power ten times in an evening overheats components, floods a heat exchanger with unburned attempts, and destroys the evidence the technician needed. If two attempts produced the same shutdown, stop. Write the code. Note whether the vent outside is clear. Note the filter. That is the entire homeowner investigation.",
        "A furnace that runs for hours after one reset and then locks out overnight is still broken. Intermittent flame sensing and a trap that slowly fills both behave that way. “It worked after I reset it” is not a repair report. It is a description of a fault with a long fuse. Book the visit before a Friday night when the outdoor temperature is headed for the teens. [How urgent the night is](/guides/how-urgent-a-no-heat-night-is/) depends on who is in the house and how fast it is cooling, not on your patience with the breaker.",
      ],
    },
    {
      heading: "Thermostat and switch problems that look like a lockout",
      paragraphs: [
        "A thermostat that short-cycles its call, a loose wire, or a thermostat in a schedule that keeps changing its mind can look like a furnace fault. If the furnace runs normally when the fan is set to on, and quits only during a heat call, you still have a heat-specific fault. If nothing happens and the thermostat is blank, start with batteries and the furnace service switch. [Thermostat not working](/guides/thermostat-not-working/) and [older thermostat wiring](/guides/replacing-a-thermostat-in-an-older-house/) cover the control. A new thermostat installed the same day the lockouts began is the prime suspect until the wiring is checked. Say so.",
        "The little switch on the furnace that kills power when the door comes off is not a lockout. It is an open switch because the door is ajar or the switch failed. Close the door. If the switch is broken, that is a small part and a real reason nothing runs. Do not bypass it with tape so the blower runs with an open cabinet. The cabinet is part of the airflow path on many furnaces. An open door changes combustion and static pressure.",
      ],
    },
    {
      heading: "Boilers and heat pumps lock out too, with different words",
      paragraphs: [
        "A boiler control can lock out on ignition or on low water. Do not keep resetting a boiler that has lost water. [Hot-water boilers](/guides/hot-water-boilers-in-older-houses/) covers pressure and the low-water cutoff. A heat pump does not have a gas-valve lockout. It has fault codes for sensors, defrost, and the compressor. [Cold-climate heat pumps](/guides/cold-climate-heat-pumps-northern-illinois/) is the context. Using furnace language for a heat pump sends the wrong parts. Look outside. If an outdoor unit is part of heating, say so.",
        "Dual-fuel systems can lock out the furnace while the heat pump still runs, or the reverse. [Dual fuel](/guides/dual-fuel-heat-pump-and-gas-furnace/) explains the handoff. “The outdoor unit is running and the air is lukewarm on a 5°F night” can be a furnace that should have taken over and locked out instead. Mention both machines.",
      ],
    },
    {
      heading: "What to say when you call",
      paragraphs: [
        "Say the furnace locks out, how many times you reset it, and the blink code if you have it. Say whether it ever stays lit for hours. Say whether the outdoor plastic vent is clear and whether the filter is new. Give the model if you can read it without removing more than the door the manual tells you to open, and if you cannot, skip the model. Give the town and ZIP. If anyone in the house is vulnerable and the temperature is falling on a cold night, say that. It changes urgency. It does not change the advice to stop resetting.",
        "The number on this site reaches an independent professional. [Furnace repair](/services/furnace-repair-freeport-il/) is the right label. The site is not a contractor, there is no trip charge printed here, and the [disclosure](/disclaimer/) explains the relationship. A lockout is not something the website can clear remotely. Anyone who offers to talk you through a gas-valve adjustment over the phone is not following this guide.",
      ],
    },
  ],
  relatedServices: [
    "furnace-repair-freeport-il",
    "emergency-hvac-freeport-il",
    "hvac-maintenance-freeport-il",
  ],
  relatedGuides: [
    "furnace-short-cycling",
    "furnace-not-heating",
    "high-efficiency-furnace-condensate-problems",
  ],
});
