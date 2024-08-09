import { Button } from 'flowbite-react';
import React from 'react';

const About1 = () => {
  return (
    <div className="pt-36 lg:pt-20 min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
      <div data-theme="teal" className="mx-auto max-w-6xl">
        <h2 className="sr-only">Featured case study</h2>
        <section className="font-sans text-black">
          <div className="lg:flex [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
          {/* <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]"> */}
            <div className="lg:w-[180%]">
              <div className="h-full">
                <article className="h-full">
                  <div className="h-full">
                    <img
                      className="h-full object-cover"
                      src="https://b17b7cfc.rocketcdn.me/wp-content/uploads/2021/10/solarteur-experten-photovoltaik-1200x750.jpg"
                      // width="733"
                      // height="412"
                      alt=""
                      typeof="foaf:Image"
                    />
                  </div>
                </article>
              </div>
            </div>
            <div className="p-6 bg-grey">
              <div className="leading-relaxed">
                <h2 className="leading-tight text-4xl font-bold">CXcon: Experience Transformation</h2>
                <p className="mt-4">
                  Our second CXcon in October was dedicated to experience transformation. The free one-day virtual event&nbsp;brought together 230+ heads of digital, thought leaders, and UX practitioners to discuss all aspects of experience design.
                </p>
                <p className="mt-4">
                  In a jam-packed day filled with keynote sessions, panels, and virtual networking we explored topics including design leadership, UX ethics, designing for emotion and innovation at scale.
                </p>
                <p>
              <button className='bg-green-400 hover:bg-green-500 font-bold text-lg text-whit mt-10 py-3 px-7 rounded-lg transition-all duration-200'>Find Out More</button>

                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .fancy-corners {
          position: relative;
          background-color: #fff;
          transform-style: preserve-3d;
        }

        .fancy-corners:after,
        .fancy-corners:before {
          position: absolute;
          width: 8em;
          height: 8em;
          background-size: 100% 100%;
          background-position: 0 0;
          transform: translateZ(-1px);
          z-index: -1;
          background-color: #68D391; /* Default color for purple theme */
          background-color: #48BB78; /* Default color for purple theme */
        }

        // [data-theme="blue"] .fancy-corners:after,
        // [data-theme="blue"] .fancy-corners:before {
        //   background-color: #334982;
        // }

        // [data-theme="teal"] .fancy-corners:after,
        // [data-theme="teal"] .fancy-corners:before {
        //   background-color: #00857d;
        // }

        .fancy-corners[class*="--bottom"]:after,
        .fancy-corners[class*="--top"]:before {
          content: "";
        }

        .fancy-corners--large[class*="--top"]:before {
          top: -2.05882em;
        }

        .fancy-corners--large[class*="--bottom"]:after {
          bottom: -2.05882em;
        }

        .fancy-corners--large[class*="--bottom"][class*="--bottom-right"]:after {
          right: -2.05882em;
        }

        .fancy-corners[class*="--bottom"]:after {
          bottom: -1.17647em;
        }

        .fancy-corners[class*="--bottom"][class*="--bottom-right"]:after {
          right: -1.17647em;
        }

        .fancy-corners[class*="--top"]:before {
          top: -1.17647em;
        }

        .fancy-corners[class*="--top"][class*="--top-left"]:before {
          left: -1.17647em;
        }

        .fancy-corners--top-left:before {
          -webkit-mask-image: linear-gradient(-45deg, #fff 85.5%, transparent 0);
          mask-image: linear-gradient(-45deg, #fff 85.5%, transparent 0);
        }

        .fancy-corners--bottom-right:after {
          -webkit-mask-image: linear-gradient(-45deg, transparent 14.5%, #fff 0);
          mask-image: linear-gradient(-45deg, transparent 14.5%, #fff 0);
        }

        @media (min-width: 1024px) {
          .fancy-corners--large:after,
          .fancy-corners--large:before {
            width: 14em;
            height: 14em;
          }

          .fancy-corners--large[class*="--top"][class*="--top-left"]:before {
            left: -2.05882em;
          }

          .fancy-corners--large[class*="--top"]:before {
            top: -2.05882em;
          }

          .fancy-corners--large[class*="--bottom"]:after {
            bottom: -2.05882em;
          }

          .fancy-corners--large[class*="--bottom"][class*="--bottom-right"]:after {
            right: -2.05882em;
          }
        }
      `}</style>
    </div>
  );
};

export default About1;
