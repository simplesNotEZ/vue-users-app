import { shallowMount } from "@vue/test-utils";
import UsersPanel from "@/components/UsersPanel.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(UsersPanel, {
    propsData: {
      users: [  
        { 
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",   
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
        }
      ]
    }
  });
});

describe("UsersPanel", () => {
  it("renders the stubbed User child component(s)", () => {
    expect(wrapper.find('user-stub').exists()).toBe(true);
  });

  it("calls addUser method on click of Add User btn", async() => {
    const addUser = jest.fn();
    wrapper.setMethods({ addUser });
    await wrapper.find('button').trigger('click');
    expect(addUser).toHaveBeenCalled();
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
