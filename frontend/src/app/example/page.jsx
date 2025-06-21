"use client";
import { useMemo, useEffect, useState } from "react";

const ExpensiveComponent = ({ items }) => {
  const expensiveCalculation = useMemo(() => {
    console.log("Recalculating...");
    return items.map((item) => ({
      ...item,
      computedValue: item.value * 2,
    }));
  }, [items]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval running...");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [expensiveCalculation]);

  return (
    <ul>
      {expensiveCalculation.map((item) => (
        <li key={item.id}>{item.computedValue}</li>
      ))}
    </ul>
  );
};

export default function ParentComponent() {
  const [count, setCount] = useState(0);
  const items = useMemo(
    () => [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
    ],
    [count]
  );

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
      <ExpensiveComponent items={items} />
    </div>
  );
}
