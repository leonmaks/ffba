import React, { Component } from "react"
import { get } from "rest/rp"

import { SALES_DAILY_TOTALS_FOR_PERIOD } from "rest/defs"

import Dummy from "components/common/Dummy"
import Table from "components/common/Table"


class DailyTotals extends Component {
  state = {
    totals: [],
  }

  prepareState = (rows) => {

    let sd_ = { ident: null, totals: [0, 0, 0], rows: [] }
    let cr_ = { ident: null, totals: [0, 0, 0], rows: [], link: null }
    let pm_ = { ident: null, totals: [0, 0, 0], rows: [] }

    rows.forEach((r, i) => {

      if (sd_.ident !== r["sales_date"] || cr_.ident !== r["cashreg_ident"] || pm_.ident !== r["payment"]) {

        // Payment
        if (pm_.ident) {
          pm_.rows.push({
            values: [
              { value: "" },
              { value: "" },
              { value: pm_.ident },
              { value: pm_.totals[0].toFixed(2) },
              { value: pm_.totals[1].toFixed(2) },
              { value: pm_.totals[2].toFixed(2) }
            ],
            key: sd_.ident + "|" + cr_.ident + "!" + pm_.ident
          })
        }
        pm_.ident = r["payment"]
        pm_.totals = [0, 0, 0]
      }

      if (sd_.ident !== r["sales_date"] || cr_.ident !== r["cashreg_ident"]) {

        // Cashreg
        if (cr_.ident) {
          cr_.rows.push({
            values: [
              { value: "" },
              { value: "", collapsible: true },
              { value: cr_.ident, link: cr_.link },
              { value: cr_.totals[0].toFixed(2) },
              { value: cr_.totals[1].toFixed(2) },
              { value: cr_.totals[2].toFixed(2) }
            ],
            group: { rows: pm_.rows },
            // group: { rows: pm_.rows, hidden: true },
            key: sd_.ident + "|" + cr_.ident
          })
          pm_.rows = []
        }
        cr_.ident = r["cashreg_ident"]
        cr_.link = "/sales/date-cashreg/" + r["sales_date"].replace(/-/g, "/") + "/" + r["cashreg_id"]
        cr_.totals = [0, 0, 0]
      }

      if (sd_.ident !== r["sales_date"]) {
        // Sales Date
        if (sd_.ident) {
          sd_.rows.push({
            values: [
              { value: "", collapsible: true },
              { value: "" },
              { value: sd_.ident },
              { value: sd_.totals[0].toFixed(2) },
              { value: sd_.totals[1].toFixed(2) },
              { value: sd_.totals[2].toFixed(2) }
            ],
            group: { rows: cr_.rows },
            // group: { rows: cr_.rows, hidden: true },
            key: sd_.ident
          })
          cr_.rows = []
        }
        sd_.ident = r["sales_date"]
        sd_.totals = [0, 0, 0]
      }

      sd_.totals = [sd_.totals[0] + r["act_sv"], sd_.totals[1] + r["exp_sv"], sd_.totals[2] + r["dis_sv"]]
      cr_.totals = [cr_.totals[0] + r["act_sv"], cr_.totals[1] + r["exp_sv"], cr_.totals[2] + r["dis_sv"]]
      pm_.totals = [pm_.totals[0] + r["act_sv"], pm_.totals[1] + r["exp_sv"], pm_.totals[2] + r["dis_sv"]]
    })

    // Payment (last)
    if (pm_.ident) {
      pm_.rows.push({
        values: [
          { value: "" },
          { value: "" },
          { value: pm_.ident },
          { value: pm_.totals[0].toFixed(2) },
          { value: pm_.totals[1].toFixed(2) },
          { value: pm_.totals[2].toFixed(2) }
        ],
        key: sd_.ident + "|" + cr_.ident + "!" + pm_.ident
      })
    }

    // Cashreg (last)
    if (cr_.ident) {
      cr_.rows.push({
        values: [
          { value: "" },
          { value: "", collapsible: true },
          { value: cr_.ident, link: cr_.link },
          { value: cr_.totals[0].toFixed(2) },
          { value: cr_.totals[1].toFixed(2) },
          { value: cr_.totals[2].toFixed(2) }
        ],
        group: { rows: pm_.rows },
        // group: { rows: pm_.rows, hidden: true },
        key: sd_.ident + "|" + cr_.ident
      })
      pm_.rows = []
    }

    // Sales Date (last)
    if (sd_.ident) {
      sd_.rows.push({
        values: [
          { value: "", collapsible: true },
          { value: "" },
          { value: sd_.ident },
          { value: sd_.totals[0].toFixed(2) },
          { value: sd_.totals[1].toFixed(2) },
          { value: sd_.totals[2].toFixed(2) }
        ],
        group: { rows: cr_.rows },
        // group: { rows: cr_.rows, hidden: true },
        key: sd_.ident
      })
      cr_.rows = []
    }
    return { rows: sd_.rows }
  }

  componentDidMount() {

    get(SALES_DAILY_TOTALS_FOR_PERIOD, { json: true }).then(res => {
      if (res.daily_totals) {
        this.setState({ totals: this.prepareState(res.daily_totals) })
      }
    })

    // const options_ = {
    //   uri: `${SERVER_URL}${API_ROUTE_DAILY_TOTALS_FOR_PERIOD}`,
    //   headers: {
    //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJGRkJBIiwic3ViIjoxLCJpYXQiOjE1NTE5MDM1Nzg2MTIsImV4cCI6MTU1MTk4OTk3ODYxMn0.LFAz-sg1LUNIufFxnjwbCoihh81_7vCks6-KJZEtl_E"
    //   },
    //   json: true // Automatically parses the JSON string in the response
    // }

    // rp(options_).then(response => {
    //   console.log("response=", response)
    //   if (response.daily_totals) {
    //     this.setState({ totals: this.prepareState(response.daily_totals) })
    //   }
    // })

    // axios.get(`${SERVER_URL}${API_ROUTE_DAILY_TOTALS_FOR_PERIOD}`).then(
    //     response => {
    //       if (response.data.daily_totals) {
    //         this.setState({ totals: this.prepareState(response.data.daily_totals) })
    //       }
    //     }
    //   )
  }

  render() {

    const data = {
      totals: {
        classes: "table-striped table-sm",
        headings: [
          { name: "", style: { width: "1.4em" } },
          { name: "", style: { width: "1.4em" } },
          { name: "Dimension" },
          { name: "Act.S.V." },
          { name: "Exp.S.V." },
          { name: "Dis.S.V." },
        ],
      }
    }

    return (
      <Dummy>
        <h1>Totals by Date</h1>
        <div className="table-responsive">
          <Table classes={data.totals.classes} headings={data.totals.headings} rows={this.state.totals.rows} />
        </div>
      </Dummy>
    )
  }
}


export default DailyTotals
