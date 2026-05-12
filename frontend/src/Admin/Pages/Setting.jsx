import React from "react";


const Docs = () => {
  return (
    <div className="docs-page">

      {/* SIDEBAR */}
      <aside className="docs-sidebar">

        <div className="logo">
          <h2>InApp Docs</h2>
        </div>

        <ul className="docs-menu">

          <li><a href="#intro">Introduction</a></li>

          <li><a href="#install">Installation</a></li>

          <li><a href="#structure">Project Structure</a></li>

          <li><a href="#routing">Routing</a></li>

          <li><a href="#components">Components</a></li>

          <li><a href="#charts">Charts</a></li>

          <li><a href="#theme">Theme Customization</a></li>

          <li><a href="#deploy">Deployment</a></li>

        </ul>

      </aside>

      {/* CONTENT */}
      <div className="docs-content">

        {/* INTRO */}
        <section id="intro" className="docs-section">

          <h1>Introduction</h1>

          <p>
            InApp React Dashboard is a modern admin dashboard
            template built with React, Vite and custom CSS.
          </p>

          <div className="info-box">
            <strong>Version:</strong> 1.0.0
          </div>

        </section>

        {/* INSTALL */}
        <section id="install" className="docs-section">

          <h2>Installation</h2>

          <p>
            Install all dependencies using npm or yarn.
          </p>

          <div className="code-box">

            <pre>
{`npm install

npm run dev`}
            </pre>

          </div>

        </section>

        {/* STRUCTURE */}
        <section id="structure" className="docs-section">

          <h2>Project Structure</h2>

          <div className="code-box">

            <pre>
{`src/
 ├── Admin/
 │    ├── Components/
 │    ├── Pages/
 │    └── Layout/
 │
 ├── Components/
 ├── Pages/
 ├── App.jsx
 └── main.jsx`}
            </pre>

          </div>

        </section>

        {/* ROUTING */}
        <section id="routing" className="docs-section">

          <h2>Routing</h2>

          <p>
            React Router DOM is used for navigation.
          </p>

          <div className="code-box">

            <pre>
{`npm install react-router-dom`}
            </pre>

          </div>

        </section>

        {/* COMPONENTS */}
        <section id="components" className="docs-section">

          <h2>Components</h2>

          <div className="table-wrapper">

            <table>

              <thead>
                <tr>
                  <th>Component</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Sidebar</td>
                  <td>Admin navigation menu</td>
                </tr>

                <tr>
                  <td>Navbar</td>
                  <td>Top navigation header</td>
                </tr>

                <tr>
                  <td>Charts</td>
                  <td>Analytics and reports</td>
                </tr>

                <tr>
                  <td>Cards</td>
                  <td>Dashboard widgets</td>
                </tr>

              </tbody>

            </table>

          </div>

        </section>

        {/* CHARTS */}
        <section id="charts" className="docs-section">

          <h2>Charts</h2>

          <p>
            Recharts library is used for analytics charts.
          </p>

          <div className="code-box">

            <pre>
{`npm install recharts`}
            </pre>

          </div>

        </section>

        {/* THEME */}
        <section id="theme" className="docs-section">

          <h2>Theme Customization</h2>

          <p>
            Customize colors, typography and layouts
            using CSS variables.
          </p>

          <div className="info-box">
            Primary Color: #5B5FEF
          </div>

        </section>

        {/* DEPLOY */}
        <section id="deploy" className="docs-section">

          <h2>Deployment</h2>

          <p>
            Build the production-ready app using:
          </p>

          <div className="code-box">

            <pre>
{`npm run build`}
            </pre>

          </div>

        </section>

      </div>
    </div>
  );
};

export default Docs;