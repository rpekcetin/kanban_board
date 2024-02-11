export const PanelTypes = {
    GET_PANELS: "GET_PANELS",
    POST_PANELS: "POST_PANELS",
    UPDATE_PANELS: "UPDATE_PANELS",
    DELETE_PANELS: "DELETE_PANELS"
};

export type PanelActionTypes = typeof PanelTypes[keyof typeof PanelTypes];
