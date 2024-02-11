export const HomeTypes = {
    GET_TASKS: "GET_TASKS",
    POST_TASKS: "POST_TASKS",
    UPDATE_TASKS: "UPDATE_TASKS",
    DELETE_TASKS: "DELETE_TASKS"
};

export type HomeActionTypes = typeof HomeTypes[keyof typeof HomeTypes];