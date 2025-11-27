import { experience, education, skills, certifications, awards } from '../data/experience';

const Resume = ({ theme }) => {
  const isForest = theme === 'forest';

  return (
    <div className={`min-h-screen py-12 ${
      isForest ? 'bg-stone-50' : 'bg-slate-50'
    } transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Education Section */}
          <section>
            <h2 className={`text-3xl font-bold mb-4 ${
              isForest ? 'text-stone-800' : 'text-slate-900'
            }`}>
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-sm p-6 ${isForest ? 'text-stone-700' : 'text-slate-700'}`}>
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <div>
                      <p className="font-bold text-lg">{edu.institution}</p>
                      <p className="font-medium">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{edu.duration}</p>
                      <p className={`text-sm ${
                        isForest ? 'text-stone-600' : 'text-slate-600'
                      }`}>
                        {edu.graduationYear}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className={`text-3xl font-bold mb-4 ${
              isForest ? 'text-stone-800' : 'text-slate-900'
            }`}>
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((job) => (
                <div key={job.id} className={`bg-white rounded-lg shadow-sm p-6 ${
                  isForest ? 'text-stone-700' : 'text-slate-700'
                }`}>
                  <div className="flex justify-between items-center flex-wrap gap-2 mb-2">
                    <div>
                      <p className="font-bold text-lg">{job.position}</p>
                      <p className="font-semibold">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{job.duration}</p>
                      <p className={`text-sm ${
                        isForest ? 'text-stone-600' : 'text-slate-600'
                      }`}>
                        {job.location}
                      </p>
                    </div>
                  </div>
                  <p className="mb-3">{job.description}</p>
                  <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="leading-relaxed">{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className={`text-3xl font-bold mb-4 ${
              isForest ? 'text-stone-800' : 'text-slate-900'
            }`}>
              Technical Skills
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className={`font-semibold mb-2 capitalize ${
                    isForest ? 'text-emerald-700' : 'text-blue-700'
                  }`}>
                    {category === 'cad' ? 'CAD & Design' :
                     category === 'technical' ? 'Technical Expertise' :
                     category}:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-lg text-sm ${
                          isForest
                            ? 'bg-stone-100 text-stone-700'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <h2 className={`text-3xl font-bold mb-4 ${
              isForest ? 'text-stone-800' : 'text-slate-900'
            }`}>
              Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-sm p-6 flex justify-between items-center ${
                  isForest ? 'text-stone-700' : 'text-slate-700'
                }`}>
                  <div>
                    <p className="font-semibold">
                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${
                            isForest
                              ? 'text-emerald-600 hover:text-emerald-700'
                              : 'text-blue-600 hover:text-blue-700'
                          } transition-colors`}
                        >
                          {cert.name}
                        </a>
                      ) : (
                        cert.name
                      )}
                    </p>
                    <p className={`text-sm ${
                      isForest ? 'text-stone-600' : 'text-slate-600'
                    }`}>
                      {cert.issuer}
                    </p>
                  </div>
                  <p className="font-semibold">{cert.year}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Awards Section */}
          <section>
            <h2 className={`text-3xl font-bold mb-4 ${
              isForest ? 'text-stone-800' : 'text-slate-900'
            }`}>
              Awards & Recognition
            </h2>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-sm p-6 flex justify-between items-center ${
                  isForest ? 'text-stone-700' : 'text-slate-700'
                }`}>
                  <div>
                    <p className="font-semibold">{award.name}</p>
                    <p className={`text-sm ${
                      isForest ? 'text-stone-600' : 'text-slate-600'
                    }`}>
                      {award.description}
                    </p>
                  </div>
                  <p className="font-semibold">{award.year}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
