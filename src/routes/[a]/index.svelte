<script context='module'>
export async function load({ page, fetch }) {
    console.log('Page A', '(' + page.path + ')')

    const url = `/${page.params.a}.json`
    const res = await fetch(url)

    if (res.status === 200) {
      const data = await res.json()
      if (data.a) {
        return {
          props: data,
          status: 200,
        }
      }
    }
}
</script>
<script>
  export let a
</script>

Route A:
{a}
