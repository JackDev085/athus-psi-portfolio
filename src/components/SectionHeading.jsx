export default function SectionHeading({
  letter,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "text-center" : "text-left"} ${className}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl uppercase font-serif font-normal text-dark-green tracking-[-0.02em] leading-[0.95] mb-4">
        <span className="font-script text-[1.2em] sm:text-[1.3em] text-primary leading-[0.65] mr-1 -mb-1 inline-block align-baseline">
          {letter}
        </span>
        <span className="inline-block align-baseline">{title}</span>
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
