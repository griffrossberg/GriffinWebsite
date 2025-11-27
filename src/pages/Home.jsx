import { personalInfo } from '../data/personalInfo';

const Home = ({ theme, setCurrentView }) => {
  const isForest = theme === 'forest';

  return (
    <div className={`h-screen flex items-center justify-center overflow-hidden ${
      isForest ? 'bg-stone-50' : 'bg-slate-50'
    } transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 tracking-tight ${
            isForest ? 'text-stone-800' : 'text-slate-900'
          }`}>
            {personalInfo.name}
          </h1>
          <h2 className={`text-2xl md:text-3xl mb-8 ${
            isForest ? 'text-emerald-600' : 'text-blue-600'
          }`}>
            {personalInfo.title}
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => setCurrentView('resume')}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                isForest
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              View Resume
            </button>
            <button
              onClick={() => setCurrentView('projects')}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                isForest
                  ? 'bg-white text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-50'
                  : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
              }`}
            >
              View Projects
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span className={`flex items-center gap-2 ${
              isForest ? 'text-stone-600' : 'text-slate-600'
            }`}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {personalInfo.location}
            </span>
            <span className={`flex items-center gap-2 ${
              isForest ? 'text-stone-600' : 'text-slate-600'
            }`}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              {personalInfo.university}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
