const Contact = () => {
    
    return (
        <div className="bg-gray-100 py-12" id="contact">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Contact us</h2>
                
                <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <i className="fas fa-building mr-3 text-red-500"></i>
                                Company Name
                            </p>
                            <p className="flex items-center">
                                <i className="fas fa-phone mr-3 text-red-500"></i>
                                +256 778 800 900
                            </p>
                            <p className="flex items-center">
                                <i className="fas fa-envelope mr-3 text-red-500"></i>
                                company.gmail.com
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    //value={formData.email}
                                    ///onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="comment">
                                    Comment
                                </label>
                                <textarea
                                    id="comment"
                                    name="comment"
                                    //value={formData.comment}
                                    //onChange={handleChange}
                                    rows="4"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 