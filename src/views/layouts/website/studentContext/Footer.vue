<template>
  <!-- Footer -->
  <div class="footer-fixed fixed-bottom">
    <footer class="footer">
      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="container">
          <!-- Copyright -->
          <div class="copyright py-3">
            <div class="row">
              <div class="col-12 text-center">
                <div class="copyright-text">
                  <p class="mb-0">&copy; {{ year }} {{ $store.getters['getAppName'] }}. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
          <!-- /Copyright -->
        </div>
      </div>
      <!-- /Footer Bottom -->
    </footer>
  </div>
  <!-- /Footer -->
</template>

<script setup>
  import { ref } from "vue";

  const year = ref(null);

  year.value = new Date().getFullYear();
</script>
