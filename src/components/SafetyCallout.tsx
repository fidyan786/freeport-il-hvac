import { NICOR_GAS } from "@/lib/safety-contacts";

export function SafetyCallout() {
  return (
    <aside
      className="border-l-4 border-danger bg-white p-5 shadow-sm"
      role="note"
    >
      <h2 className="text-lg font-semibold text-danger">
        Gas smell or carbon monoxide alarm?
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink sm:text-base">
        This is not an HVAC troubleshooting moment. Leave the building with
        everyone in it. Do not turn lights or appliances on or off, and do not
        use a garage door opener or a phone inside the home. From a safe
        location, call 911 and Nicor Gas at{" "}
        <a className="font-semibold text-navy underline" href={NICOR_GAS.href}>
          {NICOR_GAS.display}
        </a>
        . Stay out until emergency personnel say it is safe to return. HVAC
        service comes after the property is safe.
      </p>
    </aside>
  );
}
