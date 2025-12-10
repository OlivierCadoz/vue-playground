export default {
  mounted(el, binding) {
    el.clickOutsideEvent = function (event) {
      console.log('click outside directive', event.target);
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};
