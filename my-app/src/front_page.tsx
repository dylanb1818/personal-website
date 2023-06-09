import React, { useState, useEffect } from 'react';
import { Header, Button } from '@mantine/core';
import Resume from './Resume.tsx';

function FrontPage() {
  const [displayResume, setDisplayResume] = useState(false);

  const TypingText = ({ text, delay = 2000 }) => {
    const [currentText, setCurrentText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
      let timeout;

      const type = (index) => {
        if (index <= text.length) {
          setCurrentText(text.substring(0, index));
          timeout = setTimeout(() => type(index + 1), 100);
        } else {
          setTimeout(() => deleteText(text.length), delay);
        }
      };

      const deleteText = (index) => {
        if (index >= 0) {
          setCurrentText(text.substring(0, index));
          timeout = setTimeout(() => deleteText(index - 1), 100);
        } else {
          setTimeout(() => type(1), 1000);
        }
      };

      type(1);

      return () => clearTimeout(timeout);
    }, [text, delay]);

    useEffect(() => {
      const cursorInterval = setInterval(() => {
        setShowCursor((prevShowCursor) => !prevShowCursor);
      }, 500);

      return () => clearInterval(cursorInterval);
    }, []);

    return (
      <div style={{ zIndex: 1, color: 'white', marginLeft: '20px', textDecoration: 'underline' }}>
        <span>{currentText}</span>
        <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
      </div>
    );
  };


  return (
    <div style={{ backgroundColor: 'black', height: '100vh', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        {/* Insert your SVG pattern or background image here */}
        <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="a" patternUnits="userSpaceOnUse" width="58" height="66.981" patternTransform="scale(2) rotate(0)">
              <rect x="0" y="0" width="100%" height="100%" fill="hsla(178, 11%, 9%, 1)" />
              <path
                d="M57.994 92.097l-14.498-8.37.002-16.745 14.5-8.373 14.498 8.37-.002 16.745zm-58 0l-14.498-8.37.002-16.745 14.5-8.373 14.498 8.37-.002 16.745zM29.002 8.372L14.504.002l.002-16.745 14.5-8.373 14.498 8.37-.002 16.744zm29 16.748l-14.498-8.37.002-16.745 14.5-8.373L72.504.002l-.002 16.744zm-58 0l-14.498-8.37.002-16.745 14.5-8.374L14.504.001l-.002 16.745zm57.996 33.489L43.5 50.239l.002-16.745 14.5-8.374L72.5 33.49l-.002 16.745zm-29.004 16.74l-14.498-8.37.002-16.744 14.5-8.374 14.498 8.37-.002 16.745zm.004-33.488L14.5 33.49l.002-16.745 14.5-8.374 14.498 8.37-.002 16.745zm-29 16.747l-14.498-8.37.002-16.744 14.5-8.374L14.5 33.49l-.002 16.745z"
                stroke-width="1"
                stroke="none"
                fill="hsla(0, 0%, 0%, 1)"
              />
            </pattern>
          </defs>
          <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#a)" />
        </svg>
      </div>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
        <Header style={{ backgroundColor: 'black', marginTop: 0, paddingTop: '10px', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: 1 }}>
              <h1 style={{ margin: 0, padding: 0, height: '32px' }}>
                <TypingText text="Welcome!" delay={2000} />
              </h1>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <Button color="gray" radius="xs" size="xl" style={{ marginRight: '5px' }}>
                Personal Projects
              </Button>
              <Button color="gray" radius="xs" size="xl" style={{ marginRight: '5px' }} href="www.youtube.com">
                Engineering
              </Button>
              <Button color="gray" radius="xs" size="xl" style={{ marginRight: '5px' }}>
                Lab Work
              </Button>
              <Button
                color="gray"
                radius="xs"
                size="xl"
                style={{ marginRight: '30px' }}
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  setDisplayResume(true);
                }}
              >
                Resume
              </Button>
            </div>
            <div>
              <img src="/MITlogo.png" alt="MIT Logo" style={{ height: '100px', width: 'auto' }} />
            </div>
          </div>
        </Header>
      </div>
      <div style={{ height: '114px' }} />
      <div style={{ display: 'flex', position: 'relative', zIndex: 1 }}>
        <div style={{ width: '25%', marginRight: 'auto' }}>
          <img src="/Portrait_pic.png" alt="Image Description" style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }} />
        </div>
        <div style={{ flex: 1, backgroundColor: 'black', color: 'white', padding: '20px' }}>
          <div>
            <h2>Hi, my name is Dylan Beck and I am a Junior studying Computer Science at MIT.</h2>
            <p>
              I'm from Yorktown, NY. Growing up, I loved playing lacrosse and the outdoors. When I was 9, I was watching the TV show,
              America's Got Talent when a contestant who went by the name of the "Kinetic King" competed by making Rube Goldberg Machines.
              I quickly fell in love with making these projects and even ran a{' '}
              <a
                href="https://www.youtube.com/@dblax948/videos"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'grey', marginRight: '4px' }}
              >
                YouTube
              </a>
              Channel from 6th grade to my Senior Year of high school uploading my engineering projects.
            </p>
            <p>
              Coming into MIT, it was natural that I would want to study Mechanical Engineering. I was the 2A-6 Major (a hybrid degree between MechE and CS)
              and I took Mechanics and Materials, Thermal-Fluids, and Manufacturing before ultimately switching majors to Course 6-3, Computer Science and Engineering,
              at the end of my Sophomore Year.
            </p>
            <p>
              Apart from Computer Science, I also have a passion for Physics. Beyond the General Institute Requirements, I took
              Physics III: Vibrations and Waves and was a TA for Physics I: Classical Mechanics. I am also currently working within the
              Laboratory of Exotic Molecule and Atoms under Professor Ronald Fernano Garcia Ruiz. More specifically, my work has been focused
              on writing the software for the data acquisition system within the lab. The code written so far is equipped with sub-nanosecond
              resolution in order to control and probe individual atoms and molecules. In addition to developing my software skills, this experience
              has also helped me develop basic knowledge in quantum optics, ion traps, high vacuum technology, radioactive beam technology, and laser spectroscopy techniques.
            </p>
            <p>
              Aside from classes at MIT, I am also involved in some extracurricular activities. I am a member of the Fraternity Phi Beta Epsilon and am currently the House Manager of the Fraternity.
              I am also a member of the Bitcoin Club, a club that works on educating its members on Blockchain Technology, as well as the Poker Club. I was recruited to be on the Lacrosse Team and played 1
              season before ultimately having to quit due to a shoulder injury.
            </p>
          </div>
        </div>
      </div>
      <div style={{ float: 'right', padding: '1px' }}>
        <Button
          component="a"
          href="https://www.linkedin.com/in/dylan-beck-0a14a6228/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'url(/LinkedinLogo.png) center center no-repeat',
            backgroundSize: '100%',
            marginRight: '5px',
            padding: '10px 20px', // Adjust padding as needed
          }}
        ></Button>
        <Button
          component="a"
          href="https://github.com/dylanb1818"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'url(/GithubLogo.png) center center no-repeat',
            backgroundSize: '100%',
            marginRight: '5px',
            padding: '10px 20px', // Adjust padding as needed
          }}
        ></Button>
        <Button
          component="a"
          href="https://www.garciaruizlab.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'url(/MITPhysicslogo.png) center center no-repeat',
            backgroundSize: '100%',
            marginRight: '5px',
            padding: '10px 20px', // Adjust padding as needed
          }}
        ></Button>
      </div>
      {displayResume && <Resume onClose={() => setDisplayResume(false)} />}
    </div>
  );
}

export default FrontPage;



{/* <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='58' height='66.981' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(178, 11%, 9%, 1)'/><path d='M57.994 92.097l-14.498-8.37.002-16.745 14.5-8.373 14.498 8.37-.002 16.745zm-58 0l-14.498-8.37.002-16.745 14.5-8.374 14.498 8.37-.002 16.745zM29.002 8.372L14.504.002l.002-16.745 14.5-8.373 14.498 8.37-.002 16.744zm29 16.748l-14.498-8.37.002-16.745 14.5-8.373L72.504.002l-.002 16.744zm-58 0l-14.498-8.37.002-16.745 14.5-8.374L14.504.001l-.002 16.745zm57.996 33.489L43.5 50.239l.002-16.745 14.5-8.374L72.5 33.49l-.002 16.745zm-29.004 16.74l-14.498-8.37.002-16.744 14.5-8.374 14.498 8.37-.002 16.745zm.004-33.488L14.5 33.49l.002-16.745 14.5-8.374 14.498 8.37-.002 16.745zm-29 16.747l-14.498-8.37.002-16.744 14.5-8.374L14.5 33.49l-.002 16.745z'  stroke-width='1' stroke='none' fill='hsla(0, 0%, 0%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/></svg> */}



