import "../../public/css/footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <div className="logo-footer ">
          <h3>
            A<b>BR</b>IME
          </h3>
        </div>
        <div className="direitos-footer">
          <span>Todos os direitos reservados &copy; | 2020 - 2023</span>
        </div>
        <div className="social-footer">
          <nav>
            <ul>
              <li>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
