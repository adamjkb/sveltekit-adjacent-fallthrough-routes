export function get ({ params, path }) {
  console.log('Endpoint A', '(' + path + ')')

  if (params.a === 'a') {
    return {
      body: {
        'a': 'data from endpoint A'
      }
    }
  }
}
