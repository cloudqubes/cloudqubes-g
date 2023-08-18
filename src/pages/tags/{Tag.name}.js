import * as React from "react"
import { graphql } from "gatsby"
// import ProductView from "../../views/product-view"

function Tag(props) {
  const { tag } = props.data
  return(
    <div>
      {tag.name}
    </div>
  )
}

export default Tag

export const query = graphql`
  query($id: String!) {
    tag(id: { eq: $id }) {
      name
      slug
    }
  }
`