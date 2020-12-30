import './App.scss';
import SearchBar from './components/SearchBar';
import Articles from './components/Articles';
import Pagination from './components/Pagination';
import { connect } from 'react-redux';
import { searchHeadlines } from './store/actions/headlinesActions';
import { useEffect } from 'react';

const App = (props) => {
    
    const {getInitialHeadlines} = props;
    useEffect(() => {
        getInitialHeadlines();
    }, [getInitialHeadlines])
    
    return (
            <div className="container mt-4">
                {/* Search Bar */}
                <SearchBar/>
                {/* Page Navigation */}
                <Pagination/>
                {/* Current Page */}
                <Articles articles={props.articles} page={props.page}/>


            </div>
    );
}

const mapStateToProps = (state) => {
    return {
        articles: state.headlines.articles,
        page: state.headlines.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInitialHeadlines: () => dispatch(searchHeadlines())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
