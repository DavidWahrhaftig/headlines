import axios from 'axios';

export const searchHeadlines = (searchQuery) => {
    return async (dispatch, getState) => {
        try {
            dispatch({type: 'SET_CURRENT_PAGE', page: 1});
            const search = searchQuery ? searchQuery : '\x27\x27';
            const headlines = await axios.get(`top-headlines?apiKey=821f0c0e805c4a769cad97b26671417a&q=${search}&pageSize=10&page=${1}`);
            // dispatch({type: 'SET_ARTICLES', articles: headlines.data.articles, total: headlines.data.totalResults});
            dispatch({type: 'SET_ARTICLES', articles: headlines.data.articles});
            dispatch({type: 'SET_SEARCH_QUERY', searchQuery: searchQuery});

        } catch(err) {
            dispatch({type: 'SET_ARTICLES_ERROR', err});
            console.log(err);
        }
    }
}

export const goToPage = (pageNumber) => {
    return async (dispatch, getState) => {
        try {
            // check page not out of bounds
            if ( pageNumber < 1) {
                return;
            }
            // console.log('total', getState().headlines.total);
            // console.log('pagenum * 10', pageNumber * 10);
            // if (getState().headlines.total > pageNumber * 10) return;
            const headlines = await axios.get(`top-headlines?apiKey=821f0c0e805c4a769cad97b26671417a&q=${getState().headlines.searchQuery}&pageSize=10&page=${pageNumber}`);
            // check user hasn't paged beyond the limit
            if (headlines.data.articles.length === 0) return;
            // dispatch({type: 'SET_ARTICLES', articles: headlines.data.articles, total: getState().headline.total});
            dispatch({type: 'SET_ARTICLES', articles: headlines.data.articles});
            dispatch({type: 'SET_CURRENT_PAGE', page: pageNumber});

        } catch(err) {
            dispatch({type: 'SET_ARTICLES_ERROR', err});
            console.log(err);
        }
    }
}
