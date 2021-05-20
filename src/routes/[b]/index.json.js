export function get ({ params, path}) {
  console.log('Endpoint B', '(' + path + ')')

  if (params.b === 'b') {
    return {
      body: {
        'b': 'data from endpoint B'
      }
    }
  }
}
