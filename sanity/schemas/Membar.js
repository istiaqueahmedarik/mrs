export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        {
            name: 'profilePicture',
            title: 'Profile Picture',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ],
}