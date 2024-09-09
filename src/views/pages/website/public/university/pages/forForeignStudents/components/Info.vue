<template>
  <!-- Faq -->
  <section class="faq-sec faq-sec-three">
    <div class="container">

      <div class="section-top-head top-head-three">
        <div class="section-header aos" data-aos="fade-up">
          <h2>{{ $t('pages.universities.universities-for-foreign-students.info.title') }}</h2>
          <p class="w-100">{{ $t('pages.universities.universities-for-foreign-students.info.text') }}</p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="faq-card">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

              <div class="faq-tab" v-for="(item, idx) of items" :key="idx">
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" :id="`headingOne-${idx}`">
                    <p class="panel-title">
                      <a
                        class="collapsed"
                        data-bs-toggle="collapse"
                        data-bs-parent="#accordion"
                        href="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        {{ item.label }}
                      </a>
                    </p>
                  </div>
                  <div
                    id="collapseOne"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    :aria-labelledby="`headingOne-${idx}`"
                    data-bs-parent="#accordion"
                  >
                    <p class="mt-4 pb-3">
                      <strong>{{ item.title }}</strong>
                    </p>
                    <p v-html="item.description"></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Faq -->
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();
  
  const items = ref([]);

  const addItems = () => {
    for (let i = 0; i < 1; i++) {
      items.value.push(
        {
          title: t(`pages.universities.universities-for-foreign-students.info.items.${i}.title`),
          label: t(`pages.universities.universities-for-foreign-students.info.items.${i}.label`),
          description: t(`pages.universities.universities-for-foreign-students.info.items.${i}.description`),
        }
      )
    }
  }

  onMounted(addItems)

</script>
