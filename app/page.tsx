'use client'

import CategoryList from '@/components/CategoryList'
import { GridLayout, RoomItem } from '@/components/RoomList'
import { useQuery } from 'react-query'

import { RoomType } from '@/interface'
import Loader from '@/components/Loader'

export default function Home() {
  const fetchRoom = async () => {
    const data = await fetch('/api/rooms')
    return data.json()
  }

  const { data, isError, isLoading } = useQuery('rooms', fetchRoom)

  if (isLoading) {
    return <Loader className="mt-60 mb-40" />
  }

  return (
    <>
      <CategoryList />
      <GridLayout>
        {data?.map((room: RoomType) => <RoomItem room={room} key={room.id} />)}
      </GridLayout>
    </>
  )
}
