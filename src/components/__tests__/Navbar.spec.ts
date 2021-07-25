import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

const mockNavLinks = [
  'Home',
  'Dashoard',
  'Details',
  'About',
  'Help'
]
const mockRouterPush = jest.fn()
describe('Navbar.vue', () => {
  const wrapper = shallowMount(Navbar, {
    propsData: {
      navLinks: mockNavLinks
    },
    mocks: {
      $router: {
        push: mockRouterPush
      },
      $route: {
        name: ''
      }
    }
  })

  it('renders 5 nav links in the navbar', () => {
    expect(wrapper.findAll('.each-nav').length).toBe(mockNavLinks.length)
  })

  it('should load appropriate pages when each link is clicked', async () => {
    const links = wrapper.findAll('.each-nav a')

    for (let i = 0, len = links.length; i < len; i++) {
      await links.at(i).trigger('click')

      expect(mockRouterPush).toHaveBeenCalledWith({
        name: mockNavLinks[i]
      })
    }
  })
})
