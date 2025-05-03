const Newsletter = () => {
  return (
    <div className="relative w-full overflow-hidden mt-20 !pb-20 section">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto grid lg:grid-cols-3 px-4 gap-12">
        {/* Newsletter Content */}
        <div className="lg:col-span-2">
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-6">Transform Your Fitness Journey</h1>
          <p className="text-white text-2xl lg:text-3xl mb-8 leading-relaxed">Join our fitness community and receive:</p>
          <ul className="text-white text-2xl lg:text-3xl space-y-4 mb-8">
            <li className="flex items-center">
              <svg className="w-8 h-8 mr-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Weekly workout plans tailored to your goals
            </li>
            <li className="flex items-center">
              <svg className="w-8 h-8 mr-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Nutrition tips and healthy recipes
            </li>
            <li className="flex items-center">
              <svg className="w-8 h-8 mr-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Exclusive member discounts and early access
            </li>
          </ul>
        </div>

        {/* Newsletter Form */}
        <div className="w-full">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-8 border border-white/20">
            <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">Join Our Community</h3>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className=" pl-4 w-full rounded-xl md:h-[4.5rem] h-[5rem] bg-white/90 focus:outline-none focus:ring-2 focus:ring-orange-600 transition duration-300 text-xl"
              />
              <button className="bg-orange-600 text-white hover:scale-95 rounded-xl font-bold w-full md:h-[4.5rem] h-[5rem] text-2xl uppercase hover:bg-orange-600 transition duration-300">
                Subscribe Now
              </button>
            </div>
            <p className="text-white/80 text-lg mt-4 text-center">We respect your privacy. Unsubscribe at any time.</p>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <span className="flex items-center text-white/80 text-2xl">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              5000+ Members
            </span>
            <span className="flex items-center text-white/80 text-2xl">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Weekly Updates
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
