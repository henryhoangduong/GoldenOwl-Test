import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card'
import CountUp from 'react-countup'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MoveHorizontalIcon } from 'lucide-react'

const DashboardPage = () => {
  return (
    <div className='w-full '>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6'>
        <Card>
          <CardHeader className='pb-2'>
            <CardDescription>Tổng học sinh</CardDescription>
            <CardTitle className='text-4xl'>
              {' '}
              <CountUp preserveValue redraw={false} end={2456} decimal='2' />
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className='pb-2'>
            <CardDescription>Số môn học</CardDescription>
            <CardTitle className='text-4xl'>
              <CountUp preserveValue redraw={false} end={347389} decimal='2' />
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className='pb-2'>
            <CardDescription>Số học sinh giỏi</CardDescription>
            <CardTitle className='text-4xl'>
              $ <CountUp preserveValue redraw={false} end={347389} decimal='2' />
            </CardTitle>
          </CardHeader>
        </Card>
        {/* <Card>
          <CardHeader className='pb-2'>
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className='text-4xl'>
              $ <CountUp preserveValue redraw={false} end={347389} decimal='2' />
            </CardTitle>
          </CardHeader>
        </Card> */}
      </div>
      <div className='p-6'>
        <Card className='col-span-2 lg:col-span-3 xl:col-span-4'>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>The most recent orders placed in the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='text-center'>Order</TableHead>
                  <TableHead className='text-center'>Customer</TableHead>
                  <TableHead className='hidden sm:table-cell text-center'>Date</TableHead>
                  <TableHead className='hidden md:table-cell text-center'>Total</TableHead>
                  <TableHead className='hidden sm:table-cell text-center'>Status</TableHead>
                  <TableHead className='text-right'>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium'>#1234</TableCell>
                  <TableCell>
                    <div className='font-medium'>Olivia Martin</div>
                    <div className='text-sm text-muted-foreground'>olivia@example.com</div>
                  </TableCell>
                  <TableCell className='hidden sm:table-cell'>February 20, 2023</TableCell>
                  <TableCell className='hidden md:table-cell'>$42.25</TableCell>
                  <TableCell className='hidden sm:table-cell'>
                    <Badge color='green'>Shipped</Badge>
                  </TableCell>
                  <TableCell className='text-right'>
                    <DropdownMenu>
                      <DropdownMenuTrigger className='bg-transparent' asChild>
                        <Button variant='ghost' size='icon'>
                          <MoveHorizontalIcon className='h-4 w-4' />
                          <span className='sr-only'>Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align='end'>
                        <DropdownMenuItem>View order</DropdownMenuItem>
                        <DropdownMenuItem>Customer details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>#1233</TableCell>
                  <TableCell>
                    <div className='font-medium'>Ava Johnson</div>
                    <div className='text-sm text-muted-foreground'>ava@example.com</div>
                  </TableCell>
                  <TableCell className='hidden sm:table-cell'>January 5, 2023</TableCell>
                  <TableCell className='hidden md:table-cell'>$74.99</TableCell>
                  <TableCell className='hidden sm:table-cell'>
                    <Badge variant='secondary'>Paid</Badge>
                  </TableCell>
                  <TableCell className='text-right'>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant='ghost' size='icon'>
                          <MoveHorizontalIcon className='h-4 w-4' />
                          <span className='sr-only'>Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align='end'>
                        <DropdownMenuItem>View order</DropdownMenuItem>
                        <DropdownMenuItem>Customer details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>#1232</TableCell>
                  <TableCell>
                    <div className='font-medium'>Michael Johnson</div>
                    <div className='text-sm text-muted-foreground'>michael@example.com</div>
                  </TableCell>
                  <TableCell className='hidden sm:table-cell'>August 3, 2022</TableCell>
                  <TableCell className='hidden md:table-cell'>$64.75</TableCell>
                  <TableCell className='hidden sm:table-cell'>
                    <Badge variant='outline'>Unfulfilled</Badge>
                  </TableCell>
                  <TableCell className='text-right'>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant='ghost' size='icon'>
                          <MoveHorizontalIcon className='h-4 w-4' />
                          <span className='sr-only'>Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align='end'>
                        <DropdownMenuItem>View order</DropdownMenuItem>
                        <DropdownMenuItem>Customer details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardPage
