import { useState } from "react";

// One question that opens and closes. Props: question, answer
export default function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between text-left text-sm font-medium">
        {question}
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && <p className="mt-2 text-sm text-slate-500">{answer}</p>}
    </div>
  );
}
