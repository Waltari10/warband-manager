export const initialWealthState = {};

const OVERWRITE = "OVERWRITE";
const UPDATE = "UPDATE";
const ADD = "ADD";
const DELETE = "DELETE";

export const actions = {
  OVERWRITE,
  UPDATE,
  ADD,
  DELETE
};

// Should I actually just write a reducer to handle the whole warband instead of individual parts of it? Why not?
export const wealthReducer = (state, action) => {
  switch (action.type) {
    case OVERWRITE:
      return action.payload;
    case UPDATE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    default:
      // eslint-disable-next-line no-console
      console.error("Unexpected action: ", action);
      break;
  }
};

export const initialHeroState = {
  index: [],
  heroes: {}
};

export const heroReducer = (state, action) => {
  switch (action.type) {
    case OVERWRITE:
      return action.payload;
    case UPDATE:
      return {
        ...state,
        heroes: {
          ...state.heroes,
          [action.payload.id]: action.payload.hero
        }
      };

    case ADD: {
      const newHeroIndex = [...state.index];

      newHeroIndex.push(action.payload);

      return {
        ...state,
        index: newHeroIndex,
        heroes: {
          ...state.heroes,
          [action.payload]: {}
        }
      };
    }
    case DELETE: {
      const index = state.index.indexOf(action.payload);

      const newIndex = [...state.index];
      if (index > -1) {
        newIndex.splice(index, 1);
      }

      const newHeroes = {
        ...state.heroes
      };

      delete newHeroes[action.payload];

      return {
        ...state,
        index: newIndex,
        heroes: newHeroes
      };
    }
    default:
      // eslint-disable-next-line no-console
      console.error("Unexpected action: ", action);
      break;
  }
};

export const initialHenchmenState = {
  index: [],
  henchmen: {}
};

export const henchmenReducer = (state, action) => {
  switch (action.type) {
    case OVERWRITE:
      return action.payload;
    case UPDATE:
      return {
        ...state,
        henchmen: {
          ...state.henchmen,
          [action.payload.id]: action.payload.henchman
        }
      };

    case ADD: {
      const newIndex = [...state.index];

      newIndex.push(action.payload);

      return {
        ...state,
        index: newIndex,
        henchmen: {
          ...state.henchmen,
          [action.payload]: {
            count: 1
          }
        }
      };
    }
    case DELETE: {
      const index = state.index.indexOf(action.payload);

      const newIndex = [...state.index];
      if (index > -1) {
        newIndex.splice(index, 1);
      }

      const newHenchmen = {
        ...state.henchmen
      };

      delete newHenchmen[action.payload];

      return {
        ...state,
        index: newIndex,
        henchmen: newHenchmen
      };
    }
    default:
      // eslint-disable-next-line no-console
      console.error("Unexpected action: ", action);
      break;
  }
};
