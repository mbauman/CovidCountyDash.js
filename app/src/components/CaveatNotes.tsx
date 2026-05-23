import type { CSSProperties } from "react";

interface CaveatNotesProps {
  visibility: boolean[];
}

const NOTE_TEXT: string[] = [
  "¹ The five boroughs of New York City (New York, Kings, Queens, Bronx, and Richmond counties) are combined into a single entry",
  "² Kansas City, MO is reported independently of the four counties it spans (Cass, Clay, Jackson, and Platte counties)",
  "³ Excluding data from Kansas City, MO",
  "⁴ Starting June 25, Joplin, MO is reported independently of the two counties it spans (Jasper and Newton counties)",
  "⁵ Excluding data from Joplin, MO"
];

export function CaveatNotes({ visibility }: CaveatNotesProps): JSX.Element {
  if (!visibility.some(Boolean)) {
    return <></>;
  }

  return (
    <section aria-label="Data caveats" style={styles.wrapper}>
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
