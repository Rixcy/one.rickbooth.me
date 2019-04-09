// import { Link } from "gatsby"
import React from "react"

export default props => (
  <>
    <div className="flex mb-8">
      <div className="flex-1">
        <p className="font-primary font-bold">{props.job.title}</p>
        <p className="mb-2 mt-1 font-secondary">
          <a
            href={props.job.company_website}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-brand-1
              no-underline
              hover:underline
            ">{props.job.company}</a>
        </p>
        <p
          className="font-secondary"
          dangerouslySetInnerHTML={{__html: props.job.role}}/>
      </div>
      <hr/>
    </div>
  </>
)
