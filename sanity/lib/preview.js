"use client"

import {definePreview} from 'next-sanity/preview'
import { projectId,dataset } from '../env'

function onPublicAccessOnly()
{
    throw new Error(
        'The preview token must not be provided in production'
    )
}

if(!projectId || !dataset)
{
    throw new Error(
        'Both projectId and dataset must be provided'
    )
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
});