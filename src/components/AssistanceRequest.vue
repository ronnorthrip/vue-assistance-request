<template>
  <div>
    <div class="card card-default">
      <div class="card-header font-weight-bold">{{ title }}</div>

      <div class="card-body">
        <form role="form">
            <div class="alerts">
              <!-- Services Fetch Error -->
              <div class="alert alert-danger mb-4" v-if="servicesFetchFailed">
                Woops, there was an error getting the list of services.
              </div>

              <!-- Success Message -->
              <div class="alert alert-success mb-4" v-if="submission.successful">
                Your assistance request has been submitted!
              </div>

              <!-- Error Message -->
              <div class="alert alert-danger mb-4" v-if="submission.errors">
                Woops, there was an error submitting your form. <br />
                {{ submission.error_message }}
              </div>
            </div>

            <!-- First Name -->
            <div class="form-group">
                <div>
                    <input type="text" class="form-control" name="first_name"  v-model='form.assistance_request.contact.first_name' placeholder="First Name">
                </div>
                <div class="text-right mb-2 mt-1" :class="(form.assistance_request.contact.first_name)? 'text-muted' : 'text-danger'" data-for="first_name">
                    required
                </div>
            </div>

            <!-- Last Name -->
            <div class="form-group">
                <div>
                    <input type="text" class="form-control" name="last_name"  v-model='form.assistance_request.contact.last_name' placeholder="Last Name">
                </div>
                <div class="text-right mb-2 mt-1" :class="(form.assistance_request.contact.last_name)? 'text-muted' : 'text-danger'" data-for="last_name">
                    required
                </div>
            </div>

            <!-- Email Address -->
            <div class="form-group">
                <div>
                    <input type="email" class="form-control" name="email"  v-model='form.assistance_request.contact.email' placeholder="Email Address">
                </div>
                <div class="text-right mb-2 mt-1" :class="(form.assistance_request.contact.email)? 'text-muted' : 'text-danger'" data-for="email">
                    required
                </div>
            </div>

            <!-- Service Type -->
            <div class="form-group">
                <div>
                    <select class="form-control" name="service_type" v-model='form.service_type'>
                      <option :value="null" selected disabled>Select Service Type</option>
                      <option :value="service.id" v-for="service in services">{{ service.display_name }}</option>
                    </select>
                </div>
                <div class="text-right mb-2 mt-1" :class="(form.service_type)? 'text-muted' : 'text-danger'" data-for="service_type">
                    required
                </div>
            </div>

            <!-- Description -->
            <div class="form-group">
                <div>
                    <textarea class="form-control" name="description" rows="10" v-model='form.description' placeholder="Describe Your Need">
                    </textarea>
                </div>
                <div class="text-right mb-2 mt-1" :class="(form.description)? 'text-muted' : 'text-danger'" data-for="description">
                    required
                </div>
            </div>

            <!-- Accept Terms -->
            <div class="form-group">
                <div class="ml-1">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" name="accept_terms"  v-model='accept_terms' class="form-check-input"> 
                            I hereby accept the terms of service for THE NETWORK and the Privacy Policy
                        </label>
                    </div>
                </div>
            </div>

            <!-- Submit Button -->
            <div class="form-group mt-3 mb-0 text-right">
                <div class="">
                    <button type="button" class="btn btn-primary get-assistance-button" :disabled="mustAcceptTerms">
                        Get Assistance
                    </button>
                </div>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AssistanceRequest',
  props: {
    title: String
  },
  data() {
    return {
      api_domain: 'http://localhost:49567',
      accept_terms: false,
      form: this.emptyForm(),
      services:[],
      servicesFetchFailed: false,
      submission: this.emptySubmission()
    };
  },
  computed: {
    mustAcceptTerms() {
      return (!this.accept_terms)? true : false
    }
  },
  mounted() {
    this.fetchServicesList()
  },
  methods: {
    clearTheForm() {
      this.accept_terms = false
      this.form = this.emptyForm()
    },

    emptyForm() {
      return {
        assistance_request: {
          contact: {
            first_name: null,
            last_name: null,
            email: null
          }
        },
        service_type: null,
        description: null
      }
    },

    clearTheSubmission() {
      this.submission = this.emptySubmission()
    },

    emptySubmission() {
      return {
        busy: false,
        successful: false,
        errors: false,
        error_message: null
      }
    },

    fetchServicesList() {
      axios.get(this.api_domain+'/api/service-types')
      .then(response => {
        this.services=response.data.data
        this.servicesFetchFailed = false
      })
      .catch(error => {
        window.console.log(error)
        this.servicesFetchFailed = true
      });
    }
  }
}
</script>

<!-- Scoped styles limited to this component only -->
<style scoped>
</style>
