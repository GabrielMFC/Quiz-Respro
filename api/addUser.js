import { supabase } from "./src/supaBaseClient.js"

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' })
  }

  try {
    const { Name, Points } = await req.json?.() || req.body

    const { data, error } = await supabase
      .from('Ranks')
      .insert([{ Name, Points }])

    if (error) throw error

    return res.status(200).json({ success: true, data })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: err.message })
  }
}