const PageButtons = ({ page, setPage, total_pages }) => {
    return (
        <section className='page-buttons__box'>
            <button className='page-buttons__buttons' disabled={page === 1} onClick={() => {
                setPage(page => page - 1)
                }}>&laquo;</button> Page {page} of {total_pages} <button className='page-buttons__buttons' disabled={page === total_pages} onClick={() => {
                    setPage(page => page + 1)
                }}>&raquo;</button>
            </section>
    );
};

export default PageButtons;