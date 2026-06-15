<template>
  <div class="skeleton-loader" :class="variant">
    <div v-if="variant === 'image'" class="skeleton-image"></div>
    <div class="skeleton-text">
      <div class="skeleton-line title"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line short"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonLoader',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'image', 'card'].includes(value)
    }
  }
}
</script>

<style scoped>
.skeleton-loader {
  background: var(--bg-secondary);
  border-radius: 12px;
  overflow: hidden;
  animation: pulse 1.5s ease-in-out infinite;
}

.skeleton-image {
  width: 100%;
  height: 250px;
  background: linear-gradient(
    90deg,
    var(--bg-tertiary) 25%,
    var(--bg-secondary) 50%,
    var(--bg-tertiary) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.skeleton-text {
  padding: 1rem;
}

.skeleton-line {
  height: 16px;
  background: linear-gradient(
    90deg,
    var(--bg-tertiary) 25%,
    var(--bg-secondary) 50%,
    var(--bg-tertiary) 75%
  );
  background-size: 200% 100%;
  border-radius: 4px;
  margin-bottom: 0.75rem;
  animation: shimmer 1.5s infinite;
}

.skeleton-line.title {
  height: 24px;
  width: 80%;
}

.skeleton-line.short {
  width: 60%;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@media (max-width: 768px) {
  .skeleton-image {
    height: 200px;
  }
}
</style>