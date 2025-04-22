import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { getResultByStudentSBD } from '@/services'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
const formSchema = z.object({
  registrationNumber: z.string().min(1, 'Mã số báo danh không được để trống')
})
type FormValues = z.infer<typeof formSchema>

const SearchScoresPage = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  })
  const onSubmit = async (data: FormValues) => {
    console.log(data)
    try {
      const result = await getResultByStudentSBD(data.registrationNumber)
      console.log('📄 Result:', result)
    } catch (error) {
      console.error('❌ Error fetching result:', error)
    }
  }
  return (
    <div className='w-full'>
      <div className='w-1/2 mt-10 relative left-1/2 transform -translate-x-1/2 top-[100px]'>
        <Form {...form}>
          <form className='space-y-8'>
            <FormField
              control={form.control}
              name='registrationNumber'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registration Number</FormLabel>
                  <FormControl>
                    <Input placeholder='shadcn' {...field} {...form.register('registrationNumber')} />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button onClick={form.handleSubmit(onSubmit)} type='submit' disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? <Loader2 className='animate-spin' /> : 'Submit'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default SearchScoresPage
