import Layout from '@theme/Layout';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

function HomepageContent() {
  return (
      <div className="container">
        <Heading as="h1" className={styles.title} >
          Welcome
        </Heading>
        <p>Hi! Welcome to an undergraduate research project I completed for <a href="https://www.colorado.edu/plc/coen-3050enlp-3100" target="_blank" rel="noopener noreferrer">ENLP 3100</a>  at the University of Colorado Boulder. 
        I began the class hoping to learn more about software/technology in healthcare, but soon found I was fascinated with Robotically Assisted Surgical Devices. 
        I conducted a systematic review through hundreds of sources found from Google, Google Scholar, and my university's academic <a href="https://www.colorado.edu/libraries/research/find-articles-and-databases" target="_blank" rel="noopener noreferrer">database</a>. 
        The purpose of this website was to present my findings in a digestible form, experiment with docusaurus, and display hopefully genuinely valuable insights. If you would like to view this research as a more traditional paper, download it as a pdf through the button below.
        If you notice any problems, or would like to contact me about anything, send me an email! I hope you find this interesting!
        </p>
      </div>
  );
}

const MyButton = styled(Button)(() => ({
    color: '#fff',
    backgroundColor: '#40476D',
    '&:hover': {
      backgroundColor: '#D95497',
    },
    padding: '10px 15px',
    marginBottom: '25px',
}));

function DownloadButton({ text, path }) {
  const handleDownload = () => {
          window.open(path, '_blank');
      };
  return ( 
          <MyButton variant="contained" onClick={handleDownload}>
              {text}
          </MyButton>
  );
}

function PageButton({ text, page }) {
  const handleLink = () => {
    
  };
  return (
    <Link to = {page}>
      <MyButton variant="contained" onClick = {handleLink}>
        {text}
      </MyButton> 
    </Link>
  );
}

function MyButtons() {
  return (
    <div className = {styles.container_col}>
        <div className = {styles.column} >
          <PageButton text = 'Check out my Research' page = './research/abstract'/>
        </div>
        <div className = {styles.column}>
          <DownloadButton text = 'Download as a PDF'  path = 'test.pdf'/>  
        </div>
    </div>
  );
}
export default function Welcome() {
  return (
    <Layout
      title={`Welcome`}
    >
      <main>
        <HomepageContent/>
        <MyButtons/>
      </main>
    </Layout>
  );
}
