// Copied from @rei/back-to-top-btn
import { throttle } from 'throttle-debounce';

const src = '//satchel.rei.com/media/common/back-to-top.png';

export default {
  name: 'BackToTopBtn',
  data: () => ({
    active: false,
    src,
  }),
  mounted() {
    this.checkScroll();
    const img = new Image();
    img.src = src;
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: throttle(500, function handle() { this.checkScroll(); }),
    checkScroll() {
      const documentHeight = document.documentElement.offsetHeight;
      const vHeight = parseInt(window.innerHeight, 10);
      const scroll = parseInt(window.pageYOffset || document.documentElement.scrollTop, 10);
      this.active = (documentHeight >= vHeight * 4)
        && scroll >= vHeight + vHeight * 0.5;
    },
  },
  render(h) {
    return h(
      'button',
      {
        attrs: {
          disabled: !this.active,
          tabindex: this.active ? undefined : -1,
        },
        class: ['back-to-top-btn', this.active ? 'back-to-top-btn-show' : ''],
        on: this.$listeners,
      },
      [h('img', { attrs: { src, alt: 'back to top' } })],
    );
  },
};
