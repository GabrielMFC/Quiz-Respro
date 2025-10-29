import { supabase } from './supaBaseClient.js'
export default class SupaBase {
    async post() {
    const { data, error } = await supabase
        .from('Ranks')
        .insert([{ Name: 'Gabriel', Points: 0}])

    if (error) console.error(error)
    else console.log('Usuário inserido:', data)
    }
}