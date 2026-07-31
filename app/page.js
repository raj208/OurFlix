"use client";

import { useEffect, useState } from "react";
import Tudum from "@/components/Tudum";
import PasswordGate from "@/components/PasswordGate";
import Profiles from "@/components/Profiles";
import Browse from "@/components/Browse";

// Flow:  tudum → pin → who's-watching → browse
// Once unlocked, we remember it for the session so a refresh doesn't re-lock.
export default function Home() {
  const [stage, setStage] = useState(null); // null until we read the session

  useEffect(() => {
    const done = sessionStorage.getItem("ourflix-in");
    setStage(done ? "browse" : "tudum");
  }, []);

  const enter = () => {
    sessionStorage.setItem("ourflix-in", "1");
    setStage("browse");
  };

  if (stage === null) return <div className="min-h-screen bg-ink" />;
  if (stage === "tudum") return <Tudum onDone={() => setStage("pin")} />;
  if (stage === "pin") return <PasswordGate onUnlock={() => setStage("profiles")} />;
  if (stage === "profiles") return <Profiles onPick={enter} />;
  return <Browse />;
}
