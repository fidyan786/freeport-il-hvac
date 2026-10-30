import Link from "next/link";

const LINK = /\[([^\]]+)\]\(((?:\/|tel:\+)[^)\s]+)\)/g;

export function RichText({ text, className }: { text: string; className?: string }) {
  const nodes: Array<string | { label: string; href: string }> = [];
  const pattern = new RegExp(LINK.source, "g");
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    nodes.push({ label: match[1] ?? "", href: match[2] ?? "/" });
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));

  return (
    <p className={className}>
      {nodes.map((node, index) =>
        typeof node === "string" ? (
          <span key={index}>{node}</span>
        ) : node.href.startsWith("tel:") ? (
          <a
            key={index}
            href={node.href}
            className="font-semibold text-navy underline decoration-brass underline-offset-2 hover:decoration-navy"
          >
            {node.label}
          </a>
        ) : (
          <Link
            key={index}
            href={node.href}
            className="font-semibold text-navy underline decoration-brass underline-offset-2 hover:decoration-navy"
          >
            {node.label}
          </Link>
        ),
      )}
    </p>
  );
}

export function headingId(heading: string, index: number) {
  const base = heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${base || "section"}-${index + 1}`;
}
