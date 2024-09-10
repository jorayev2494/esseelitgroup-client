<template>
  <section class="banner-feature-sec work-eight-sec">
    <div class="container">

      <div class="section-bg-imgs">
        <img src="@/assets/img/bg/arrow-bg.png" class="img-fluid arrow-bg" alt="" />
        <img src="@/assets/img/bg/index-six-bg-01.png" class="img-fluid arrow-bgtwo" alt="" />
      </div>

      <div class="heder-eight aos" data-aos="fade-up">
        <div class="section-head-eight">
          <span class="sub">{{ $t('pages.universities.universities-for-foreign-students.apply_steps.label') }}</span>
          <h2>{{ $t('pages.universities.universities-for-foreign-students.apply_steps.title') }}</h2>
          <p>
            {{ $t('pages.universities.universities-for-foreign-students.apply_steps.description') }}
          </p>
        </div>
      </div>

      <div class="row justify-content-center">

        <div class="col-lg-4 col-md-6 mt-4" v-for="(item, idx) of items" :key="idx">
          <div class="feature-box feature-box-eight text-center aos h-100 d-inline-block" data-aos="fade-up">
            <div class="feature-header">
              <div class="feature-icon">
                <span class="circle"></span>
                <i>
                  {{ ++idx }}
                </i>
              </div>
              <div class="feature-cont">
                <div class="feature-text">{{ item.title }}</div>
              </div>
            </div>
            <p class="mb-0">{{ item.description }}</p>
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
        title: t(`pages.universities.universities-for-foreign-students.apply_steps.items.${i}.title`),
        description: t(`pages.universities.universities-for-foreign-students.apply_steps.items.${i}.description`),
      });      
    }
  }

  onMounted(addItems);

</script>
