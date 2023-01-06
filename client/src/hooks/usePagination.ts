import { useEffect, useState } from "react";

type PaginationParams = {
    itemsCount?: number;
    defaultPage?: number;
    pageSize?: number;
    handleChange?: (page: number, pageSize: number) => void;
};

type Result = {
    currentPage: number;
    pagesCount: number;
    handleSetPage: (page: number) => void;
};

const defaultPageNumber = 1;

export function usePagination(params: PaginationParams): Result {
    const { itemsCount = 0, defaultPage = 1, pageSize = 5, handleChange } = params;

    const [page, setPage] = useState(defaultPage);

    const getPagesCount = (itemsCount: number, pageSize: number) => Math.ceil(itemsCount / pageSize) || defaultPageNumber;
    const [pagesCount, setPagesCount] = useState(getPagesCount(itemsCount, pageSize));

    const updatePagesCount = (itemsCount: number, pageSize: number) => {
        const newPagesCount = getPagesCount(itemsCount, pageSize);

        if (page > newPagesCount) {
            handleSetPage(newPagesCount);
        }
        setPagesCount(newPagesCount);
    };

    useEffect(() => {
        updatePagesCount(itemsCount, pageSize);
    }, [itemsCount]);

    useEffect(() => {
        handleSetPage(page);
    }, []);

    const handleSetPage = (page: number) => {
        setPage(page);

        if (handleChange) {
            handleChange(page, pageSize);
        }
    };

    return {
        currentPage: page,
        pagesCount: pagesCount,
        handleSetPage,
    };
}
