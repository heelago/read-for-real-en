export default function SectionHeader({ section }) {
  const heading = section.subtitle || section.title;

  return (
    <div className="mb-10 text-center">
      <h2 className="font-heebo text-2xl font-bold text-bark m-0">{heading}</h2>
      <div className="italic text-earth text-sm mt-1">
        {section.title}
        <span className="mx-2 opacity-50">&middot;</span>
        pp. {section.pageRange}
      </div>
    </div>
  );
}
