import "../styles/section.css";

const Section = () => {
  return (
    <section>
      <div className="result-one">
        <img src="./images/healthy-food 1.png" alt="" />
        <h2 className="score">
          <span>30</span>/100
        </h2>
        <div className="result-one-full-bar">
          <div className="result-one-percent-bar yellow-bar"></div>
        </div>
        <h1>This is result 1</h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at maurised turpis interdum massa condimentum mauris amet volutpat.
        </p>
      </div>

      <div className="cards">
        <div className="card">
          <h3>This is Result 2</h3>
          <img src="./images/Ellipse 1.png" alt="" />
          <h2>
            <span className="blue-span">38</span>/50
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur alis adipiscing elit.
            Feugiat{" "}
          </p>
        </div>
        <div className="card">
          <h3>This is Result 3</h3>
          <img src="./images/Ellipse 9.png" alt="" />
          <h2>
            <span className="red-span">38</span>/50
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur alis adipiscing elit.
            Feugiat{" "}
          </p>
        </div>
        <div className="card">
          <h3>This is Result 4</h3>
          <img src="./images/Vector.png" alt="" />
          <h2 hidden>
            <span>38</span>/50
          </h2>
          <p style={{ paddingTop: "43px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            arcu urna malesuada volutpat sed morbi. Id orci non elementum tellus
          </p>
        </div>
        <div className="result-seven">
          <h1>This is result 7</h1>
          <img src="./images/pine.png" alt="PineApple" />
          <p>
            Lorem Eleifend arcu urna malesuada volutpat sed morbi. Id orci non
            elementum tellus
          </p>
        </div>
      </div>

      <div className="result-five">
        <img src="./images/drink-water 1.png" alt="Water" />
        <h1>
          <span>54</span>/100
        </h1>
        <div className="five-full-bar">
          <div className="five-percent-bar"></div>
        </div>
        <h2>This is result 5</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris,
          turpis interdum massa condimentum mauris amet volutpat.
        </p>
      </div>

      <div className="result-six">
        <img src="./images/food.png" alt="Water" />
        <h1>
          <span>26</span>/100
        </h1>
        <div className="six-full-bar">
          <div className="six-percent-bar"></div>
        </div>
        <h2>This is result 6</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris,
          turpis interdum massa condimentum mauris amet volutpat.
        </p>
      </div>

      <div className="result-seven">
        <h1>This is result 7</h1>
        <img src="./images/pine.png" alt="PineApple" />
        <p>
          Lorem Eleifend arcu urna malesuada volutpat sed morbi. Id orci non
          elementum tellus
        </p>
      </div>
    </section>
  );
};

export default Section;
