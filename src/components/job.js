// import { Link } from "gatsby"
import React from "react"

export default props => (
  <>
    <div className="flex mb-8">
      <div className="flex-1">
        <p className="font-primary font-bold">{props.job.title}</p>
        <p className="mb-2 font-secondary">{props.job.company}</p>
        <p className="font-secondary">{props.job.role}</p>
      </div>
      <hr/>
    </div>
  </>
)
