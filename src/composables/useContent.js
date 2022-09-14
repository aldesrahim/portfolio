import {useFetch} from '@/composables/useFetch.js';
import {ref, unref} from 'vue';

const baseUrl = 'https://raw.githubusercontent.com/aldesrahim/portfolio-data/main'
const sources = {
    about: `${baseUrl}/about.json`,
    contacts: `${baseUrl}/contacts.json`,
    home: `${baseUrl}/home.json`,
    projects: `${baseUrl}/projects.json`,
    general: `${baseUrl}/general.json`,
}

export function useContent(source) {
    if (typeof sources[source] === 'undefined') {
        return ref(null)
    }
    const {data, error} = useFetch(sources[source])

    if (unref(error)) {
        return ref(false)
    }

    return data
}