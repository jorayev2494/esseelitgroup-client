<template>
  <!-- Faq -->
  <section class="faq-sec faq-sec-three">
    <div class="container">

      <div class="section-top-head top-head-three">
        <div class="section-header aos" data-aos="fade-up">
          <h2>{{ data?.title }}</h2>
          
          <div id="ck-content" class="ck-content">
            <p class="w-100 text-start" v-html="$ckeditor.replaceStyles(data?.content ?? '')"></p>
          </div>
        </div>
      </div>

    </div>
  </section>
  <!-- /Faq -->
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import { useStore } from "vuex"

  const store = useStore();

  const slug = 'u-for-foreign-s';
  const data = ref(null);

  const loadPageData = () => {
    store.dispatch('staticPage/showStaticPageAsync', { slug })
      .then(response => {
        data.value = response.data;
      })
  }

  onMounted(() => {
    loadPageData()
  })
</script>

<style scoped>
  ul > li {
    list-style: disc;
    list-style-type: circle;
  }

  ul li::marker {
    color: red;
  }
</style>
