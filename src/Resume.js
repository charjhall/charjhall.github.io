import React from "react";
// import "./css/Resume.css";

export default class Resume extends React.Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css"
        />
        <body>
          <header id="header">
            <div class="container">
              <div class="row">
                <div class="col-sm-9 col-sm-push-3">
                  <h1>Charles Jackson Hall</h1>
                  <h2>Programmer</h2>
                </div>
              </div>
            </div>
          </header>
          <div id="content" class="container">
            <section id="contact" class="row">
              <aside class="col-sm-3">
                <h3>Contact</h3>
              </aside>
              <div class="col-sm-9">
                <div class="row">
                  <div class="col-sm-6">
                    <strong>Email</strong>
                    <div class="email">jackson.hall@gatech.edu</div>
                  </div>
                  <div class="col-sm-6">
                    <strong>Phone</strong>
                    <div class="phone">(678) 588-6214</div>
                  </div>
                  <div class="col-sm-6">
                    <strong>Website</strong>
                    <div class="website">
                      <a href="https://charjhall.github.io/personal-website/">
                        https://charjhall.github.io/personal-website/
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="about" class="row">
              <aside class="col-sm-3">
                <h3>About</h3>
              </aside>
              <div class="col-sm-9">
                <p>A summary of John Doe...</p>
              </div>
            </section>
            <section id="profiles" class="row">
              <aside class="col-sm-3">
                <h3>Profiles</h3>
              </aside>
              <div class="col-sm-9">
                <div class="row">
                  <div class="col-sm-6">
                    <strong class="network">LinkedIn</strong>
                    <div class="username">
                      <div class="url">
                        <a href="https://www.linkedin.com/in/charles-hall-74a73213a/">
                          Charles Hall
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <strong class="network">GitHub</strong>
                    <div class="username">
                      <div class="url">
                        <a href="https://github.com/charjhall">charjhall</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="work" class="row">
              <aside class="col-sm-3">
                <h3>Work</h3>
              </aside>
              <div class="col-sm-9">
                <div class="row">
                  <div class="col-sm-12">
                    <h4 class="strike-through">
                      <span>Yokogawa Coorporation of America</span>
                      <span class="date">2018-01-08 —</span>
                    </h4>
                    <div class="website pull-right">
                      <a href="https://www.yokogawa.com/us/">
                        https://www.yokogawa.com/us/
                      </a>
                    </div>
                    <div class="position">Co-op Software Engineer</div>
                    <div class="summary">
                      <p>Description...</p>
                    </div>
                    <h4>Highlights</h4>
                    <ul class="highlights">
                      <li class="bullet">Started the company</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="volunteer" class="row">
              <aside class="col-sm-3">
                <h3>Volunteer</h3>
              </aside>
              <div class="col-sm-9">
                <div class="row">
                  <div class="col-sm-12">
                    <h4 class="strike-through">
                      <span>Organization</span>
                      <span class="date">2012-01-01 — 2013-01-01</span>
                    </h4>
                    <div class="website pull-right">
                      <a href="http://organization.com/">
                        http://organization.com/
                      </a>
                    </div>
                    <div class="position">Volunteer</div>
                    <div class="summary">
                      <p>Description...</p>
                    </div>
                    <h4>Highlights</h4>
                    <ul class="highlights">
                      <li class="bullet">
                        Awarded &#x27;Volunteer of the Month&#x27;
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="education" class="row">
              <aside class="col-sm-3">
                <h3>Education</h3>
              </aside>
              <div class="col-sm-9">
                <div class="row">
                  <div class="col-sm-12">
                    <h4 class="strike-through">
                      <span>University</span>
                      <span class="date">2011-01-01 — 2013-01-01</span>
                    </h4>
                    <div class="area">Software Development</div>
                    <div class="studyType">Bachelor</div>
                    <h4>Courses</h4>
                    <ul class="courses">
                      <li>DB1101 - Basic SQL</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="awards" class="row">
              <aside class="col-sm-3">
                <h3>Awards</h3>
              </aside>
              <div class="col-sm-9">
                <div class="row">
                  <div class="col-sm-12">
                    <h4 class="strike-through">
                      <span>Award</span>
                    </h4>
                    <div class="date pull-right">
                      <em>Awarded</em>
                      2014-11-01
                    </div>
                    <div class="awarder">
                      <em>by</em>
                      <strong>Company</strong>
                    </div>
                    <div class="summary">There is no spoon.</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="skills" class="row">
              <aside class="col-sm-3">
                <h3>Skills</h3>
              </aside>
              <div class="col-sm-9">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="name">
                      <h4>Web Development</h4>
                    </div>
                    <ul class="keywords">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="languages" class="row">
              <aside class="col-sm-3">
                <h3>Languages</h3>
              </aside>
              <div class="col-sm-9">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="language">
                      <strong>English</strong>
                    </div>
                    <div class="fluency">Native speaker</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="interests" class="row">
              <aside class="col-sm-3">
                <h3>Interests</h3>
              </aside>
              <div class="col-sm-9">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="name">
                      <h4>Wildlife</h4>
                    </div>
                    <ul class="keywords">
                      <li>Ferrets</li>
                      <li>Unicorns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="references" class="row">
              <aside class="col-sm-3">
                <h3>References</h3>
              </aside>
              <div class="col-sm-9">
                <div class="row">
                  <div class="col-sm-12">
                    <blockquote class="reference">
                      <p>Reference...</p>
                      <p class="name">
                        <strong>— Jane Doe</strong>
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </body>
      </div>
    );
  }
}
