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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus ultrices. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Sed vulputate odio ut enim blandit volutpat maecenas. Eget velit aliquet sagittis id consectetur purus ut faucibus. Pharetra et ultrices neque ornare. Molestie nunc non blandit massa. Eu turpis egestas pretium aenean pharetra. Morbi tincidunt ornare massa eget egestas. Leo a diam sollicitudin tempor id eu nisl nunc mi. Sed nisi lacus sed viverra tellus in hac habitasse. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Dui sapien eget mi proin sed. Ut faucibus pulvinar elementum integer enim neque volutpat. Sed id semper risus in hendrerit gravida rutrum quisque non.
        Ultricies integer quis auctor elit. Ac turpis egestas integer eget aliquet nibh praesent. Ornare suspendisse sed nisi lacus. Tortor posuere ac ut consequat semper viverra nam libero justo. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Suspendisse sed nisi lacus sed. A pellentesque sit amet porttitor eget dolor. In pellentesque massa placerat duis ultricies lacus sed. Lorem mollis aliquam ut porttitor leo a. Praesent semper feugiat nibh sed pulvinar. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Tellus cras adipiscing enim eu turpis. Lacus laoreet non curabitur gravida. Urna et pharetra pharetra massa massa ultricies mi.</p>
      </div>
  );
}

const MyButton = styled(Button)(() => ({
    color: '#fff',
    backgroundColor: '#297A5F',
    '&:hover': {
      backgroundColor: '#453643',
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
