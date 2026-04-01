export default function SectionHeading({
  letter,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";

  // Split title into first word and rest so we can join the letter with the first word
  const words = title.trim().split(/\s+/);
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <div className={`${isCenter ? "text-center" : "text-left"} ${className}`}>
      <h2 className="text-3xl sm:text-4xl uppercase md:text-5xl xl:text-6xl font-serif font-normal text-dark-green tracking-[-0.02em] leading-[0.95] mb-4 perandory">
        <span style={{ whiteSpace: "nowrap", display: "inline" }}>
          <span className="font-script font-normal text-[1.3em] sm:text-[1.4em] text-primary leading-[0.65] align-baseline">
            {letter}
          </span>
          {firstWord}
        </span>
        {restWords ? ` ${restWords}` : ""}
      </h2>

      <div
        className={`w-20 sm:w-24 h-1 bg-accent ${isCenter ? "mx-auto" : ""}`}
      ></div>

      {subtitle ? (
        <p
          className={`mt-6 sm:mt-8 text-dark-green/80 font-sans text-base sm:text-lg leading-relaxed ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
