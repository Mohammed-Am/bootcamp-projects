import data from './data.json'; 

function Example3() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-purple-600 mb-6">Work Experiences</h1>
      <div className="w-full max-w-2xl">
        {data.Experiences.map((company, index) => (
          <div
            key={company.companyName || index}
            className="p-4 border rounded-lg shadow-md bg-white mb-4"
          >
            <img
              src={company.logo}
              alt={`${company.companyName} logo`}
              className="w-16 h-16 object-contain mb-2"
            />
            <a
              href={company.url}
              className="text-blue-600 hover:underline text-lg font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {company.companyName}
            </a>
            {company.roles.map((role, roleIndex) => (
              <div key={role.title || roleIndex} className="mt-2">
                <h5 className="text-md font-semibold text-gray-800">{role.title}</h5>
                <p className="text-gray-600">{role.description}</p>
                <p className="text-sm text-gray-400">
                  {role.startDate} - {role.endDate} | {role.location}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Example3;