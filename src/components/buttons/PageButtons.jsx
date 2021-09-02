const PageButtons = ({ page, setPage, total_pages }) => {
    return (
        <section>
            <button disabled={page === 1} onClick={() => {
                setPage(page => page - 1)
                }}>⬅</button> Page {page} of {total_pages} <button disabled={page === total_pages} onClick={() => {
                    setPage(page => page + 1)
                }}>➡</button>
            </section>
    );
};

export default PageButtons;