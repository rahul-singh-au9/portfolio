import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import { PROFILE } from '../../constants/projectData';
import '../style.css';

const Main = () => {
  const { currentTheme, setTheme } = useTheme();

  return (
    <section className='s1'>
        <div className='main-container'>
            <div className='greeting-wrapper'>
                <h1>Hi, I'm Rahul Singh</h1>
            </div>
            <div className='intro-wrapper'>
				          <div className='nav-wrapper'>

                        <Link to='/'>
                          <div className='dots-wrapper'>
                            <div id='dot-1' className='browser-dot'></div>
                            <div id='dot-2' className='browser-dot'></div>
                            <div id='dot-3' className='browser-dot'></div>
                          </div>
                        </Link>


                        <ul id='navigation'>
                          <li><NavLink smooth to='#contactt'>Contact</NavLink></li>

                        </ul>
				          </div>

                  <div className='left-column'>
                        <img
                          id='profile_pic'
                          src={PROFILE.image}
                          alt={PROFILE.name}
                          loading="lazy"
                        />

                        <h5 style={{textAlign: 'center', lineHeight: 0}}>Personalize Theme</h5>

                        <div id='theme-options-wrapper'>
                                <div
                                  id='light-mode'
                                  className={`theme-dot ${currentTheme === 'light' ? 'selected-theme' : ''}`}
                                  onClick={() => setTheme('light')}
                                  role="button"
                                  tabIndex={0}
                                  aria-label="Light theme"
                                />
                                <div
                                  id='blue-mode'
                                  className={`theme-dot ${currentTheme === 'blue' ? 'selected-theme' : ''}`}
                                  onClick={() => setTheme('blue')}
                                  role="button"
                                  tabIndex={0}
                                  aria-label="Blue theme"
                                />
                                <div
                                  id='green-mode'
                                  className={`theme-dot ${currentTheme === 'green' ? 'selected-theme' : ''}`}
                                  onClick={() => setTheme('green')}
                                  role="button"
                                  tabIndex={0}
                                  aria-label="Green theme"
                                />
                                <div
                                  id='purple-mode'
                                  className={`theme-dot ${currentTheme === 'purple' ? 'selected-theme' : ''}`}
                                  onClick={() => setTheme('purple')}
                                  role="button"
                                  tabIndex={0}
                                  aria-label="Purple theme"
                                />
                        </div>

                        <p id='settings-note'>*Theme settings will be saved for <br/> your next visit</p>
                  </div>

                  <div className='right-column'>
                        <div id='preview-shadow'>
                              <div id='preview'>
                                    <div id='corner-tl' className='corner'></div>
                                    <div id='corner-tr' className='corner'></div>
                                    <h3>What I Do</h3>
                                    <p>I was a lead developer in a past life, now I enjoy creating projects and love teaching them.</p>
                                    <div id='corner-br' className='corner'></div>
                                    <div id='corner-bl' className='corner'></div>
                              </div>
                        </div>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Main
