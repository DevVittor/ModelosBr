import "../../public/css/header.css";
const Header = () => {
  return (
    <header>
      <div className="container-header">
        <div className="box-logo">
          <h1>
            A<b>BR</b>IME
          </h1>
        </div>
        <div className="box-menu">
          <nav>
            <ul>
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Categoria</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="box-account">
          <button>Acessar</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
