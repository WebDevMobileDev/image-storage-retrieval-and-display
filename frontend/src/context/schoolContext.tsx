import React from "react";

import { createContext, useReducer } from "react";



type State = { id: string }

const initialState: State = {
	id: ""
}

export const SchoolContext = createContext<{
	state: State;
	dispatch: React.Dispatch<Action>;
  }>({
	state: initialState,
	dispatch: () => null,
  });


type Action = {type: "INITIALISE_CREATED_SCHOOL"; payload?: string}

const schoolReducer = (state:State, action:Action): State => {
    const {type, payload } = action;
	switch (action.type) {
		case "INITIALISE_CREATED_SCHOOL":
            if(!payload) throw new Error("id has to be passed to initialise a school")
			return {id: action.payload!};

		default:
			return state;
	}
};

const SchoolContextProvider = ({ children }: {children: any}) => {
	const [state, dispatch] = useReducer(schoolReducer, {id: ""});

	return <SchoolContext.Provider value={{state, dispatch}}>{children}</SchoolContext.Provider>;
};

export default SchoolContextProvider;
