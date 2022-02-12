export default {
  methods: {
    goTo(hash) {
      window.history && window.history.pushState(null, '', hash);
      this.$vuetify.goTo(hash);
    },
  },
};
