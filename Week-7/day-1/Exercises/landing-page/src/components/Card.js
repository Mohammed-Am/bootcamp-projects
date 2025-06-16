
const Card = ({ title, description, icon }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl text-red-500 mb-4">
                <i className={`fas ${icon}`}></i>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default Card; 