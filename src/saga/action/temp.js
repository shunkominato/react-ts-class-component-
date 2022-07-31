export const actionBaseNames = "temp";

// actionの名称定義
export const actionNames = {
  ADD_DATA: `${actionBaseNames}_ADD_DATA`,
  CLEAR_DATA: `${actionBaseNames}_CLEAR_DATA`,
  GET_DATA: `${actionBaseNames}_GET_DATA`,
};

// action処理の定義
export const actions = {
  // データの追加(引数が必要な場合は設定)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  [actionNames.ADD_DATA]: (payload) => ({ type: actionNames.ADD_DATA, payload }),
  // データクリア
  [actionNames.CLEAR_DATA]: () => ({ type: actionNames.CLEAR_DATA }),
  // 条件等必要な場合は、引数として追加
  [actionNames.GET_DATA]: () => ({ type: actionNames.GET_DATA }),
};