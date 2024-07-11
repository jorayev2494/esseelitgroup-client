<template>
  <div class="tab-content profile-tab-cont pt-1">
    <!-- Personal Details Tab -->
    <div class="tab-pane fade show active" id="per_details_tab">

      <!-- Personal Details -->
      <div class="row" v-if="wonStudentData?.student">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title d-flex justify-content-between">
                <span>{{ $t('studentContext.contest.won_student.title') }}</span>
              </h5>

              <div class="row">
                <p class="col-sm-2 text-muted mb-0 mb-sm-3">{{ $t('studentContext.contest.won_student.code') }}</p>
                <p class="col-sm-10">{{ wonStudentData.code }}</p>
              </div>

              <div class="row">
                <p class="col-sm-2 text-muted mb-0 mb-sm-3">{{ $t('studentContext.contest.won_student.full_name') }}</p>
                <p class="col-sm-10">{{ wonStudentData.student.full_name }}</p>
              </div>

              <div class="row">
                <p class="col-sm-2 text-muted mb-0 mb-sm-3">{{ $t('studentContext.contest.won_student.gift_given_at') }}</p>
                <p class="col-sm-10">{{ wonStudentData.gift_given_at }}</p>
              </div>

              <div class="row">
                <p class="col-sm-2 text-muted mb-0 mb-sm-3">{{ $t('studentContext.contest.won_student.note') }}</p>
                <p class="col-sm-10">{{ wonStudentData.note }}</p>
              </div>

              <div class="row">
                <p class="col-sm-2 text-muted mb-0 mb-sm-3">{{ $t('studentContext.contest.won_student.created_at') }}</p>
                <p class="col-sm-10">{{ wonStudentData.created_at }}</p>
              </div>

              <!-- <div class="row">
                <p class="col-sm-2 text-muted mb-0">Address</p>
                <p class="col-sm-10 mb-0">4663  Agriculture Lane,<br>
                Miami,<br>
                Florida - 33165,<br>
                United States.</p>
              </div> -->
            </div>
          </div>
        </div>
      </div>
        <!-- /Personal Details -->
    </div>
    <!-- /Personal Details Tab -->
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    wonStudentData: {
      type: Object,
      required: true,
    },
  })

</script>
