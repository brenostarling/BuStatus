import React from 'react'
import LeftMenu from '../../components/leftMenu'
import Map from '../../components/map';

function App () {
  return (
    <div className="container flex h-screen">
      <LeftMenu />
      <div className="content flex-1">
        <Map />
      </div>
    </div>
  );
}

export default App;
