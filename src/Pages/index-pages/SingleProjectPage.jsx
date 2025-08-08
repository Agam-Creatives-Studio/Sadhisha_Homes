import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import projectData from "../../assets/data/projectsData";

const SingleProjectPage = () => {
  const { propertyPortfolio } = projectData;

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  const { slug } = useParams();

  const project = propertyPortfolio.find((p) => p.slug === slug);

  if (!project) return <div>Project not found</div>;

  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-between align-items-center g-5">
          {/* Left side: Project Details */}
          <div className="col-md-6">
            <p>
              <strong></strong> {project.location}
            </p>
            <hr />
            <h2 className="secTitleGreen fs-2 text-capitalize">
              {project.name}
            </h2>
            <p>
              <strong>Completion Year - {project.year}</strong>
            </p>

            <div className="d-md-block d-none">
              <p className="paraBlack"> {project.description}</p>
              <p className="paraBlack"> {project.fullDetail}</p>

              <div>
                <Link className="btn green-btn" to="/projects">
                  {" "}
                  All Projects
                </Link>
              </div>
            </div>
          </div>

          {/* Right side: Image Carousel */}
          <div className="col-md-6">
            <div
              id="carouselProjectImages"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="5000"
              data-bs-pause="none"
            >
              <div className="carousel-inner">
                {project.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`carousel-item ${idx === 0 ? "active" : ""}`}
                  >
                    <img
                      src={img}
                      className="d-block w-100"
                      alt={`Slide ${idx + 1}`}
                      style={{
                        borderRadius: "8px",
                        height: "400px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselProjectImages"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselProjectImages"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
           <div className="d-md-none d-block">
              <p className="paraBlack"> {project.description}</p>
              <p className="paraBlack"> {project.fullDetail}</p>

              <div>
                <Link className="btn green-btn" to="/projects">
                  {" "}
                  All Projects
                </Link>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SingleProjectPage;
