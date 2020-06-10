<script>
import has from 'lodash/has';
import TokenDefault from './TokenTypeDefault';
import TokenColor from './TokenTypeColor';
import TokenSpace from './TokenTypeSpace';
import TokenRadius from './TokenTypeRadius';
import TokenProminence from './TokenTypeProminence';
import TokenInset from './TokenTypeInset';
import TokenBreakpoint from './TokenTypeBreakpoint';
import TokenTypography from './TokenTypeTypography';
import TokenMotion from './TokenTypeMotion';
export default {
  name: 'TokenSorter',
  functional: true,
  props: {
    prop: Object,
  },
  render(h, ctx) {
    function tokenComponent() {
      const propExample = has(ctx.props.prop, 'docs.example') ? ctx.props.prop.docs.example : 'token';
      if (propExample === 'color') return TokenColor;
      if (propExample === 'spacing') return TokenSpace;
      if (propExample === 'sizing') return TokenSpace;
      if (propExample === 'radius') return TokenRadius;
      if (propExample === 'prominence') return TokenProminence;
      if (propExample === 'inset') return TokenInset;
      if (propExample === 'breakpoint') return TokenBreakpoint;
      if (propExample === 'text') return TokenTypography;
      if (
        propExample === 'timing'
        || propExample === 'duration'
      ) return TokenMotion;
      
      return TokenDefault;
    }
    return h(
      tokenComponent(),
      { ...ctx },
      ctx.children);
  },
};
</script>