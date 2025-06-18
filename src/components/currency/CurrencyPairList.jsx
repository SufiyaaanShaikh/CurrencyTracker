// src/components/currency/CurrencyPairList.jsx
import React from "react";
import { CurrencyPair } from "./CurrencyPair";

export const CurrencyPairList = ({ pairs, onRemove }) => {
  return (
    <div className="space-y-2 mb-4">
      {pairs.map((pair) => (
        <CurrencyPair
          key={pair.id}
          pair={pair}
          onRemove={() => onRemove(pair.id)}
          isRemovable={pairs.length > 1}
        />
      ))}
    </div>
  );
};