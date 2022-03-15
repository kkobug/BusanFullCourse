import { combineReducers, createReducer } from "redux";
import { UPDATE_USER_INFO } from "../actions"; // actions에서 정의한거 들고옴

// 객체 갱신
function updateObject(oldObject, newValues) {
  // 새로운 객체를 첫번째 매개변수로 전달한다는 아이디어를 캡슐화
  // 데이터를 변경하는 대신에 데이터를 확실히 복사하기 위해 Object.assign을 사용합니다.
  return Object.assign({}, oldObject, newValues);
}

// 객체내부 리스트 갱신
function updateItemInArray(array, itemId, updateItemCallback) {
  const updatedItems = array.map((item) => {
    if (item.id !== itemId) {
      // 한가지 항목만 업데이트하기 때문에 다른 항목은 유지합니다.
      return item;
    }

    // 업데이트 된 항목을 만들기 위해 주어진 콜백을 사용합니다.
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });

  return updatedItems;
}

```
// 여기서부터 리듀서 작성
function 새로운값으로바꿀함수(state, action) {
  // 리스트 내부의 값인 경우
  const 새값 = updateItemInArray(state.바꿀리스트, action.id, 기존내용 => {
    return updateObject(기존내용, 새내용)
  })


  // 객체인경우
  const 다른값 = updateObject(기존내용, 새내용)

  return updateObject(state, 새값 or 다른값)

}

function accountReducer([],{
  액션타입 : 새로운값으로바꿀함수
})
```;

const initState = {
  userInfo: {
    name: null,
  },
};

function updateUserInfo(state, action) {
  const newUserInfo = action.payload.userInfo;
  updateObject(state, { userInfo: newUserInfo });
}

const accountReducer = createReducer(initState, {
  UPDATE_USER_INFO: updateUserInfo,
});

const appReducer = combineReducers({
  accountReducer,
});

export default appReducer;
