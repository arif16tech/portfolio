import { Search, X } from 'lucide-react'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative max-w-md w-full">
      <Search
        size={15}
        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#4a5568]"
      />
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search by project or tech stack..."
        className="w-full pl-9 pr-9 py-2.5 rounded-lg text-sm font-mono transition-all duration-200 outline-none bg-[#111118] border border-[#1e1e2e] text-[#e2e8f0] focus:border-[#7c6af7] focus:shadow-[0_0_0_3px_rgba(124,106,247,0.1)]"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors text-[#4a5568] hover:text-[#7c6af7]"
        >
          <X size={14} />
        </button>
      )}
    </div>
  )
}
