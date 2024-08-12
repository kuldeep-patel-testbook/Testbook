import React, { useState } from 'react';
import './Login.css';
import QuoraLogo from '../../public/images/Quora-Logo.png';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();


  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <>
      <div className="container-wrapper">
        <div className="bg-container">
          <div className="bg-image"></div>
        </div>
        <div className="sign-box">
          <div className="logo"><img src={QuoraLogo} alt='quora'></img></div>
          <h2 className="quotes">
            A place to share knowledge and better understand the world
          </h2>
          <div className="inner-container">
            <div className="credits">
              <div className="signup-login">
                <div className="signup">
                  <div className="inner-signup">
                    <div className="button-row">

                      <div>
                        <span className="google-login">
                          <Link to="/signup" className="signup-login-button">
                            <span className="google-logo">
                              <svg fill="none" height="24px" viewBox="0 0 92 92" width="24px" xmlns="http://www.w3.org/2000/svg"><rect fill="#b92b27" height="91.5618" rx="20" width="91.5618" /><path d="m47.4832 59.2793c-1.5948-3.1267-3.4658-6.2848-7.1153-6.2848-.6977 0-1.3945.1151-2.0339.4058l-1.2399-2.4715c1.5109-1.2913 3.9523-2.315 7.0905-2.315 4.8819 0 7.3873 2.3423 9.3763 5.3323 1.1807-2.5527 1.742-5.9999 1.742-10.2729 0-10.6704-3.3502-16.1494-11.1757-16.1494-7.7116 0-11.0435 5.479-11.0435 16.1494 0 10.6142 3.3319 16.0368 11.0435 16.0368 1.2257 0 2.3358-.1342 3.356-.4307zm1.9117 3.7238c-1.7179.4603-3.4887.6958-5.2677.7007-10.2685 0-20.3225-8.1616-20.3225-20.0306 0-11.9816 10.054-20.1449 20.3225-20.1449 10.4407 0 20.3982 8.1045 20.3982 20.1449 0 6.6973-3.1374 12.1398-7.6975 15.6574 1.4735 2.1991 2.9902 3.6593 5.1023 3.6593 2.305 0 3.2346-1.7742 3.3901-3.1656h3.0018c.1755 1.8528-.755 9.5531-9.1443 9.5531-5.0814 0-7.7681-2.9337-9.7829-6.3743z" fill="#fff" /></svg>
                            </span>
                            <span className="google-button-text">
                              Sign Up with Email
                            </span>
                          </Link>
                        </span>
                      </div>
                      <div>
                        <span className="google-login">
                          <a href="#" className="google-login-button">
                            <span className="google-logo">
                              <svg width="24px" height="24px" viewBox="0 0 24 24"><g stroke="none" fill="none" fillRule="evenodd"><path d="M20.16,12.1931818 C20.16,11.5904545 20.1059091,11.0109091 20.0054545,10.4545455 L12,10.4545455 L12,13.7425 L16.5745455,13.7425 C16.3775,14.805 15.7786364,15.7052273 14.8784091,16.3079545 L14.8784091,18.4406818 L17.6254545,18.4406818 C19.2327273,16.9609091 20.16,14.7818182 20.16,12.1931818 L20.16,12.1931818 Z" className="icon_svg-fill_as_stroke" fill="#4285F4"></path><path d="M12,20.5 C14.295,20.5 16.2190909,19.7388636 17.6254545,18.4406818 L14.8784091,16.3079545 C14.1172727,16.8179545 13.1436364,17.1193182 12,17.1193182 C9.78613636,17.1193182 7.91227273,15.6240909 7.24386364,13.615 L4.40409091,13.615 L4.40409091,15.8172727 C5.80272727,18.5952273 8.67727273,20.5 12,20.5 L12,20.5 Z" className="icon_svg-fill_as_stroke" fill="#34A853"></path><path d="M7.24386364,13.615 C7.07386364,13.105 6.97727273,12.5602273 6.97727273,12 C6.97727273,11.4397727 7.07386364,10.895 7.24386364,10.385 L7.24386364,8.18272727 L4.40409091,8.18272727 C3.82840909,9.33022727 3.5,10.6284091 3.5,12 C3.5,13.3715909 3.82840909,14.6697727 4.40409091,15.8172727 L7.24386364,13.615 L7.24386364,13.615 Z" className="icon_svg-fill_as_stroke" fill="#FBBC05"></path><path d="M12,6.88068182 C13.2479545,6.88068182 14.3684091,7.30954545 15.2493182,8.15181818 L17.6872727,5.71386364 C16.2152273,4.34227273 14.2911364,3.5 12,3.5 C8.67727273,3.5 5.80272727,5.40477273 4.40409091,8.18272727 L7.24386364,10.385 C7.91227273,8.37590909 9.78613636,6.88068182 12,6.88068182 L12,6.88068182 Z" className="icon_svg-fill_as_stroke" fill="#EA4335"></path></g></svg>
                            </span>
                            <span className="google-button-text">
                              Continue with Google
                            </span>
                          </a>
                        </span>
                      </div>
                      <div>
                        <span className="facebook-login">
                          <Link to="#" className="facebook-login-button">
                            <span className="facebook-logo">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path className="icon_svg-fill_as_stroke" fillRule="evenodd" clipRule="evenodd" d="M20.4995 11.9995C20.4995 7.30481 16.6937 3.49902 11.999 3.49902C7.30432 3.49902 3.49854 7.30481 3.49854 11.9995C3.49854 16.2423 6.60704 19.759 10.6708 20.3967V14.4567H8.51249V11.9995H10.6708V10.1267C10.6708 7.99631 11.9399 6.81952 13.8816 6.81952C14.8116 6.81952 15.7844 6.98555 15.7844 6.98555V9.07746H14.7125C13.6565 9.07746 13.3272 9.73271 13.3272 10.4049V11.9995H15.6848L15.3079 14.4567H13.3272V20.3967C17.391 19.759 20.4995 16.2423 20.4995 11.9995Z" fill="#1877F2"></path></svg>
                            </span>
                            <span className="facebook-button-text">
                              Continue with Facebook
                            </span>
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className="signup-description">
                      <Link to="/signup" className="signup-email-link">Sign Up with Email</Link>
                      <span className="signup-lightgrey-description">
                        .By signing up you indicate that you have read and agree
                        to Quora's
                        <a href="#" className="terms-of-services">Terms of Service</a>
                        and <a href="#" className="policy">Private Policy.</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="partition"></div>
                <div className="login">
                  <form className="login-form" onSubmit={handleLogin}>
                    <div className="login-title">Login</div>
                    <div className="form-inputs-feilds">
                      <div className="form-coloumn">
                        <input
                          type="email"
                          className="email-input"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-coloumn">
                        <input
                          type="password"
                          className="password-input"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-coloumn">
                        <span className="login-option">
                          <a href="#" className="forgot-password">
                            Forgot Password?
                          </a>
                        </span>
                        <button type="submit" className="login-btn">Login</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="language">
            <span className="language-1">
              <span className="hindi-lang">
                हिंदी
                <span className="arrow">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="chevron_right"
                      className="icon_svg-stroke"
                      stroke="#666"
                      strokeWidth="1.5"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                    >
                      <polyline
                        id="chevron"
                        transform="translate(12.500000, 12.002415) scale(1, -1) rotate(-90.000000) translate(-12.500000, -12.002415) "
                        points="5.49758463 8.50241537 12.4975846 15.5024154 19.5024154 8.50241537"
                      ></polyline>
                    </g>
                  </svg>
                </span>
              </span>
              <span className="language-2">
                <span className="marathi-lang">
                  मराठी
                  <span className="arrow">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        id="chevron_right"
                        className="icon_svg-stroke"
                        stroke="#666"
                        strokeWidth="1.5"
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="round"
                      >
                        <polyline
                          id="chevron"
                          transform="translate(12.500000, 12.002415) scale(1, -1) rotate(-90.000000) translate(-12.500000, -12.002415) "
                          points="5.49758463 8.50241537 12.4975846 15.5024154 19.5024154 8.50241537"
                        ></polyline>
                      </g>
                    </svg>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className="footer-nav">
            <ul className="nav-list">
              <li className="about">About</li>
              <li className="languages">Languages</li>
              <li className="carrers">Carrers</li>
              <li className="bussiness">Bussiness</li>
              <li className="privacy">Privacy</li>
              <li className="terms">Terms</li>
              <li className="contact">Contact</li>
              <li className="copyright">@ Quora Inc. 2024</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login