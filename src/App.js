import React from 'react';
import { BrowserRouter, Switch, Route }from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Navbar from './components/navbar/navbar';
import './styles/index.scss';
import Movie from './pages/movie/movie';
import NotFound from './pages/notfound/notfound';
import Footer from './components/footer/footer';
import Category from './pages/category/category';
import AddMovie from './components/addmovie/addmovie';
import AddUser from './components/adduser/adduser';
import UserList from './pages/userlist/userlist';
import Categories from './pages/categories/categories';
import RegisterPage from './pages/register/register';
import LoginPage from './pages/login/login';
import Logout from './pages/logout/logout';
import { ToastContainer } from 'react-toastify';
import FavoriteList from './pages/favoriteList/favoriteList';



function App() {
  return (
   
      <BrowserRouter>
       
          <Navbar />
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/movie/:name" component={Movie} />
            <Route path="/addmovie" component={AddMovie} />
            <Route path="/adduser" component={AddUser} />
            <Route path="/userlist" component={UserList} />
            <Route path="/categories" component={Categories} />
            <Route path="/category/:name" component={Category} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={Logout} />
            <Route path="/favorites" component={FavoriteList} />
            <Route component={NotFound} />
          </Switch>
          <Footer year="2019"/>
        <ToastContainer />
      </BrowserRouter>
   
  );
}

export default App;
