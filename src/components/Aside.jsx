import "../styles/aside.css";

const Aside = () => {
  return (
    <aside>
      <div className="ellipse">
        <img src="./images/Ellipse 8.png" alt="Ellipse" />
        <img src="./images/Ellipse 7.png" alt="Ellipse" />
        <h5>
          <span>68</span>/100
        </h5>
      </div>

      <h2>This is Primary Result 8</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris,
        turpis interdum massa condimentum.
      </p>
      <button>Let’s Go Healthy</button>
      <div className="side-results">
        <div className="sidebar-text">
          <h3>This Is Result 1</h3>
          <p>
            <span className="yellow">30</span>/100
          </p>
        </div>
        <div className="full-bar">
          <div className="percent-bar yellow-bar"></div>
        </div>
        <div className="sidebar-text">
          <h3>This Is Result 5</h3>
          <p>
            <span className="blue">54</span>/100
          </p>
        </div>
        <div className="full-bar">
          <div className="percent-bar blue-bar"></div>
        </div>
        <div className="sidebar-text">
          <h3>This Is Result 6</h3>
          <p>
            <span className="brown">26</span>/100
          </p>
        </div>
        <div className="full-bar">
          <div className="percent-bar brown-bar"></div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
