"use client";
import React, { useState } from "react";
import InclusionItem from "./InclusionItem";

function BotonInclusion() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Abrir modal</button>
      <InclusionItem setOpen={setOpen} open={open} />
    </>
  );
}

export default BotonInclusion;
