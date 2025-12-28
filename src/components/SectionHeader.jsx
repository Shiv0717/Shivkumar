export default function SectionHeader({ title }) {
    return (
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-8 bg-gray-900"></div>
        <h2 className="text-2xl font-light text-gray-900">{title}</h2>
      </div>
    );
  }