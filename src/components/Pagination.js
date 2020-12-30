import React from 'react'
import { connect } from 'react-redux';
import { goToPage } from '../store/actions/headlinesActions';

const Pagination = (props) => {
    return (
        <nav className="mx-auto">
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link" aria-label="Previous" onClick={() => props.goToPage(props.currentPage - 1)}>
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                <li className="page-item">
                    <button className="page-link" aria-label="Next" onClick={() => props.goToPage(props.currentPage + 1)}>
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.headlines.currentPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        goToPage: (page) => dispatch(goToPage(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
