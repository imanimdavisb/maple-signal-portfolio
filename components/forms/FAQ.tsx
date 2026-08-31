interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="divide-y divide-line">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink">
            {item.question}
            <span className="text-maple transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-ink-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
