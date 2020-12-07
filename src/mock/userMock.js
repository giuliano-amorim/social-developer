import mock from '../utils/mock'

mock.onPost('/api/home/me').reply(200, {
  user: {

    'id': 1,
    'username': 'giuliano',
    'email': 'eu@eu.com',
    'avatar': "/images/avatars/avatar_1.png",

  }
})

mock.onPost('/api/home/login').reply((config) => {
  const { email, password } = JSON.parse(config.data)


  if (email != 'eu@eu.com' || password != 'administrador') {
    return [400, { message: 'Email ou senha incorreto' }]
  }

  const user = {
    id: 1,
    name: 'Giuliano Amorim',
    username: 'giuliano',
    email: 'eu@eu.com',
    avatar: "/images/avatars/avatar_1.png"
  }
  return [200, { user }]
})