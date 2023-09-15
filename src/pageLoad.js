// pageLoad.js
import creaRestaurantPage from './restaurant';
import creatTabs from './tabs';
// import './css/all.min.css';
// import './css/fontawesome.min.css';
import './css/normlaize.css';
import './css/styles-large.css';
import './css/styles-small.css';
import './css/styles.css';



function initialLoad(){
    creatTabs();
    creaRestaurantPage();
}

export default initialLoad;