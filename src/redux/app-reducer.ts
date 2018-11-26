const initState = {
    page: {
        pathname: "/",
        params: {}
    },
    search_request: "",
    movieList: [],
    movieInfo: {},
    movieTotal: 0
};

export function appReducer(state = initState, action) {
    return state;
}