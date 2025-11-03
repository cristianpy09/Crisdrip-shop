// app/orders/[id]/page.tsx
import React from "react";

export default  async function OrderPage({ params }: { params: Promise<{ id: string }> }) {
  const {id} = await params;
  console.log(id);

  return (
    <div>
      <h1>Order page</h1>
      <p>Order ID: {id}</p>
    </div>
  );
}
