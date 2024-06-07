import { defineArrayMember } from "sanity";

const teamPage = {
    name: 'teamPage',
    title: 'Team Details',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),

        },
        {
            name: 'teamYear',
            title: 'Team Year',
            type: 'string',
            validation: (Rule) => Rule.required(),

        },

        {
            name: 'specialTeams',
            title: 'Special Members (Mangement and Project Monitor)',
            type: 'array',
            validation: (Rule) => Rule.required(),

            of: [
                {
                    type: 'object',
                    fields: [
                        { 
                            name: 'teamName',
                            title: 'Team Name',
                            type: 'string',
                            validation: (Rule) => Rule.required(),

                        },
                        {
                            name: 'teamDescription',
                            title: 'Team Description',
                            type: 'string',
                            validation: (Rule) => Rule.required(),

                        },
                        {
                            name: 'teamNameSlug',
                            title: 'Team Name Slug',
                            type: 'slug',
                            options: {
                                source: 'teamName',
                                maxLength: 96,
                            },
                            validation: (Rule) => Rule.required(),

                        },
                        {
                            name: 'teamMembers',
                            title: 'Team Members',
                            validation: (Rule) => Rule.required(),

                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'name',
                                            title: 'Name',
                                            type: 'string',
                                            validation: (Rule) => Rule.required(),

                                        },
                                        {
                                            name: 'role',
                                            title: 'Role',
                                            type: 'string',
                                            validation: (Rule) => Rule.required(),

                                        },
                                        {
                                            name: 'subtitle',
                                            title: 'Subtitle',
                                            type: 'string',
                                            validation: (Rule) => Rule.required(),

                                        },
                                        {
                                            name: 'teamMemberSlug',
                                            title: 'Team Member Slug',
                                            type: 'slug',
                                            options: {
                                                source: 'name',
                                                maxLength: 96,
                                            },
                                            validation: (Rule) => Rule.required(),

                                        },
                                        {
                                            name: 'image',
                                            title: 'Image',
                                            type: 'image',
                                            options: {
                                                hotspot: true,
                                            },
                                            validation: (Rule) => Rule.required(),

                                        },
                                        {
                                            name: 'teamMemberDescription',
                                            title: 'Team Member Description',
                                            type: 'array',
                                            validation: (Rule) => Rule.required(),

                                            of: [
                                                defineArrayMember({
                                                    title: 'Block',
                                                    type: 'block',
                                                    styles: [
                                                        { title: 'Normal', value: 'normal' },
                                                        { title: 'H1', value: 'h1' },
                                                        { title: 'H2', value: 'h2' },
                                                        { title: 'H3', value: 'h3' },
                                                        { title: 'H4', value: 'h4' },
                                                        { title: 'Quote', value: 'blockquote' },
                                                    ],
                                                    lists: [{ title: 'Bullet', value: 'bullet' }],
                                                    marks: {
                                                        decorators: [
                                                            { title: 'Strong', value: 'strong' },
                                                            { title: 'Emphasis', value: 'em' },
                                                        ],
                                                        annotations: [
                                                            {
                                                                title: 'URL',
                                                                name: 'link',
                                                                type: 'object',
                                                                fields: [
                                                                    {
                                                                        title: 'URL',
                                                                        name: 'href',
                                                                        type: 'url',
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                }),
                                                defineArrayMember({
                                                    type: 'image',
                                                    options: { hotspot: true },
                                                }),
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: 'teams',
            title: 'Crew Members',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'teamName',
                            title: 'Team Name',
                            type: 'string',
                            validation: (Rule) => Rule.required(),

                        },
                        {
                            name: 'teamDescription',
                            title: 'Team Description',
                            type: 'string',
                            validation: (Rule) => Rule.required(),

                        },
                        {
                            name: 'teamNameSlug',
                            title: 'Team Name Slug',
                            type: 'slug',
                            options: {
                                source: 'teamName',
                                maxLength: 96,
                            },
                            validation: (Rule) => Rule.required(),

                        },
                        {
                            name: 'teamMembers',
                            title: 'Team Members',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'name',
                                            title: 'Name',
                                            type: 'string',
                                            validation: (Rule) => Rule.required(),

                                        },
                                        {
                                            name: 'role',
                                            title: 'Role',
                                            type: 'string',
                                            validation: (Rule) => Rule.required(),

                                        },
                                        {
                                            name: 'subtitle',
                                            title: 'Subtitle',
                                            type: 'string',
                                            validation: (Rule) => Rule.required(),

                                        },
                                        {
                                            name: 'teamMemberSlug',
                                            title: 'Team Member Slug',
                                            type: 'slug',
                                            options: {
                                                source: 'name',
                                                maxLength: 96,
                                            },
                                            validation: (Rule) => Rule.required(),

                                        },
                                        {
                                            name: 'image',
                                            title: 'Image',
                                            type: 'image',
                                            options: {
                                                hotspot: true,
                                            },
                                            validation: (Rule) => Rule.required(),

                                        },
                                        {
                                            name: 'teamMemberDescription',
                                            title: 'Team Member Description',
                                            type: 'array',
                                            validation: (Rule) => Rule.required(),

                                            of: [
                                                defineArrayMember({
                                                    title: 'Block',
                                                    type: 'block',
                                                    styles: [
                                                        { title: 'Normal', value: 'normal' },
                                                        { title: 'H1', value: 'h1' },
                                                        { title: 'H2', value: 'h2' },
                                                        { title: 'H3', value: 'h3' },
                                                        { title: 'H4', value: 'h4' },
                                                        { title: 'Quote', value: 'blockquote' },
                                                    ],
                                                    lists: [{ title: 'Bullet', value: 'bullet' }],
                                                    marks: {
                                                        decorators: [
                                                            { title: 'Strong', value: 'strong' },
                                                            { title: 'Emphasis', value: 'em' },
                                                        ],
                                                        annotations: [
                                                            {
                                                                title: 'URL',
                                                                name: 'link',
                                                                type: 'object',
                                                                fields: [
                                                                    {
                                                                        title: 'URL',
                                                                        name: 'href',
                                                                        type: 'url',
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                }),
                                                defineArrayMember({
                                                    type: 'image',
                                                    options: { hotspot: true },
                                                }),
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default teamPage;
