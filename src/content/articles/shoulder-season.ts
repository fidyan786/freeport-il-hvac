import { article } from "@/content/articles/build";

export const shoulderSeason = article({
  slug: "shoulder-season-heat-then-cooling",
  category: "climate",
  title: "Shoulder season: heat one day, cooling the next",
  metaTitle: "Freeport Shoulder Season HVAC | Millrace Heating",
  metaDescription:
    "April and October in Stephenson County swing across freezing. How to change modes without leaving emergency heat on or icing a coil.",
  h1: "Heat one day and cooling the next: Freeport’s shoulder seasons",
  lede:
    "April and October in Stephenson County are not gentle transitions. A week can cross freezing at night and ask for cooling two days later, or the reverse. The equipment problems of those weeks are mostly mode, leftover switches, and outdoor parts that are not ready, not a mystery disease of the furnace.",
  image: "/photos/spring-jackson-freeport-illinois.webp",
  imageAlt: "A spring day on a street in Freeport, Illinois.",
  body: [
    {
      heading: "The frost calendar is a range, and the furnace does not read it",
      paragraphs: [
        "Garden calendars for Freeport often put a typical last spring frost late in April and a typical first fall frost in October. Those are averages of a threshold, not a switch the weather honors. A clear night in the first week of May can still skim freezing, and a mild week in November can be followed by a night in the teens. If you shut the furnace off at the breaker because one Saturday was warm, you can come home to a cold house and, on a condensing furnace, a condensate line that froze or a trap that dried out.",
        "The practical rule is boring. Leave the heating system able to run while nights can still drop below freezing. Use the thermostat to call for less heat, not the breaker, unless a technician told you to lock the unit out. The [pre-winter checklist](/guides/pre-winter-furnace-checklist/) is for the fall side of this. The [cooling checklist](/guides/pre-summer-cooling-checklist/) is for the spring side. Shoulder season is when people do both jobs halfway.",
      ],
    },
    {
      heading: "Emergency heat is a winter switch that ruins a warm afternoon",
      paragraphs: [
        "On a heat pump, emergency heat or auxiliary-only mode runs the backup strips or locks out the compressor and uses the furnace, depending on how the thermostat was set up. It is the right mode for a failed outdoor unit on a cold night. It is an expensive, and sometimes heat-only, mistake on the first 70°F day if nobody switched the thermostat back to heat/cool or to cool. The outdoor unit sits silent, the house climbs, and the story becomes “the air conditioner will not start” when the control never asked it to.",
        "Look at the mode before you look at the breaker. Heat, cool, and auto are different requests. Auto sounds convenient in April and can also chase itself if the thermostat is in a sunny hall: heat in the morning, cool in the afternoon, never a settled house. Many people are happier picking one mode for a few days during a swing. [Thermostat not working](/guides/thermostat-not-working/) covers batteries and mode. [Setbacks on a cold night](/guides/thermostat-setbacks-on-a-cold-night/) covers the heating side of the same control once winter actually arrives.",
      ],
    },
    {
      heading: "Do not start cooling on a 55-degree morning to “test the air conditioner”",
      paragraphs: [
        "Air conditioners and heat pumps in cooling have a low outdoor temperature limit. Running cooling when it is near or below that limit can damage a compressor or simply fail to move heat the way you expect. The number is on the equipment paperwork and in the manufacturer’s instructions, not in a citywide rule this site can quote. If the afternoon will be warm and the morning is cold, wait until the outdoor temperature is in the range the unit was built for, then test.",
        "A short test that produces cold air at the nearest register is evidence the refrigeration circuit did something. It is not a full commissioning. Weak airflow, a slow drain, and a capacitor that is on its way out can still pass a ten-minute test in mild weather and fail on the first humid week. That failure mode is written up in [humidity and long AC runtimes](/guides/freeport-summer-humidity-and-ac-runtime/). If the outdoor unit is silent when it should be running, use [AC not turning on](/guides/ac-not-turning-on/) rather than repeating the test until a breaker stays tripped.",
      ],
    },
    {
      heading: "Fall is when condensing furnaces meet the first real cold, and leaves",
      paragraphs: [
        "A high-efficiency furnace that ran lightly in October meets a different vent and drain problem in November. Leaves in an intake screen, a hose that was kicked off the trap during summer storage, and a pump that dried out and seized are ordinary. So is a float switch that sticks after sitting. The furnace may light, run a minute, and stop. That pattern overlaps [furnace lockouts](/guides/when-a-furnace-locks-out/) and [condensate problems](/guides/high-efficiency-furnace-condensate-problems/). Resetting it five times in an evening does not clear a leaf.",
        "Older metal-vent furnaces have their own fall problem: a bird or a nest in a chimney cap, or a vent connector that was disturbed. Soot at a draft hood, a smell of exhaust, or melted plastic near the flue is a stop-using-it symptom. If you smell gas, leave and call 911 and Nicor Gas at [888-642-6748](tel:+18886426748) from outside. The [carbon monoxide safety](/guides/carbon-monoxide-safety/) page is the short exit instruction. Shoulder season is not a reason to postpone that.",
      ],
    },
    {
      heading: "Heat pumps in the swing months defrost and then sit",
      paragraphs: [
        "A heat pump asked to heat on a 40°F rainy day may ice lightly and defrost. Steam at the outdoor unit for a few minutes is normal. Steam for a long time, or a unit buried in the first wet snow while it is still in cooling because nobody changed the mode, is not. The [heat pump basics](/guides/heat-pump-basics-northern-illinois/) page explains defrost for midwinter. The [cold-climate heat pump](/guides/cold-climate-heat-pumps-northern-illinois/) page goes further into backup heat. In April the more common mistake is simply leaving the thermostat in the wrong mode after a cold morning.",
        "Dual-fuel systems, with a heat pump and a gas furnace, have a changeover. In mild weather you want the heat pump to carry the load if that is how it was commissioned. If the gas furnace runs on every 50°F afternoon, the lockout or the outdoor sensor may be set in a way that never lets the pump work. That is a controls conversation, not a reason to shut the gas off. [Dual fuel](/guides/dual-fuel-heat-pump-and-gas-furnace/) is the longer explanation. Do not experiment with the furnace gas valve.",
      ],
    },
    {
      heading: "Windows, fireplaces, and the habit of helping the equipment",
      paragraphs: [
        "Opening windows while the furnace or the air conditioner is running dumps the work outdoors. It is a reasonable way to cool a house on a dry, cool night if the equipment is off. It is a poor combination with cooling on a humid evening, and it is a poor combination with heating if a bedroom window is forgotten open. Before you decide a room “has no airflow,” check the window and the supply register. [Cold bedrooms](/guides/why-an-upstairs-bedroom-stays-cold/) assumes the window is shut.",
        "A fireplace that was used on the first chilly night and left with the damper open is a hole in the heating system until spring. Close the damper when the fire is cold. A damper left open, or a wood stove that backdrafts when the dryer runs, is also a combustion-air clue if the furnace is natural draft. That interaction is in [ventilation and combustion air](/guides/ventilation-and-combustion-air-in-a-tight-house/). It matters more once the house is closed for winter than it does on a mild October day, but the damper does not fix itself in November.",
      ],
    },
    {
      heading: "Maintenance belongs in the shoulder, because the technician can still get there",
      paragraphs: [
        "The first week of deep cold and the first week of real heat are when everyone in Stephenson County calls at once. A fall heating check or a late-spring cooling check is the same work with a calmer schedule, if the professional you reach has room. This website cannot promise that room. It can say what a heating visit ought to include, which is the point of [what a heating tune-up covers](/guides/what-a-heating-maintenance-visit-covers/). There is no coupon on that page.",
        "If you are deciding whether the furnace will survive another winter, do it while the house can still coast through a mild night. [Replacement signals](/guides/furnace-replacement-signals/) are symptoms, not a calendar age. [What to fix before you replace equipment](/guides/what-to-fix-before-you-replace-hvac-equipment/) is the sequence if the conversation is about a new unit rather than a repair. Neither page is a bid.",
      ],
    },
    {
      heading: "What to say on a shoulder-season call",
      paragraphs: [
        "Say which mode you are in, what the outdoor temperature is doing today, and what the equipment did yesterday. “It heated this morning and will not cool tonight” is a more useful sentence than “the HVAC is down.” Name the town and ZIP. Mention a heat pump if you have one, and mention whether emergency heat is displayed on the thermostat. Those words save a trip spent discovering the mode.",
        "Call the number on this site to be connected with an independent local professional. The site is not a contractor. If the issue is only that you want the system looked at before the season turns, say maintenance. If the house is already unsafe or someone cannot stay in it, say that plainly and use [how urgent a no-heat night is](/guides/how-urgent-a-no-heat-night-is/) as the decision guide. Gas smell and a carbon monoxide alarm still mean leave first.",
      ],
    },
  ],
  relatedServices: [
    "hvac-maintenance-freeport-il",
    "heat-pump-repair-freeport-il",
    "ac-repair-freeport-il",
  ],
  relatedGuides: [
    "prepare-ac-after-winter",
    "thermostat-not-working",
    "pre-winter-furnace-checklist",
  ],
});
