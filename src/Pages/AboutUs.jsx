import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from "../Assets/Images/about1.jpeg";
import APJ from '../Assets/Images/APJ.jpeg'
import BillGates from '../Assets/Images/BillGates1.jpeg'
import Einstein from '../Assets/Images/einstein1.jpeg'
import Nelson from '../Assets/Images/nelson.jpeg'
import SteveJobs from '../Assets/Images/steveJobs1.jpeg'

function AboutUs() {
  return (
    <HomeLayout>
      <div className="pt-20 pl-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 text-semibold">
              Affordable and quality education
            </h1>

            <p className="text-xl text-gray-200">
              Our goal is to provide the affordable and quality education to the
              world. We are providinf the platform for aspiring teachers and
              students to share their skills, creativity and knowledge to each
              other to empower and contribute in the grouth and wellness
              mankind.
            </p>
          </section>

          <div className="">
            <img
              id="text1"
              style={{
                style: "drop-shadow(0px,10px,10px rgb(0,0,0,));",
              }}
              className="drop-shadow-2xl"
              src={aboutMainImage}
              alt="about main image"
            />
          </div>
        </div>

        <div className="carousel w-1/2 my-16 m-auto">

          <div id="slide1" className="carousel-item relative w-full">

            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={Nelson}
                className="w-40 rounded-full border-2 border-gray-400 "
              />
              <p>{"Education is the most powerful weapon which you can use to change the world."}</p>
              <h1 className="font-semibold text-2xl">Nelson Mondela</h1>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>




          <div id="slide2" className="carousel-item relative w-full">
          <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={APJ}
                className="w-40 rounded-full border-2 border-gray-400 "
              />
              <p>{"The best brains of the nation may be found on the last benches of the classroom."}</p>
              <h1 className="font-semibold text-2xl">APJ Abdul Kalam</h1>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

          </div>

          <div id="slide3" className="carousel-item relative w-full">
          <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={BillGates}
                className="w-40 rounded-full border-2 border-gray-400 "
              />
              <p>{"I have no special talent. I am only passionately curious. "}</p>
              <h1 className="font-semibold text-2xl">Bill Gates</h1>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
             <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={SteveJobs}
                className="w-40 rounded-full border-2 border-gray-400 "
              />
              <p>
              {"I'm a very big believer in equal opportunity as opposed to equal outcome."}
              </p>
              <h1 className="font-semibold text-2xl">Steve jobs</h1>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide5" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

          </div>


          <div id="slide5" className="carousel-item relative w-full">
             <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={Einstein}
                className="w-40 rounded-full border-2 border-gray-400 "
              />
              <p>
              {"True education is about teaching how to think, not what to think."}
              </p>
              <h1 className="font-semibold text-2xl">Albert Einstein</h1>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

          </div>




        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
