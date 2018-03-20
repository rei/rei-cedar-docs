export default function ({route, redirect}) {
  if(route.path === '' || route.path === '/') {
    return redirect('/CdrA')
  }
}