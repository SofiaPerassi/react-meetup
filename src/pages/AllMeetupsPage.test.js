import AllMeetupsPage from "./AllMeetupsPage";

import { shallow } from "enzyme";
import isReact from "is-react";

describe('AllMeetupsPage', () => {
 it('renders appropriately', () => {
  let allMeetups;
  beforeEach(() => {
    allMeetups = shallow(<AllMeetupsPage />);
    expect(isReact.classComponent(allMeetups)).toBeFalsy();
  });
 })
})
