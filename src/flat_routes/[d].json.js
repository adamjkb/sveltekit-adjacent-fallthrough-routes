export function get ({ params, path }) {
  console.log('Endpoint D', '(' + path + ')')

  if (params.d === 'd') {
    return {
      body: {
        'd': 'data from endpoint D'
      }
    }
  }
}
