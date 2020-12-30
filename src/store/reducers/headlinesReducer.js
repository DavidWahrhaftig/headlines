const initState = {
    error: null,
    articles: [],
    currentPage: 1,
    searchQuery: '',
    total: 0,
}

const headlinesReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SET_ARTICLES':
            return {...state, articles: action.articles, total: action.total, error: null};
        case 'SET_ARTICLES_ERROR':
            return {...state, error: action.err};
        case 'SET_SEARCH_QUERY':
            return {...state, searchQuery: action.searchQuery};
        case 'SET_CURRENT_PAGE': 
            return {...state, currentPage: action.page}
        default:
            return state;
    }
}

export default headlinesReducer;