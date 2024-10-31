import React from 'react'
import ClientComponent from '../components/client-component'
import ServerComponent from '../components/server-component'

function Interleaving() {
  return (
    <div>
        <ClientComponent>
            <ServerComponent />
        </ClientComponent>
    </div>
  )
}

export default Interleaving