import React from 'react';

const Hero12 = () => {
  return (
    <div className="bg-gray-900 h-screen flex items-center">
      <section className='w-[90%] mx-auto'>
        <div className="relative">
          <div
            className="absolute m-auto blur-[160px] max-w-xs h-[13rem] top-12 inset-0"
            style={{
              background:
                'linear-gradient(180deg, #7C3AED 0%, rgba(152, 103, 240, 0.984375) 0.01%, rgba(237, 78, 80, 0.2) 100%)',
            }}
          ></div>
          <div className="relative">
            <div className="custom-screen py-28 relative">
              <div className="relative z-10 duration-1000 delay-150 opacity-1">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-gray-50 text-3xl font-bold sm:text-6xl">
                    Revolutionize Your Workflow with AI-driven Solutions
                  </h2>
                  <p className="mt-5 text-gray-300">
                    Introducing AITech: Your personalized AI assistant that
                    streamlines tasks, optimizes processes, and fuels innovation,
                    so you can focus on what truly matters.
                  </p>
                </div>
                <div className="flex justify-center font-medium text-md">
                  <form className="mt-6 flex flex-col items-center sm:flex-row sm:gap-x-3">
                    <div className="sm:pt-0 pt-3">
                      <a
                        className="py-2.5 px-4 text-center rounded-full duration-150 flex items-center justify-center gap-x-1 h-12 text-white bg-purple-600 hover:bg-purple-700 ring-offset-2 ring-blue-600 focus:ring shadow rounded-lg active:bg-gray-900"
                        style={{ backgroundColor: '#333' }}
                        href=""
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                        </svg>
                        Open in Github
                      </a>
                    </div>
                    <div className="sm:pt-0 pt-3">
                      <a
                        className="py-2.5 px-4 text-center rounded-full duration-150 flex items-center justify-center gap-x-1 h-12 text-white bg-purple-600 hover:bg-purple-700 ring-offset-2 ring-blue-600 focus:ring shadow rounded-lg active:bg-gray-900"
                        style={{ backgroundColor: '#7289da' }}
                        href=""
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        >
                          <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"></path>
                        </svg>
                        Join the Community
                      </a>
                    </div>
                  </form>
                </div>
              </div>
              <img
                src="https://i.ibb.co/8D7rcYv/download.webp"
                width="2880"
                height="1358"
                decoding="async"
                className="w-full h-full object-cover m-auto absolute inset-0 pointer-events-none"
                loading="lazy"
                style={{ color: 'transparent' }}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero12;
