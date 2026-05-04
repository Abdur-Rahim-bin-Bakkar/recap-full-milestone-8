import data from '@/lib/data.json'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const addData = (newData)=>{
    data.push(newData)
    // revalidatePath('/developer')
    // redirect('/developer')
    // console.log(newData)
    console.log(data)

}