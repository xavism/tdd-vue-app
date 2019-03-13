import { shallowMount } from '@vue/test-utils'
import UserView from '@/views/UserView'

describe('UserView', () => {
  it('renders the component', () => {
    // arrange
    const wrapper = shallowMount(UserView)

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})