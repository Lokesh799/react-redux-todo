import React from 'react'
import FilterLink from '../containers/FilterLink'
import Link from './Link'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink><br />
    
    <Link>UpdateTodo</Link>
  </p>
)

export default Footer