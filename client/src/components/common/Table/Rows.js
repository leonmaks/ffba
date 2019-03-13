import React from "react"

import Mux from "components/common/Mux"

import Row from "./Row"


export default props => {

  let rows_ = null

  if (props.rows && !props.hidden) {
    rows_ = props.rows.map((row, i) => (
      <Row key={i} values={row.values} group={row.group} hidden={row.hidden} />
    ))
  }

  return (
    <Mux>
      {rows_}
    </Mux>
  )
}






// let rows_ = null

// if (!this.props.hidden) {
//   rows_ = (
//     this.props.rows.map((row, i) => {

//       const key_ = this.props.up ? this.props.up + "-" : i

//       let values_ = null
//       let group_ = null

//       if (row.values) {
//         values_ = (
//           <tr>
//             <Entries values={row.values} />
//           </tr>
//         )
//       }

//       // if (row.group) {
//       //   group_ =
//       // }

//       return (
//         <Auxi key={key_}>
//           {values_}
//           {group_}
//         </Auxi>
//       )
//     })
//   )
// }
// }
