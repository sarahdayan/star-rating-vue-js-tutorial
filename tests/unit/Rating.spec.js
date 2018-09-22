import { shallowMount } from '@vue/test-utils'
import Rating from '@/components/Rating'

let wrapper = null

beforeEach(() =>
  (wrapper = shallowMount(Rating, { propsData: { maxStars: 6, grade: 3 } })))
afterEach(() => wrapper.destroy())

describe('Rating', () => {
  it('renders a list of stars equal to props.maxStars', () => {
    expect(wrapper.findAll('[data-test-id="star"]').length).toEqual(6)
  })
  it('renders a list of stars with class `active` equal to prop.grade', () => {
    expect(wrapper.findAll('.active').length).toEqual(3)
  })
  it('renders a list of stars without class `active` on remaining stars', () => {
    expect(
      wrapper.findAll('[data-test-id="star"]').length -
        wrapper.findAll('.active').length
    ).toEqual(3)
  })
  it('adds `active` class on an inactive star when the user clicks it', () => {
    const fourthStar = wrapper.findAll('[data-test-id="star"]').at(3)
    fourthStar.trigger('click')
    expect(fourthStar.classes()).toContain('active')
  })
  it('sets icon to `star` in an inactive star when the user clicks it', () => {
    const fourthStar = wrapper.findAll('[data-test-id="star"]').at(3)
    fourthStar.trigger('click')
    expect(fourthStar.find('[data-test-id="icon"]').attributes().name).toEqual(
      'star'
    )
  })
  it('removes `active` class on an active star when the user clicks it', () => {
    const thirdStar = wrapper.findAll('[data-test-id="star"]').at(2)
    thirdStar.trigger('click')
    expect(thirdStar.classes()).not.toContain('active')
  })
  it('sets icon to `regular/star` in an inactive star when the user clicks it', () => {
    const thirdStar = wrapper.findAll('[data-test-id="star"]').at(2)
    thirdStar.trigger('click')
    expect(thirdStar.find('[data-test-id="icon"]').attributes().name).toEqual(
      'regular/star'
    )
  })
  it('renders a counter', () => {
    expect(wrapper.find('[data-test-id="counter"]').exists()).toBe(true)
  })
  it('displays how many stars are active', () => {
    expect(wrapper.find('[data-test-id="counter"]').text()).toMatch('3 of 6')
  })
  it('does not render a counter if prop.hasCounter is set to false', () => {
    wrapper.setProps({ hasCounter: false })
    expect(wrapper.find('[data-test-id="counter"]').exists()).toBe(false)
  })
})
