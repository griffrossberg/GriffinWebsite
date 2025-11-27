import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';

const Projects = ({ theme }) => {
  const [filter, setFilter] = useState('All');
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const isForest = theme === 'forest';

  const categories = ['All', 'Professional', 'Academic'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  const handleToggleExpand = (projectId) => {
    setExpandedProjectId(expandedProjectId === projectId ? null : projectId);
  };

  return (
    <div className={`min-h-screen py-12 ${
      isForest ? 'bg-stone-50' : 'bg-slate-50'
    } transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isForest ? 'text-stone-800' : 'text-slate-900'
          }`}>
            Projects
          </h1>
          <p className={`text-lg mb-8 ${
            isForest ? 'text-stone-700' : 'text-slate-700'
          }`}>
            A collection of some of my academic and professional work.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === category
                    ? isForest
                      ? 'bg-emerald-600 text-white'
                      : 'bg-blue-600 text-white'
                    : isForest
                      ? 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="break-inside-avoid">
              <ProjectCard
                project={project}
                theme={theme}
                isExpanded={expandedProjectId === project.id}
                onToggleExpand={() => handleToggleExpand(project.id)}
              />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={`text-center py-12 ${
            isForest ? 'text-stone-600' : 'text-slate-600'
          }`}>
            <p className="text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
