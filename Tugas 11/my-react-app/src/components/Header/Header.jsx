import './Header.css'

export default function Header() {
  return <>
    <header>
        <div className="logo">
          <h1>LogoIpsum</h1>
        </div>

        <navbar>
          <ul>
            <li><a href="" className='active'>About</a></li>
            <li><a href="">Our Services</a></li>
            <li><a href="">Portofolio</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        <div className="get-it-touch-btn">
          <button>Get In Touch</button>
        </div>
        </navbar>
    </header>
  </>
}