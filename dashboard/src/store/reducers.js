const INITIAL_STATE = {
  sidebar: true,
  employessData: [],
  newsData: [],
  jobsData: [],
  advertisementsData: [],
  keyword: null,
  detail: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_EMPLOYEES_DATA":
      return {
        ...state,
        employessData: action.payload,
      };
    case "GET_NEWS_DATA":
      return {
        ...state,
        newsData: action.payload,
      };
    case "GET_JOBS_DATA":
      return {
        ...state,
        jobsData: action.payload,
      };
    case "GET_ADVERTISEMENTS_DATA":
      return {
        ...state,
        advertisementsData: action.payload,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        sidebar: action.payload,
      };
    default:
      return state;
  }
};
