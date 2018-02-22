import React from 'react';
import Button from '../components/Button'
import Table from '../components/Table'
import IconButton from '../components/IconButton'
// import Avatar from '../components/Avatar'

const membersList = [
  { name: "John", url: "", distance: "0,3km" },
  { name: "Mark", url: "", distance: "0,8km" },
  { name: "John", url: "", distance: "1,6km" }
]

const Showcase = ({}) => (
  <div>
    <h1>Showcase page</h1>
    <h2>Button:</h2>
    <div>
      <Button>
        Sign in with facebook
      </Button>
      <Button backgroundBlue>
        Sign in with facebook
      </Button>
    </div>
    <h2>Icon Button:</h2>
    <div>
      <IconButton text="Back to list" />
      <IconButton text="Back to list" />
    </div>
    <h2>List:</h2>
    <Table
      rows={membersList}
    />
    <h2>Avatar:</h2>
    {/* <Avatar /> */}
  </div>
);

export default Showcase;
