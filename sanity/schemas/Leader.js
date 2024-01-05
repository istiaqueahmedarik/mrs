export default {
    name: 'Leader',
    title: 'Leaders',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
      },
      {
        name: 'avatarImage',
        title: 'Avatar Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      
    ],
  }