import types from './types';

export default {
  [types.mutations.UPDATE_ITEM_FROM_CURRENT_TAB](state, { itemId, newItemData }) {
    const currentTab = state.tabs[state.activeTabId];

    currentTab.modules[itemId] = {
      ...currentTab.modules[itemId],
      ...newItemData,
    };
  },

  [types.mutations.ADD_ITEM_TO_CURRENT_TAB](state, item) {
    const currentTab = state.tabs[state.activeTabId];

    currentTab.modules.push({
      name: '',
      size: { width: 1, height: 1 },
      ...item,
      position: currentTab.modules.length,
    });
  },

  [types.mutations.REMOVE_ITEM_FROM_CURRENT_TAB](state, itemId) {
    const currentTab = state.tabs[state.activeTabId];

    currentTab.modules.splice(itemId, 1);
  },

  [types.mutations.ADD_TAB](state, tab) {
    state.tabs.push({
      display_name: 'Tab',
      version: 0.1,
      last_update: 0,
      modules: [],
      position: state.tabs.length,
      ...tab,
    });
  },

  [types.mutations.SET_SETTINGS](state, settings) {
    state.settings = settings;
  },

  [types.mutations.ITEM_EDIT_MODE_CHANGE](state, visible) {
    state.itemEditMode = visible;
  },

  [types.mutations.CONFIG_DIR_SET](state, dir) {
    state.appDir = dir;
  },
};
