import type { CSSProperties } from "react";

interface CaveatNotesProps {
  visibility: boolean[];
}

const NOTE_TEXT: string[] = [
  "NYC consolidated county reporting caveat.",
  "Kansas City, MO reporting caveat.",
  "Joplin, MO reporting caveat.",
  "Unknown county bucket caveat for selected state.",
  "Selected counties include suppressed population rows."
];

export function CaveatNotes({ visibility }: CaveatNotesProps): JSX.Element {
  return (
    <section aria-label="Data caveats" style={styles.wrapper}>
      <h2 style={styles.title}>Caveats</h2>
      <ul style={styles.list}>
        {NOTE_TEXT.map((text, index) => (
          <li key={text} hidden={!visibility[index]}>
            {text}
          </li>
        ))}
      </ul>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    background: "#fff7ef",
    border: "1px solid #f4d7bb",
    borderRadius: "12px",
    padding: "1rem"
  },
  title: {
    margin: "0 0 0.5rem",
    fontSize: "1.05rem"
  },
  list: {
    margin: 0,
    paddingLeft: "1.1rem"
  }
};
