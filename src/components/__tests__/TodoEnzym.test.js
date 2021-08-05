import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import toJson from "enzyme";
import App from "../../App";
import Todo from "../Todo";

configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });
  it("renders Todo component without crashing", () => {
    shallow(<Todo />);
  });
});

describe("snapshots", () => {
  it("App snapshot", () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
