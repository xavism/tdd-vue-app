<script>
export default {
  name: 'UserProfile',
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<template>
  <div>
    UserProfile
  </div>
</template>
