import "../../../styles/_groupExperience.scss";

export default function Description({ text }) {
    const lines = (text ?? "")
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);

    return (
        <div className="description__list">
            {lines.map((line, i) => (
                <div key={i}>{line}</div>
            ))}
        </div>
    );
}