import  './App.css'
import Layout from './components/Layout/Layout'
import Header  from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
function App() {
  return (
    <Layout>
      <Header/>
          <Body/>
      <Footer/>
    </Layout>
  );
}

export default App;
