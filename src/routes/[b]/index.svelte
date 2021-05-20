<script context='module'>
export async function load({ page, fetch }) {
    console.log('Page B', '(' + page.path + ')')

    const url = `/${page.params.b}.json`
    const res = await fetch(url)

    if (res.status === 200) {
      const data = await res.json()

        return {
          props: data,
          status: 200,
        }

    }
}
</script>
<script>
  export let b
</script>

Route B:
{b}
