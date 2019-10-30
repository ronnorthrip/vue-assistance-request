<template>
  <div>
    <div class="card card-default">
      <div class="card-header font-weight-bold">{{ title }}</div>

      <div class="card-body">
        <form role="form">
            <!-- First Name -->
            <div class="form-group">
                <div>
                    <input type="text" class="form-control" name="first_name"  v-model='form.assistance_request.contact.first_name' placeholder="First Name">
                </div>
                <div class="text-danger text-right mb-2 mt-1" data-for="first_name">
                    required
                </div>
            </div>

            <!-- Last Name -->
            <div class="form-group">
                <div>
                    <input type="text" class="form-control" name="last_name"  v-model='form.assistance_request.contact.last_name' placeholder="Last Name">
                </div>
                <div class="text-danger text-right mb-2 mt-1" data-for="last_name">
                    required
                </div>
            </div>

            <!-- Email Address -->
            <div class="form-group">
                <div>
                    <input type="email" class="form-control" name="email"  v-model='form.assistance_request.contact.email' placeholder="Email Address">
                </div>
                <div class="text-danger text-right mb-2 mt-1" data-for="email">
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
                <div class="text-danger text-right mb-2 mt-1" data-for="service_type">
                    required
                </div>
            </div>

            <!-- Description -->
            <div class="form-group">
                <div>
                    <textarea class="form-control" name="description" rows="10" v-model='form.description' placeholder="Describe Your Need">
                    </textarea>
                </div>
                <div class="text-danger text-right mb-2 mt-1" data-for="description">
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
                    <button type="button" class="btn btn-primary">
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
export default {
  name: 'AssistanceRequest',
  props: {
    title: String
  },
  data() {
    return {
      accept_terms: false,
      form: {
        assistance_request: {
          contact: {
            first_name: null,
            last_name: null,
            email: null
          }
        },
        service_type: null,
        description: null
      },
      services:[
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
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<!-- Scoped styles limited to this component only -->
<style scoped>
</style>
