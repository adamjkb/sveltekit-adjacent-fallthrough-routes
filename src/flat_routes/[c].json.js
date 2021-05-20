export function get ({ params, path }) {
  console.log('Endpoint C', '(' + path + ')')

  if (params.c === 'c') {
    return {
      body: {
        'c': 'data from endpoint C'
      }
    }
  }
}
