import Header from './components/Header';
import Card from './components/Card';
import Contact from './components/Contact';

const App = () => {
    const sections = [
        {
            title: "About the Company",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: "fa-building"
        },
        {
            title: "Our Values",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: "fa-globe"
        },
        {
            title: "Our Mission",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: "fa-university"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            
            {/* Hero Section */}
            <Header/>
            {/* Cards Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {sections.map((section, index) => (
                        <Card
                            key={index}
                            title={section.title}
                            description={section.description}
                            icon={section.icon}
                        />
                    ))}
                </div>
            </div>

            {/* Contact Section */}
            <Contact />
        </div>
    );
};

export default App; 