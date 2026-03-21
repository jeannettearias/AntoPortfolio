import "../../../styles/_groupExperience.scss";

export default function Description({ text = "" }) {
    return (
        <li className="description__label">
            {text.split("\n").map((rawLine, i) => {
                const line = rawLine.trimEnd();
                const isBullet = /^\s*-\s+/.test(line); // markdown-like "- "
                const cleanText = line.replace(/^\s*-\s+/, "");

                return (
                    <span
                        key={i}
                        className={isBullet ? "desc-line desc-line--bullet" : "desc-line"}
                    >
                        {cleanText}
                        <br />
                    </span>
                );
            })}
        </li>
    );
}
