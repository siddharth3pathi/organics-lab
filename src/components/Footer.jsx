import "../styles/footer.css"

function Footer() {
  return (
    <footer>
      <h1>How can we get in touch?</h1>
      <form>
        <div className="inputs">
          <div className="input-div">
            <img src="./images/Vector-user.png" alt=""/>
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-div">
            <img src="./images/Vector-email.png" alt="" />
            <input type="email" placeholder="Email" /> <br />
          </div>
        </div>
        <button className="submit">Submit</button>
      </form>
      <h2>Thank You!</h2>
      <h3>Let's Get In Touch</h3>
      <img src="./images/image 7.png" alt="" />
      <button className="retake">Retake</button>
      <div className="copyright">
        <h4>This calculator is powered by Outgrow.co</h4>
        <img src="./images/image 13.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;