import { article } from "@/content/articles/build";

export const winterFurnace = article({
  slug: "northern-illinois-winter-and-your-furnace",
  category: "climate",
  title: "What a Freeport winter asks of a furnace",
  metaTitle: "Freeport Winter Furnace Load | Millrace Heating",
  metaDescription:
    "How a Stephenson County winter loads a gas furnace, using Freeport climate normals rather than a slogan about cold weather.",
  h1: "What a Freeport winter actually asks of a gas furnace",
  lede:
    "A furnace in Freeport is not asked to handle a few cold snaps and then rest. It is asked to carry a house from late fall through March, including nights that fall well below the January average. This page explains that load in plain language, using published climate normals for the city, and it separates weather from a machine that is failing.",
  image: "/photos/downtown-freeport-illinois.webp",
  imageAlt: "Downtown Freeport, Illinois, the city these heating notes are written for.",
  body: [
    {
      heading: "The weather record is a station, not your utility bill",
      paragraphs: [
        "The National Oceanic and Atmospheric Administration’s 1991–2020 monthly normals for the Freeport Wastewater Treatment Plant station put the January average high near 28°F and the January average low near 11°F. Across a full year, that same station records about 6,956 heating degree days and about 690 cooling degree days, both on a 65°F base. Heating degree days are a weather tally. They add up how far, and for how long, the outdoor temperature sits below 65°F. They are not a prediction of your gas bill, and they are not a measurement of your particular house.",
        "Those figures still explain the shape of the year. Freeport’s heating season is the long one. The cooling season is real, and July afternoons average in the low 80s, but the degree-day balance is not close. A furnace, boiler, or heat pump that was chosen as if summer and winter were equal jobs is the wrong mental model for Stephenson County. The [shorter heat-pump introduction](/guides/heat-pump-basics-northern-illinois/) makes the same point from the equipment side. This page stays with the weather and the furnace.",
      ],
    },
    {
      heading: "Average January is not the coldest night the house must survive",
      paragraphs: [
        "An average low near 11°F already means a lot of burner hours. It is still an average. The same NOAA table shows on the order of seven January nights at that station with a low at or below 0°F, and nearly every January night at or below freezing. A furnace that “kept up” on a 25°F evening has not been tested against a night near zero with wind on a west wall. People often discover the difference in the bedroom farthest from the return, not on the thermostat in the hall.",
        "USDA plant hardiness zone 5a, which is the zone commonly mapped for Freeport, describes an average annual extreme minimum around −20°F to −15°F. That number is for plants. It is not the temperature a furnace is sized to hold every year, and it is not a promise that your house will see −20°F this winter. Manual J and the other residential load methods use a design temperature that is colder than a typical January day and warmer than the rarest night on record. If someone quotes you a single Freeport design temperature without saying which table and which edition, ask them to show it. This website does not invent one.",
      ],
    },
    {
      heading: "Long runtimes can be the furnace doing the job",
      paragraphs: [
        "On a 10°F afternoon, a correctly sized gas furnace in a typical older Freeport house may run a large share of each hour. That is how it replaces heat the walls, windows, and ceiling are losing. Short bursts that never let the supply air get fully warm, followed by a shutdown, are a different pattern. Those belong with [furnace short cycling](/guides/furnace-short-cycling/), not with “it’s cold outside so it runs.” Listen for whether the burners stay on long enough for the trunk line to get hot, and whether the rooms are actually moving toward the setpoint.",
        "The blower can keep going after the burners stop. That is often a normal cool-down so the heat exchanger is not left hot with no airflow. It is not the same thing as a [furnace blowing cold air](/guides/furnace-blowing-cold-air/) for a long stretch while the burners never light. If you are unsure which of those you have, say so on the call. The distinction changes the first tests.",
      ],
    },
    {
      heading: "The house leaks heat upward and out the rim, not only through the windows",
      paragraphs: [
        "Warm air rises. In a two-story house on a cold night, the upstairs can be tolerable while the first floor feels drafty, or the reverse if the supplies upstairs are weak and the returns are all downstairs. This is the stack effect. It gets stronger as the outdoor temperature drops, which is why a balance that seemed fine in October comes apart in January. Closing every upstairs register to “push heat down” usually makes the furnace work against itself. The notes on [cold upstairs bedrooms](/guides/why-an-upstairs-bedroom-stays-cold/) go further into doors, returns, and rooms over unheated spaces.",
        "Windows are easy to blame because you can feel them. A lot of the winter loss in older Stephenson County houses is elsewhere: the rim joist where the first floor meets the foundation, an attic hatch with no weatherstrip, a fireplace damper that does not close, and ducts running through a cold crawl or a garage. Replacing the furnace before anyone looks at those paths is how a new, efficient unit still runs for long stretches. The [order of work before replacement](/guides/what-to-fix-before-you-replace-hvac-equipment/) is the page for that sequence. None of it is a quote.",
      ],
    },
    {
      heading: "Snow, wind, and the plastic vent on a condensing furnace",
      paragraphs: [
        "Many newer gas furnaces in the northern region are condensing units that vent through plastic pipe to a side wall, rather than a metal flue up a chimney. Illinois sits in the U.S. Department of Energy’s northern region, where the standard for non-weatherized gas furnaces is 90 percent AFUE. Houses here can still be heating with older furnaces that were legal when they were installed. Both kinds fail in winter for different outdoor reasons. A sidewall vent or intake buried in a drift, or a recessed vent packed with snow after a plow goes by, can shut a condensing furnace down or make it short cycle. Look from outside. Do not pull the pipe apart, and do not run the furnace if the termination is blocked.",
        "Wind on an exposed west or north wall can also disturb an older natural-draft furnace, especially if a kitchen hood or a clothes dryer is running at the same time. That is a combustion-air and venting question, not a thermostat question. If you smell gas, or a carbon monoxide alarm sounds, leave. From outside, call 911 and Nicor Gas. Nicor’s published emergency number is [888-642-6748](tel:+18886426748), and the [carbon monoxide page](/guides/carbon-monoxide-safety/) is the short version of that exit. The longer alarm notes are in [carbon monoxide alarms for gas heat](/guides/carbon-monoxide-alarms-for-gas-heat/).",
      ],
    },
    {
      heading: "What “keeping up” should mean before you talk about a new furnace",
      paragraphs: [
        "A furnace is keeping up when the house can be held near the temperature you actually live with, on a night around the January normal, without the burners locking out and without the air from the registers staying lukewarm. It is not keeping up when the thermostat sits several degrees below the setpoint for hours, when some rooms are abandoned for the winter, or when you are using the oven for heat. Using a range or an oven as a heater is a carbon monoxide risk. The U.S. Consumer Product Safety Commission says not to do it.",
        "Age alone is not a diagnosis. A twenty-year-old furnace that still lights, vents, and holds the house may be a maintenance candidate. A younger furnace with a cracked heat exchanger, a failed collector box, or a drain that freezes every cold snap is a repair or replacement conversation after someone sees it. The [signals that a furnace is near the end](/guides/furnace-replacement-signals/) list the symptoms worth naming. They are not a rule that every old furnace in 61032 must be replaced this year.",
      ],
    },
    {
      heading: "Filters, setbacks, and the other things people change on the first cold week",
      paragraphs: [
        "The first week that stays below freezing is when a filter that sat all summer, and a thermostat programmed for an empty house, both get blamed for the weather. A packed filter can push a furnace toward the high-limit switch. A deep overnight setback in a leaky house can make the morning recovery look like a failure, especially if the system is a heat pump that calls for electric backup the whole time it catches up. Read [thermostat setbacks on a cold night](/guides/thermostat-setbacks-on-a-cold-night/) before you decide the equipment quit, and read [filters, MERV, and the blower](/guides/furnace-filter-merv-and-blower-limits/) before you install the thickest filter the hardware store sells.",
        "Humidifiers enter the same week. Cold outdoor air holds little moisture. Heating it drops the indoor relative humidity, so a house that was fine in September feels dry in January even when nothing is broken. That is a comfort and condensation topic, covered in [dry winter air in a closed house](/guides/dry-winter-air-in-a-freeport-house/). It is not, by itself, proof that the furnace is undersized.",
      ],
    },
    {
      heading: "How to describe the winter problem on the phone",
      paragraphs: [
        "Say the town and ZIP, the outdoor temperature if you know it, and whether the burners are lighting. Say whether the whole house is falling or one floor is. Say whether a carbon monoxide alarm has sounded. Say if the equipment is a furnace, a boiler, or a heat pump, as far as you know. Coverage outside Freeport proper, in towns such as Lena, Cedarville, or Dakota, is confirmed on the call, not by this page. The [service area](/service-area/) lists those towns so you can name them.",
        "This website connects that call with an independent local heating and cooling professional. It is not itself a contractor, it does not dispatch a truck, and it does not price a furnace from a climate normal. If the house is already cold and people in it should not wait, use the notes on [how urgent a no-heat night is](/guides/how-urgent-a-no-heat-night-is/) and the [emergency HVAC](/services/emergency-hvac-freeport-il/) page. If the furnace is the known machine and the house is still safe, [furnace repair](/services/furnace-repair-freeport-il/) is the clearer label.",
      ],
    },
  ],
  relatedServices: [
    "furnace-repair-freeport-il",
    "furnace-installation-freeport-il",
    "emergency-hvac-freeport-il",
  ],
  relatedGuides: [
    "furnace-not-heating",
    "thermostat-setbacks-on-a-cold-night",
    "dry-winter-air-in-a-freeport-house",
  ],
});
