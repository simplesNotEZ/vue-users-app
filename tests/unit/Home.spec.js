import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  it("renders the stubbed child component", () => {
    const wrapper = shallowMount(Home);
    // console.log('Home wrapper: ', wrapper);
    const imgElement = wrapper.find('img');
    expect(imgElement.attributes('alt')).toBe('cloud logo');
    expect(wrapper.find('userspanel-stub').exists()).toBe(true);
  });

  it("renders correctly", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper).toMatchSnapshot();
  });

  //TODO: add test for mock api GET in created life-cycle hook
  //TODO: add test for emitted event--userDeleted
});

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });
