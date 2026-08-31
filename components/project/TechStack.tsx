import { Tag } from "@/components/ui/Tag";

export function TechStack({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Tag key={item} tone="signal">
          {item}
        </Tag>
      ))}
    </div>
  );
}
