import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science Engineering</h4>
                <h5>Amritsar Group of Colleges | Amritsar, Punjab</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Growing skill set in programming, problem-solving, and core
              computer science concepts such as data structures and algorithms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Associate</h4>
                <h5>Pregrad | Noida, Uttar Pradesh</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Successfully completed a 3-month mentorship program. Demonstrated
              strong dedication, problem-solving abilities, and the capability
              to work independently.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CTF & Ethical Hacking</h4>
                <h5>TryHackMe, HackerOne, HTB</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Regularly solving CTF challenges to strengthen skills in ethical
              hacking and network security.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Security, AI, Python</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Cyber Security Associate, Advent of Cyber 2025 (TryHackMe),
              A.I. & Machine Learning (Udemy), Python Developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
