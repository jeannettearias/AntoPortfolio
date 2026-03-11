export default function Description({ text }) {
    const lines = (text ?? "")
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);

    return (
        <ul className="description__list">
            {lines.map((line, i) => (
                <div key={i}>{line}</div>
            ))}
        </ul>
    );
}