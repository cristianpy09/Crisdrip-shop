import PageNotFound from '@/components/ui/not-found/PageNotFound'
import Link from 'next/link'
import React from 'react'

export default function NotFountPage() {
  return (
    <div>
        <PageNotFound/>
        <Link href="/" >Regresar</Link>
    </div>
  )
}
