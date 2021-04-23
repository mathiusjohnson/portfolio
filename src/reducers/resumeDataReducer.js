const SET_RESUME_DATA = "SET_RESUME_DATA";
const SET_PORTFOLIO_ITEM = "SET_PORTFOLIO_ITEM";
// REDUCER INCLUDES SETTING POINTS
export default function reducer(state, action) {
  switch (action.type) {

    case SET_RESUME_DATA:
      const {
        resumeData
      } = action;

      return {
        ...state,
        resumeData
      };

    case SET_PORTFOLIO_ITEM: {
      const { updatedItem } = action;

      const removedState = state.resumeData.map((project) => {
        if (project.id === updatedItem.projectId) {
          project.text_body = updatedItem.text_body;
          project.title = updatedItem.title;
        }
        return project;
      });
        state = { ...state, resumeData: removedState };


        return state;
      }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export {
  SET_RESUME_DATA, SET_PORTFOLIO_ITEM
};
