import Button from "../../atoms/Button/Button";

const PaginationHandler = (currentPage, totalPages, setPage) => {
    const pages = [];
    const maxDisplayed = 2;

    const addPage = (page) => {
        pages.push(
            <Button
                key={page}
                onClick={() => setPage(page)}
                variant={page === currentPage ? "primary" : "secondary"}
                className={`w-fit ${
                    page === currentPage ? "!bg-blue-500 text-white" : ""
                }`}
            >
                {page}
            </Button>
        );
    };

  
    addPage(1);

  
    if (currentPage > maxDisplayed + 2) {
        pages.push(<span key="start-ellipsis">...</span>);
    }

   
    const start = Math.max(2, currentPage - maxDisplayed);
    const end = Math.min(totalPages - 1, currentPage + maxDisplayed);

    for (let i = start; i <= end; i++) {
        addPage(i);
    }


    if (currentPage < totalPages - maxDisplayed - 1) {
        pages.push(<span key="end-ellipsis">...</span>);
    }

    if (totalPages > 1) {
        addPage(totalPages);
    }

    return pages;
};

export default PaginationHandler;
