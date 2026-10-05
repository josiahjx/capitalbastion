"use client";

import { useState } from "react";

const items = [
  {
    question: "Can stolen cryptocurrency be recovered?",
    answer:
      "Often, yes, if the funds can still be traced and a venue or counterparty can be reached. Outcomes depend on how quickly the case starts and where the assets moved. Every transaction stays on the ledger, so a trail can exist even after funds pass through several wallets.",
  },
  {
    question: "How long does an investigation take?",
    answer:
      "An initial assessment is typically ready within 1–24 hours. A full tracing and recovery matter takes longer and depends on the chains, mixers, and exchanges involved.",
  },
  {
    question: "Do you work with law enforcement and counsel?",
    answer:
      "Yes. We prepare material that law firms and investigators can use, and we coordinate with exchanges when a freeze or disclosure request is the right next step.",
  },
  {
    question: "Do you need private keys or seed phrases?",
    answer:
      "No. We never request private keys, seed phrases, or remote access to your wallet. If anyone asking to “recover” your crypto wants those, stop and contact us instead.",
  },
  {
    question: "How are fees structured?",
    answer:
      "The first consultation is free. For matters we accept, fees are agreed up front and tied to a successful recovery. We explain the likelihood of success before you commit.",
  },
  {
    question: "Is my enquiry confidential?",
    answer: "Yes. Case details are handled confidentially and shared only where you ask us to, or where the recovery itself requires it.",
  },
];

export default function HomeFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-paper pb-24">
      <div className="site-wrap grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div>
          <p className="eyebrow-dark">FAQ</p>
          <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted">
            What clients ask before they send a case.
          </p>
        </div>
        <div className="divide-y divide-[rgba(109,109,109,0.12)] border-y border-[rgba(109,109,109,0.12)]">
          {items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="text-[17px] font-medium text-ink">{item.question}</span>
                  <span className="text-xl leading-none text-iris" aria-hidden="true">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && <p className="pb-5 pr-8 text-[15px] leading-relaxed text-muted">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
