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

  it('displays services in service_type select', () => {
    const display_name = 'A Fancy New Service to Choose'
    const wrapper = shallowMount(AssistanceRequest)
    wrapper.setData({
      services:[
                  {
                    "display_name": display_name,
                    "id": "new_service_id"
                  }
                ]
    })
    expect(wrapper.html()).to.include(display_name)
  })
})
