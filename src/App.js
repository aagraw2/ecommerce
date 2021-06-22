import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react'
import { Layout } from 'antd';
import PageFooter from './components/PageFooter/PageFooter';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
          <BrowserRouter>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Navbar />
        </Header>

        <Content className="site-layout" style={{ padding: '0 40px', marginTop: 64 }}>
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/products' component={Products} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </Content>

        <Footer style={{ textAlign: 'center' }}><PageFooter/></Footer>
          </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
