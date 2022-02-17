export const getEmployeesData = () => {
  return async (dispatch) => {
    const response = await fetch("./data/employees.json");
    const responseJson = await response.json();
    dispatch({
      type: "GET_EMPLOYEES_DATA",
      payload: responseJson,
    });
  };
};
export const getNewsData = () => {
  return async (dispatch) => {
    const response = await fetch("./data/news.json");
    const responseJson = await response.json();
    dispatch({
      type: "GET_NEWS_DATA",
      payload: responseJson,
    });
  };
};
export const getJobsData = () => {
  return async (dispatch) => {
    const response = await fetch("./data/jobs.json");
    const responseJson = await response.json();
    dispatch({
      type: "GET_JOBS_DATA",
      payload: responseJson,
    });
  };
};
export const getAdvertisementsData = () => {
  return async (dispatch) => {
    const response = await fetch("./data/advertisements.json");
    const responseJson = await response.json();
    dispatch({
      type: "GET_ADVERTISEMENTS_DATA",
      payload: responseJson,
    });
  };
};

export const toggleSidebar = (payload) => {
  return {
    type: "TOGGLE_SIDEBAR",
    payload,
  };
};
