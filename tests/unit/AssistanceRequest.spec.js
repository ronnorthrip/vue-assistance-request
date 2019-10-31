import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import AssistanceRequest from '@/components/AssistanceRequest.vue'

const fakeFetchMethods = {
  fetchServicesList(){
    this.services = [
      {
        "display_name": "Benefits",
        "id": "benefits"
      },
      {
        "display_name": "Employment",
        "id": "employment"
      },
      {
        "display_name": "Healthcare",
        "id": "healthcare"
      },
      {
        "display_name": "Housing",
        "id": "housing"
      },
      {
        "display_name": "Legal",
        "id": "legal"
      }
    ]
  }
}

describe('AssistanceRequest.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'new message'
    const wrapper = shallowMount(AssistanceRequest, {
      propsData: { title },
      methods: fakeFetchMethods
    })
    expect(wrapper.text()).to.include(title)
  })

  it('displays services in service_type select', () => {
    const display_name = 'A Fancy New Service to Choose'
    const wrapper = shallowMount(AssistanceRequest, {
      methods: fakeFetchMethods
    })
    wrapper.setData({
      services: [
        {
          "display_name": display_name,
          "id": "new_service_id"
        }
      ]
    })
    expect(wrapper.html()).to.include(display_name)
  })

  it('displays form data in the inputs', () => {
    const first_name = 'Ulysses'
    const last_name  = 'Grant'
    const email      = 'ulysses@union.mil'
    const service_type = 'benefits'
    const description = 'The friend in my adversity I shall always cherish most. '+
      'I can better trust those who have helped to relieve the gloom of my dark hours '+
      'than those who are so ready to enjoy with me the sunshine of my prosperity.'
    const wrapper = shallowMount(AssistanceRequest, {
      methods: fakeFetchMethods
    })
    wrapper.setData({
      form: {
        assistance_request: {
          contact: {
            first_name: first_name,
            last_name: last_name,
            email: email
          }
        },
        service_type: service_type,
        description: description
      },
    })
    expect(wrapper.find('.form-control[name=first_name]').element.value).to.equal(first_name)
    expect(wrapper.find('.form-control[name=last_name]').element.value).to.equal(last_name)
    expect(wrapper.find('.form-control[name=email]').element.value).to.equal(email)
    expect(wrapper.find('.form-control[name=description]').element.value).to.equal(description)
    expect(wrapper.find('.form-control[name=service_type]').element.value).to.equal(service_type)
  })

  it('conditionally shows an error message based on services fetch state', () => {
    const msg = 'error getting the list of services'
    const wrapper = shallowMount(AssistanceRequest, {
      methods: fakeFetchMethods
    })
    expect(wrapper.find('.alerts').text()).to.not.include(msg)
    wrapper.setData({ servicesFetchFailed: true })
    expect(wrapper.find('.alerts').text()).to.include(msg)
  })

  it('disable button if terms not accepted', () => {
    const wrapper = shallowMount(AssistanceRequest, {
      methods: fakeFetchMethods
    })
    wrapper.setData({ accept_terms: false })
    expect(wrapper.find('.get-assistance-button').element.disabled).to.equal(true)
  })
})
