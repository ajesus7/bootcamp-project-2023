import React from "react";
export const metadata = {
  title: {
    default: "Aidan's Resume",
  },
};

export default function Resume() {
  return (
    <main>
      <section className="resume-content">
        <div className="resume-top-content">
          <h1 className="page-title">Resume</h1>
          <a href="../../../public/resume.pdf" download>
            Download Resume
          </a>
        </div>
        <div className="resume">
          {/* Education Section Start */}
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="entry">
              <h3 className="entry-title">
                Bachelor of Science, Graphic Communication (UXUI)
              </h3>
              <h3 className="entry-title-end">Minor in Computer Science</h3>
              <p className="entry-info">
                California Polytechnic State University, San Luis Obispo | To be
                conferred June 2024
              </p>
            </div>
          </section>
          {/* Experience Section Start */}
          <section className="section">
            <h2 className="section-title">Experience</h2>
            <div className="entry">
              <h3 className="entry-title-end">Cal Poly Iter8</h3>
              <p className="entry-info">
                UX Designer (1 Quarter) | April 2023 – June 2023
              </p>
              <ul className="experience-list">
                <li className="list-description">
                  Built an understanding of Figma basics and the Auto Layout
                  feature
                </li>
                <li className="list-description">
                  Constructed wireframes that reflected an ideal user flow
                  through app
                </li>
                <li className="list-description-last">
                  Produced professional UI designs based on developer (client)
                  requests
                </li>
              </ul>
            </div>
            <div className="entry">
              <h3 className="entry-title-end">
                Graphic Communication Department
              </h3>
              <p className="entry-info">
                Student Assistant | September 2022 – June 2023
              </p>
              <ul className="experience-list">
                <li className="list-description">
                  Designed assets for a GRC department event with over 200
                  attendees
                </li>
                <li className="list-description">
                  Created collateral and updated a weekly newsletter for GRC
                  students
                </li>
              </ul>
            </div>
            <div className="entry">
              <h3 className="entry-title-end">Design Village</h3>
              <p className="entry-info">
                Co-Director of Design | September 2022 – May 2023
              </p>
              <ul className="experience-list">
                <li className="list-description">
                  Co-managed a team of 5 people through weekly meetings
                </li>
                <li className="list-description">
                  Directed the creation of merchandise for over 400 participants
                </li>
                <li className="list-description">
                  Coordinated ordering $3000 of merchandise through the CAED
                </li>
              </ul>
            </div>
          </section>
          {/* Skills Section Start */}
          <section className="section">
            <h2 className="section-title">Computer Skills</h2>
            <ul className="skill-list">
              <li>
                <p>Python</p>
              </li>
              <li>
                <p>Java</p>
              </li>
              <li>
                <p>JavaScript</p>
              </li>
              <li>
                <p>HTML/CSS</p>
              </li>
              <li>
                <p>Figma</p>
              </li>
              <li>
                <p>Adobe Suite</p>
              </li>
            </ul>
          </section>
          {/* Projects Section Start */}
          <section className="section">
            <h2 className="section-title">Projects</h2>
            <div className="entry">
              <h3 className="entry-title-end">
                <a href="home">Personal Website (This site)</a>
              </h3>
              <ul className="projects-list">
                <li>
                  <p className="entry-description">
                    Followed the Hack4Impact Starter Pack to create my own
                    personal website, which you are now viewing!
                  </p>
                </li>
                <li>
                  <p className="entry-description">
                    Focused on creating clear, semantic HTML and using Git best
                    practices.
                  </p>
                </li>
              </ul>
            </div>
            <div className="entry">
              <h3 className="entry-title-end">
                <a href="https://ajesus7.github.io/grc338/website-responsive/">
                  Fictional Coffee Shop Website
                </a>
              </h3>
              <ul className="projects-list">
                <li>
                  <p className="entry-description">
                    Mobile responsive website created for the GRC 338 Class in
                    2022, with a focus on learning grid basics.
                  </p>
                </li>
                <li>
                  <p className="entry-description">
                    Gained experience creating &quot;cards&quot; in CSS and
                    learned basic HTML and CSS principles.
                  </p>
                </li>
              </ul>
            </div>
            <div className="entry">
              <h3 className="entry-title-end">
                <a href="https://ajesus7.github.io/grc339/digital-magazine/">
                  Fictional Digital Magazine Website
                </a>
              </h3>
              <ul className="projects-list">
                <li>
                  <p className="entry-description">
                    Mobile responsive website created for the GRC 339 Class in
                    2022, with a focus on more complex grids.
                  </p>
                </li>
                <li>
                  <p className="entry-description">
                    Delved deeper into flexbox and more advanced CSS techniques.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          {/* Coursework Section Start */}
          <section className="section">
            <h2 className="section-title">Coursework</h2>
            <ul className="course-list">
              <li>
                <h3 className="list-title">CSC 202 | Data Structures</h3>
                <p className="list-description">
                  Introduced to standard data structures and basic algorithm
                  analysis
                </p>
              </li>
              <li>
                <h3 className="list-title">
                  CSC 203 | Project-Based Object Oriented Programming and Design
                </h3>
                <p className="list-description">
                  Learned Java className design fundamentals, interfaces, and
                  inheritance
                </p>
              </li>
              <li>
                <h3 className="list-title">
                  GRC 339 | Web Design and Production
                </h3>
                <p className="list-description">
                  Coded and designed simple web projects using jQuery and CSS
                </p>
              </li>
            </ul>
          </section>
          {/* Awards Section Start */}
          <section className="section">
            <h2 className="section-title">Awards</h2>
            <ul className="award-list">
              <li>
                <h3 className="list-title">President&apos;s List</h3>
                <p className="list-description">
                  Awarded for the 2020-2021, 2021-2022, 2022-2023 Academic Years
                </p>
              </li>
            </ul>
          </section>
          {/* Interests Section Start */}
          <section className="section-end">
            <h2 className="section-title">Interests</h2>
            <ul className="interest-list">
              <li>
                <h3 className="list-title">Cal Poly Spikeball</h3>
                <p className="list-description">
                  I played with the competitive club team during the 2022 – 2023
                  school year, and I also manage the club&apos;s social media.
                </p>
              </li>
              <li>
                <h3 className="list-title">Reading</h3>
                <p className="list-description">
                  I made a goal last new year&apos;s to read more and use social
                  media less; I&apos;ve since read over 12 books!
                </p>
              </li>
              <li>
                <h3 className="list-title">Outdoors Activities</h3>
                <p className="list-description">
                  I enjoy playing most sports, camping, and going to the beach!
                </p>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
