import { types } from "../types/types";

export const setCurrentPage = (currentPage) =>(
    {
        type: types.currentPage,
        payload: currentPage
    }
);
