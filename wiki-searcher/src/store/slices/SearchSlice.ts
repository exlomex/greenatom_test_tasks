import {action, flow, makeObservable, observable} from "mobx";
import {fetchWikiPages} from "../services/fetchWikiPages";
// import { fetchAlbumsRequest } from "../requests";

class SearchSlice {
    query: string = '';
    queryResult = [];

    constructor() {
        makeObservable(this, {
            query: observable,
            fetchByQuery: flow,
            queryResult: observable,
            setQuery: action,
        });
    }

    *fetchByQuery() {
        this.queryResult = yield fetchWikiPages(10, this.query);
    }

    setQuery = (query: string) => {
        this.query = query
    }
}

const SearchSliceObj = new SearchSlice()
export default SearchSliceObj;