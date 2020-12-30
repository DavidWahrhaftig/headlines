import axios from 'axios';

export const searchHeadlines = (searchQuery) => {
    return async (dispatch, getState) => {
        try {
            dispatch({type: 'SET_CURRENT_PAGE', page: 1});
            const search = searchQuery ? searchQuery : '\x27\x27';
            const res = await axios.get('top-headlines', 
                {
                    params: {
                        apiKey:'00cb2ee0aaa14f63aefad1048ca6937e',
                        q: search,
                        pageSize: 10,
                        page: 1,
                    }
                });
            dispatch({type: 'SET_ARTICLES', articles: res.data.articles, total: res.data.totalResults});
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
            const maxPage = Math.ceil(getState().headlines.total / 10);
            if (maxPage < pageNumber) {
                return;
            }

            const res = await axios.get('top-headlines', 
                {
                    params: {
                        apiKey:'00cb2ee0aaa14f63aefad1048ca6937e',
                        q: getState().headlines.searchQuery,
                        pageSize: 10,
                        page: pageNumber,
                    }
                });
    
            dispatch({type: 'SET_ARTICLES', articles: res.data.articles, total: getState().headlines.total});
            dispatch({type: 'SET_CURRENT_PAGE', page: pageNumber});

        } catch(err) {
            dispatch({type: 'SET_ARTICLES_ERROR', err});
            console.log(err);
        }
    }
}
