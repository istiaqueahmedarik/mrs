import { createClient } from "next-sanity";

import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "01wyop49",
    dataset: "production",
    apiVersion: "2023-12-09",
    useCdn: true
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}

export default client;

