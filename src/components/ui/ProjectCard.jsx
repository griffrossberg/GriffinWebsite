import { ChevronDown, ChevronUp } from 'lucide-react';

const ProjectCard = ({ project, theme, isExpanded, onToggleExpand }) => {
  const isForest = theme === 'forest';

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-6">
      {/* Category Badge */}
      <div className="flex items-center justify-between mb-3">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
          isForest
            ? 'bg-emerald-100 text-emerald-800'
            : 'bg-blue-100 text-blue-800'
        }`}>
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h3 className={`text-xl font-bold mb-3 ${
        isForest ? 'text-stone-800' : 'text-slate-900'
      }`}>
        {project.title}
      </h3>

      {/* Summary */}
      <p className={`mb-4 ${
        isForest ? 'text-stone-600' : 'text-slate-600'
      }`}>
        {project.summary}
      </p>

      {/* Full Description (when expanded) */}
      {isExpanded && (
        <>
          <p className={`mb-4 ${
            isForest ? 'text-stone-700' : 'text-slate-700'
          }`}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded text-xs font-medium ${
                  isForest
                    ? 'bg-stone-100 text-stone-700'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </>
      )}

      {/* Show More/Less Button */}
      <button
        onClick={onToggleExpand}
        className={`flex items-center gap-2 text-sm font-medium transition-colors ${
          isForest
            ? 'text-emerald-600 hover:text-emerald-700'
            : 'text-blue-600 hover:text-blue-700'
        }`}
      >
        {isExpanded ? (
          <>
            <ChevronUp size={16} />
            Show Less
          </>
        ) : (
          <>
            <ChevronDown size={16} />
            Show More
          </>
        )}
      </button>
    </div>
  );
};

export default ProjectCard;
