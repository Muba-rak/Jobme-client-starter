import React from "react";
import people from "../../assets/Frame 9.png";
import vector from "../../assets/Vector.png";
import { Link } from "react-router-dom";

const SectionOne = () => {
  return (
    <section className="sectionone grey py-5">
      <div className="container">
        <div className=" row  justify-content-between align-items-center">
          <div className="col-xl-5 mx-auto text-center d-none d-xl-block">
            <img src={people} alt="people talking" className="" />
          </div>
          <div className="col-xl-5 mx-auto my-3 my-lg-0">
            <h2 className="mainfont mb-2 fw-medium">
              Find Millions of Job <br /> Opportunities Right for You!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing
              sed platea integer habitant. Eros quis hac amet dignissim morbi
              vulputate eriva it commodo mi. Est mauris diam donec magna. Sit
              cras fringilla integer sed praesent urna amet. Donec suspendisse
              quis sed placerat lacus eupiii pretium duis semper est ac nec
              ultricie.
            </p>
            <Link to="/job">
              <button className="btn btn-info text-white px-3 fs-4">
                Discover more
              </button>
            </Link>
          </div>
        </div>
        <div className=" row  justify-content-between align-items-center mt-3">
          <div className="col-xl-5 mx-auto my-3 my-lg-0">
            <h2 className="mainfont mb-2 fw-medium">
              Looking for the World’s Best <br /> Talents?
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing
              sed platea integer habitant. Eros quis hac amet dignissim morbi
              vulputate eriva it commodo mi. Est mauris diam donec magna. Sit
              cras fringilla integer sed praesent urna amet. Donec suspendisse
              quis sed placerat lacus eupiii pretium duis semper est ac nec
              ultricie.
            </p>
            <Link to="/job">
              <button className="btn btn-info text-white px-3 fs-4">
                Discover more
              </button>
            </Link>
          </div>
          <div className="col-xl-5 mx-auto text-center d-none d-xl-block">
            <img src={vector} alt="lady" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
