"use client";

import { useMemo, useState } from "react";

type SizeKey = "under-1200" | "1200-2000" | "2000-3000" | "3000-plus";
type ConditionKey = "light" | "moderate" | "heavy";
type CleaningTypeKey = "move-out" | "deep" | "standard";

const cleaningTypeBase: Record<CleaningTypeKey, number> = {
  "move-out": 100,
  deep: 90,
  standard: 70
};

const cleaningTypeLabels: Record<CleaningTypeKey, string> = {
  "move-out": "Move-Out Cleaning",
  deep: "Deep Cleaning",
  standard: "Standard Cleaning"
};

const sizeAdjustments: Record<SizeKey, number> = {
  "under-1200": 0,
  "1200-2000": 40,
  "2000-3000": 80,
  "3000-plus": 120
};

const conditionAdjustments: Record<ConditionKey, number> = {
  light: 0,
  moderate: 50,
  heavy: 100
};

export default function QuoteCalculator() {
  const [cleaningType, setCleaningType] = useState<CleaningTypeKey>("move-out");
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);
  const [homeSize, setHomeSize] = useState<SizeKey>("1200-2000");
  const [condition, setCondition] = useState<ConditionKey>("moderate");
  const [addons, setAddons] = useState({
    oven: false,
    fridge: false,
    garage: false
  });

  const calculatedPrice = useMemo(() => {
    let total = cleaningTypeBase[cleaningType] + bedrooms * 35 + bathrooms * 25;
    total += sizeAdjustments[homeSize];
    total += conditionAdjustments[condition];
    if (addons.oven) total += 30;
    if (addons.fridge) total += 30;
    if (addons.garage) total += 50;
    return total;
  }, [addons.fridge, addons.garage, addons.oven, bathrooms, bedrooms, cleaningType, condition, homeSize]);

  const lowerBound = Math.max(0, calculatedPrice - 20);
  const upperBound = calculatedPrice + 20;

  const toggleAddon = (key: "oven" | "fridge" | "garage") => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="quote-calculator-section">
      <div className="container quote-calculator-inner">
        <div className="quote-calculator-layout">
          <div className="quote-inputs">
              <h2>Fast Cleaning Quote Calculator</h2>
              <p>Estimate your cleaning cost in under 30 seconds.</p>

              <div className="quote-field-grid">
                <label>
                  Cleaning Type
                  <select value={cleaningType} onChange={(e) => setCleaningType(e.target.value as CleaningTypeKey)}>
                    <option value="move-out">Move-Out Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="standard">Standard Cleaning</option>
                  </select>
                </label>

                <label>
                  Bedrooms
                  <select value={bedrooms} onChange={(e) => setBedrooms(Number(e.target.value))}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5+</option>
                  </select>
                </label>

                <label>
                  Bathrooms
                  <select value={bathrooms} onChange={(e) => setBathrooms(Number(e.target.value))}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4+</option>
                  </select>
                </label>

                <label>
                  Home Size
                  <select value={homeSize} onChange={(e) => setHomeSize(e.target.value as SizeKey)}>
                    <option value="under-1200">Under 1,200 sqft</option>
                    <option value="1200-2000">1,200-2,000 sqft</option>
                    <option value="2000-3000">2,000-3,000 sqft</option>
                    <option value="3000-plus">3,000+ sqft</option>
                  </select>
                </label>

                <label>
                  Condition
                  <select value={condition} onChange={(e) => setCondition(e.target.value as ConditionKey)}>
                    <option value="light">Light</option>
                    <option value="moderate">Moderate</option>
                    <option value="heavy">Heavy</option>
                  </select>
                </label>
              </div>

              <div className="quote-addons">
                <p>Add-ons</p>
                <label>
                  <input type="checkbox" checked={addons.oven} onChange={() => toggleAddon("oven")} />
                  Oven Cleaning
                </label>
                <label>
                  <input type="checkbox" checked={addons.fridge} onChange={() => toggleAddon("fridge")} />
                  Fridge Cleaning
                </label>
                <label>
                  <input type="checkbox" checked={addons.garage} onChange={() => toggleAddon("garage")} />
                  Garage Cleaning
                </label>
              </div>
          </div>

          <aside className="quote-summary">
            <p className="quote-selected-type">Selected: {cleaningTypeLabels[cleaningType]}</p>
            <p className="quote-estimate-value">
              Estimated Price: ${lowerBound} - ${upperBound}
            </p>
            <p className="quote-anchor">Most move-out cleanings in Tulare County fall between $250-$400</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
