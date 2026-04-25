export default function StarBar({ count, max = 5, color = 'bg-sky-500' }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: max }).map((_, i) => (
                <div
                    key={i}
                    className={`h-1.5 w-4 rounded-full ${i < count ? color : 'bg-gray-200'}`}
                />
            ))}
        </div>
    );
}
