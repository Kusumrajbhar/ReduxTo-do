// import renderer from "react-test-renderer";
// import Todo from "../Todo";
// import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import { addTodo } from "../../action/TodoAction";

// const mockStore = configureStore([]);

// describe("My Connected React-Redux Component", () => {
//   let store;
//   let component;

//   beforeEach(() => {
//     store = mockStore({
//       myState: "food",
//     });

//     component = renderer.create(
//       <Provider store={store}>
//         <Todo />
//       </Provider>
//     );
//   });

//   it("should render with given state from Redux store", () => {
//     expect(component.toJSON()).toMatchSnapshot();
//   });

//   it("should dispatch an action on button click", () => {
//     renderer.act(() => {
//       component.root.findByType("button").props.onClick();
//     });

//     expect(store.dispatch).toHaveBeenCalledTimes(1);
//     expect(store.dispatch).toHaveBeenCalledWith(addTodo({ payload: "food" }));
//   });
// });

// // //create mockStore
// // let mockStore;

// // //create Obj for config store
// // const mockStoreConf = configureStore([]);

// // //configure store (add states)
// // mockStore = mockStoreConf({
// //   someStateInMockStore: `list`,
// // });

// // test("matches snapshot", () => {
// //   const tree = renderer
// //     .create(
// //       <Provider store={mockStore}>
// //         <Todo />
// //       </Provider>
// //     )
// //     .toJSON();
// //   expect(tree).toMatchSnapshot();
// // });
