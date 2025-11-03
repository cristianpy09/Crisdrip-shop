import React from 'react'

export default async function Productpage({ params }: { params: Promise<{ slug: string }> }) {

  const {slug}= await params
  return (
    <div>
        <h1> product page</h1>

        <p>slu: {slug}</p>
       </div>
  )
}
