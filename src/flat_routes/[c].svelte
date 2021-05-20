<script context='module'>
export async function load({ page, fetch }) {
    console.log('Route C', '(' + page.path + ')')

    const url = `/${page.params.c}.json`
    const res = await fetch(url)

    if (res.status === 200) {
      const data = await res.json()
      if (data.c) {
        return {
          props: data,
          status: 200,
        }
      }
    }
}
</script>
<script>
  export let c
</script>

Route C:
{c}
