import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import AssistanceRequest from '@/components/AssistanceRequest.vue'

describe('AssistanceRequest.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'new message'
    const wrapper = shallowMount(AssistanceRequest, {
      propsData: { title }
    })
    expect(wrapper.text()).to.include(title)
  })
})
