<script context='module'>
export async function load({ page, fetch }) {
    console.log('Route D', '(' + page.path + ')')

    const url = `/${page.params.d}.json`
    const res = await fetch(url)

    if (res.status === 200) {
      const data = await res.json()
      if (data.d) {
        return {
          props: data,
          status: 200,
        }
      }
    }
}
</script>
<script>
  export let d
</script>

Route D:
{d}
