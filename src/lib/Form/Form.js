'use server'
import datas from '@/lib/data.json'

import { addData } from "../Provibers/DataProvider"

export const formServer = async (formData) => {
    const roll = formData.get('roll')
    const password = formData.get('password')
    const data = Object.fromEntries(formData)
    const adata = {id:Number(datas.length)+1,...data}
    // console.log(data.ln)

    addData(adata)
}