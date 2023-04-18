"use client";
import React from "react";

interface MenuitemProps {
  onClick: () => void;
  label: string;
}

const MenuItem = ({ onClick, label }: MenuitemProps) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
    >
      {label}
    </div>
  );
};

export default MenuItem;
