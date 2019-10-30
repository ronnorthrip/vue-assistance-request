<template>
  <div>
    <div class="card card-default">
      <div class="card-header font-weight-bold">{{ title }}</div>

      <div class="card-body">
        <form role="form">
            <!-- First Name -->
            <div class="form-group">
                <div>
                    <input type="text" class="form-control" name="first_name" placeholder="First Name">
                </div>
                <div class="text-danger text-right mb-2 mt-1" data-for="first_name">
                    required
                </div>
            </div>

            <!-- Last Name -->
            <div class="form-group">
                <div>
                    <input type="text" class="form-control" name="last_name" placeholder="Last Name">
                </div>
                <div class="text-danger text-right mb-2 mt-1" data-for="last_name">
                    required
                </div>
            </div>

            <!-- Email Address -->
            <div class="form-group">
                <div>
                    <input type="email" class="form-control" name="email" placeholder="Email Address">
                </div>
                <div class="text-danger text-right mb-2 mt-1" data-for="email">
                    required
                </div>
            </div>

            <!-- Service Type -->
            <div class="form-group">
                <div>
                    <select class="form-control" name="service_type">
                      <option>Select Service Type</option>
                    </select>
                </div>
                <div class="text-danger text-right mb-2 mt-1" data-for="service_type">
                    required
                </div>
            </div>

            <!-- Description -->
            <div class="form-group">
                <div>
                    <textarea class="form-control" name="description" rows="10" placeholder="Describe Your Need">
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
                            <input type="checkbox" name="accept_terms" class="form-check-input"> 
                            I hereby accept the terms of service for THE NETWORK and the Privacy Policy
                        </label>
                    </div>
                </div>
            </div>

            <!-- Submit Button -->
            <div class="form-group mt-3 mb-0 text-right">
                <div class="">
                    <button type="submit" class="btn btn-primary">
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
