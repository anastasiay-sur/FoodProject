function Header() {
    return   <nav>
    <div className="nav-wrapper">
      <a href='/' className="brand-logo">ShopProject</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Каталог</a></li>
        <li><a href="badges.html">Корзина</a></li>
        <li><a href="collapsible.html">Вход/Регистрация</a></li>
      </ul>
    </div>
  </nav>
}

export default Header