<template>
  <section class="join-mentor join-mentor-two">
    <div class="container">

      <div class="row align-items-center">

        <div class="col-lg-6">
          <div class="join-mentor-img aos aos-init aos-animate" data-aos="fade-up">
            <img src="@/assets/img/join.png" class="img-fluid" alt="" />
          </div>
        </div>

        <div class="col-lg-6">
          <div class="head-join-us aos aos-init aos-animate" data-aos="fade-up">
            <div class="join-mentor-details">
              <span class="sub">{{ $t('pages.universities.universities-for-foreign-students.image_block.title') }}</span>
              <h2>{{ $t('pages.universities.universities-for-foreign-students.image_block.description') }}</h2>

              <template v-for="(item, idx) in items" :key="idx">
                <span class="sub">
                  {{ item.title }}
                </span>
                <p>
                  {{ item.description }}
                </p>
              </template>

            </div>
            <!-- <div class="reg-log-btn">
              <router-link to="/mentee/mentor-search" class="find-ment">Find Mentors</router-link>
              <a href="javascript:void(0);" class="view-course">View All Courses</a>
            </div> -->
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();

  const items = ref([]);

  const addItems = () => {
    for (let i = 0; i < 3; i++) {
      items.value.push({
        title: t(`pages.universities.universities-for-foreign-students.image_block.items.${i}.title`),
        description: t(`pages.universities.universities-for-foreign-students.image_block.items.${i}.description`),
      });      
    }
  }

  onMounted(addItems);

</script>
